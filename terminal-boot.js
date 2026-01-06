// ===== TERMINAL BOOT SEQUENCE =====

class TerminalBoot {
    constructor() {
        this.bootContainer = null;
        this.messageContainer = null;
        this.progressBar = null;
        this.percentage = null;
        this.readyMessage = null;
        this.currentProgress = 0;
        this.messages = [
            { text: 'INITIALIZING SYSTEM...', type: 'info', delay: 100 },
            { text: 'Loading kernel modules...', type: 'info', delay: 300 },
            { text: 'Checking CPU... OK', type: 'success', delay: 500 },
            { text: 'Checking RAM... OK', type: 'success', delay: 700 },
            { text: 'Checking GPU... OK', type: 'success', delay: 900 },
            { text: 'Network Status... ONLINE', type: 'success', delay: 1100 },
            { text: 'Loading portfolio modules...', type: 'info', delay: 1300 },
            { text: 'Initializing UI components...', type: 'info', delay: 1500 },
            { text: 'Applying cyberpunk theme...', type: 'success', delay: 1700 },
            { text: 'Loading user data...', type: 'info', delay: 1900 },
            { text: 'All systems operational', type: 'success', delay: 2100 }
        ];
    }

    init() {
        this.createBootScreen();
        this.startBoot();
    }

    createBootScreen() {
        this.bootContainer = document.createElement('div');
        this.bootContainer.className = 'terminal-boot';
        this.bootContainer.innerHTML = `
            <div class="boot-content">
                <div class="boot-header">
                    ╔═══════════════════════════════════╗
                    ║   PORTFOLIO SYSTEM v2.0.26        ║
                    ║   Initializing...                 ║
                    ╚═══════════════════════════════════╝
                </div>
                <div class="boot-messages" id="bootMessages"></div>
                <div class="boot-progress">
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" id="progressBarFill"></div>
                    </div>
                    <div class="progress-percentage" id="progressPercentage">0%</div>
                </div>
                <div class="boot-ready" id="bootReady">
                    SYSTEM READY
                    <br>
                    <small style="font-size: 0.8rem;">Press any key to continue...</small>
                </div>
            </div>
        `;
        document.body.appendChild(this.bootContainer);

        this.messageContainer = document.getElementById('bootMessages');
        this.progressBar = document.getElementById('progressBarFill');
        this.percentage = document.getElementById('progressPercentage');
        this.readyMessage = document.getElementById('bootReady');
    }

    async startBoot() {
        // Show messages
        for (const msg of this.messages) {
            await this.wait(msg.delay);
            this.addMessage(msg.text, msg.type);
            this.updateProgress();
        }

        // Complete progress
        await this.wait(300);
        this.completeProgress();

        // Show ready message
        await this.wait(500);
        this.showReady();

        // Wait for user interaction or auto-proceed
        await this.waitForUser();
        this.hideBoot();
    }

    addMessage(text, type = 'info') {
        const msg = document.createElement('div');
        msg.className = `boot-message ${type}`;
        msg.textContent = text;
        this.messageContainer.appendChild(msg);

        // Auto-scroll to bottom
        this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
    }

    updateProgress() {
        this.currentProgress += (100 / this.messages.length);
        this.progressBar.style.width = this.currentProgress + '%';
        this.percentage.textContent = Math.round(this.currentProgress) + '%';
    }

    completeProgress() {
        this.currentProgress = 100;
        this.progressBar.style.width = '100%';
        this.percentage.textContent = '100%';
    }

    showReady() {
        this.readyMessage.classList.add('show');
    }

    async waitForUser() {
        return new Promise((resolve) => {
            const handler = () => {
                document.removeEventListener('keydown', handler);
                document.removeEventListener('click', handler);
                resolve();
            };

            document.addEventListener('keydown', handler);
            document.addEventListener('click', handler);

            // Auto-proceed after 3 seconds
            setTimeout(resolve, 3000);
        });
    }

    hideBoot() {
        this.bootContainer.classList.add('hidden');
        setTimeout(() => {
            this.bootContainer.remove();
        }, 500);
    }

    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize boot sequence when page loads
window.addEventListener('load', () => {
    const boot = new TerminalBoot();
    boot.init();
});

// ===== VISITOR COUNTER =====

class VisitorCounter {
    constructor() {
        this.storageKey = 'portfolio_visitor_count';
        this.sessionKey = 'portfolio_session_id';
        this.count = 0;
        this.sessionId = 0;
    }

