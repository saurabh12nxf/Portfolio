# Modern Portfolio Website

A unique, classy portfolio website featuring glassmorphism design, smooth animations, and interactive elements.

## Features

### Design & UI
- **Glassmorphism Design** - Modern frosted glass effect with backdrop blur
- **Dark/Light Theme Toggle** - User preference with localStorage persistence
- **Particle Background** - Animated floating particles for visual depth
- **Smooth Animations** - Scroll-triggered animations and transitions
- **Responsive Design** - Fully optimized for all devices

### Sections
1. **Hero Section** - Eye-catching introduction with typing effect and glitch animation
2. **About Section** - Personal introduction with statistics showcase
3. **Skills Section** - Animated progress bars organized by category
4. **Projects Section** - Interactive project cards with detailed modals
5. **Achievements Timeline** - Visual timeline of milestones
6. **Contact Section** - Modern contact form with floating labels

### Interactive Elements
- Typing animation effect
- Glitch text effect on hero title
- Floating 3D elements
- Hover effects on cards and buttons
- Smooth scroll navigation
- Project detail modals
- Custom cursor effect (desktop)
- Scroll indicator

## Customization Guide

### 1. Personal Information
Edit `index.html`:
- Replace "Your Name" with your actual name
- Update social media links (GitHub, LinkedIn, Twitter, Email)
- Modify contact details (email, phone, location)

### 2. About Section
- Update the about text with your story
- Change statistics (years of experience, projects, clients)
- Add your profile image by replacing the `.profile-img` background

### 3. Skills
Edit the skills in `index.html`:
- Add/remove skill categories
- Update skill names and percentages
- Modify the `data-progress` attribute for each skill

### 4. Projects
Edit `script.js` - `projectData` array:
```javascript
{
    title: 'Your Project Name',
    description: 'Detailed description',
    tech: ['Tech1', 'Tech2', 'Tech3'],
    demo: 'https://your-demo-link.com',
    github: 'https://github.com/your-repo'
}
```

### 5. Achievements
Edit the timeline in `index.html`:
- Update dates, titles, and descriptions
- Add/remove timeline items

### 6. Color Scheme
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
}
```

### 7. Typing Effect
Edit `script.js` - `textArray`:
```javascript
const textArray = ['Developer', 'Designer', 'Your Role'];
```

## Setup Instructions

1. **Download Files**
   - index.html
   - styles.css
   - script.js

2. **Customize Content**
   - Follow the customization guide above
   - Replace placeholder text with your information

3. **Add Images** (Optional)
   - Create an `images` folder
   - Add your profile photo and project screenshots
   - Update image paths in HTML/CSS

4. **Test Locally**
   - Open `index.html` in a web browser
   - Test all interactive features
   - Check responsiveness on different screen sizes

5. **Deploy**
   - Upload to GitHub Pages, Netlify, or Vercel
   - Update social media links to actual URLs
   - Configure contact form backend (optional)

## Contact Form Integration

The contact form currently logs to console. To make it functional:

### Option 1: Formspree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
Add EmailJS library and configure in `script.js`

### Option 3: Backend API
Create your own backend endpoint and update the form submission handler

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used
- HTML5
- CSS3 (Glassmorphism, Animations, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons

## Performance Tips
- Optimize images (use WebP format)
- Minify CSS and JavaScript for production
- Enable caching on your hosting platform
- Use lazy loading for images

## License
Free to use for personal and commercial projects.

## Credits
Design and Development: Your Name
Icons: Font Awesome

---

**Need Help?** Feel free to reach out or open an issue!
