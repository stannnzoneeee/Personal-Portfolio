// Reveal sections on scroll
const sections = document.querySelectorAll('.section, .hero-content');
const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.8;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < trigger) section.classList.add('show');
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll progress bar
const scrollProgressBar = document.getElementById('scrollProgressBar');
const updateProgressBar = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
  scrollProgressBar.style.width = `${scrollPercent}%`;

};
window.addEventListener('scroll', updateProgressBar);


// Theme switcher
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const THEME_KEY = 'portfolio-theme';

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  if (theme === 'light') {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    themeIcon.classList.remove('moon-animated');
    themeIcon.classList.add('sun-animated');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    themeIcon.classList.remove('sun-animated');
    themeIcon.classList.add('moon-animated');
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
}

// A single listener on the container handles all clicks within it
document.querySelector('.theme-toggle-container').addEventListener('click', toggleTheme);

// Load saved theme on startup
const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
setTheme(savedTheme);
