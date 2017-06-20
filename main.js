$(function(){
  var socket = io.connect();
  console.log(socket);

  var $messageForm = $('#messageForm');
  var $userForm = $('#userForm');
  var $message = $('#message');
  var $chat = $('.chat');
  var $sidebar = $('.sidebar .connections');

  $messageForm.submit(function(e){
    e.preventDefault();
    console.log('Submitted');
    socket.emit('message', $message.val());
    $message.val('');
  });

  socket.on('new message', function(data) {
    $chat.append('<p>'+data.msg+'</p>')
  });

  socket.on('connections', function(data) {
    $sidebar.text('useres online: ' + data.connections)
  });
})