    init() {
        this.loadCount();
        this.incrementCount();
        this.createCounter();
        this.animateCount();
    }

    loadCount() {
        const stored = localStorage.getItem(this.storageKey);
        this.count = stored ? parseInt(stored) : 0;

        const sessionStored = sessionStorage.getItem(this.sessionKey);
        this.sessionId = sessionStored ? parseInt(sessionStored) : this.count + 1;
    }

    incrementCount() {
        // Only increment if new session
        if (!sessionStorage.getItem(this.sessionKey)) {
            this.count++;
            this.sessionId = this.count;
            localStorage.setItem(this.storageKey, this.count.toString());
            sessionStorage.setItem(this.sessionKey, this.sessionId.toString());
        }
    }

    createCounter() {
        const counter = document.createElement('div');
        counter.className = 'visitor-counter';
        counter.innerHTML = `
            <h3>VISITORS</h3>
            <div class="visitor-count" id="visitorCount">00000</div>
            <div class="session-id">SESSION #<span id="sessionId">0</span></div>
        `;
        document.body.appendChild(counter);
    }

    animateCount() {
        const countElement = document.getElementById('visitorCount');
        const sessionElement = document.getElementById('sessionId');

        let current = 0;
        const target = this.count;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        const stepDuration = duration / steps;

        const animate = () => {
            current += increment;
            if (current >= target) {
                current = target;
                countElement.textContent = this.formatNumber(Math.floor(current));
                sessionElement.textContent = this.sessionId;
            } else {
                countElement.textContent = this.formatNumber(Math.floor(current));
                setTimeout(animate, stepDuration);
            }
        };

        setTimeout(animate, 1000); // Start after boot
    }

    formatNumber(num) {
        return num.toString().padStart(5, '0');
    }
}

// ===== SYSTEM STATS =====

class SystemStats {
    constructor() {
        this.cpu = 0;
        this.ram = 0;
        this.network = 'ONLINE';
    }

    init() {
        this.createPanel();
        this.startUpdates();
    }

    createPanel() {
        const panel = document.createElement('div');
        panel.className = 'system-stats';
        panel.innerHTML = `
            <h3>SYSTEM STATUS</h3>
            <div class="stat-item">
                <span class="stat-label">CPU:</span>
                <span class="stat-value" id="cpuValue">0%</span>
            </div>
            <div class="stat-bar">
                <div class="stat-bar-fill" id="cpuBar" style="width: 0%"></div>
            </div>
            <div class="stat-item">
                <span class="stat-label">RAM:</span>
                <span class="stat-value" id="ramValue">0%</span>
            </div>
            <div class="stat-bar">
                <div class="stat-bar-fill" id="ramBar" style="width: 0%"></div>
            </div>
            <div class="stat-item">
                <span class="stat-label">NET:</span>
                <span class="stat-value" id="netValue">ONLINE</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">TIME:</span>
                <span class="stat-value" id="timeValue">00:00:00</span>
            </div>
        `;
        document.body.appendChild(panel);
    }

    startUpdates() {
        // Update stats every 2 seconds
        setInterval(() => {
            this.updateStats();
        }, 2000);

        // Update time every 100ms
        setInterval(() => {
            this.updateTime();
        }, 100);

        // Initial update
        setTimeout(() => this.updateStats(), 1000);
    }

    updateStats() {
        // Simulate CPU usage (30-90%)
        this.cpu = 30 + Math.random() * 60;
        document.getElementById('cpuValue').textContent = Math.round(this.cpu) + '%';
        document.getElementById('cpuBar').style.width = this.cpu + '%';

        // Simulate RAM usage (50-95%)
        this.ram = 50 + Math.random() * 45;
        document.getElementById('ramValue').textContent = Math.round(this.ram) + '%';
        document.getElementById('ramBar').style.width = this.ram + '%';
    }

    updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ms = String(Math.floor(now.getMilliseconds() / 100));

        document.getElementById('timeValue').textContent = `${hours}:${minutes}:${seconds}.${ms}`;
    }
}

// ===== CV DOWNLOAD =====

class CVDownload {
    constructor() {
        this.cvPath = 'Saurabh_Singh_CV.pdf';
    }

    init() {
        this.createButton();
    }

