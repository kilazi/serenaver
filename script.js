/**
 * Serena Vet - Landing Page JavaScript
 * Dynamic interactions, animations, and smooth effects
 */

document.addEventListener('DOMContentLoaded', () => {
  
  /* ============================================
     HERO IMAGES GRID - Visible only in hero section
  ============================================ */
  const heroSection = document.querySelector('.hero-section');
  const heroImagesContainer = document.querySelector('.hero-floating-images');
  
  const updateGridVisibility = () => {
    if (!heroSection || !heroImagesContainer) return;
    
    const rect = heroSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Check if hero section is in viewport
    // Grid is visible if any part of hero section is visible
    const isHeroVisible = rect.bottom > 0 && rect.top < windowHeight;
    
    if (isHeroVisible) {
      // Hero section is visible - show grid
      heroImagesContainer.style.opacity = '1';
      heroImagesContainer.style.visibility = 'visible';
      heroImagesContainer.style.transform = 'translateY(0)';
      
      const floatingImages = document.querySelectorAll('.floating-img');
      floatingImages.forEach(img => {
        img.style.opacity = '1';
        img.style.visibility = 'visible';
      });
    } else {
      // Hero section is not visible - hide grid
      heroImagesContainer.style.opacity = '0';
      heroImagesContainer.style.visibility = 'hidden';
      
      const floatingImages = document.querySelectorAll('.floating-img');
      floatingImages.forEach(img => {
        img.style.opacity = '0';
        img.style.visibility = 'hidden';
      });
    }
  };
  
  // Update visibility on scroll
  window.addEventListener('scroll', updateGridVisibility, { passive: true });
  
  // Update visibility on resize
  window.addEventListener('resize', updateGridVisibility, { passive: true });
  
  // Initial check
  updateGridVisibility();
  
  /* ============================================
     NAVBAR - Scroll Effect & Sticky Header
  ============================================ */
  const navbar = document.querySelector('.navbar');
  const heroContent = document.querySelector('.hero-content');
  let lastScrollY = 0;
  
  function handleScroll() {
    const scrollY = window.scrollY;
    
    // Sticky header appearance
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Hero content scale down effect on scroll
    if (heroSection && heroContent) {
      const heroHeight = heroSection.offsetHeight;
      const heroRect = heroSection.getBoundingClientRect();
      const heroTop = heroRect.top + scrollY;
      
      // Only fade when scrolling significantly past the hero section (at least 200px past start)
      // This ensures images stay visible while in the hero section
      if (scrollY > 200 && scrollY > heroTop + heroHeight * 0.3) {
        const scrollPastHero = scrollY - heroTop;
        const progress = Math.min(scrollPastHero / (heroHeight * 0.5), 1);
        
        // Scale down effect (~8%)
        const scale = 1 - (progress * 0.08);
        const opacity = Math.max(0, 1 - (progress * 0.8));
        
        heroContent.style.transform = `scale(${scale})`;
        heroContent.style.opacity = opacity;
      } else {
        // In hero section - keep fully visible (remove inline styles to let CSS take over)
        heroContent.style.removeProperty('transform');
        heroContent.style.removeProperty('opacity');
      }
    }
    
    lastScrollY = scrollY;
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Initialize scroll state on page load
  window.addEventListener('load', () => {
    handleScroll();
  });
  
  // Also run on initial load if already loaded
  if (document.readyState === 'complete') {
    handleScroll();
  } else {
    // Run once DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
      handleScroll();
    });
  }
  
  /* ============================================
     MOBILE MENU
  ============================================ */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translateY(10px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
  
  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
  
  /* ============================================
     CONTENT GLIDE - Scroll Reveal Animation
  ============================================ */
  const glideElements = document.querySelectorAll('.content-glide');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };
  
  const glideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add delay for stagger effect
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        glideObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  glideElements.forEach(el => {
    glideObserver.observe(el);
  });
  
  /* ============================================
     BENEFIT CARDS - Stagger Animation
  ============================================ */
  const benefitCards = document.querySelectorAll('.benefit-card');
  
  const benefitObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const cardIndex = Array.from(benefitCards).indexOf(card);
        
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, cardIndex * 150);
        
        benefitObserver.unobserve(card);
      }
    });
  }, { threshold: 0.2 });
  
  benefitCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
    benefitObserver.observe(card);
  });
  
  /* ============================================
     PRODUCT FILTERS
  ============================================ */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      
      productCards.forEach(card => {
        const categories = card.dataset.category.split(' ');
        
        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('filtered-out');
        } else {
          card.classList.add('filtered-out');
        }
      });
    });
  });
  
  /* ============================================
     HORIZONTAL SCROLL PRODUCTS
  ============================================ */
  const scrollWrapper = document.querySelector('.products-scroll-wrapper');
  const scrollPrev = document.querySelector('.scroll-prev');
  const scrollNext = document.querySelector('.scroll-next');
  
  if (scrollWrapper && scrollPrev && scrollNext) {
    const scrollAmount = 340; // card width + gap
    
    scrollPrev.addEventListener('click', () => {
      scrollWrapper.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
    
    scrollNext.addEventListener('click', () => {
      scrollWrapper.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
    
    // Touch/swipe support
    let isDown = false;
    let startX;
    let scrollLeft;
    
    scrollWrapper.addEventListener('mousedown', (e) => {
      isDown = true;
      scrollWrapper.style.cursor = 'grabbing';
      startX = e.pageX - scrollWrapper.offsetLeft;
      scrollLeft = scrollWrapper.scrollLeft;
    });
    
    scrollWrapper.addEventListener('mouseleave', () => {
      isDown = false;
      scrollWrapper.style.cursor = 'grab';
    });
    
    scrollWrapper.addEventListener('mouseup', () => {
      isDown = false;
      scrollWrapper.style.cursor = 'grab';
    });
    
    scrollWrapper.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollWrapper.offsetLeft;
      const walk = (x - startX) * 2;
      scrollWrapper.scrollLeft = scrollLeft - walk;
    });
    
    // Initialize cursor style
    scrollWrapper.style.cursor = 'grab';
  }
  
  /* ============================================
     PRODUCT CARD 3D LIFT EFFECT
  ============================================ */
  productCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `translateY(-15px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
    });
  });
  
  /* ============================================
     PRODUCT BUY BUTTON - WhatsApp Redirect
  ============================================ */
  document.querySelectorAll('.btn-product').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = e.target.closest('.product-card');
      const productName = card.querySelector('h3').textContent;
      const productPrice = card.querySelector('.product-price').textContent.split('$')[1].split(' ')[0];
      
      const message = `Hola! Me interesa el producto: ${productName} ($${productPrice}). ¿Está disponible?`;
      const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
    });
  });
  
  /* ============================================
     TESTIMONIALS CAROUSEL
  ============================================ */
  const testimonialTrack = document.querySelector('.testimonial-track');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  let currentTestimonial = 0;
  const totalTestimonials = testimonialDots.length;
  
  function updateTestimonial(index) {
    currentTestimonial = index;
    testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
    
    testimonialDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }
  
  testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      updateTestimonial(index);
    });
  });
  
  // Auto-advance testimonials
  setInterval(() => {
    const nextIndex = (currentTestimonial + 1) % totalTestimonials;
    updateTestimonial(nextIndex);
  }, 6000);
  
  /* ============================================
     SMOOTH SCROLL FOR ANCHOR LINKS
  ============================================ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  /* ============================================
     MAGNETIC BUTTON EFFECT
  ============================================ */
  const magneticButtons = document.querySelectorAll('.hero-cta, .cta-button, .nav-cta');
  
  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.02)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
  
  /* ============================================
     PAGE LOAD ANIMATION
  ============================================ */
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate navbar in
    navbar.style.opacity = '0';
    navbar.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
      navbar.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      navbar.style.opacity = '1';
      navbar.style.transform = 'translateY(0)';
    }, 100);
    
  });
  
  /* ============================================
     PARALLAX EFFECTS
  ============================================ */
  const parallaxElements = document.querySelectorAll('.hero-bg-gradient');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach(el => {
      const speed = 0.3;
      el.style.transform = `translate(0, ${scrollY * speed}px)`;
    });
  }, { passive: true });
  
  /* ============================================
     SCROLL PROGRESS INDICATOR
  ============================================ */
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #68BB59, #4A9941);
    z-index: 10001;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.1s linear;
  `;
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTop / docHeight;
    
    progressBar.style.transform = `scaleX(${progress})`;
  }, { passive: true });
  
  /* ============================================
     LAZY LOAD IMAGES
  ============================================ */
  const lazyImages = document.querySelectorAll('img[src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        img.onload = () => {
          img.style.opacity = '1';
        };
        
        imageObserver.unobserve(img);
      }
    });
  }, { rootMargin: '100px' });
  
  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
  
  /* ============================================
     KEYBOARD NAVIGATION
  ============================================ */
  document.addEventListener('keydown', (e) => {
    // Escape to close mobile menu
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
    
    // Arrow keys for testimonials
    if (e.key === 'ArrowLeft') {
      const prevIndex = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
      updateTestimonial(prevIndex);
    }
    if (e.key === 'ArrowRight') {
      const nextIndex = (currentTestimonial + 1) % totalTestimonials;
      updateTestimonial(nextIndex);
    }
  });
  
  /* ============================================
     REDUCED MOTION SUPPORT
  ============================================ */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--ease-out-expo', 'linear');
    
    // Stop WhatsApp button heartbeat
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
      whatsappFloat.style.animation = 'none';
    }
    
    // Stop floating images animation
    const floatingImgs = document.querySelectorAll('.floating-img');
    floatingImgs.forEach(img => {
      img.style.animation = 'none';
    });
  }
  
  console.log('🐾 Serena Vet - ¡Página cargada exitosamente!');
});
