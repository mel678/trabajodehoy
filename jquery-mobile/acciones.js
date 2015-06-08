// JavaScript 

$(document).ready(function(e){
	$('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
		document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('perro','SONIDO/perro.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gato','SONIDO/gato.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('pollo','SONIDO/pollo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('vaca','SONIDO/vaca.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('oveja','SONIDO/Sonidodelaoveja.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('caballo','SONIDO/caballo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('cebra','SONIDO/cebra.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('cocodrilo','SONIDO/SonidodelCocodrilo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('coco','SONIDO/caballo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('mono','SONIDO/caballo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('elefante','SONIDO/caballo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('GORILA','SONIDO/gorila.mp3',function(){},function(e){alert('Error '+e);});
		//reproducir las notas
		$('.caracteristica').bind('touchstart', function(){$(this).addClass('tocada');
		audio.play($(this).attr('id'));});
		$('.caracteristica2').bind('touchstart', function(){$(this).addClass('tocada');
		audio.play($(this).attr('id'));});
		$('.caracteristica').bind('touchend',function(){$(this).removeClass('tocada');});
		},false);
		 //deviceready
}); //ready
		