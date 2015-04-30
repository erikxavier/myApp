/// <reference path="../../typings/jquery/jquery.d.ts"/>
$(function() {	
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
