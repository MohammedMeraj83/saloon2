document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceItems = document.querySelectorAll('.service-item');
    const headerOffset = 130; // Header height adjustment

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 1. Button active class change
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');

            // 2. Filtering Logic (Items show/hide karne ke liye)
            serviceItems.forEach(item => {
                const itemCategories = item.getAttribute('data-category') || "";
                
                if (filterValue === 'all' || itemCategories.includes(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.classList.add('reveal');
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });

            // 3. SCROLL LOGIC (Delay ke saath taaki layout settle ho jaye)
            setTimeout(() => {
                // Sahi section par bhejne ke liye mapping
                const sectionMap = {
                    'hair': 'haircut',
                    'spa': 'spa',
                    'makeup': 'makeup',
                    'grooming': 'grooming',
                    'indian': 'treatments' // Indian special ke liye treatments section
                };

                const targetId = sectionMap[filterValue];

                if (targetId && filterValue !== 'all') {
                    const element = document.getElementById(targetId);
                    if (element) {
                        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }
                }
            }, 350); // 350ms ka wait taaki display:none hone ke baad height sahi calculate ho
        });
    });

    // Scroll reveal animation observer (Jo pehle se tha)
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    serviceItems.forEach(item => revealObserver.observe(item));
    document.querySelectorAll('.category-title').forEach(title => revealObserver.observe(title));
});

window.addEventListener('load', function() {
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            setTimeout(() => {
                const headerOffset = 130;
                const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 500); // 500ms delay for animations to finish
        }
    }
});