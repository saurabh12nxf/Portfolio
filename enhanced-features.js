// ===== Page Loading Animation =====
window.addEventListener('load', () => {
    const loader = document.getElementById('loaderWrapper');
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);
});

// ===== Scroll Progress Bar =====
function updateScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercentage + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ===== Magnetic Cursor =====
const magneticCursor = document.getElementById('magneticCursor');
const cursorFollower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Smooth cursor movement
    cursorX += (mouseX - cursorX) * 0.3;
    cursorY += (mouseY - cursorY) * 0.3;

    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    if (magneticCursor) {
        magneticCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    }
    if (cursorFollower) {
        cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    }

    requestAnimationFrame(animateCursor);
}

animateCursor();

// Add active class on hover over interactive elements
const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-circular-item, .bento-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursorFollower) cursorFollower.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
        if (cursorFollower) cursorFollower.classList.remove('active');
    });
});

// ===== 3D Tilt Effect =====
function initTiltEffect() {
    const tiltCards = document.querySelectorAll('.tilt-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Initialize tilt effect after DOM is loaded
document.addEventListener('DOMContentLoaded', initTiltEffect);

// ===== Bento Grid Clock =====
function updateBentoClock() {
    const bentoClock = document.getElementById('bentoClock');
    if (bentoClock) {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const minutesStr = minutes < 10 ? '0' + minutes : minutes;
        bentoClock.textContent = `${hours}:${minutesStr} ${ampm}`;
    }
}

updateBentoClock();
setInterval(updateBentoClock, 1000);

// ===== Fun Facts Rotation =====
const funFacts = [
    "I debug code faster than I debug my life! 🐛",
    "Coffee is my primary programming language ☕",
    "I speak fluent JavaScript and broken English 😄",
    "My code works, I have no idea why 🤷‍♂️",
    "404: Social life not found 🔍",
    "I turn coffee into code ☕→💻",
    "Ctrl+Z is my best friend 🔄",
    "I code therefore I am 💭",
    "Debugging: Being a detective in a crime movie where you're also the murderer 🕵️",
    "There are only 10 types of people: those who understand binary and those who don't 1️⃣0️⃣"
];

let currentFactIndex = 0;

function rotateFunFact() {
    const funFactElement = document.getElementById('funFact');
    if (funFactElement) {
        currentFactIndex = (currentFactIndex + 1) % funFacts.length;
        funFactElement.style.opacity = '0';
        setTimeout(() => {
            funFactElement.textContent = funFacts[currentFactIndex];
            funFactElement.style.opacity = '1';
        }, 300);
    }
}

const factRefreshBtn = document.getElementById('factRefresh');
if (factRefreshBtn) {
    factRefreshBtn.addEventListener('click', rotateFunFact);
}

// ===== Circular Progress Animation =====
function animateCircularProgress() {
    const progressCircles = document.querySelectorAll('.progress-circle');

    progressCircles.forEach(circle => {
        const progress = parseInt(circle.getAttribute('data-progress'));
        const circumference = 2 * Math.PI * 45; // radius is 45
        const offset = circumference - (progress / 100) * circumference;

        // Animate the circle
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100);
    });
}

// Observe skills section for animation trigger
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCircularProgress();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.getElementById('skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// ===== Konami Code Easter Egg =====
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateKonamiEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateKonamiEasterEgg() {
    // Create confetti effect
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b'];
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            createConfetti(colors[Math.floor(Math.random() * colors.length)]);
        }, i * 30);
    }

    // Show secret message
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #6366f1, #ec4899);
        color: white;
        padding: 2rem 3rem;
        border-radius: 20px;
        font-size: 1.5rem;
        font-weight: 700;
        z-index: 10001;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: zoomIn 0.5s ease;
    `;
    message.innerHTML = '🎉 You found the secret! 🎉<br><small style="font-size: 1rem;">You are awesome!</small>';
    document.body.appendChild(message);

    setTimeout(() => {
        message.style.animation = 'zoomOut 0.5s ease';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

function createConfetti(color) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${color};
        top: -10px;
        left: ${Math.random() * 100}%;
        opacity: 1;
        transform: rotate(${Math.random() * 360}deg);
        pointer-events: none;
        z-index: 10000;
    `;
    document.body.appendChild(confetti);

    const fallDuration = 3000 + Math.random() * 2000;
    const fallDistance = window.innerHeight + 100;
    const drift = (Math.random() - 0.5) * 200;

    confetti.animate([
        { transform: `translateY(0) translateX(0) rotate(0deg)`, opacity: 1 },
        { transform: `translateY(${fallDistance}px) translateX(${drift}px) rotate(${360 * 3}deg)`, opacity: 0 }
    ], {
        duration: fallDuration,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });

    setTimeout(() => confetti.remove(), fallDuration);
}

