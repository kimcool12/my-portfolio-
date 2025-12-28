const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Typing Animation
const typeSpan = document.querySelector('.type-span');
const toType = ["Junior Web Developer", "UI/UX Enthusiast", "Problem Solver"];
let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = toType[typeIndex];
    
    if (isDeleting) {
        typeSpan.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeSpan.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typeIndex++;
        if (typeIndex >= toType.length) typeIndex = 0;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
}

document.addEventListener('DOMContentLoaded', type);

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.section, .project-card, .skill-card');
hiddenElements.forEach((el) => observer.observe(el));