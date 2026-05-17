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
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(section => observer.observe(section));

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
