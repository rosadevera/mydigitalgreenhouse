$("document").ready(function() {

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