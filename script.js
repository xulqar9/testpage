document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  setupScrolling();
  setupNavigation();
  setupAnimations();
}

function setupScrolling() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Sticky header
  const header = document.querySelector('.sticky-header');
  const headerHeight = header.offsetHeight;
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
      header.style.transform = `translateY(-${headerHeight}px)`;
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
  });
}

function setupNavigation() {
  // Form validation for booking
  const bookNowButton = document.querySelector('.book-now');
  bookNowButton.addEventListener('click', () => {
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });        
      
    alert('Booking functionality coming soon!');
  });
}

function setupAnimations() {
  // Fade-in animation for sections
  const sections = document.querySelectorAll('section');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
  });
}


// JavaScript for scrolling effect
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".sticky-header");

  window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
          header.classList.add("scrolled");
      } else {
          header.classList.remove("scrolled");
      }
  });
});


function toggleNav() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  function updateActiveLink() {
      let currentSectionId = "";

      // Find the current section in view
      sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (window.scrollY >= sectionTop - sectionHeight / 2) {
              currentSectionId = section.getAttribute('id');
          }
      });

      // Update the active class for nav links
      navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentSectionId}`) {
              link.classList.add('active');
          }
      });
  }

  // Run on scroll
  const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  };

  const debouncedScroll = debounce(updateActiveLink, 100);
  window.addEventListener('scroll', debouncedScroll);

  // Run on page load to set the initial active link
  updateActiveLink();
});

// Add cleanup to prevent memory leaks
window.removeEventListener('scroll', debouncedScroll);

const SCROLL_THRESHOLD = 50;
const SECTION_VISIBILITY_THRESHOLD = 0.1;
const SCROLL_BEHAVIOR = 'smooth';
