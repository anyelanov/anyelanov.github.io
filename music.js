// Get the audio element
const backgroundMusic = document.getElementById('backgroundMusic');

// Function to start playing music
const playBackgroundMusic = () => {
    // Set properties for autoplay
    backgroundMusic.volume = 0.5; // Set volume to 50%
    backgroundMusic.autoplay = true;
    backgroundMusic.muted = false;
    
    // Start playing
    backgroundMusic.play().catch(function(error) {
        console.log("Audio autoplay failed:", error);
    });
};

// Play music when page loads
window.addEventListener('load', playBackgroundMusic);

// Play music when user interacts with the page (necessary for some browsers)
document.addEventListener('click', playBackgroundMusic);