document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    // Get current filename (e.g., about.html)
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navItems.forEach(item => {
        const href = item.getAttribute('href');
        
        // Match checking for active state
        if (href === currentPath) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});