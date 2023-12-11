$("document").ready(function() {

  const audio = document.getElementById('myAudio');
  audio.volume = 0.3;
  const musicToggle = $('#musicToggle');

  $(".musicnote").on('click', function(){
    $(this).toggleClass("paused");

  // Toggle play/pause and change icon color
  if (audio.paused) {
      audio.play();
      localStorage.setItem('audioState', 'playing');
  } else {
      audio.pause();
      localStorage.setItem('audioState', 'paused');
  }

  // Toggle the "paused" class to change the color
  musicToggle.toggleClass('paused', audio.paused);
});

});
