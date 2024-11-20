document.addEventListener('DOMContentLoaded', function () {
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

  const applyStickyHeader = window.matchMedia("(min-width: 630px)"); // Disable sticky effect for screens < 630px

  if (applyStickyHeader.matches) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
        header.style.transform = `translateY(-${headerHeight}px)`;
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScrollTop = scrollTop;
    });
  } else {
    // For the header stays visible on smaller screens
    header.style.transform = 'translateY(0)';
  }

  // Fade-in animation for sections
  const sections = document.querySelectorAll('section');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
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

  // Form validation for booking
  const bookNowButton = document.querySelector('.book-now');
  if (bookNowButton) {
    bookNowButton.addEventListener('click', () => {
      alert('Booking functionality coming soon!');
    });
  }

  // JavaScript for scrolling effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

// Toggle navigation for smaller screens
function toggleNav() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
}
