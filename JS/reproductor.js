$(document).ready(function() {
    $('video').bind('timeupdate' , function(){
        var tiempoActual = Math.floor(video.currentTime);
        var tiempoTotal = Math.floor(video.duration);
        $('#tiempoActual').html(tiempoActual);
        $('#tiempoTotal').html(tiempoTotal);
    });
    var video = $('video')[0]
    $('#iniciaContinua').click(function(){        
        video.play();
    });
    $('#pausa').click(function(){
        var video = $('video')[0]
        video.pause();
        video.currentTime = currentTime;
    });    
    $('#para').click(function(){
        var video = $('video')[0]
        video.pause();
        video.currentTime = 0;
    });
    $('#avanza').click(function(){
        video.currentTime += 1.3;
    });
    $('#retrocede').click(function(){
        video.currentTime -= 1.6;
    });
});
