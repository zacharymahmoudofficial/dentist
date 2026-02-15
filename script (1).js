// Form submission
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your appointment request! We will contact you shortly to confirm your appointment.');
    this.reset();
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// Smooth scrolling
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

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(250, 248, 243, 0.98)';
        nav.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(250, 248, 243, 0.95)';
        nav.style.boxShadow = '0 2px 20px var(--shadow)';
    }
});
