// Smooth scroll for navigation links
document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: simple animation on scroll (reveal effect)
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
      sec.style.transition = '0.6s ease';
    } else {
      sec.style.opacity = 0;
      sec.style.transform = 'translateY(20px)';
    }
  });
});

// Initial state for animation
sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(20px)';
});
