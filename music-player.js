// ===== MUSIC PLAYER SYSTEM =====

class MusicPlayer {
    constructor() {
        this.isPlaying = false;
        this.currentTrackIndex = 0;
        this.volume = 0.5;
        this.audioContext = null;
        this.musicEnabled = false;

        // Playlist - You can add your own music URLs here
        this.playlist = [
            {
                title: "Cyberpunk Dreams",
                artist: "Synthwave",
                url: "" // Add your music file URL or use Web Audio API
            },
            {
                title: "Code & Coffee",
                artist: "Lo-Fi Beats",
                url: ""
            },
            {
                title: "Terminal Vibes",
                artist: "Electronic",
                url: ""
            }
        ];
    }

    init(withMusic = false) {
        this.musicEnabled = withMusic;
        if (withMusic) {
            this.createMusicControls();
            this.play();
        } else {
            this.createMusicControls(); // Still show controls for later activation
        }
    }

    createMusicControls() {
        // Update the Spotify card in Bento Grid to be a real music player
        const musicCard = document.querySelector('.music-player-card');
        if (musicCard) {
            this.updateMusicCard(musicCard);
        }
    }

    updateMusicCard(card) {
        const currentTrack = this.playlist[this.currentTrackIndex];
        card.innerHTML = `
            <div class="bento-icon">
                <i class="fas fa-music" style="color: #1DB954;"></i>
            </div>
            <h3>Music Player</h3>
            <div class="music-player-info">
                <div class="track-title">${currentTrack.title}</div>
                <div class="track-artist">${currentTrack.artist}</div>
                <div class="music-controls">
                    <button class="music-btn" id="prevTrack" title="Previous">
                        <i class="fas fa-step-backward"></i>
                    </button>
                    <button class="music-btn music-play-pause" id="playPause" title="Play/Pause">
                        <i class="fas ${this.isPlaying ? 'fa-pause' : 'fa-play'}"></i>
                    </button>
                    <button class="music-btn" id="nextTrack" title="Next">
                        <i class="fas fa-step-forward"></i>
                    </button>
                </div>
                <div class="volume-control">
                    <i class="fas fa-volume-down"></i>
                    <input type="range" id="volumeSlider" min="0" max="100" value="${this.volume * 100}" class="volume-slider">
                    <i class="fas fa-volume-up"></i>
                </div>
                <div class="music-visualizer">
                    <span></span><span></span><span></span><span></span><span></span>
                </div>
            </div>
        `;

        this.attachEventListeners();
    }

    attachEventListeners() {
        const playPauseBtn = document.getElementById('playPause');
        const prevBtn = document.getElementById('prevTrack');
        const nextBtn = document.getElementById('nextTrack');
        const volumeSlider = document.getElementById('volumeSlider');

        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', () => this.togglePlay());
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousTrack());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextTrack());
        }

        if (volumeSlider) {
            volumeSlider.addEventListener('input', (e) => {
                this.setVolume(e.target.value / 100);
            });
        }
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        this.isPlaying = true;
        this.musicEnabled = true;

        // Start visualizer animation
        const visualizer = document.querySelector('.music-visualizer');
        if (visualizer) {
            visualizer.classList.add('playing');
        }

        // Update play button
        const playBtn = document.querySelector('#playPause i');
        if (playBtn) {
            playBtn.className = 'fas fa-pause';
        }

        // Here you would actually play audio
        // For now, we'll simulate with Web Audio API tones
        this.playTone();
    }

    pause() {
        this.isPlaying = false;

        // Stop visualizer animation
        const visualizer = document.querySelector('.music-visualizer');
        if (visualizer) {
            visualizer.classList.remove('playing');
        }

        // Update play button
        const playBtn = document.querySelector('#playPause i');
        if (playBtn) {
            playBtn.className = 'fas fa-play';
        }

        // Stop audio
        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }
    }

    nextTrack() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
        this.updateTrackInfo();
        if (this.isPlaying) {
            this.pause();
            setTimeout(() => this.play(), 100);
        }
    }

    previousTrack() {
        this.currentTrackIndex = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
        this.updateTrackInfo();
        if (this.isPlaying) {
            this.pause();
            setTimeout(() => this.play(), 100);
        }
    }

    updateTrackInfo() {
        const currentTrack = this.playlist[this.currentTrackIndex];
        const titleEl = document.querySelector('.track-title');
        const artistEl = document.querySelector('.track-artist');

        if (titleEl) titleEl.textContent = currentTrack.title;
        if (artistEl) artistEl.textContent = currentTrack.artist;
    }

    setVolume(value) {
        this.volume = value;
        // Apply volume to audio context if playing
    }

    playTone() {
        // Simple ambient tone using Web Audio API
        // This is a placeholder - you can replace with actual music files
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            oscillator.frequency.value = 220; // A3 note
            oscillator.type = 'sine';
            gainNode.gain.value = this.volume * 0.1; // Very quiet ambient tone

            oscillator.start();
        } catch (e) {
            console.log('Audio context not supported');
        }
    }
}

// Global music player instance
let musicPlayer = null;

// ===== BOOT MUSIC CHOICE =====

function showMusicChoice() {
    return new Promise((resolve) => {
        const choiceDialog = document.createElement('div');
        choiceDialog.className = 'music-choice-dialog';
        choiceDialog.innerHTML = `
            <div class="music-choice-content">
                <h2>🎵 Choose Your Experience</h2>
                <p>Would you like to enter with background music?</p>
                <div class="music-choice-buttons">
                    <button class="music-choice-btn with-music" id="withMusic">
                        <i class="fas fa-music"></i>
                        <span>Enter with Music</span>
                    </button>
                    <button class="music-choice-btn without-music" id="withoutMusic">
                        <i class="fas fa-volume-mute"></i>
                        <span>Enter Silently</span>
                    </button>
                </div>
                <small>You can control music anytime from the dashboard</small>
            </div>
        `;

        document.body.appendChild(choiceDialog);

        // Add event listeners
        document.getElementById('withMusic').addEventListener('click', () => {
            choiceDialog.classList.add('fade-out');
            setTimeout(() => {
                choiceDialog.remove();
                resolve(true);
            }, 300);
        });

        document.getElementById('withoutMusic').addEventListener('click', () => {
            choiceDialog.classList.add('fade-out');
            setTimeout(() => {
                choiceDialog.remove();
                resolve(false);
            }, 300);
        });

        // Show dialog with animation
        setTimeout(() => {
            choiceDialog.classList.add('show');
        }, 100);
    });
}

// Export for use in terminal-boot.js
if (typeof window !== 'undefined') {
    window.MusicPlayer = MusicPlayer;
    window.showMusicChoice = showMusicChoice;
    window.musicPlayer = null;
}
