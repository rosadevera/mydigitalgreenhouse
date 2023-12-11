$("document").ready(function() {

    // let playSound = true;

    // Variable to keep track of mute state
    let isMuted = false;

    // Click event for the ♫ icon
    $('.musicnote').click(function() {
        toggleMute();
    });

    // Function to toggle mute state
    function toggleMute() {
        isMuted = !isMuted; // Toggle mute state

        // Mute or unmute all audio elements
        $('audio').each(function() {
            this.muted = isMuted;
        });

        // Change icon color to indicate mute state
        $('.musicnote').toggleClass('muted', isMuted);
    }

    // Hover sound event
    $('.flowerbox').on('mouseenter', function () {
        if (!isMuted) {
            playHoverSound();
        }
    });

    function playHoverSound() {
    const newAudio = new Audio('cutebell.mp3');
    newAudio.volume = 0.07; // Set volume to 25%
    newAudio.play();
}

$(".flowerbox").on('click',function(){
    $(this).parent().find(".flowerbox").toggleClass("clicked");
});

$('.flowerbox').on('mouseenter', function () {
    $(this).animate({ 'color': '#ffaf53', 'color': '#e3175e', 'color': '#f4b3ff' }, 3000, 'linear');

    if (playSound) {
        playHoverSound();
    }

    playSound = !playSound; // Toggle playSound for every other hover
});




// Alternatively, if you want a delay for each hover
// Replace the existing on('mouseenter') function with this:

// $('.flowerbox').on('mouseenter', function () {
//     $(this).animate({ 'color': '#ffaf53', 'color': '#e3175e', 'color': '#f4b3ff' }, 3000, 'linear');

//     setTimeout(() => {
//         playHoverSound();
//     }, 1000); // Adjust the delay in milliseconds as needed
// });

// 

});