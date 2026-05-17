document.addEventListener('DOMContentLoaded', () => {
    console.log("Kaden's Personal Website loaded successfully.");

    // Button press effect
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() { this.style.transform = 'scale(0.96)'; });
        button.addEventListener('mouseup', function() { this.style.transform = ''; });
        button.addEventListener('mouseleave', function() { this.style.transform = ''; });
    });

    // Active nav link on scroll
    // Uses the section whose top edge is closest to (but not past) the nav bottom,
    // which is robust for short sections like About.
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const NAV_HEIGHT = 60; // matches --nav-height in CSS

    function updateActiveLink() {
        const scrollY = window.scrollY;
        let currentId = null;

        sections.forEach(section => {
            const top = section.offsetTop - NAV_HEIGHT - 40; // 40px buffer
            if (scrollY >= top) {
                currentId = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink(); // run once on load

    // Carousel
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && nextBtn && prevBtn) {
        let currentIndex = 0;
        const images = document.querySelectorAll('.carousel-img');
        const totalImages = images.length;

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel();
        });
    }
});