    createButton() {
        const button = document.createElement('button');
        button.className = 'cv-download-btn';
        button.textContent = 'Download CV';
        button.addEventListener('click', () => this.download());
        document.body.appendChild(button);
    }

    async download() {
        const button = document.querySelector('.cv-download-btn');
        const originalText = button.textContent;

        // Show downloading animation
        button.textContent = 'Downloading...';
        button.disabled = true;

        // Simulate download progress
        await this.simulateProgress(button);

        // Try to download
        const link = document.createElement('a');
        link.href = this.cvPath;
        link.download = 'Saurabh_Singh_CV.pdf';
        link.click();

        // Reset button
        button.textContent = '✓ Downloaded';
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
    }

    async simulateProgress(button) {
        const steps = ['[░░░░░░░░░░]', '[██░░░░░░░░]', '[████░░░░░░]', '[██████░░░░]', '[████████░░]', '[██████████]'];
        for (const step of steps) {
            button.textContent = step;
            await this.wait(200);
        }
    }

    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// ===== TERMINAL COMMAND INPUT =====

class TerminalInput {
    constructor() {
        this.container = null;
        this.input = null;
        this.output = null;
        this.isActive = false;
        this.commands = {
            help: 'Available commands: help, about, skills, projects, matrix, hack, clear, exit',
            about: 'Saurabh Singh - Full Stack Developer | Problem Solver | Tech Enthusiast',
            skills: 'HTML/CSS, JavaScript, React, Node.js, Python, Git, UI/UX Design',
            projects: 'Krishi-Mitra | Arogya-AI | Destinex | Pathwise',
            matrix: '🟢 Matrix mode activated...',
            hack: 'Access denied. Just kidding! 😄',
            clear: 'CLEAR',
            exit: 'EXIT'
        };
    }

    init() {
        this.createTerminal();
        this.setupListeners();
    }

    createTerminal() {
        this.container = document.createElement('div');
        this.container.className = 'terminal-input-container';
        this.container.innerHTML = `
            <div class="terminal-output" id="terminalOutput"></div>
            <div class="terminal-prompt">
                <span class="terminal-prompt-symbol">guest@portfolio:~$</span>
                <input type="text" class="terminal-input" id="terminalInput" placeholder="Type 'help' for commands...">
            </div>
        `;
        document.body.appendChild(this.container);

        this.input = document.getElementById('terminalInput');
        this.output = document.getElementById('terminalOutput');
    }

    setupListeners() {
        // Toggle terminal with backtick key
        document.addEventListener('keydown', (e) => {
            if (e.key === '`' || e.key === '~') {
                e.preventDefault();
                this.toggle();
            }
            if (e.key === 'Escape' && this.isActive) {
                this.toggle();
            }
        });

        // Handle command input
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.executeCommand(this.input.value.trim());
                this.input.value = '';
            }
        });
    }

    toggle() {
        this.isActive = !this.isActive;
        this.container.classList.toggle('active');
        if (this.isActive) {
            this.input.focus();
        }
    }

    executeCommand(cmd) {
        if (!cmd) return;

        // Add command to output
        this.addOutput(`> ${cmd}`, 'command');

        const command = cmd.toLowerCase();

        if (command === 'clear') {
            this.output.innerHTML = '';
            return;
        }

        if (command === 'exit') {
            this.toggle();
            return;
        }

        if (command === 'matrix') {
            this.addOutput(this.commands[command]);
            this.activateMatrix();
            return;
        }

        const response = this.commands[command] || `Command not found: ${cmd}. Type 'help' for available commands.`;
        this.addOutput(response);
    }

    addOutput(text, type = 'response') {
        const line = document.createElement('div');
        line.className = `terminal-output-line ${type}`;
        line.textContent = text;
        this.output.appendChild(line);
        this.output.scrollTop = this.output.scrollHeight;
    }

    activateMatrix() {
        // Trigger matrix rain effect
        const event = new CustomEvent('activateMatrix');
        document.dispatchEvent(event);
    }
}

// ===== INITIALIZE ALL TERMINAL FEATURES =====

document.addEventListener('DOMContentLoaded', () => {
    // Wait for boot to complete before initializing other features
    setTimeout(() => {
        const visitor = new VisitorCounter();
        visitor.init();

        const stats = new SystemStats();
        stats.init();

        const cvDownload = new CVDownload();
        cvDownload.init();

        const terminal = new TerminalInput();
        terminal.init();
    }, 3500); // After boot sequence
});
