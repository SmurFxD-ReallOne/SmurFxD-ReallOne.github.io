// Supabase Configuration
// Replace these with your actual Supabase credentials
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');
const portfolioGrid = document.getElementById('portfolio-grid');

// Debug function
function debugLog(message) {
    console.log(`[Mobile Nav Debug] ${message}`);
}

// Ensure hamburger menu is properly initialized
function initializeMobileMenu() {
    debugLog('Initializing mobile menu...');
    
    if (!hamburger) {
        debugLog('ERROR: Hamburger element not found!');
        return;
    }
    
    if (!navMenu) {
        debugLog('ERROR: Nav menu element not found!');
        return;
    }
    
    debugLog('Elements found, setting up mobile menu...');
    
    // Set initial state
    hamburger.style.display = 'none';
    hamburger.style.visibility = 'visible';
    hamburger.style.opacity = '1';
    hamburger.style.pointerEvents = 'auto';
    
    // Add touch-action for better mobile handling
    hamburger.style.touchAction = 'manipulation';
    
    debugLog('Mobile menu initialized successfully');
}

// Show hamburger on mobile devices
function checkMobileMenu() {
    const isMobile = window.innerWidth <= 768;
    debugLog(`Window width: ${window.innerWidth}, Is mobile: ${isMobile}`);
    
    if (isMobile) {
        if (hamburger) {
            hamburger.style.display = 'flex';
            hamburger.style.visibility = 'visible';
            hamburger.style.opacity = '1';
            hamburger.style.pointerEvents = 'auto';
            debugLog('Hamburger menu shown on mobile');
        }
    } else {
        if (hamburger) {
            hamburger.style.display = 'none';
        }
        // Close mobile menu on desktop
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        if (hamburger) {
            hamburger.classList.remove('active');
        }
        document.body.style.overflow = 'auto';
        debugLog('Hamburger menu hidden on desktop');
    }
}

// Mobile menu toggle function
function toggleMobileMenu(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    }
    
    debugLog('Toggle mobile menu called');
    
    if (!hamburger || !navMenu) {
        debugLog('ERROR: Required elements not found for toggle');
        return;
    }
    
    const isActive = navMenu.classList.contains('active');
    debugLog(`Current menu state: ${isActive ? 'active' : 'inactive'}`);
    
    // Toggle classes
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    const newState = navMenu.classList.contains('active');
    debugLog(`New menu state: ${newState ? 'active' : 'inactive'}`);
    
    // Control body scroll
    if (newState) {
        document.body.style.overflow = 'hidden';
        debugLog('Body scroll disabled');
    } else {
        document.body.style.overflow = 'auto';
        debugLog('Body scroll enabled');
    }
    
    // Force a reflow to ensure the transition works
    navMenu.offsetHeight;
}

// Close mobile menu function
function closeMobileMenu() {
    debugLog('Closing mobile menu');
    
    if (hamburger) {
        hamburger.classList.remove('active');
    }
    if (navMenu) {
        navMenu.classList.remove('active');
    }
    document.body.style.overflow = 'auto';
}

// Initialize everything
function initializeNavigation() {
    debugLog('Starting navigation initialization...');
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Check mobile menu on load
    checkMobileMenu();
    
    // Add debug button for mobile testing
    const debugBtn = document.getElementById('debug-btn');
    if (debugBtn && window.innerWidth <= 768) {
        debugBtn.style.display = 'block';
        debugBtn.addEventListener('click', () => {
            debugLog('Debug button clicked!');
            toggleMobileMenu();
        });
        debugLog('Debug button enabled for mobile testing');
    }
    
    // Add event listeners for hamburger
    if (hamburger) {
        debugLog('Adding hamburger event listeners...');
        
        // Remove any existing listeners first
        hamburger.removeEventListener('click', toggleMobileMenu);
        hamburger.removeEventListener('touchstart', toggleMobileMenu);
        
        // Add new listeners
        hamburger.addEventListener('click', toggleMobileMenu, { passive: false });
        hamburger.addEventListener('touchstart', toggleMobileMenu, { passive: false });
        
        // Add visual feedback
        hamburger.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        }, { passive: true });
        
        hamburger.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        }, { passive: true });
        
        debugLog('Hamburger event listeners added');
    }
    
    // Add event listeners for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            debugLog('Nav link clicked, closing menu');
            closeMobileMenu();
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (hamburger && navMenu && 
            !hamburger.contains(e.target) && 
            !navMenu.contains(e.target)) {
            debugLog('Click outside detected, closing menu');
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        debugLog('Window resized');
        checkMobileMenu();
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    debugLog('Navigation initialization complete');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeNavigation);
} else {
    initializeNavigation();
}

// Custom Cursor (only on desktop)
const cursor = document.querySelector('.custom-cursor');
const cursorTrail = document.querySelector('.cursor-trail');
const cursorDot = document.querySelector('.cursor-dot');

// Disable custom cursor completely to fix issues
if (cursor) cursor.style.display = 'none';
if (cursorTrail) cursorTrail.style.display = 'none';
if (cursorDot) cursorDot.style.display = 'none';

// Restore default cursor
document.body.style.cursor = 'auto';

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 15, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(15, 15, 15, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    }
});

// Scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars when skills section is visible
            if (entry.target.classList.contains('skill-item')) {
                const progressBar = entry.target.querySelector('.progress');
                if (progressBar) {
                    const width = progressBar.style.width;
                    progressBar.style.width = '0%';
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 200);
                }
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.fade-in, .skill-item, .portfolio-card, .stat, .contact-item').forEach(el => {
    observer.observe(el);
});

