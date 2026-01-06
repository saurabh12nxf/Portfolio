// ===== DYNAMIC BENTO GRID FEATURES =====

class DynamicBentoGrid {
    constructor() {
        this.weatherData = null;
        this.spotifyData = null;
    }

    init() {
        this.updateDynamicContent();
        this.startUpdates();
    }

    updateDynamicContent() {
        // Update current activity
        this.updateActivity();

        // Update weather (simulated)
        this.updateWeather();

        // Update coding stats
        this.updateCodingStats();

        // Update mood/status
        this.updateMood();
    }

    updateActivity() {
        const activities = [
            { icon: '💻', text: 'Coding', color: '#00ff41' },
            { icon: '📚', text: 'Learning', color: '#00d9ff' },
            { icon: '🎮', text: 'Gaming', color: '#b026ff' },
            { icon: '🎵', text: 'Listening to Music', color: '#ff0055' },
            { icon: '☕', text: 'Coffee Break', color: '#ffcc00' },
            { icon: '🚀', text: 'Building Projects', color: '#00ff41' }
        ];

        const currentHour = new Date().getHours();
        let activity;

        if (currentHour >= 9 && currentHour < 12) {
            activity = activities[0]; // Coding
        } else if (currentHour >= 12 && currentHour < 14) {
            activity = activities[4]; // Coffee Break
        } else if (currentHour >= 14 && currentHour < 18) {
            activity = activities[5]; // Building Projects
        } else if (currentHour >= 18 && currentHour < 22) {
            activity = activities[1]; // Learning
        } else {
            activity = activities[3]; // Listening to Music
        }

        // Update activity card if exists
        const activityCard = document.querySelector('.activity-status');
        if (activityCard) {
            activityCard.innerHTML = `
                <div class="bento-icon">
                    <span style="font-size: 2rem;">${activity.icon}</span>
                </div>
                <h3>Current Activity</h3>
                <p class="bento-value" style="color: ${activity.color};">${activity.text}</p>
            `;
        }
    }

    updateWeather() {
        // Simulated weather based on time
        const hour = new Date().getHours();
        let weather;

        if (hour >= 6 && hour < 12) {
            weather = { icon: '🌅', temp: '22°C', desc: 'Morning' };
        } else if (hour >= 12 && hour < 17) {
            weather = { icon: '☀️', temp: '28°C', desc: 'Sunny' };
        } else if (hour >= 17 && hour < 20) {
            weather = { icon: '🌆', temp: '25°C', desc: 'Evening' };
        } else {
            weather = { icon: '🌙', temp: '20°C', desc: 'Night' };
        }

        const weatherCard = document.querySelector('.weather-status');
        if (weatherCard) {
            weatherCard.innerHTML = `
                <div class="bento-icon">
                    <span style="font-size: 2rem;">${weather.icon}</span>
                </div>
                <h3>Bangalore</h3>
                <p class="bento-value">${weather.temp}</p>
                <small>${weather.desc}</small>
            `;
        }
    }

    updateCodingStats() {
        const stats = {
            linesOfCode: Math.floor(Math.random() * 500) + 200,
            commits: Math.floor(Math.random() * 20) + 5,
            streak: 365
        };

        const statsCard = document.querySelector('.coding-stats');
        if (statsCard) {
            statsCard.innerHTML = `
                <div class="bento-icon">
                    <i class="fas fa-code"></i>
                </div>
                <h3>Today's Stats</h3>
                <div style="font-size: 0.9rem; margin-top: 0.5rem;">
                    <div>Lines: <span style="color: var(--terminal-green);">${stats.linesOfCode}</span></div>
                    <div>Commits: <span style="color: var(--terminal-cyan);">${stats.commits}</span></div>
                </div>
            `;
        }
    }

    updateMood() {
        const moods = [
            { emoji: '🔥', text: 'On Fire!', color: '#ff0055' },
            { emoji: '💪', text: 'Productive', color: '#00ff41' },
            { emoji: '🚀', text: 'Motivated', color: '#00d9ff' },
            { emoji: '😎', text: 'Confident', color: '#b026ff' },
            { emoji: '🎯', text: 'Focused', color: '#ffcc00' }
        ];

        const randomMood = moods[Math.floor(Math.random() * moods.length)];

        const moodCard = document.querySelector('.mood-status');
        if (moodCard) {
            moodCard.innerHTML = `
                <div class="bento-icon">
                    <span style="font-size: 2rem;">${randomMood.emoji}</span>
                </div>
                <h3>Current Mood</h3>
                <p class="bento-value" style="color: ${randomMood.color};">${randomMood.text}</p>
            `;
        }
    }

    startUpdates() {
        // Update every 30 seconds
        setInterval(() => {
            this.updateDynamicContent();
        }, 30000);
    }
}

// ===== GITHUB CONTRIBUTION GRAPH (Simulated) =====

