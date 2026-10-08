document.addEventListener("DOMContentLoaded", () => {
    const profile = document.getElementById("catProfile");
    const bgMusic = document.getElementById("bgMusic");
    const meowSound = document.getElementById("meowSound");
    
    let isMusicPlaying = false;

    
    bgMusic.volume = 0.3;
    meowSound.volume = 0.7;

    profile.addEventListener("click", () => {
        
        if (!isMusicPlaying) {
            bgMusic.play().catch(err => console.log("Music play prevented:", err));
            isMusicPlaying = true;
        }

        
        meowSound.currentTime = 0; 
        meowSound.play().catch(err => console.log("Meow play prevented:", err));

        
        profile.style.transform = "scale(0.9) rotate(-3deg)";
        setTimeout(() => {
            profile.style.transform = "scale(1.05) rotate(1deg)";
        }, 150);
    });
});
