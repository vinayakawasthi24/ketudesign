// script.js

// Smooth Scrolling for Navigation & Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Only run if it's a valid anchor link pointing to a section on the same page
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            
            // Calculate header offset dynamically
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Subtle Parallax Effect on Hero Background
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        // Shift background position slowly down as you scroll
        hero.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
    }
});

// Interactive hover lift for Stats Boxes (Optional JS enhancer)
const statBoxes = document.querySelectorAll('.stat-box');
statBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'translateY(-12px) scale(1.01)';
    });
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'translateY(0) scale(1)';
    });
});








document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        // Inject structural checkbox and graphic bars without breaking existing items
        navbar.insertAdjacentHTML('afterbegin', `
            <input type="checkbox" id="mobile-menu-checkbox" class="menu-checkbox">
            <label for="mobile-menu-checkbox" class="hamburger-label" style="display: none;">
                <span></span>
                <span></span>
                <span></span>
            </label>
        `);
    }
});