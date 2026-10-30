const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
});

const roles = ['AI Engineer', 'AI/ML Enthusiast', 'Software Developer'];
let roleIndex = 0, charIndex = 0, deleting = false;
const roleEl = document.getElementById('typedRole');
function typeRole() {
  const current = roles[roleIndex];
  roleEl.textContent = current.substring(0, charIndex);
  if (!deleting && charIndex < current.length) { charIndex++; setTimeout(typeRole, 95); }
  else if (!deleting) { deleting = true; setTimeout(typeRole, 1300); }
  else if (charIndex > 0) { charIndex--; setTimeout(typeRole, 45); }
  else { deleting = false; roleIndex = (roleIndex + 1) % roles.length; setTimeout(typeRole, 250); }
}
typeRole();

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
