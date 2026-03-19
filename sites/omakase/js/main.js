document.addEventListener('DOMContentLoaded', () => {

    /* Preloader */
    setTimeout(() => {
        document.body.classList.add('loaded');
        document.body.classList.remove('loading');
        checkReveals(); // Trigger initial reveals
    }, 1500);

    /* Custom Cursor */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    // Disable custom cursor on touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Add slight delay for outline
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover effects on links/buttons
        const interactables = document.querySelectorAll('a, button, input, textarea, select');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.width = '60px';
                cursorOutline.style.height = '60px';
                cursorOutline.style.backgroundColor = 'rgba(203, 168, 118, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.width = '40px';
                cursorOutline.style.height = '40px';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });
    } else {
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
    }

    /* Navbar scroll effect */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* Mobile Menu */
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
            
            // Transform hamburger to X
            const spans = menuBtn.querySelectorAll('span');
            if(menuBtn.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.transform = 'rotate(-45deg) translate(0px, 0px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.transform = 'none';
            }
        });
    }

    /* Reveal Animations on Scroll */
    const reveals = document.querySelectorAll('.reveal-up, .reveal-fade');
    function checkReveals() {
        const windowHeight = window.innerHeight;
        const revealPoint = 50;

        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', checkReveals);
    checkReveals(); // Init

    /* Hover image floating (Menu Page) */
    const hoverItems = document.querySelectorAll('.has-image');
    hoverItems.forEach(item => {
        const img = item.querySelector('.hover-img');
        item.addEventListener('mousemove', (e) => {
            if(window.matchMedia("(pointer: fine)").matches) {
                img.style.left = `${e.clientX}px`;
                img.style.top = `${e.clientY}px`;
            }
        });
    });

    /* Ambient Music Toggle */
    const musicToggle = document.getElementById('musicToggle');
    const ambientMusic = document.getElementById('ambientMusic');
    
    // Set low volume
    ambientMusic.volume = 0.3;

    musicToggle.addEventListener('click', () => {
        if (ambientMusic.paused) {
            ambientMusic.play().then(() => {
                musicToggle.classList.add('playing');
            }).catch(err => {
                console.log("Audio play blocked by browser:", err);
            });
        } else {
            ambientMusic.pause();
            musicToggle.classList.remove('playing');
        }
    });

    /* Dummy Form Submit (Reservation Page) */
    const resForm = document.getElementById('resForm');
    if(resForm) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = resForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = 'Processing...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                btn.textContent = 'Reservation Confirmed!';
                btn.style.backgroundColor = '#2ecc71';
                btn.style.color = '#fff';
                btn.style.borderColor = '#2ecc71';
                resForm.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style = '';
                }, 3000);
            }, 1500);
        });
    }
});
