// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === New Dark and Light Mode Toggle ===
const themeToggle = document.getElementById("theme-toggle");
const setTheme = (isDark) => {
    document.body.classList.toggle("dark-theme", isDark);
    document.body.classList.toggle("light-theme", !isDark);
    themeToggle.checked = isDark;
};

const currentTheme = localStorage.getItem("theme") || "light";
setTheme(currentTheme === "dark");

themeToggle.addEventListener("change", () => {
    const isDark = themeToggle.checked;
    setTheme(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Ensure theme is synchronized across pages
window.addEventListener("storage", (event) => {
    if (event.key === "theme") {
        setTheme(event.newValue === "dark");
    }
});

// Scroll Animation
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

animateOnScrollElements.forEach(element => observer.observe(element));

// Read More / Read Less Feature
const readMoreBtn = document.getElementById('read-more-btn');
const cppCode = document.getElementById('cpp-code');

cppCode.style.maxHeight = '200px'; // Default to "Read Less" mode

readMoreBtn.addEventListener('click', () => {
    if (readMoreBtn.textContent === 'Read More') {
        cppCode.style.maxHeight = 'none';
        readMoreBtn.textContent = 'Read Less';
    } else {
        cppCode.style.maxHeight = '200px'; // Adjust this value as needed
        readMoreBtn.textContent = 'Read More';
        cppCode.scrollIntoView({ behavior: 'smooth' });
    }
    cppCode.classList.toggle('expanded');
});
