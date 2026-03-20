document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle (Dark/Light Mode) ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === 'light-mode') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    } else {
        // Default to dark mode if no preference is saved
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // --- Typing Animation for Hero Section ---
    const typedTextSpan = document.querySelector('.typed-text');
    const phrases = ["Your Name", "A Web Developer", "A UI/UX Designer", "A Problem Solver"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // milliseconds
    const deletingSpeed = 60; // milliseconds
    const delayBeforeDelete = 1500; // milliseconds
    const delayBeforeType = 500; // milliseconds

    function type() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            typedTextSpan.textContent = currentPhrase.substring(0, charIndex--);
        } else {
            typedTextSpan.textContent = currentPhrase.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentPhrase.length + 1) {
            setTimeout(() => isDeleting = true, delayBeforeDelete);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(() => type(), delayBeforeType);
            return;
        }

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(type, speed);
    }

    type(); // Start the typing animation

    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('nav a, .btn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- Animated Skill Progress Bars (Intersection Observer) ---
    const skillBars = document.querySelectorAll('.progress-bar');

    const animateSkillBar = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const skillLevel = progressBar.dataset.skillLevel;
                progressBar.style.width = skillLevel + '%';
                observer.unobserve(progressBar); // Stop observing once animated
            }
        });
    };

    const skillObserver = new IntersectionObserver(animateSkillBar, {
        threshold: 0.7 // Trigger when 70% of the element is visible
    });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // --- Set Current Year in Footer ---
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
