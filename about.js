// 1. AOS Initialization
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1200,
            once: false,
            mirror: true,
            offset: 120,
        });
    }
});

// 2. Navbar background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    }
});

// 3. Optimized Counter Function (Renamed to avoid 'Already Declared' error)
const startStatsAnimation = () => {
    const allStatItems = document.querySelectorAll('.counter');
    const animationSpeed = 200;

    allStatItems.forEach(counter => {
        const updateNumber = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            const increment = target / animationSpeed;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateNumber, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateNumber();
    });
};

// 4. Scroll Observer for Stats Section
let statsSectionTriggered = false;
window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.about-stats-container');
    
    if (statsSection && !statsSectionTriggered) {
        const statsPosition = statsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        // Trigger when 80% of the section is visible
        if (statsPosition < screenPosition * 0.8) {
            startStatsAnimation(); // Calling the uniquely named function
            statsSectionTriggered = true;
        }
    }
});