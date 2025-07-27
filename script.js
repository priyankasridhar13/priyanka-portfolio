// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links with enhanced effects
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Add a subtle glow effect to the target section
            target.style.animation = 'sectionGlow 0.5s ease-in-out';
            setTimeout(() => {
                target.style.animation = '';
            }, 500);
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add CSS animation for section glow
const style = document.createElement('style');
style.textContent = `
    @keyframes sectionGlow {
        0% { box-shadow: 0 0 0 rgba(245, 158, 11, 0); }
        50% { box-shadow: 0 0 30px rgba(245, 158, 11, 0.3); }
        100% { box-shadow: 0 0 0 rgba(245, 158, 11, 0); }
    }
`;
document.head.appendChild(style);

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
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

// Initialize EmailJS
(function() {
    // Check if EmailJS is loaded
    if (typeof emailjs !== 'undefined') {
        // Use configuration from config.js or environment variables
        const userId = window.EMAILJS_CONFIG?.USER_ID || "kANtZWZpbdYWEq7XX";
        emailjs.init(userId);
        console.log('EmailJS initialized successfully');
    } else {
        console.error('EmailJS not loaded!');
    }
})();

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Update button state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Prepare email template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_name: 'Priyanka'
        };
        
        // Send email using EmailJS
        console.log('Sending email with params:', templateParams);
        
        // Check if EmailJS is available
        if (typeof emailjs === 'undefined') {
            alert('EmailJS not loaded. Please refresh the page and try again.');
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            return;
        }
        
        // Use configuration from config.js or environment variables
        const serviceId = window.EMAILJS_CONFIG?.SERVICE_ID || 'service_n4275ej';
        const templateId = window.EMAILJS_CONFIG?.TEMPLATE_ID || 'template_55j7lwh';
        emailjs.send(serviceId, templateId, templateParams)
            .then(function(response) {
                console.log('Email sent successfully:', response);
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, function(error) {
                console.error('Email send failed:', error);
                alert('Sorry, there was an error sending your message. Error: ' + error.text + '. Please try again or email me directly at priyankasridhar13@gmail.com');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
    });
}

// Removed scroll animations for static layout

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Removed typing animation initialization

// Removed hero parallax effect

// Removed loading animation for immediate display

// Removed skills hover animations

// Removed project card tilt effects

// Removed section reveal animations

// Removed section reveal CSS and observers

// Removed all parallax effects for clean, static layout

// Removed floating animation for static layout

// Removed typing animation for static text display

// Removed additional scroll animations

// Removed hover effects for static layout

// Removed stats counter animations
