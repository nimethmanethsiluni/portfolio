
        // Theme Toggle
        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.querySelector('.theme-toggle');
            
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        }

        // Load saved theme
        function loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            const themeToggle = document.querySelector('.theme-toggle');
            
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
                themeToggle.textContent = '☀️';
            }
        }

        // Smooth scrolling for navigation links
        function initSmoothScrolling() {
            const navLinks = document.querySelectorAll('nav a[href^="#"]');
            
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }

        // Intersection Observer for fade-in animations
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(el => observer.observe(el));
        }

        // Navigation background on scroll
        function initNavScrollEffect() {
            const nav = document.querySelector('nav');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.style.background = document.body.classList.contains('dark-mode') 
                        ? 'rgba(15, 23, 42, 0.98)' 
                        : 'rgba(255, 255, 255, 0.98)';
                } else {
                    nav.style.background = document.body.classList.contains('dark-mode') 
                        ? 'rgba(15, 23, 42, 0.95)' 
                        : 'rgba(255, 255, 255, 0.95)';
                }
            });
        }

        // Typing animation for hero text
        function initTypingAnimation() {
            const text = "Full Stack Developer & UI/UX Designer";
            const subtitle = document.querySelector('.hero .subtitle');
            let index = 0;
            
            subtitle.textContent = '';
            
            function typeWriter() {
                if (index < text.length) {
                    subtitle.textContent += text.charAt(index);
                    index++;
                    setTimeout(typeWriter, 100);
                }
            }
            
            setTimeout(typeWriter, 1500);
        }

        // Add hover effect to project cards
        function initProjectHoverEffects() {
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px) rotateX(5deg)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0) rotateX(0)';
                });
            });
        }

        // Add floating animation to skill tags
        function initSkillAnimations() {
            const skillTags = document.querySelectorAll('.skill-tag');
            
            skillTags.forEach((tag, index) => {
                tag.style.animationDelay = `${index * 0.1}s`;
                tag.addEventListener('mouseenter', () => {
                    tag.style.transform = 'translateY(-5px) scale(1.1)';
                });
                tag.addEventListener('mouseleave', () => {
                    tag.style.transform = 'translateY(0) scale(1)';
                });
            });
        }

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            loadTheme();
            initSmoothScrolling();
            initScrollAnimations();
            initNavScrollEffect();
            initTypingAnimation();
            initProjectHoverEffects();
            initSkillAnimations();
        });

        // Add some interactive particles (optional enhancement)
        function createParticle() {
            const hero = document.querySelector('.hero');
            const particle = document.createElement('div');
            
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = 'rgba(255, 255, 255, 0.5)';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100%';
            particle.style.pointerEvents = 'none';
            particle.style.animation = 'float 6s linear infinite';
            
            hero.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 6000);
        }

        // Add CSS for particle animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                to {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Create particles periodically
        setInterval(createParticle, 2000);