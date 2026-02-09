// DOM Ready Function
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            this.innerHTML = mobileNav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Set active state for mobile bottom nav
    const mobileBottomLinks = document.querySelectorAll('.mobile-bottom-nav a');
    mobileBottomLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only process if it's an anchor link (starts with #)
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (mobileNav && mobileNav.classList.contains('active')) {
                        mobileNav.classList.remove('active');
                        if (mobileMenuBtn) {
                            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                        }
                    }
                }
            }
        });
    });
    
    // Booking form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData);
            
            // In a real app, you would send this to a server
            // For demo, we'll just show a success message
            alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.');
            this.reset();
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData);
            
            // In a real app, you would send this to a server
            // For demo, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Gallery filtering (if implemented)
    const filterButtons = document.querySelectorAll('.gallery-filter button');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Show/hide gallery items based on filter
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Add shadow to header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
        }
    });
});

// Initialize map (dummy function - would be replaced with actual Google Maps API)
function initMap() {
    // This is a placeholder for Google Maps initialization
    console.log('Map would be initialized here with Google Maps API');
}

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    // Agar preloader page par hai, tabhi style change karo
    if (preloader) { 
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 400);
        }, 1000);
    }
});