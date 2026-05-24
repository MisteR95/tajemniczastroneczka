document.addEventListener('DOMContentLoaded', () => {
    // 1. OBSŁUGA EKRANU POWITALNEGO
    const startButton = document.getElementById('start-button');
    const welcomeScreen = document.getElementById('welcome-screen');
    const music = document.getElementById('bg-music'); 

    if (startButton && welcomeScreen) {
        startButton.addEventListener('click', () => {
            console.log("Startujemy niespodziankę!");
            welcomeScreen.classList.add('hidden-welcome');
        });
    } else {
        console.error("Nie znaleziono przycisku lub ekranu powitalnego!");
    }

    // 2. LOGIKA OTWIERANIA KARTKI (Twoja istniejąca)
    const card = document.getElementById('card');
    if (card) {
        card.addEventListener('click', function() {
            this.classList.toggle('open');
            const inside = document.querySelector('.card-inside');
            const front = document.querySelector('.card-front');
            
            if (this.classList.contains('open')) {
                front.style.display = 'none';
                inside.style.display = 'block';
                if (music) {
                    music.volume = 0.2; 
                    music.play(); 
                }
            } else {
                front.style.display = 'block';
                inside.style.display = 'none';
                if (music) {
                    music.pause(); 
                    music.currentTime = 0; 
                }
            }
        });
    }

    document.addEventListener('mousedown', function() {
    console.log("Kliknięto - generuję serce na ściance...");
    const heartContainer = document.getElementById('heart-container');
    
    if (!heartContainer) {
        console.error("Nie znaleziono #heart-container w HTML!");
        return;
    }

    const count = 40; 
    const scale = 9; 

    heartContainer.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const t = (i / count) * 2 * Math.PI;
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

        const text = document.createElement('span');
        text.innerText = 'i love you';
        text.className = 'heart-text';
        
        const centerX = heartContainer.offsetWidth / 2;
        const centerY = heartContainer.offsetHeight / 2;

        text.style.left = `${centerX + (x * scale)}px`;
        text.style.top = `${centerY + (y * scale)}px`;
        
        text.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 20 - 10}deg)`;
        text.style.animationDelay = `${Math.random() * 2}s`;
        
        heartContainer.appendChild(text);
    }
}, { once: true });
});

setInterval(createFallingParticle, 150);

function createFallingParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const emojis = ['❤️', '💖', '🎉', '✨'];
    particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    particle.style.left = Math.random() * 100 + 'vw';
    
    const duration = Math.random() * 3 + 3; 
    particle.style.setProperty('--duration', duration + 's');
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 7000);
}