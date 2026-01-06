// ===== FUN FACTS ROTATION =====

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
    "There are only 10 types of people: those who understand binary and those who don't 1️⃣0️⃣",
    "Semicolons are just suggestions, right? 😅",
    "I don't always test my code, but when I do, I do it in production 🚀",
    "99 little bugs in the code, 99 bugs in the code. Take one down, patch it around, 127 bugs in the code 🐞",
    "I'm not lazy, I'm just on energy-saving mode 💤",
    "Git commit -m 'Fixed stuff' - The most honest commit message 📝",
    "Stack Overflow: Where copy-paste meets innovation 📚",
    "Real programmers count from 0 🔢",
    "Sleep is for the weak... and I'm very weak 😴",
    "I don't need Google, my wife/husband knows everything. JK, I need Google 🔍",
    "Programmer (noun): A machine that turns coffee into code ⚙️"
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

// Initialize fun fact rotation
document.addEventListener('DOMContentLoaded', () => {
    const factRefreshBtn = document.getElementById('factRefresh');
    if (factRefreshBtn) {
        factRefreshBtn.addEventListener('click', rotateFunFact);
    }

    // Auto-rotate every 10 seconds
    setInterval(rotateFunFact, 10000);
});
