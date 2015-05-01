/// <reference path="typings/node/node.d.ts"/>
function signaling(server) {
	var users = [];	
	var io = require('socket.io')(server);
	
	io.on('connection', function(socket) {
	  
	  console.log('usuario conectou');
	  socket.on('entrar', function(msg) {
	    console.log(msg+' entrou');
	    var usuario = {
	      id: users.length+1,
	      nick: msg
	    };
	    users.push(usuario);
	    socket.emit('conected' , usuario.nick);    
	    io.emit('lista', JSON.stringify(users) );
	  })
	  
	return io;  
	})	
}

module.exports = signaling;