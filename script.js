$("document").ready(function() {

// Shared logic for all pages
$(document).ready(function() {
  const audio = document.getElementById('myAudio');
  audio.volume = 0.3;
  const musicToggle = $('#musicToggle');

  // Check if audio was playing before navigating away
  const audioState = localStorage.getItem('audioState');
  if (audioState === 'playing') {
    audio.play();
  }

  // Toggle play/pause and change icon color
  musicToggle.click(function() {
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

  // Pause audio when navigating away from the page
  $(document).on('click', 'a', function() {
    localStorage.setItem('audioState', audio.paused ? 'paused' : 'playing');
    audio.pause();
  });

  // Play audio when navigating back to the page
  $(document).on('click', 'a', function() {
    const audioState = localStorage.getItem('audioState');
    if (audioState === 'playing') {
      audio.play();
    }
  });
});


    $( function() {
        $(".bambigreenhouse").draggable();
        $(".pileagreenhouse").draggable();
        $(".rosagreenhouse").draggable();
        $(".pothosgreenhouse").draggable();
        $(".wateringcangreenhouse").draggable();
        $(".scissorsgreenhouse").draggable();
        $(".fertilizergreenhouse").draggable();
        $(".sonnygreenhouse").draggable();
        $(".pixelgreenhouse").draggable();
        $(".ecosystemgreenhouse").draggable();
      } );

});