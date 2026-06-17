// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Hero photo fade-in
const heroBg = document.getElementById('heroBg');
if (heroBg) setTimeout(() => heroBg.classList.add('loaded'), 100);

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links  = document.querySelector('.nav__links');

toggle.addEventListener('click', () => {
  links.classList.toggle('open');
  toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
});

links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.textContent = '☰';
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .servico-card, .sobre__list li, .pagamento-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
});
