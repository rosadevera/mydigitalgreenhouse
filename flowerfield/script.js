$("document").ready(function() {

    $('.flowerbox').on('mouseenter',function(){
        $(this).animate({'color':'#ffaf53','color':'#e3175e','color':'#f4b3ff'},3000,'linear');
        playHoverSound();
    });

    function playHoverSound() {
        const audio = document.getElementById('hoverSound');
        if (audio) {
          audio.currentTime = 0; // Rewind to the beginning (in case it's already playing)
          audio.play();
        }
    }

});

// ,'color':'#f7d7eb'