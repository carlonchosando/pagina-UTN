$(document).ready(function() {
    $('#iniciaContinua').click(function(){
        var video = $('video')[0]
        video.play();
    });
    $('#para').click(function(){
        var video = $('video')[0]
        video.pause();
        video.currentTime = 0;
    });
    $('#avanza').click(function(){
        video.currentTime = video.currentTime + 1.3;
    });
});
