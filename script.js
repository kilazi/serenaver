// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-sm)';
    }
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('¡Gracias por tu mensaje! Te responderemos pronto.');
    
    // Reset form
    contactForm.reset();
});

// Product "Comprar" button handlers
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-small')) {
        const productName = e.target.closest('.product-card').querySelector('h3').textContent;
        alert(`¡Genial! Te contactaremos pronto para completar tu pedido de: ${productName}`);
    }
});

// Smooth scroll for all anchor links
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
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
const animateElements = document.querySelectorAll('.feature-card, .vitaminas-content, .contact-content, .product-card');
animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
});

// Product Carousel
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn-prev');
const nextBtn = document.querySelector('.carousel-btn-next');
const dotsContainer = document.querySelector('.carousel-dots');
const productCards = document.querySelectorAll('.product-card');

let currentIndex = 0;
let cardsPerView = 3;

// Calculate cards per view based on screen width
function updateCardsPerView() {
    const width = window.innerWidth;
    if (width <= 768) {
        cardsPerView = 1;
    } else if (width <= 968) {
        cardsPerView = 2;
    } else {
        cardsPerView = 3;
    }
    updateCarousel();
}

// Create dots based on number of slides
function createDots() {
    const numDots = Math.ceil(productCards.length - cardsPerView + 1);
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

// Update carousel position
function updateCarousel() {
    const cardWidth = productCards[0].offsetWidth;
    const gap = 32; // 2rem
    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
    
    // Update dots
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
    
    // Update button states
    prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
    prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
    
    const maxIndex = productCards.length - cardsPerView;
    nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
    nextBtn.style.cursor = currentIndex >= maxIndex ? 'not-allowed' : 'pointer';
}

// Go to specific slide
function goToSlide(index) {
    const maxIndex = productCards.length - cardsPerView;
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    updateCarousel();
}

// Next slide
function nextSlide() {
    const maxIndex = productCards.length - cardsPerView;
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
    }
}

// Previous slide
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

// Event listeners for carousel
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextSlide();
    if (touchEndX > touchStartX + 50) prevSlide();
}

// Initialize carousel
updateCardsPerView();
createDots();

// Update on resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        updateCardsPerView();
        createDots();
    }, 250);
});

// Auto-play carousel (optional)
let autoplayInterval;
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        const maxIndex = productCards.length - cardsPerView;
        if (currentIndex >= maxIndex) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateCarousel();
    }, 5000); // Change slide every 5 seconds
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Start autoplay
startAutoplay();

// Pause autoplay on hover
track.addEventListener('mouseenter', stopAutoplay);
track.addEventListener('mouseleave', startAutoplay);

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

