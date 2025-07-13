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

// Portfolio Data - You can customize this with your own projects
const portfolioData = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
        image: "fas fa-shopping-cart",
        github: "https://github.com/yourusername/ecommerce-platform",
        live: "https://ecommerce-platform.vercel.app",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "fas fa-tasks",
        github: "https://github.com/yourusername/task-manager",
        live: "https://task-manager-app.netlify.app",
        technologies: ["React", "Firebase", "Material-UI", "Socket.io"]
    },
    {
        title: "Weather Dashboard",
        description: "A weather application that displays current weather conditions and forecasts for any location worldwide with interactive maps and charts.",
        image: "fas fa-cloud-sun",
        github: "https://github.com/yourusername/weather-app",
        live: "https://weather-dashboard.herokuapp.com",
        technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"]
    },
    {
        title: "Blog Platform",
        description: "A modern blog platform with markdown support, user authentication, comment system, and admin dashboard for content management.",
        image: "fas fa-blog",
        github: "https://github.com/yourusername/blog-platform",
        live: "https://blog-platform.vercel.app",
        technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"]
    },
    {
        title: "Social Media Dashboard",
        description: "A comprehensive social media analytics dashboard that tracks engagement, follower growth, and post performance across multiple platforms.",
        image: "fas fa-chart-line",
        github: "https://github.com/yourusername/social-dashboard",
        live: "https://social-dashboard.netlify.app",
        technologies: ["Vue.js", "D3.js", "Express.js", "Redis"]
    },
    {
        title: "Recipe Finder",
        description: "A recipe discovery app that helps users find recipes based on available ingredients, dietary restrictions, and cooking preferences.",
        image: "fas fa-utensils",
        github: "https://github.com/yourusername/recipe-finder",
        live: "https://recipe-finder-app.herokuapp.com",
        technologies: ["React", "Spoonacular API", "Redux", "Styled Components"]
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializePortfolio();
    initializeContactForm();
    initializeScrollAnimations();
    initializeSkillAnimations();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Portfolio functionality
function initializePortfolio() {
    // Populate portfolio grid with project data
    portfolioGrid.innerHTML = portfolioData.map(project => `
        <div class="portfolio-card fade-in">
            <div class="portfolio-image">
                <i class="${project.image}"></i>
            </div>
            <div class="portfolio-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="portfolio-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="${project.live}" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Contact form functionality with Supabase integration
function initializeContactForm() {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        submitBtn.classList.add('loading');
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-block';
        
        try {
            // Insert data into Supabase
            const { data, error } = await supabase
                .from('contact_messages')
                .insert([
                    {
                        name: name,
                        email: email,
                        message: message,
                        created_at: new Date().toISOString()
                    }
                ]);
            
            if (error) {
                throw error;
            }
            
            // Show success message
            showMessage('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();
            
        } catch (error) {
            console.error('Error sending message:', error);
            showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitBtn.classList.remove('loading');
            btnText.style.display = 'inline-block';
            btnLoading.style.display = 'none';
        }
    });
}

// Show success/error messages
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message element
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    messageElement.textContent = message;
    
    // Insert message before the form
    contactForm.parentNode.insertBefore(messageElement, contactForm);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        if (messageElement.parentNode) {
            messageElement.remove();
        }
    }, 5000);
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Skill progress bar animations
function initializeSkillAnimations() {
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress');
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 200);
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
}

// Utility function to format dates
function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
    
    // Add click effects to portfolio cards
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Only trigger if not clicking on links
            if (!e.target.closest('a')) {
                this.style.transform = 'translateY(-15px) scale(1.02)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-10px) scale(1)';
                }, 150);
            }
        });
    });
    
    // Add typing effect to hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid #fbbf24';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                heroTitle.style.borderRight = 'none';
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
});

// Handle window resize for responsive design
window.addEventListener('resize', function() {
    // Close mobile menu if window is resized to desktop
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add scroll to top functionality
function addScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effects
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.background = '#1d4ed8';
        this.style.transform = 'translateY(-3px)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.background = '#2563eb';
        this.style.transform = 'translateY(0)';
    });
}

// Initialize scroll to top button
addScrollToTop();

// Add console message for developers
console.log(`
🚀 SmurFxD Portfolio Website
📧 Contact form connected to Supabase
🎨 Modern, responsive design
📱 Mobile-friendly interface
✨ Smooth animations and interactions

To set up Supabase:
1. Create a new project at https://supabase.com
2. Create a table called 'contact_messages' with columns:
   - id (int8, primary key)
   - name (text)
   - email (text)
   - message (text)
   - created_at (timestamptz)
3. Replace SUPABASE_URL and SUPABASE_ANON_KEY in script.js
4. Update portfolio data with your own projects
`); 