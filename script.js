document.addEventListener('DOMContentLoaded', () => {
    console.log("Kaden's Personal Website loaded successfully.");

    // Simple interaction: Add a subtle ripple effect to the buttons
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.96)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-links');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Scroll active link highlight (only on index.html where sections exist)
    const sections = document.querySelectorAll('header[id], section[id]');
    if (sections.length > 0) {
        const navItems = document.querySelectorAll('.nav-links');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (current && item.getAttribute('href').includes(`#${current}`)) {
                    item.classList.add('active');
                }
            });
        });
    }

    // Carousel logic
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const container = document.querySelector('.carousel-container');
    
    if (track && nextBtn && prevBtn && container) {
        let currentIndex = 0;
        const images = document.querySelectorAll('.carousel-img');
        const totalImages = images.length;

        function updateCarouselHeight() {
            const activeImg = images[currentIndex];
            if (activeImg.complete) {
                container.style.height = activeImg.getBoundingClientRect().height + 'px';
            } else {
                activeImg.onload = () => {
                    container.style.height = activeImg.getBoundingClientRect().height + 'px';
                };
            }
        }

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateCarouselHeight();
        }

        // Initialize height
        if (totalImages > 0) {
            updateCarouselHeight();
            // Recalculate on window resize
            window.addEventListener('resize', updateCarouselHeight);
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