// ===== Logo Click Easter Egg =====
let logoClickCount = 0;
const logo = document.querySelector('.logo-3d');

if (logo) {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        logoClickCount++;

        if (logoClickCount === 5) {
            // Trigger rainbow mode
            document.body.style.animation = 'rainbow 3s linear infinite';
            setTimeout(() => {
                document.body.style.animation = '';
                logoClickCount = 0;
            }, 3000);
        }
    });
}

// Add rainbow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    @keyframes zoomIn {
        from { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    @keyframes zoomOut {
        from { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        to { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ===== Console Easter Egg =====
console.log('%c👋 Hello, curious developer!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%c🎨 Like what you see? Let\'s connect!', 'font-size: 14px; color: #ec4899;');
console.log('%c💼 Email: saurabhsingh050806@gmail.com', 'font-size: 12px; color: #8b5cf6;');
console.log('%c🎮 Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A', 'font-size: 12px; color: #f59e0b;');

// ===== Enhanced Particle System =====
function createEnhancedParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 80;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = 5 + Math.random() * 15;
        const delay = Math.random() * 5;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(${99 + Math.random() * 40}, ${102 + Math.random() * 40}, 241, ${0.3 + Math.random() * 0.5});
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            animation: float ${duration}s ease-in-out ${delay}s infinite;
            pointer-events: none;
        `;

        particlesContainer.appendChild(particle);
        particles.push({ element: particle, x, y, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5 });
    }

    // Mouse interaction with particles
    document.addEventListener('mousemove', (e) => {
        const mouseX = (e.clientX / window.innerWidth) * 100;
        const mouseY = (e.clientY / window.innerHeight) * 100;

        particles.forEach(p => {
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 15) {
                const angle = Math.atan2(dy, dx);
                const force = (15 - distance) / 15;
                p.vx -= Math.cos(angle) * force * 0.5;
                p.vy -= Math.sin(angle) * force * 0.5;
            }

            p.x += p.vx;
            p.y += p.vy;

            // Bounce off edges
            if (p.x < 0 || p.x > 100) p.vx *= -0.8;
            if (p.y < 0 || p.y > 100) p.vy *= -0.8;

            // Damping
            p.vx *= 0.95;
            p.vy *= 0.95;

            // Keep in bounds
            p.x = Math.max(0, Math.min(100, p.x));
            p.y = Math.max(0, Math.min(100, p.y));

            p.element.style.left = p.x + '%';
            p.element.style.top = p.y + '%';
        });
    });
}

// Replace old particle system with enhanced one
const oldParticles = document.getElementById('particles');
if (oldParticles) {
    oldParticles.innerHTML = '';
    createEnhancedParticles();
}

// ===== Text Scramble Effect for Section Titles =====
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }

    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        let output = '';
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];

            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            } else {
                output += from;
            }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

// Apply scramble effect to section titles on scroll
const sectionTitles = document.querySelectorAll('.section-title');
const scrambleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fx = new TextScramble(entry.target);
            const originalText = entry.target.textContent;
            fx.setText(originalText);
            scrambleObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

sectionTitles.forEach(title => {
    scrambleObserver.observe(title);
});

// Add dud character styling
const dudStyle = document.createElement('style');
dudStyle.textContent = `
    .dud {
        color: var(--text-secondary);
        opacity: 0.5;
    }
`;
document.head.appendChild(dudStyle);
