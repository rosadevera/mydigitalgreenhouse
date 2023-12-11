function addUserText() {
  var userText = $("#userText").val();
  if (userText.trim() !== "") {
      var newElement = $("<div class='moving-text'>" + userText + "</div>");
      $("#customMovingTextContainer").append(newElement);
      $("#userText").val(""); // Clear the input field after adding text
  }
}

$(document).ready(function() {

  console.log("jQuery is ready!");

  const audio = document.getElementById('myAudio');
  audio.volume = 0.3;
  const musicToggle = $('#musicToggle');

  $(".musicnote").on('click', function() {
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