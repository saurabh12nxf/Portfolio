// ===== Live Time Display =====
function updateLiveTime() {
    const now = new Date();
    
    // Format time (12-hour format with am/pm)
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const timeString = `${hours}:${minutesStr} ${ampm}`;
    
    // Format date (Month Day)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const dateString = `${months[now.getMonth()]} ${now.getDate()}`;
    
    // Update DOM
    const timeDisplay = document.getElementById('liveTime');
    const dateDisplay = document.getElementById('liveDate');
    
    if (timeDisplay) timeDisplay.textContent = timeString;
    if (dateDisplay) dateDisplay.textContent = dateString;
}

// Update time immediately and then every second
updateLiveTime();
setInterval(updateLiveTime, 1000);

// ===== Motivational Quotes =====
const quotes = [
    { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
    { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
    { text: "Knowledge is power.", author: "Francis Bacon" },
    { text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.", author: "Dan Salomon" },
    { text: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.", author: "Antoine de Saint-Exupery" },
    { text: "Code never lies, comments sometimes do.", author: "Ron Jeffries" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
    { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
    { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" }
];

let currentQuoteIndex = 0;

function displayQuote(index) {
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    
    if (quoteText && quoteAuthor) {
        // Fade out
        quoteText.style.opacity = '0';
        quoteAuthor.style.opacity = '0';
        
        setTimeout(() => {
            quoteText.textContent = quotes[index].text;
            quoteAuthor.textContent = `- ${quotes[index].author}`;
            
            // Fade in
            quoteText.style.opacity = '1';
            quoteAuthor.style.opacity = '1';
        }, 300);
    }
}

function getRandomQuote() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex && quotes.length > 1);
    
    currentQuoteIndex = newIndex;
    displayQuote(currentQuoteIndex);
}

// Add click event to quote button
const quoteBtn = document.getElementById('newQuoteBtn');
if (quoteBtn) {
    quoteBtn.addEventListener('click', getRandomQuote);
}

// Add transition styles
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
if (quoteText) quoteText.style.transition = 'opacity 0.3s ease';
if (quoteAuthor) quoteAuthor.style.transition = 'opacity 0.3s ease';

// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// ===== Mobile Navigation =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

if (navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });
}

// ===== Typing Effect =====
const typedTextSpan = document.getElementById('typed-text');
const textArray = ['Developer', 'Designer', 'Problem Solver', 'Creative Thinker'];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, newTextDelay + 250);
});

// ===== Particle Background =====
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(${99 + Math.random() * 40}, ${102 + Math.random() * 40}, ${241}, 0.5)`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${5 + Math.random() * 10}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-category')) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = progress + '%';
                });
            }
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Observe skill categories
document.querySelectorAll('.skill-category').forEach(category => {
    observer.observe(category);
});

// Animate skill bars - Simple and direct approach
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    console.log('Animating skill bars, found:', skillBars.length);
    
    skillBars.forEach((bar, index) => {
        const progress = bar.getAttribute('data-progress');
        console.log(`Bar ${index}: progress = ${progress}, current width = ${bar.style.width}`);
        
        if (progress) {
            // Force set the width
            setTimeout(() => {
                bar.style.width = progress + '%';
                console.log(`Set bar ${index} to ${progress}%`);
            }, index * 100);
        }
    });
}

// Force animate immediately when script loads
setTimeout(() => {
    console.log('Force animating skill bars...');
    animateSkillBars();
}, 500);

// Multiple triggers to ensure it works
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(animateSkillBars, 1000);
});

window.addEventListener('load', () => {
    setTimeout(animateSkillBars, 1500);
});

// Animate on scroll
let hasAnimated = false;
window.addEventListener('scroll', () => {
    if (hasAnimated) return;
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            animateSkillBars();
            hasAnimated = true;
        }
    }
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Navbar Background on Scroll =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar-top');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ===== Bottom Navigation Active Link =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const bottomNavLinks = document.querySelectorAll('.bottom-nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    bottomNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Project Modal =====
const projectData = [
    {
        title: 'Krishi-Mitra',
        description: 'Empowering Farmers Through Smart Agriculture. A comprehensive platform that leverages technology to help farmers make informed decisions, access market information, and improve agricultural productivity through data-driven insights.',
        tech: ['Python', 'TypeScript', 'JavaScript', 'Jupyter Notebook', 'HTML & CSS'],
        demo: '#',
        github: 'https://github.com/saurabh12nxf/Krishi-Mitra.git'
    },
    {
        title: 'Arogya-AI',
        description: 'Helping doctors & patients overcome language barriers. An AI-powered healthcare communication platform that provides real-time translation and medical terminology assistance to ensure effective communication between healthcare providers and patients from different linguistic backgrounds.',
        tech: ['TypeScript', 'Python', 'PLpgSQL'],
        demo: '#',
        github: 'https://github.com/saurabh12nxf/Vibeathon.git'
    },
    {
        title: 'Destinex',
        description: 'Making Tourism ease with our Destinex. A comprehensive travel management platform that helps users plan, organize, and manage their trips with features like itinerary planning, destination recommendations, and travel booking assistance.',
        tech: ['JavaScript', 'CSS', 'HTML'],
        demo: '#',
        github: 'https://github.com/saurabh12nxf/Destinex-A-travel-manager.git'
    },
    {
        title: 'Pathwise',
        description: 'Helping Students to Generate personalised Path for their academic learning. An intelligent learning platform that creates customized study paths based on individual student needs, learning pace, and academic goals to optimize their educational journey.',
        tech: ['JavaScript', 'HTML', 'CSS'],
        demo: '#',
        github: 'https://github.com/saurabh12nxf/Path-wise.git'
    }
];

const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');

function openModal(index) {
    const project = projectData[index];
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').innerHTML = `<p>${project.description}</p>`;
    document.getElementById('modalTech').innerHTML = `
        <h3>Technologies Used:</h3>
        <div class="project-tags">
            ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
        </div>
    `;
    
    const modalLinks = document.querySelector('.modal-links');
    modalLinks.innerHTML = `
        <a href="${project.demo}" class="btn btn-primary" target="_blank">Live Demo</a>
        <a href="${project.github}" class="btn btn-secondary" target="_blank">Source Code</a>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link with form data
        const mailtoLink = `mailto:saurabhsingh050806@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        formStatus.textContent = '✓ Opening your email client... Please send the email to complete your message.';
        formStatus.style.color = '#10b981';
        formStatus.style.marginTop = '1rem';
        formStatus.style.textAlign = 'center';
        formStatus.style.fontWeight = '600';
        
        // Reset form after a delay
        setTimeout(() => {
            contactForm.reset();
            formStatus.textContent = '';
        }, 3000);
    });
}

// ===== Active Navigation Link =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Cursor Effect (Optional Enhancement) =====
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add cursor styles
const style = document.createElement('style');
style.textContent = `
    .custom-cursor {
        width: 20px;
        height: 20px;
        border: 2px solid var(--primary-color);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        display: none;
    }
    
    @media (min-width: 768px) {
        .custom-cursor {
            display: block;
        }
    }
    
    a:hover ~ .custom-cursor,
    button:hover ~ .custom-cursor {
        transform: scale(1.5);
        background: var(--primary-color);
        opacity: 0.3;
    }
`;
document.head.appendChild(style);

// ===== Initialize Animations on Load =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
