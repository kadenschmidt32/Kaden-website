document.addEventListener('DOMContentLoaded', () => {
    console.log("Kaden's Personal Website loaded successfully.");

    // Button press effect
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() { this.style.transform = 'scale(0.96)'; });
        button.addEventListener('mouseup', function() { this.style.transform = ''; });
        button.addEventListener('mouseleave', function() { this.style.transform = ''; });
    });

    // Dropdown toggle
    const toggle = document.querySelector('.dropdown-toggle');
    const menu   = document.querySelector('.dropdown-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('open');
        });
        // Close when clicking anywhere else
        document.addEventListener('click', () => menu.classList.remove('open'));
    }

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    const NAV_HEIGHT = 60;

    function updateActiveLink() {
        const scrollY = window.scrollY;
        let currentId = null;
        sections.forEach(section => {
            const top = section.offsetTop - NAV_HEIGHT - 40;
            if (scrollY >= top) currentId = section.id;
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();

    // Carousel
    const track   = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let currentIndex = 0;
        const images     = document.querySelectorAll('.carousel-img');
        const total      = images.length;

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => { currentIndex = (currentIndex + 1) % total; updateCarousel(); });
        prevBtn.addEventListener('click', () => { currentIndex = (currentIndex - 1 + total) % total; updateCarousel(); });
    }
});

