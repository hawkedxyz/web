document.getElementById('enterButton').addEventListener('click', function() {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.play();
    const overlay = document.getElementById('overlay');
    overlay.classList.add('hidden');
    overlay.addEventListener('transitionend', function() {
        overlay.style.display = 'none';
    }, { once: true }); 
});

titleChanger = (text, delay) => {
    if (!text) return;
  
    delay = delay || 2000;
  
    let counter = 0;
  
    setInterval(() => {
      if (counter < text.length) document.title = text[counter++];
      else document.title = text[(counter = 0)];
    }, delay);
  };
  
  titleChanger(["h", "ha", "haw", "hawk", "hawke", "hawked", "hawked tuah"], 1000);
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const particleContainer = document.getElementById("particle-container");
    const numParticles = 100; 
    const delayMultiplier = 0.1;  

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.bottom = '0';
        
        particle.style.animationDelay = (Math.random() * delayMultiplier * numParticles) + 's';
        
        particleContainer.appendChild(particle);
    }
});
