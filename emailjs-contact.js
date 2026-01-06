// ===== EMAILJS CONTACT FORM =====

class EmailJSContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.statusElement = document.getElementById('form-status');
        this.submitButton = null;

        // EmailJS Configuration
        // You need to replace these with your actual EmailJS credentials
        this.publicKey = 'YpwfuqcXLNEd0yJOf'; // Get from EmailJS dashboard
        this.serviceId = 'service_ifyq2g2'; // Get from EmailJS dashboard
        this.templateId = 'template_diyntof'; // Get from EmailJS dashboard
    }

    init() {
        if (!this.form) return;

        this.submitButton = this.form.querySelector('button[type="submit"]');
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Initialize EmailJS
        emailjs.init(this.publicKey);
    }

    async handleSubmit(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            to_name: 'Saurabh Singh' // Your name
        };

        // Disable submit button and show loading
        this.setLoading(true);
        this.showStatus('Sending message...', 'info');

        try {
            // Send email using EmailJS
            const response = await emailjs.send(
                this.serviceId,
                this.templateId,
                formData
            );

            console.log('SUCCESS!', response.status, response.text);

            // Show success message
            this.showStatus('✅ Message sent successfully! I\'ll get back to you soon.', 'success');

            // Reset form
            this.form.reset();

            // Add success animation
            this.animateSuccess();

        } catch (error) {
            console.error('FAILED...', error);

            // Show error message
            this.showStatus('❌ Failed to send message. Please try again or email me directly.', 'error');
        } finally {
            // Re-enable submit button
            this.setLoading(false);
        }
    }

    setLoading(isLoading) {
        if (!this.submitButton) return;

        if (isLoading) {
            this.submitButton.disabled = true;
            this.submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        } else {
            this.submitButton.disabled = false;
            this.submitButton.innerHTML = 'Send Message';
        }
    }

    showStatus(message, type) {
        if (!this.statusElement) return;

        this.statusElement.textContent = message;
        this.statusElement.className = `form-status ${type}`;
        this.statusElement.style.display = 'block';

        // Auto-hide after 5 seconds for success/error
        if (type === 'success' || type === 'error') {
            setTimeout(() => {
                this.statusElement.style.display = 'none';
            }, 5000);
        }
    }

    animateSuccess() {
        // Create confetti effect
        const colors = ['#00ff41', '#00d9ff', '#b026ff'];
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                this.createConfetti(colors[Math.floor(Math.random() * colors.length)]);
            }, i * 30);
        }
    }

    createConfetti(color) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${color};
            left: ${Math.random() * 100}%;
            top: -10px;
            opacity: 1;
            transform: rotate(${Math.random() * 360}deg);
            pointer-events: none;
            z-index: 9999;
        `;
        document.body.appendChild(confetti);

        const animation = confetti.animate([
            { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
            { transform: `translateY(${window.innerHeight + 10}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
            duration: 2000 + Math.random() * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        animation.onfinish = () => confetti.remove();
    }
}

// Initialize EmailJS contact form when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = new EmailJSContactForm();
    contactForm.init();
});
