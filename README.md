# 🚀 Futuristic Terminal Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-00ff41?style=for-the-badge&logo=vercel)](https://portfolio-olive-seven-cb1r48w5rh.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-saurabh12nxf-00d9ff?style=for-the-badge&logo=github)](https://github.com/saurabh12nxf)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-b026ff?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/saurabh-singh-1696292ab/)

> **[🌐 View Live Portfolio](https://portfolio-olive-seven-cb1r48w5rh.vercel.app/)**

A unique, cyberpunk-themed terminal portfolio with interactive features, music player, and real-time contact form.

---

## ✨ Features

### 🎮 Terminal Experience
- **Boot Sequence** - Authentic terminal boot animation on page load
- **Matrix Rain Effect** - Animated background with falling characters
- **Terminal Commands** - Hidden terminal (press `` ` ``) with commands
- **Cyberpunk Theme** - Neon green, cyan, and purple color scheme
- **Scanline & CRT Effects** - Retro monitor aesthetics

### 🎵 Music Player
- **Boot Music Choice** - Choose to enter with or without music
- **Integrated Player** - Full music controls in Bento Grid
- **Playlist Support** - Multiple tracks with next/previous
- **Volume Control** - Adjustable volume slider
- **Animated Visualizer** - Music bars that animate when playing

### 📧 Contact Form
- **EmailJS Integration** - Direct messaging without page reload
- **Real-time Feedback** - Loading states and success/error messages
- **Confetti Animation** - Celebration effect on successful send
- **Spam Protection** - Built-in EmailJS protection

### 🎨 Interactive UI
- **Magnetic Cursor** - Custom cursor with magnetic effect
- **3D Tilt Cards** - Interactive project and skill cards
- **Dynamic Bento Grid** - Real-time updates for activity, weather, stats
- **Scroll Animations** - Smooth reveal animations
- **Particle Background** - Animated particle system

### 🏆 Achievements
- **Timeline Display** - Visual timeline of milestones
- **Hacktoberfest 2024** - 9 PRs merged, T-shirt winner
- **Vibeathon Hackathon** - Top 20 among 296+ teams

### 💻 Technical Features
- **Visitor Counter** - Tracks unique visitors with session IDs
- **CV Download** - One-click CV download with animation
- **Fun Facts** - 20+ rotating programming jokes
- **Responsive Design** - Works on all devices
- **No Backend Required** - Pure frontend with EmailJS

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Advanced animations, gradients, glassmorphism
- **JavaScript (ES6+)** - Modern JS features, classes, async/await

### Libraries & APIs
- **EmailJS** - Contact form email delivery
- **Font Awesome** - Icon library
- **Web Audio API** - Music player functionality
- **Canvas API** - Matrix rain effect

### Styling
- **Custom CSS** - No frameworks, full control
- **CSS Variables** - Dynamic theming
- **Flexbox & Grid** - Modern layouts
- **Animations** - Keyframes, transitions, transforms

---

## 📁 Project Structure

```
PortFolio/
├── index.html                 # Main HTML file
├── styles.css                 # Core styles
├── script.js                  # Main JavaScript
├── advanced-animations.css    # Animation styles
├── terminal-styles.css        # Terminal theme styles
├── terminal-boot.js           # Boot sequence logic
├── terminal-features.js       # Terminal effects
├── music-player.js            # Music player functionality
├── music-player.css           # Music player styles
├── emailjs-contact.js         # Contact form logic
├── emailjs-contact.css        # Contact form styles
├── dynamic-bento.js           # Dynamic Bento Grid
├── fun-facts.js               # Fun facts rotation
├── achievements.css           # Achievements styling
├── enhanced-features.js       # Interactive features
├── Saurabh_Singh_CV.pdf       # CV file
└── README.md                  # This file
```

---

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/saurabh12nxf/Portfolio.git
cd Portfolio
```

### 2. Setup EmailJS (Optional)
See `EMAILJS_SETUP.md` for detailed instructions.

### 3. Add Your CV
Place your CV as `Saurabh_Singh_CV.pdf` in the root directory.

### 4. Open Portfolio
Simply open `index.html` in your browser!

---

## 📧 EmailJS Setup

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Connect your email service
3. Create email template
4. Update credentials in `emailjs-contact.js`:
```javascript
this.publicKey = 'your_public_key';
this.serviceId = 'your_service_id';
this.templateId = 'your_template_id';
```

See `EMAILJS_SETUP.md` for step-by-step guide.

---

## 🎮 Terminal Commands

Press `` ` `` (backtick) to open terminal, then try:
- `help` - Show available commands
- `about` - About me
- `skills` - List skills
- `projects` - Show projects
- `matrix` - Activate Matrix rain
- `hack` - Easter egg
- `clear` - Clear terminal
- `exit` - Close terminal

---

## 🎨 Customization

### Change Colors
Edit CSS variables in `terminal-styles.css`:
```css
--terminal-green: #00ff41;
--terminal-cyan: #00d9ff;
--terminal-purple: #b026ff;
```

### Add Music Tracks
Edit playlist in `music-player.js`:
```javascript
this.playlist = [
    { title: "Track Name", artist: "Artist", url: "path/to/music.mp3" }
];
```

### Modify Fun Facts
Edit array in `fun-facts.js` to add your own jokes!

---

## 📱 Responsive Design

Fully responsive across all devices:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

---

## 🌟 Key Features Breakdown

### Boot Sequence
- System initialization messages
- Loading progress (0-100%)
- "SYSTEM READY" prompt
- Auto-proceed or key press

### Music System
- Boot-time music choice dialog
- Play/Pause/Next/Previous controls
- Volume slider
- Animated visualizer bars
- Track info display

### Contact Form
- Name, Email, Subject, Message fields
- Real-time validation
- Loading spinner
- Success/Error messages
- Confetti celebration
- Auto-reset on success

### Bento Grid
- Current activity (time-based)
- Weather display
- Coding stats
- Current mood
- GitHub contributions
- Music player

---

## 📚 Documentation

- `EMAILJS_SETUP.md` - EmailJS configuration guide
- `MUSIC_PLAYER_GUIDE.md` - Music player setup
- `API_SETUP_GUIDE.md` - API integration guide
- `TERMINAL_QUICK_START.md` - Terminal features guide
- `CV_INSTRUCTIONS.md` - CV file instructions

---

## 🎯 Performance

- ⚡ Fast loading
- 🎨 Smooth animations (60fps)
- 📦 Optimized assets
- 🚀 No heavy dependencies
- 💾 Minimal storage usage

---

## 🔒 Security

- ✅ No sensitive data exposed
- ✅ EmailJS handles email securely
- ✅ Client-side only (no backend)
- ✅ Spam protection included

---

## 🤝 Contributing

Feel free to fork and customize for your own portfolio!

---

## 📄 License

MIT License - Feel free to use for your own portfolio

---

## 👨‍💻 Author

**Saurabh Singh**
- 🌐 Portfolio: [Live Demo](https://portfolio-olive-seven-cb1r48w5rh.vercel.app/)
- 💼 LinkedIn: [Connect](https://www.linkedin.com/in/saurabh-singh-1696292ab/)
- 🐙 GitHub: [@saurabh12nxf](https://github.com/saurabh12nxf)
- 📧 Email: saurabhsingh050806@gmail.com

---

## 🙏 Acknowledgments

- Font Awesome for icons
- EmailJS for contact form
- Vercel for hosting
- JetBrains Mono font

---

## 📊 Stats

- 📝 Lines of Code: ~5000+
- 🎨 CSS Files: 6
- 📜 JS Files: 8
- ⚡ Features: 30+
- 🎯 Load Time: <2s

---

**Made with 💛 by Saurabh Singh**

[![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-2024-ff6b6b?style=flat-square)](https://hacktoberfest.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-00ff41?style=flat-square)](https://github.com/saurabh12nxf)
