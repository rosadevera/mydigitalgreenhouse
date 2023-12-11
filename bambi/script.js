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


  
    function popUpImage() {
        const image = document.getElementById('popup-image');
  
        // Increase opacity to make the image "pop up"
        let opacity = 0;
        const interval = setInterval(() => {
          opacity += 0.1;
          image.style.opacity = opacity;
  
          if (opacity >= 1) {
            clearInterval(interval); // Stop the interval when opacity reaches 1
          }
        }, 100); // Adjust the interval duration as needed
      }
  
      // Call the popUpImage function after a delay (e.g., 2 seconds)
      setTimeout(popUpImage, 4000);

      function popUpImage2() {
        const image = document.getElementById('popup-image2');
  
        // Increase opacity to make the image "pop up"
        let opacity = 0;
        const interval = setInterval(() => {
          opacity += 0.1;
          image.style.opacity = opacity;
  
          if (opacity >= 1) {
            clearInterval(interval); // Stop the interval when opacity reaches 1
          }
        }, 100); // Adjust the interval duration as needed
      }
  
      // Call the popUpImage function after a delay (e.g., 2 seconds)
      setTimeout(popUpImage2, 8000);

      function popUpImage3() {
        const image = document.getElementById('popup-image3');
  
        // Increase opacity to make the image "pop up"
        let opacity = 0;
        const interval = setInterval(() => {
          opacity += 0.1;
          image.style.opacity = opacity;
  
          if (opacity >= 1) {
            clearInterval(interval); // Stop the interval when opacity reaches 1
          }
        }, 100); // Adjust the interval duration as needed
      }
  
      // Call the popUpImage function after a delay (e.g., 2 seconds)
      setTimeout(popUpImage3, 12000);

      function popUpImage4() {
        const image = document.getElementById('popup-image4');
  
        // Increase opacity to make the image "pop up"
        let opacity = 0;
        const interval = setInterval(() => {
          opacity += 0.1;
          image.style.opacity = opacity;
  
          if (opacity >= 1) {
            clearInterval(interval); // Stop the interval when opacity reaches 1
          }
        }, 100); // Adjust the interval duration as needed
      }
  
      // Call the popUpImage function after a delay (e.g., 2 seconds)
      setTimeout(popUpImage4, 16000);

});

// ,'color':'#f7d7eb'