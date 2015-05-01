/// <reference path="../../typings/jquery/jquery.d.ts"/>
$(function() {	
	
	var socket = io();
	$('#conectar').click(function() {
		socket.emit('entrar', $('#nick').val() );
	});
	socket.on('conected', function(msg) {
		$('#status').text('Conectado com ID '+msg);
	})
	
	socket.on('lista', function(json) {
		var lista = JSON.parse(json);		
		$('#users').empty();
		lista.forEach(function(user) {
			console.log(user.nick);
			$('#users').append('<option value="'+user.nick+'">'+user.nick+'</option>');
		})
	})		
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
	var constraints = {audio:true, video:false};
	var localAudio = $('#localAudio');
	function getMediaOk(stream) {
		localAudio.prop('src', URL.createObjectURL(stream));
		localAudio.play();	
	}
	
	function getMediaKo(stream) {
		console.log('Falha ao capturar audio!');
		alert('Falha ao capturar audio!');
	}				
	$('#call').click(function() {
		navigator.getUserMedia(constraints, getMediaOk, getMediaKo);	
	});
})