class GitHubContributions {
    constructor() {
        this.contributions = [];
    }

    init() {
        this.generateContributions();
        this.renderGraph();
    }

    generateContributions() {
        // Generate last 7 days of contributions
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const count = Math.floor(Math.random() * 20);
            this.contributions.push({
                date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                count: count
            });
        }
    }

    renderGraph() {
        const graphCard = document.querySelector('.github-graph');
        if (!graphCard) return;

        const maxCount = Math.max(...this.contributions.map(c => c.count));

        let graphHTML = `
            <div class="bento-icon">
                <i class="fab fa-github"></i>
            </div>
            <h3>This Week</h3>
            <div class="contribution-graph">
        `;

        this.contributions.forEach(contrib => {
            const intensity = contrib.count === 0 ? 0 : Math.ceil((contrib.count / maxCount) * 4);
            graphHTML += `
                <div class="contrib-day" title="${contrib.date}: ${contrib.count} contributions">
                    <div class="contrib-bar contrib-level-${intensity}"></div>
                    <small>${contrib.date.split(' ')[1]}</small>
                </div>
            `;
        });

        graphHTML += '</div>';
        graphCard.innerHTML = graphHTML;
    }
}

// ===== LIVE SPOTIFY STATUS (Simulated) =====

class SpotifyStatus {
    constructor() {
        this.songs = [
            { title: 'Blinding Lights', artist: 'The Weeknd' },
            { title: 'Levitating', artist: 'Dua Lipa' },
            { title: 'Save Your Tears', artist: 'The Weeknd' },
            { title: 'Good 4 U', artist: 'Olivia Rodrigo' },
            { title: 'Peaches', artist: 'Justin Bieber' }
        ];
        this.currentSong = null;
    }

    init() {
        this.updateNowPlaying();
        setInterval(() => this.updateNowPlaying(), 180000); // Change every 3 minutes
    }

    updateNowPlaying() {
        this.currentSong = this.songs[Math.floor(Math.random() * this.songs.length)];

        const spotifyCard = document.querySelector('.spotify-status');
        if (spotifyCard) {
            spotifyCard.innerHTML = `
                <div class="bento-icon">
                    <i class="fab fa-spotify" style="color: #1DB954;"></i>
                </div>
                <h3>Now Playing</h3>
                <div class="spotify-info">
                    <div class="song-title">${this.currentSong.title}</div>
                    <div class="song-artist">${this.currentSong.artist}</div>
                    <div class="music-bars">
                        <span></span><span></span><span></span><span></span>
                    </div>
                </div>
            `;
        }
    }
}

// ===== INITIALIZE DYNAMIC BENTO FEATURES =====

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const bentoGrid = new DynamicBentoGrid();
        bentoGrid.init();

        const github = new GitHubContributions();
        github.init();

        const spotify = new SpotifyStatus();
        spotify.init();
    }, 5000); // After boot and initial animations
});

// ===== ADD STYLES FOR DYNAMIC CONTENT =====

const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    .contribution-graph {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
        justify-content: space-between;
    }

    .contrib-day {
        flex: 1;
        text-align: center;
    }

    .contrib-bar {
        height: 40px;
        background: var(--terminal-bg);
        border: 1px solid var(--terminal-green);
        border-radius: 4px;
        margin-bottom: 0.25rem;
    }

    .contrib-level-0 { background: var(--terminal-bg); }
    .contrib-level-1 { background: rgba(0, 255, 65, 0.2); }
    .contrib-level-2 { background: rgba(0, 255, 65, 0.4); }
    .contrib-level-3 { background: rgba(0, 255, 65, 0.6); }
    .contrib-level-4 { background: rgba(0, 255, 65, 0.8); }

    .contrib-day small {
        font-size: 0.65rem;
        color: var(--terminal-text-dim);
    }

    .spotify-info {
        margin-top: 1rem;
        text-align: center;
    }

    .song-title {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--terminal-green);
        margin-bottom: 0.25rem;
    }

    .song-artist {
        font-size: 0.75rem;
        color: var(--terminal-text-dim);
        margin-bottom: 0.5rem;
    }

    .music-bars {
        display: flex;
        gap: 3px;
        justify-content: center;
        align-items: flex-end;
        height: 20px;
    }

    .music-bars span {
        width: 3px;
        background: #1DB954;
        animation: musicBar 0.8s ease-in-out infinite;
    }

    .music-bars span:nth-child(1) { animation-delay: 0s; }
    .music-bars span:nth-child(2) { animation-delay: 0.2s; }
    .music-bars span:nth-child(3) { animation-delay: 0.4s; }
    .music-bars span:nth-child(4) { animation-delay: 0.6s; }

    @keyframes musicBar {
        0%, 100% { height: 5px; }
        50% { height: 20px; }
    }
`;
document.head.appendChild(dynamicStyles);
