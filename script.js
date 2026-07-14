document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuBtn && navbar) {
        mobileMenuBtn.addEventListener('click', () => {
            navbar.classList.toggle('open');
            const icon = mobileMenuBtn.querySelector('i');
            if (navbar.classList.contains('open')) {
                icon.className = 'bx bx-x';
            } else {
                icon.className = 'bx bx-menu';
            }
        });
    }

    // Close menu when clicking link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar && navbar.classList.contains('open')) {
                navbar.classList.remove('open');
                const icon = mobileMenuBtn.querySelector('i');
                icon.className = 'bx bx-menu';
            }
        });
    });

    // 2. Dark/Light Theme Switcher
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
    } else if (savedTheme === 'dark' || systemPrefersDark) {
        document.body.classList.add('dark-theme');
    } else {
        // Default to dark theme as planned for rich aesthetics
        document.body.classList.add('dark-theme');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // 3. Dynamic Typing Effect for Hero Title
    const dynamicText = document.getElementById('dynamic-text');
    const roles = ['Fullstack Developer', 'Backend Developer', 'Lập trình viên Java & Node.js'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        if (!dynamicText) return;
        
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            dynamicText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            dynamicText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            // Pause at the end of the word
            isDeleting = true;
            typingSpeed = 2000; 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before typing next word
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Start typing effect
    setTimeout(typeEffect, 1000);

    // 4. Scroll Active Navigation Link & Back To Top Button
    const sections = document.querySelectorAll('section');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 100; // Offset for header height

        // Scrollspy logic
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }

        // Back to top button visibility
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
});