// Portfolio data
const portfolioData = [
    {
        title: "AI Chat Application",
        description: "A modern chat application powered by artificial intelligence with real-time messaging and smart responses.",
        image: "fas fa-robot",
        github: "https://github.com/yourusername/ai-chat-app",
        live: "https://ai-chat-app.com",
        technologies: ["React", "Node.js", "OpenAI API", "Socket.io"]
    },
    {
        title: "Data Visualization Dashboard",
        description: "Interactive dashboard for visualizing complex datasets with real-time updates and customizable charts.",
        image: "fas fa-chart-line",
        github: "https://github.com/yourusername/data-dashboard",
        live: "https://data-dashboard.com",
        technologies: ["D3.js", "Python", "Flask", "PostgreSQL"]
    },
    {
        title: "E-commerce Platform",
        description: "Full-stack e-commerce solution with payment integration, user authentication, and admin panel.",
        image: "fas fa-shopping-cart",
        github: "https://github.com/yourusername/ecommerce-platform",
        live: "https://ecommerce-platform.com",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates and team collaboration features.",
        image: "fas fa-tasks",
        github: "https://github.com/yourusername/task-manager",
        live: "https://task-manager.com",
        technologies: ["Vue.js", "Express.js", "Socket.io", "MongoDB"]
    },
    {
        title: "Weather Forecast App",
        description: "Beautiful weather application with location-based forecasts and interactive weather maps.",
        image: "fas fa-cloud-sun",
        github: "https://github.com/yourusername/weather-app",
        live: "https://weather-app.com",
        technologies: ["JavaScript", "Weather API", "CSS3", "HTML5"]
    },
    {
        title: "Portfolio Website",
        description: "Modern portfolio website with dark theme, animations, and responsive design.",
        image: "fas fa-code",
        github: "https://github.com/yourusername/portfolio",
        live: "https://portfolio.com",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    }
];

// Populate portfolio
function populatePortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    portfolioData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'portfolio-card fade-in';
        
        projectCard.innerHTML = `
            <div class="portfolio-image">
                <i class="${project.image}"></i>
            </div>
            <div class="portfolio-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="portfolio-links">
                    <a href="${project.github}" target="_blank">GitHub</a>
                    <a href="${project.live}" target="_blank">Live Demo</a>
                </div>
            </div>
        `;
        
        portfolioGrid.appendChild(projectCard);
        
        // Add hover effect for 3D transform
        projectCard.addEventListener('mouseenter', (e) => {
            const rect = projectCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            projectCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        projectCard.addEventListener('mouseleave', () => {
            projectCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

// Contact form functionality

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Show loading state
    submitBtn.classList.add('loading');
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    try {
        // Simulate API call (replace with actual Supabase integration)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        
    } catch (error) {
        // Show error message
        showMessage('Failed to send message. Please try again.', 'error');
    } finally {
        // Hide loading state
        submitBtn.classList.remove('loading');
    }
});

// Show message function
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    

    contactForm.insertBefore(messageDiv, contactForm.firstChild);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const originalText = typingElement.textContent;
        typeWriter(typingElement, originalText, 150);
    }
});

// Add particle interaction
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    particles.forEach((particle, index) => {
        const rect = particle.getBoundingClientRect();
        const particleX = rect.left + rect.width / 2;
        const particleY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(
            Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
        );
        
        if (distance < 100) {
            particle.style.transform = `scale(2) translateY(-10px)`;
            particle.style.opacity = '1';
        } else {
            particle.style.transform = 'scale(1) translateY(0)';
            particle.style.opacity = '0.6';
        }
    });
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00d4ff, #0099cc);
        z-index: 10000;
        transition: width 0.1s ease;
        box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    populatePortfolio();
    createScrollProgress();
    
    // Add entrance animations
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-buttons');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - could be used for navigation
            console.log('Swiped left');
        } else {
            // Swipe right - could be used for navigation
            console.log('Swiped right');
        }
    }
}

// Performance optimization - throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations and effects
}, 16)); // ~60fps 

// Simple fallback solution for mobile navigation
function addFallbackMobileNav() {
    debugLog('Adding fallback mobile navigation...');
    
    if (!hamburger) return;
    
    // Remove all existing event listeners
    const newHamburger = hamburger.cloneNode(true);
    hamburger.parentNode.replaceChild(newHamburger, hamburger);
    
    // Get the new reference
    const newHamburgerRef = document.getElementById('hamburger');
    
    // Add simple click handler
    newHamburgerRef.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        debugLog('Fallback hamburger clicked!');
        
        const menu = document.getElementById('nav-menu');
        if (menu) {
            const isActive = menu.classList.contains('active');
            debugLog(`Menu was ${isActive ? 'active' : 'inactive'}`);
            
            menu.classList.toggle('active');
            this.classList.toggle('active');
            
            const newState = menu.classList.contains('active');
            debugLog(`Menu is now ${newState ? 'active' : 'inactive'}`);
            
            if (newState) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
    };
    
    // Add touch handler
    newHamburgerRef.ontouchstart = function(e) {
        e.preventDefault();
        this.onclick(e);
    };
    
    debugLog('Fallback mobile navigation added');
}

// Add fallback after a short delay
setTimeout(addFallbackMobileNav, 1000); 