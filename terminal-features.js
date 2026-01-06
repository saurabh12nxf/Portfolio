// ===== MATRIX RAIN EFFECT =====

class MatrixRain {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.fontSize = 14;
        this.columns = 0;
        this.drops = [];
        this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
        this.isActive = false;
    }

    init() {
        this.createCanvas();
        this.setupCanvas();
        this.start();

        // Listen for matrix activation
        document.addEventListener('activateMatrix', () => {
            this.boost();
        });

        // Resize handler
        window.addEventListener('resize', () => {
            this.setupCanvas();
        });
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'matrix-canvas';
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
    }

    setupCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = Array(this.columns).fill(1);
    }

    draw() {
        // Semi-transparent black to create fade effect
        this.ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Green text
        this.ctx.fillStyle = '#00ff41';
        this.ctx.font = this.fontSize + 'px JetBrains Mono, monospace';

        for (let i = 0; i < this.drops.length; i++) {
            const char = this.chars[Math.floor(Math.random() * this.chars.length)];
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;

            this.ctx.fillText(char, x, y);

            // Reset drop randomly
            if (y > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }

            this.drops[i]++;
        }
    }

    start() {
        this.isActive = true;
        this.animate();
    }

    animate() {
        if (this.isActive) {
            this.draw();
            requestAnimationFrame(() => this.animate());
        }
    }

    boost() {
        // Temporarily increase intensity
        const originalOpacity = 0.05;
        this.ctx.fillStyle = 'rgba(10, 14, 39, 0.01)'; // Less fade = more visible

        setTimeout(() => {
            this.ctx.fillStyle = `rgba(10, 14, 39, ${originalOpacity})`;
        }, 5000);
    }
}

// ===== SCANLINE AND CRT EFFECTS =====

function createVisualEffects() {
    // Scanline overlay
    const scanline = document.createElement('div');
    scanline.className = 'scanline-overlay';
    document.body.appendChild(scanline);

    // CRT flicker
    const flicker = document.createElement('div');
    flicker.className = 'crt-flicker';
    document.body.appendChild(flicker);

    // Grid background
    const grid = document.createElement('div');
    grid.className = 'grid-background';
    document.body.appendChild(grid);
}

// ===== GLITCH EFFECT FOR RANDOM ELEMENTS =====

function addRandomGlitches() {
    setInterval(() => {
        const elements = document.querySelectorAll('h1, h2, h3');
        if (elements.length > 0) {
            const randomElement = elements[Math.floor(Math.random() * elements.length)];
            randomElement.classList.add('glitch');
            setTimeout(() => {
                randomElement.classList.remove('glitch');
            }, 500);
        }
    }, 10000); // Every 10 seconds
}

// ===== ASCII ART GENERATOR =====

function createASCIIArt() {
    const art = `
    ╔════════════════════════════════════════════════════════════╗
    ║                                                            ║
    ║   ███████╗ █████╗ ██╗   ██╗██████╗  █████╗ ██████╗ ██╗  ██╗║
    ║   ██╔════╝██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔══██╗██║  ██║║
    ║   ███████╗███████║██║   ██║██████╔╝███████║██████╔╝███████║║
    ║   ╚════██║██╔══██║██║   ██║██╔══██╗██╔══██║██╔══██╗██╔══██║║
    ║   ███████║██║  ██║╚██████╔╝██║  ██║██║  ██║██████╔╝██║  ██║║
    ║   ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝║
    ║                                                            ║
    ║                 FULL STACK DEVELOPER                       ║
    ║                 SYSTEM INITIALIZED                         ║
    ║                                                            ║
    ╚════════════════════════════════════════════════════════════╝
    `;
    return art;
}

// ===== TYPING SOUND EFFECT (Optional) =====

class TypingSound {
    constructor() {
        this.enabled = false; // Disabled by default
    }

    play() {
        if (!this.enabled) return;

        // Create audio context for typing sound
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 800;
        oscillator.type = 'square';
        gainNode.gain.value = 0.01;

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.05);
    }

    toggle() {
        this.enabled = !this.enabled;
    }
}

// ===== INITIALIZE ALL EFFECTS =====

document.addEventListener('DOMContentLoaded', () => {
    // Create visual effects
    createVisualEffects();

    // Initialize Matrix rain
    const matrix = new MatrixRain();
    setTimeout(() => {
        matrix.init();
    }, 4000); // Start after boot

    // Add random glitches
    setTimeout(() => {
        addRandomGlitches();
    }, 5000);

    // Add ASCII art to hero section (optional)
    setTimeout(() => {
        const hero = document.querySelector('.hero-text');
        if (hero) {
            const asciiDiv = document.createElement('div');
            asciiDiv.className = 'ascii-art';
            asciiDiv.textContent = createASCIIArt();
            hero.insertBefore(asciiDiv, hero.firstChild);
        }
    }, 4500);
});

// ===== CYBERPUNK COLOR THEME SWITCHER =====

function applyCyberpunkTheme() {
    // Update CSS variables for cyberpunk theme
    document.documentElement.style.setProperty('--primary-color', '#00ff41');
    document.documentElement.style.setProperty('--secondary-color', '#00d9ff');
    document.documentElement.style.setProperty('--accent-color', '#b026ff');
    document.documentElement.style.setProperty('--bg-primary', '#0a0e27');
    document.documentElement.style.setProperty('--bg-secondary', '#151b3d');
    document.documentElement.style.setProperty('--text-primary', '#00ff41');
    document.documentElement.style.setProperty('--text-secondary', '#00ff4180');
}

// Apply theme after boot
setTimeout(() => {
    applyCyberpunkTheme();
}, 3000);

// ===== NETWORK STATUS INDICATOR =====

class NetworkStatus {
    constructor() {
        this.status = 'ONLINE';
    }

    init() {
        window.addEventListener('online', () => {
            this.status = 'ONLINE';
            this.updateDisplay();
        });

        window.addEventListener('offline', () => {
            this.status = 'OFFLINE';
            this.updateDisplay();
        });
    }

    updateDisplay() {
        const netValue = document.getElementById('netValue');
        if (netValue) {
            netValue.textContent = this.status;
            netValue.style.color = this.status === 'ONLINE' ? 'var(--terminal-cyan)' : 'var(--terminal-red)';
        }
    }
}

// Initialize network status
const networkStatus = new NetworkStatus();
networkStatus.init();

// ===== CONSOLE STYLING =====

console.clear();
console.log('%c╔═══════════════════════════════════════════════════════╗', 'color: #00ff41; font-family: monospace;');
console.log('%c║   PORTFOLIO SYSTEM v2.0.26                            ║', 'color: #00ff41; font-family: monospace;');
console.log('%c║   Status: ONLINE                                      ║', 'color: #00ff41; font-family: monospace;');
console.log('%c╚═══════════════════════════════════════════════════════╝', 'color: #00ff41; font-family: monospace;');
console.log('%c\n👋 Hello, Developer!', 'color: #00d9ff; font-size: 16px; font-weight: bold;');
console.log('%c🎮 Press ` (backtick) to open terminal', 'color: #b026ff; font-size: 12px;');
console.log('%c💼 Contact: saurabhsingh050806@gmail.com', 'color: #00ff41; font-size: 12px;');
console.log('%c🚀 Type "help" in terminal for commands', 'color: #ffcc00; font-size: 12px;');
