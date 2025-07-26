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
    emailjs.init("kANtZWZpbdYWEq7XX");
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
        emailjs.send('service_n4275ej', 'template_55j7lwh', templateParams)
            .then(function(response) {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, function(error) {
                alert('Sorry, there was an error sending your message. Please try again or email me directly at priyankasridhar13@gmail.com');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.timeline-content, .project-card, .skill-category, .stat');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

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

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Skills animation on hover
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    skill.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Project cards tilt effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Smooth reveal animation for sections
const revealSections = document.querySelectorAll('section');
const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section--hidden');
        }
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

revealSections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

// Add CSS for section reveal animation
const style = document.createElement('style');
style.textContent = `
    .section--hidden {
        opacity: 0;
        transform: translateY(8rem);
        transition: all 1s;
    }
    
    .section--hidden.active {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Trigger reveal animation
const revealSectionOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
};

const sectionRevealObserver = new IntersectionObserver(revealSectionOnScroll, {
    root: null,
    threshold: 0.15,
});

revealSections.forEach(section => {
    sectionRevealObserver.observe(section);
});

// Enhanced parallax scrolling effects
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Hero section parallax with enhanced depth
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroHeight = hero.offsetHeight;
        const heroProgress = Math.min(scrolled / heroHeight, 1);
        
        hero.style.transform = `translateY(${scrolled * 0.4}px)`;
        
        // Dynamic opacity based on scroll progress
        const opacity = Math.max(0.4, 1 - (heroProgress * 0.6));
        hero.style.opacity = opacity;
    }
    
    // Enhanced parallax background effect
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrolled * 0.2}px) scale(${1 + scrolled * 0.0001})`;
    }
    
    // Multi-layered parallax shapes with different speeds
    const parallaxShapes = document.querySelectorAll('.parallax-shape');
    parallaxShapes.forEach((shape, index) => {
        const speed = 0.15 + (index * 0.08);
        const rotationSpeed = 0.05 + (index * 0.02);
        const scale = 1 + (scrolled * 0.00005);
        
        shape.style.transform = `
            translateY(${scrolled * speed}px) 
            rotate(${scrolled * rotationSpeed}deg) 
            scale(${scale})
        `;
    });
    
    // Graduation photo parallax effect
    const graduationPhoto = document.querySelector('.graduation-highlight');
    if (graduationPhoto) {
        const rect = graduationPhoto.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
            const yPos = -(rect.top * 0.3);
            graduationPhoto.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.01}deg)`;
        }
    }
    
    // Enhanced section parallax effects with depth
    const sections = document.querySelectorAll('.about, .projects, .skills, .contact');
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const speed = 0.08 + (index * 0.02);
        
        if (rect.top < windowHeight && rect.bottom > 0) {
            const yPos = -(rect.top * speed);
            const scale = 1 + (Math.abs(rect.top) * 0.0001);
            section.style.transform = `translateY(${yPos}px) scale(${scale})`;
        }
    });
    
    // Profile card enhanced parallax
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        const rect = profileCard.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
            const yPos = -(rect.top * 0.25);
            const rotation = (rect.top * 0.02);
            profileCard.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
        }
    }
    
    // Timeline parallax effect
    const timelineItems = document.querySelectorAll('.timeline-content');
    timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
            const yPos = -(rect.top * (0.1 + index * 0.02));
            const opacity = Math.max(0.3, 1 - (Math.abs(rect.top) * 0.001));
            item.style.transform = `translateY(${yPos}px)`;
            item.style.opacity = opacity;
        }
    });
    
    // Project cards staggered parallax
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
            const yPos = -(rect.top * (0.05 + index * 0.01));
            const rotation = (rect.top * 0.005);
            card.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
        }
    });
});

// Add floating animation to profile card
const profileCard = document.querySelector('.profile-card');
if (profileCard) {
    profileCard.style.animation = 'float 6s ease-in-out infinite';
}

// Add CSS for floating animation
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(floatStyle);

// Add particle effect to hero section
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = '#f59e0b';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100%';
    particle.style.animation = 'particleFloat 8s linear infinite';
    
    document.querySelector('.hero').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 8000);
}

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(particleStyle);

// Create particles periodically
setInterval(createParticle, 2000);

// Add typing effect to hero title
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

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Add scroll-triggered animations
const scrollObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, scrollObserverOptions);

// Observe elements for scroll animations
document.querySelectorAll('.timeline-content, .project-card, .skill-item, .education-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    scrollObserver.observe(el);
});

// Add hover sound effect simulation (visual feedback)
document.querySelectorAll('.btn, .skill-item, .project-card, .timeline-content').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = this.style.transform + ' scale(1.02)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = this.style.transform.replace(' scale(1.02)', '');
    });
});

// Add smooth reveal for stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stat = entry.target.querySelector('h3');
            const finalValue = stat.textContent;
            const isNumber = !isNaN(parseFloat(finalValue));
            
            if (isNumber) {
                const targetValue = parseFloat(finalValue);
                let currentValue = 0;
                const increment = targetValue / 50;
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= targetValue) {
                        stat.textContent = finalValue;
                        clearInterval(counter);
                    } else {
                        stat.textContent = currentValue.toFixed(1);
                    }
                }, 50);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});
