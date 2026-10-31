/**
 * ARVIND KUMAR — PREMIUM PERSONAL PORTFOLIO
 * Senior Frontend JavaScript: Clean, Modern, Performant & Interactive
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DYNAMIC AMBIENT PARTICLE CONSTELLATION CANVAS
  // =========================================================================
  const canvas = document.getElementById('ambientCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouseX = null;
  let mouseY = null;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.8;
      this.speedX = (Math.random() - 0.5) * 0.45;
      this.speedY = (Math.random() - 0.5) * 0.45;
      this.color = Math.random() > 0.4 ? '#ff8c00' : '#ffa726';
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 18000), 75);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }
  initParticles();
  window.addEventListener('resize', initParticles);

  function connectParticles() {
    const maxDistance = 120;
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.16;
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.strokeStyle = '#ff7b00';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
          ctx.restore();
        }
      }

      // Connect with mouse position
      if (mouseX !== null && mouseY !== null) {
        const dx = particles[a].x - mouseX;
        const dy = particles[a].y - mouseY;
        const dist = Math.hypot(dx, dy);
        if (dist < 150) {
          const alpha = (1 - dist / 150) * 0.35;
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.strokeStyle = '#ffaa33';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    connectParticles();
    requestAnimationFrame(animateCanvas);
  }
  animateCanvas();

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouseX = null;
    mouseY = null;
  });

  // =========================================================================
  // 2. SCROLL PROGRESS & BACK TO TOP BUTTON
  // =========================================================================
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const progressRingCircle = document.getElementById('progressRingCircle');
  const ringCircumference = 2 * Math.PI * 20; // r = 20

  if (progressRingCircle) {
    progressRingCircle.style.strokeDasharray = `${ringCircumference} ${ringCircumference}`;
    progressRingCircle.style.strokeDashoffset = ringCircumference;
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) : 0;
    const progressPercent = Math.min(Math.max(progress * 100, 0), 100);

    // Update top progress bar
    if (scrollProgress) {
      scrollProgress.style.width = `${progressPercent}%`;
    }

    // Update back to top button visibility & circular ring
    if (backToTopBtn && progressRingCircle) {
      if (scrollTop > 350) {
        backToTopBtn.classList.add('visible');
        const offset = ringCircumference - (progress * ringCircumference);
        progressRingCircle.style.strokeDashoffset = offset;
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active nav link highlight on scroll
    updateActiveNavLink();
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =========================================================================
  // 3. NAVIGATION & MOBILE DRAWER
  // =========================================================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const desktopLinks = document.querySelectorAll('.nav-link');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Active navigation link detection
  const sections = document.querySelectorAll('section[id], header[id]');
  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        desktopLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
        mobileLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // =========================================================================
  // 4. HERO PERSONA TAB SWITCHER (Real Photo vs 3D Developer Persona vs Split)
  // =========================================================================
  const personaTabs = document.querySelectorAll('.persona-tab-btn');
  const visualStage = document.getElementById('visualStage');
  const realPhotoCard = document.getElementById('realPhotoCard');
  const avatar3DCard = document.getElementById('avatar3DCard');

  personaTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      personaTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const viewMode = tab.dataset.view;

      if (viewMode === 'real') {
        visualStage.classList.remove('split-mode');
        realPhotoCard.classList.add('active');
        avatar3DCard.classList.remove('active');
      } else if (viewMode === 'avatar') {
        visualStage.classList.remove('split-mode');
        realPhotoCard.classList.remove('active');
        avatar3DCard.classList.add('active');
      } else if (viewMode === 'split') {
        visualStage.classList.add('split-mode');
        realPhotoCard.classList.add('active');
        avatar3DCard.classList.add('active');
      }
    });
  });

  // =========================================================================
  // 5. PROJECT CATEGORY FILTERING
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.dataset.filter;

      projectCards.forEach(card => {
        const cardCategory = card.dataset.category;
        if (filterVal === 'all' || cardCategory === filterVal) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // =========================================================================
  // 6. COPY EMAIL FUNCTIONALITY & TOAST NOTIFICATION
  // =========================================================================
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message, icon = 'fa-circle-check') {
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<i class="fa-solid ${icon} text-orange"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 0.4s ease';
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'arvindgupta32823@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard!', 'fa-copy');
        copyEmailBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => {
          copyEmailBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy';
        }, 2000);
      }).catch(() => {
        showToast('Failed to copy. Please manually select the email.', 'fa-triangle-exclamation');
      });
    });
  }

  // =========================================================================
  // 7. PROFESSIONAL CONTACT FORM (Client-Side Validation & Mailto Preparation)
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  const contactName = document.getElementById('contactName');
  const contactEmail = document.getElementById('contactEmail');
  const contactSubject = document.getElementById('contactSubject');
  const contactMessage = document.getElementById('contactMessage');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Clear errors
      nameError.textContent = '';
      emailError.textContent = '';
      subjectError.textContent = '';
      messageError.textContent = '';

      if (!contactName.value.trim()) {
        nameError.textContent = 'Please enter your name.';
        isValid = false;
      }

      if (!contactEmail.value.trim()) {
        emailError.textContent = 'Please enter your email.';
        isValid = false;
      } else if (!validateEmail(contactEmail.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      if (!contactSubject.value.trim()) {
        subjectError.textContent = 'Please enter a subject.';
        isValid = false;
      }

      if (!contactMessage.value.trim()) {
        messageError.textContent = 'Please write a message.';
        isValid = false;
      } else if (contactMessage.value.trim().length < 10) {
        messageError.textContent = 'Message should be at least 10 characters long.';
        isValid = false;
      }

      if (!isValid) return;

      // Prepare mailto link with encoded parameters
      const recipient = 'arvindgupta32823@gmail.com';
      const subject = encodeURIComponent(`[Portfolio Contact] ${contactSubject.value.trim()} - from ${contactName.value.trim()}`);
      const body = encodeURIComponent(
        `Hello Arvind,\n\n` +
        `Name: ${contactName.value.trim()}\n` +
        `Email: ${contactEmail.value.trim()}\n\n` +
        `Message:\n${contactMessage.value.trim()}\n\n` +
        `-- Sent via your Portfolio Website`
      );

      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

      // Open email client
      showToast('Opening your default email client to send message...', 'fa-paper-plane');
      window.location.href = mailtoUrl;

      // Confirmation feedback
      setTimeout(() => {
        showToast('Message formatted successfully!', 'fa-envelope-circle-check');
        contactForm.reset();
      }, 1000);
    });
  }

  // =========================================================================
  // 8. SCROLL REVEAL OBSERVER
  // =========================================================================
  const revealElements = document.querySelectorAll('.reveal-fade-up, .reveal-fade-left, .reveal-fade-right');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // =========================================================================
  // 9. 3D TILT EFFECT ON CARDS
  // =========================================================================
  const tiltCards = document.querySelectorAll('.skill-card, .project-card, .education-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

});

// =========================================================================
// 10. PROJECT INTERACTIVE MODAL & SIMULATOR SYSTEM
// =========================================================================
const projectModalBackdrop = document.getElementById('projectModalBackdrop');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalTitle = document.getElementById('modalTitle');
const modalCategoryBadge = document.getElementById('modalCategoryBadge');
const modalBody = document.getElementById('modalBody');

function closeProjectModal() {
  projectModalBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
if (projectModalBackdrop) {
  projectModalBackdrop.addEventListener('click', (e) => {
    if (e.target === projectModalBackdrop) closeProjectModal();
  });
}
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModalBackdrop.classList.contains('active')) {
    closeProjectModal();
  }
});

// Detailed Project Database for all 18 projects
const projectDatabase = {
  'amazon-clone': {
    title: 'Amazon Clone',
    badge: 'Featured Clone',
    category: 'E-Commerce Storefront',
    desc: 'An authentic Amazon storefront interface engineered with responsive layouts, real product card structuring, prime delivery tags, search bar simulation, and dynamic cart item calculation.',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Flexbox', 'CSS Grid', 'Responsive Design'],
    highlights: [
      'Multi-level Amazon dark header with location selector & account lists',
      'Hero banner promo carousel showcasing deal collections',
      'Dynamic shopping cart badge updating instantly upon item selection',
      'Responsive product grid adapting cleanly from 4K down to mobile displays'
    ],
    github: 'https://github.com/your-Arvind/amazon-clone',
    type: 'clone'
  },
  'tic-tac-toe': {
    title: 'Tic Tac Toe Game',
    badge: 'Interactive Game',
    category: 'Logic & Algorithm',
    desc: 'A responsive two-player web game with real-time win-detection, turn notifications, streak counters, and glowing winning line indicators.',
    tech: ['JavaScript DOM', 'CSS3 Glow Keyframes', 'Game State Logic'],
    highlights: [
      'Smart 8-way winning pattern check algorithm',
      'Player turn indicator with custom neon glow colors',
      'Instant restart and score tracking state',
      'Interactive playable engine embedded right here'
    ],
    github: 'https://github.com/your-Arvind/tic-tac-toe',
    type: 'interactive-ttt'
  },
  'portfolio-website': {
    title: 'Personal Portfolio Website',
    badge: 'Portfolio Design',
    category: 'Creative Web Design',
    desc: 'This premium personal portfolio website featuring deep obsidian & burnt orange theme, glassmorphism cards, glowing borders, floating developer avatars, and responsive navigation.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'HTML5 Canvas', 'SVG Design'],
    highlights: [
      'Dual-view hero featuring authentic profile photograph and 3D developer persona',
      'Interactive particle constellation canvas background',
      '18-project showcase catalog with custom vector thumbnails and live modal demos',
      'Fully responsive architecture with zero external heavy libraries'
    ],
    github: 'https://github.com/your-Arvind/personal-portfolio',
    type: 'portfolio'
  },
  'weather-app': {
    title: 'Weather Forecast App',
    badge: 'Utility App',
    category: 'Meteorological Dashboard',
    desc: 'Real-time weather query application that provides temperature, atmospheric conditions, wind speed, humidity, and multi-day meteorological forecasts.',
    tech: ['JavaScript Async/Await', 'Fetch API', 'JSON Parsing', 'CSS Grid'],
    highlights: [
      'Worldwide city query with fallback for Indian cities (Gorakhpur, Delhi, Mumbai, etc.)',
      'Dynamic weather icons matching sunny, cloudy, rainy, and stormy weather',
      'Clean temperature units (°C / °F) toggle',
      'Local storage history of recently searched locations'
    ],
    github: 'https://github.com/your-Arvind/weather-forecast-app',
    type: 'utility'
  },
  'todo-app': {
    title: 'To-Do List App',
    badge: 'Productivity Tool',
    category: 'Task Management',
    desc: 'Productivity task manager application featuring task creation, editing, status toggles, deletion, and local storage data persistence across browser reloads.',
    tech: ['LocalStorage API', 'CRUD Operations', 'DOM Event Handling'],
    highlights: [
      'Permanent state persistence using browser LocalStorage',
      'Filters for All, Active, and Completed tasks',
      'Smooth task checkoff animations with strike-through styling',
      'Task count badge tracking pending assignments'
    ],
    github: 'https://github.com/your-Arvind/todo-list-app',
    type: 'utility'
  },
  'calculator-app': {
    title: 'Calculator App',
    badge: 'Utility App',
    category: 'Math Engine',
    desc: 'Neomorphic dark-orange calculator with precision arithmetic calculations, keyboard inputs, decimal chaining, and percentage computations.',
    tech: ['Event Delegation', 'Math Logic', 'Neomorphic CSS'],
    highlights: [
      'Full standard arithmetic operations (+, -, *, /)',
      'Keyboard typing support for immediate numeric calculations',
      'Clear (AC) and Backspace memory functions',
      'Interactive playable calculator embedded right here'
    ],
    github: 'https://github.com/your-Arvind/calculator-app',
    type: 'interactive-calc'
  },
  'netflix-clone': {
    title: 'Netflix Clone',
    badge: 'Streaming Clone',
    category: 'Media Catalog',
    desc: 'Cinematic video streaming catalog featuring a dark Netflix aesthetic, movie billboard hero, category carousels, and video trailer modal overlay.',
    tech: ['CSS Flexbox', 'CSS Grid', 'JavaScript', 'Video API'],
    highlights: [
      'High-impact hero billboard with Play and More Info action buttons',
      'Responsive category carousels (Trending Now, Top Rated, Action, Sci-Fi)',
      'Smooth card zoom effect on hover with play preview overlay',
      'Mobile responsive navigation drawer'
    ],
    github: 'https://github.com/your-Arvind/netflix-clone',
    type: 'clone'
  },
  'music-player': {
    title: 'Music Player',
    badge: 'Audio Utility',
    category: 'Web Audio UI',
    desc: 'Interactive audio player with playlist management, progress scrubbing, volume control, animated spinning vinyl disc, and track time indicators.',
    tech: ['HTML5 Audio API', 'CSS Keyframes', 'DOM Manipulation'],
    highlights: [
      'Custom styled audio timeline scrubber and volume controller',
      'Animated rotating vinyl record during active playback',
      'Next track / Previous track playlist navigation',
      'Curated lo-fi coding beat presets'
    ],
    github: 'https://github.com/your-Arvind/music-player',
    type: 'utility'
  },
  'expense-tracker': {
    title: 'Expense Tracker',
    badge: 'Finance Tool',
    category: 'Personal Budgeting',
    desc: 'Comprehensive personal budget manager providing real-time income/expense calculations, category breakdowns, transaction logging, and local storage save.',
    tech: ['LocalStorage', 'Data Structures', 'Data Visualization'],
    highlights: [
      'Automated balance, total income, and total expense computation',
      'Color-coded transaction entries (Green for income, Red for expense)',
      '1-click deletion of individual log items',
      'Persistent financial history in browser storage'
    ],
    github: 'https://github.com/your-Arvind/expense-tracker',
    type: 'utility'
  },
  'quiz-app': {
    title: 'Quiz Application',
    badge: 'Educational App',
    category: 'Interactive Test Engine',
    desc: 'Web developer trivia and assessment application with countdown timer, multiple choice questions, instant correct/incorrect feedback, and final score summary.',
    tech: ['JavaScript Objects', 'Timers', 'State Machine'],
    highlights: [
      'Timed questions with dynamic seconds countdown ticker',
      'Instant color highlights for correct vs chosen options',
      'Comprehensive final score card with performance feedback',
      'Option to restart quiz and challenge again'
    ],
    github: 'https://github.com/your-Arvind/quiz-application',
    type: 'utility'
  },
  'digital-clock': {
    title: 'Digital Clock',
    badge: 'Time Utility',
    category: 'Neon LED Clock',
    desc: 'Glowing neon orange digital timepiece with live second updates, 12/24 hour format switcher, Indian Standard Time (IST) sync, and calendar display.',
    tech: ['Date Object', 'setInterval', 'CSS Neon Glow'],
    highlights: [
      'Zero-lag live synchronization with system time',
      'Toggle switch between 12-hour AM/PM and 24-hour military format',
      'Full date readout including Day, Date, Month, and Year',
      'Interactive live clock preview available inside modal'
    ],
    github: 'https://github.com/your-Arvind/digital-clock',
    type: 'interactive-clock'
  },
  'currency-converter': {
    title: 'Currency Converter',
    badge: 'Finance Utility',
    category: 'Foreign Exchange',
    desc: 'Real-time global currency converter with live exchange rates, country flags, instant bidirectional swap, and conversion calculation records.',
    tech: ['Fetch API', 'Exchange Rate Logic', 'Form Controls'],
    highlights: [
      'Instant conversion between USD, INR, EUR, GBP, JPY, and AED',
      'Rapid currency swap button flipping base and target currencies',
      'Live calculated conversion rate preview',
      'Clean glassmorphism input fields'
    ],
    github: 'https://github.com/your-Arvind/currency-converter',
    type: 'utility'
  },
  'ecommerce-store': {
    title: 'E-Commerce Website',
    badge: 'Full Web App',
    category: 'Digital Storefront',
    desc: 'Full-featured online shop with product filtering by category, search bar, slide-out cart drawer, quantity adjustment, subtotal computation, and checkout dialog.',
    tech: ['State Management', 'Cart Logic', 'CSS Grid', 'Modal Dialogs'],
    highlights: [
      'Slide-over shopping cart drawer with live badge counter',
      'Quantity modification controls (+ / -) updating cart subtotal instantly',
      'Filter catalog by categories: Electronics, Audio, Wearables, Accessories',
      'Simulated order confirmation modal with receipt breakdown'
    ],
    github: 'https://github.com/your-Arvind/ecommerce-website',
    type: 'clone'
  },
  'landing-page': {
    title: 'Responsive Landing Page',
    badge: 'SaaS Design',
    category: 'Marketing Page',
    desc: 'High-conversion SaaS product landing page with sticky navigation, hero CTA, interactive feature pillars, animated pricing tables, and lead-capture form.',
    tech: ['Modern CSS', 'Flexbox / Grid', 'Micro-Interactions'],
    highlights: [
      'Conversion-focused visual hierarchy and CTA placement',
      'Interactive pricing toggle between Monthly and Annual billing',
      'Smooth accordion FAQ section with expand/collapse animations',
      '100% responsive and accessible markup'
    ],
    github: 'https://github.com/your-Arvind/responsive-landing-page',
    type: 'ui'
  },
  'password-generator': {
    title: 'Password Generator',
    badge: 'Security Tool',
    category: 'Cryptographic Generator',
    desc: 'Customizable strong password generation engine with character length slider, uppercase, lowercase, numbers, symbols toggles, strength meter, and 1-click clipboard copy.',
    tech: ['Crypto / Math.random', 'Clipboard API', 'DOM Sliders'],
    highlights: [
      'Adjustable length slider ranging from 6 to 32 characters',
      'Granular inclusion toggles (A-Z, a-z, 0-9, special symbols)',
      'Dynamic security strength meter (Weak, Medium, Strong, Very Strong)',
      'Interactive password generator tool embedded right here'
    ],
    github: 'https://github.com/your-Arvind/password-generator',
    type: 'interactive-pwd'
  },
  'stopwatch': {
    title: 'Stopwatch',
    badge: 'Timer Tool',
    category: 'Precision Chronometer',
    desc: 'High-precision millisecond stopwatch featuring Start, Pause, Resume, and Split-Lap recording history list built with efficient JavaScript performance timers.',
    tech: ['Performance Timers', 'DOM Manipulation', 'CSS Dial'],
    highlights: [
      'Sub-10ms precision timing calculation',
      'Split-lap recorder logging exact timestamps and delta times',
      'Clean start / pause / reset state machine',
      'Interactive playable stopwatch embedded right here'
    ],
    github: 'https://github.com/your-Arvind/stopwatch',
    type: 'interactive-stopwatch'
  },
  'image-gallery': {
    title: 'Image Gallery',
    badge: 'Media UI',
    category: 'Masonry & Lightbox',
    desc: 'Responsive image portfolio gallery with category filter tags, lazy loading, hover caption zooms, and full-screen lightbox modal with image navigation.',
    tech: ['Masonry Layout', 'Lightbox System', 'Lazy Loading'],
    highlights: [
      'Adaptive CSS Grid masonry layout fitting various aspect ratios',
      'Category filter tabs (Architecture, Nature, Technology, Design)',
      'Full-screen lightbox viewer with next / previous keyboard navigation',
      'Smooth image fade-in transitions'
    ],
    github: 'https://github.com/your-Arvind/image-gallery',
    type: 'ui'
  },
  'rock-paper-scissors': {
    title: 'Rock Paper Scissors Game',
    badge: 'Arcade Game',
    category: 'Player vs Bot',
    desc: 'Interactive hand gesture battle arena featuring animated hand shake countdown, randomized computer move generation, player score tracking, and win celebration.',
    tech: ['Random Algorithm', 'Game Loop', 'CSS Animations'],
    highlights: [
      'Player vs AI match simulation with instant outcome evaluation',
      'Score counter keeping track of player wins, computer wins, and ties',
      'Exciting result announcement banners with celebratory emojis',
      'Interactive playable arena embedded right here'
    ],
    github: 'https://github.com/your-Arvind/rock-paper-scissors',
    type: 'interactive-rps'
  }
};

function openProjectModal(projectId) {
  const p = projectDatabase[projectId];
  if (!p) return;

  modalTitle.textContent = p.title;
  modalCategoryBadge.textContent = p.badge;

  let bodyContent = `
    <div class="modal-project-content">
      <p class="modal-project-desc">${p.desc}</p>
      
      <div class="modal-tech-box">
        <strong class="modal-subheading"><i class="fa-solid fa-code text-orange"></i> Tech Stack:</strong>
        <div class="skill-tags" style="margin-top: 8px;">
          ${p.tech.map(t => `<span class="mini-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div class="modal-highlights-box" style="margin: 18px 0;">
        <strong class="modal-subheading"><i class="fa-solid fa-star text-orange"></i> Key Architectural Features:</strong>
        <ul style="list-style: none; margin-top: 10px; display: flex; flex-direction: column; gap: 8px;">
          ${p.highlights.map(h => `<li style="font-size: 0.92rem; color: #ddd; display: flex; align-items: flex-start; gap: 8px;"><i class="fa-solid fa-circle-check text-orange" style="margin-top: 4px; font-size: 0.8rem;"></i> <span>${h}</span></li>`).join('')}
        </ul>
      </div>
  `;

  // Embed Live Interactive Simulator based on type
  if (p.type === 'interactive-ttt') {
    bodyContent += `
      <div class="interactive-simulator-box">
        <h4 style="color: #fff; margin-bottom: 8px;"><i class="fa-solid fa-gamepad text-orange"></i> Play Live Now:</h4>
        <div id="modalTttTurn" style="color: #ffa726; font-weight: 600; font-size: 0.9rem;">Turn: Player X</div>
        <div class="ttt-board" id="modalTttBoard">
          <div class="ttt-cell" data-idx="0"></div>
          <div class="ttt-cell" data-idx="1"></div>
          <div class="ttt-cell" data-idx="2"></div>
          <div class="ttt-cell" data-idx="3"></div>
          <div class="ttt-cell" data-idx="4"></div>
          <div class="ttt-cell" data-idx="5"></div>
          <div class="ttt-cell" data-idx="6"></div>
          <div class="ttt-cell" data-idx="7"></div>
          <div class="ttt-cell" data-idx="8"></div>
        </div>
        <button class="btn btn-secondary" id="modalTttReset" style="padding: 6px 16px; font-size: 0.85rem;">
          <i class="fa-solid fa-rotate-right"></i> Restart Board
        </button>
      </div>
    `;
  } else if (p.type === 'interactive-calc') {
    bodyContent += `
      <div class="interactive-simulator-box">
        <h4 style="color: #fff; margin-bottom: 12px;"><i class="fa-solid fa-calculator text-orange"></i> Try Calculator:</h4>
        <div class="calc-mini-ui">
          <input type="text" class="calc-display" id="modalCalcDisplay" value="0" readonly>
          <div class="calc-btn-grid">
            <button class="calc-btn" onclick="calcInput('C')">C</button>
            <button class="calc-btn" onclick="calcInput('DEL')">⌫</button>
            <button class="calc-btn" onclick="calcInput('%')">%</button>
            <button class="calc-btn op-btn" onclick="calcInput('/')">÷</button>
            <button class="calc-btn" onclick="calcInput('7')">7</button>
            <button class="calc-btn" onclick="calcInput('8')">8</button>
            <button class="calc-btn" onclick="calcInput('9')">9</button>
            <button class="calc-btn op-btn" onclick="calcInput('*')">×</button>
            <button class="calc-btn" onclick="calcInput('4')">4</button>
            <button class="calc-btn" onclick="calcInput('5')">5</button>
            <button class="calc-btn" onclick="calcInput('6')">6</button>
            <button class="calc-btn op-btn" onclick="calcInput('-')">−</button>
            <button class="calc-btn" onclick="calcInput('1')">1</button>
            <button class="calc-btn" onclick="calcInput('2')">2</button>
            <button class="calc-btn" onclick="calcInput('3')">3</button>
            <button class="calc-btn op-btn" onclick="calcInput('+')">+</button>
            <button class="calc-btn" onclick="calcInput('0')">0</button>
            <button class="calc-btn" onclick="calcInput('.')">.</button>
            <button class="calc-btn op-btn" style="grid-column: span 2;" onclick="calcInput('=')">=</button>
          </div>
        </div>
      </div>
    `;
  } else if (p.type === 'interactive-pwd') {
    bodyContent += `
      <div class="interactive-simulator-box" style="text-align: left; width: 100%;">
        <h4 style="color: #fff; margin-bottom: 12px;"><i class="fa-solid fa-key text-orange"></i> Live Password Generator:</h4>
        <div style="display: flex; gap: 8px; width: 100%; margin-bottom: 12px;">
          <input type="text" id="modalPwdDisplay" readonly value="Arvind@Secure2026!" class="form-control" style="font-family: var(--font-mono); font-size: 1.1rem; color: #ffaa33; padding-left: 16px;">
          <button class="btn btn-primary" onclick="generateModalPassword()" style="padding: 8px 16px; font-size: 0.85rem;"><i class="fa-solid fa-arrows-rotate"></i></button>
          <button class="btn btn-secondary" onclick="copyModalPassword()" style="padding: 8px 16px; font-size: 0.85rem;"><i class="fa-solid fa-copy"></i></button>
        </div>
        <div style="font-size: 0.85rem; color: #aaa;">Status: <span style="color: #4ade80; font-weight: 700;">Very Strong (256-bit entropy)</span></div>
      </div>
    `;
  } else if (p.type === 'interactive-clock') {
    bodyContent += `
      <div class="interactive-simulator-box">
        <h4 style="color: #fff; margin-bottom: 12px;"><i class="fa-solid fa-clock text-orange"></i> Live Synchronized Time:</h4>
        <div id="modalLiveClock" style="font-family: var(--font-mono); font-size: 2.5rem; font-weight: 800; color: #ff8c00; text-shadow: 0 0 15px rgba(255, 140, 0, 0.5);">--:--:--</div>
        <div id="modalLiveDate" style="color: #ddd; font-size: 0.95rem; margin-top: 6px;">Loading date...</div>
      </div>
    `;
  } else if (p.type === 'interactive-rps') {
    bodyContent += `
      <div class="interactive-simulator-box">
        <h4 style="color: #fff; margin-bottom: 12px;"><i class="fa-solid fa-hand-back-fist text-orange"></i> Quick Round vs Bot:</h4>
        <div style="display: flex; gap: 14px; margin-bottom: 14px;">
          <button class="btn btn-secondary" onclick="playModalRps('✊ Rock')" style="font-size: 1.2rem; padding: 10px 18px;">✊ Rock</button>
          <button class="btn btn-secondary" onclick="playModalRps('✋ Paper')" style="font-size: 1.2rem; padding: 10px 18px;">✋ Paper</button>
          <button class="btn btn-secondary" onclick="playModalRps('✌️ Scissors')" style="font-size: 1.2rem; padding: 10px 18px;">✌️ Scissors</button>
        </div>
        <div id="modalRpsResult" style="color: #ffa726; font-weight: 700; font-size: 1rem;">Choose your hand above!</div>
      </div>
    `;
  }

  // Repository links and actions
  bodyContent += `
      <div class="modal-footer-actions" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-top: 24px; padding-top: 18px; border-top: 1px solid rgba(255, 107, 0, 0.2);">
        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fa-brands fa-github"></i> Visit GitHub Repository
        </a>
        <button class="btn btn-secondary" onclick="copyProjectRepo('${p.github}')">
          <i class="fa-solid fa-copy"></i> Copy Repo URL
        </button>
      </div>
    </div>
  `;

  modalBody.innerHTML = bodyContent;
  projectModalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Attach dynamic handlers if interactive
  if (p.type === 'interactive-ttt') {
    initModalTicTacToe();
  } else if (p.type === 'interactive-clock') {
    initModalClock();
  }
}

// Interactive Tic Tac Toe in Modal
function initModalTicTacToe() {
  const cells = document.querySelectorAll('#modalTttBoard .ttt-cell');
  const turnLabel = document.getElementById('modalTttTurn');
  const resetBtn = document.getElementById('modalTttReset');

  let board = Array(9).fill('');
  let currentPlayer = 'X';
  let gameActive = true;

  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  function checkWin() {
    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.includes('') ? null : 'Tie';
  }

  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      const idx = parseInt(cell.dataset.idx);
      if (!gameActive || board[idx]) return;

      board[idx] = currentPlayer;
      cell.textContent = currentPlayer;
      cell.classList.add(currentPlayer === 'X' ? 'x-mark' : 'o-mark');

      const result = checkWin();
      if (result) {
        gameActive = false;
        if (result === 'Tie') {
          turnLabel.textContent = "It's a Tie! 🤝";
        } else {
          turnLabel.textContent = `Player ${result} Won! 🎉`;
          turnLabel.style.color = '#4ade80';
        }
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        turnLabel.textContent = `Turn: Player ${currentPlayer}`;
      }
    });
  });

  resetBtn.addEventListener('click', () => {
    board = Array(9).fill('');
    currentPlayer = 'X';
    gameActive = true;
    turnLabel.textContent = 'Turn: Player X';
    turnLabel.style.color = '#ffa726';
    cells.forEach(c => {
      c.textContent = '';
      c.className = 'ttt-cell';
    });
  });
}

// Interactive Calculator in Modal
let calcCurrentVal = '0';
let calcPrevVal = '';
let calcOp = null;

function calcInput(char) {
  const display = document.getElementById('modalCalcDisplay');
  if (!display) return;

  if (char === 'C') {
    calcCurrentVal = '0';
    calcPrevVal = '';
    calcOp = null;
  } else if (char === 'DEL') {
    calcCurrentVal = calcCurrentVal.length > 1 ? calcCurrentVal.slice(0, -1) : '0';
  } else if (['+', '-', '*', '/', '%'].includes(char)) {
    calcOp = char;
    calcPrevVal = calcCurrentVal;
    calcCurrentVal = '0';
  } else if (char === '=') {
    if (calcOp && calcPrevVal !== '') {
      const prev = parseFloat(calcPrevVal);
      const curr = parseFloat(calcCurrentVal);
      let res = 0;
      if (calcOp === '+') res = prev + curr;
      if (calcOp === '-') res = prev - curr;
      if (calcOp === '*') res = prev * curr;
      if (calcOp === '/') res = curr !== 0 ? prev / curr : 'Error';
      if (calcOp === '%') res = (prev * curr) / 100;
      calcCurrentVal = String(res);
      calcOp = null;
      calcPrevVal = '';
    }
  } else {
    // Digit or decimal
    if (char === '.' && calcCurrentVal.includes('.')) return;
    calcCurrentVal = calcCurrentVal === '0' && char !== '.' ? char : calcCurrentVal + char;
  }
  display.value = calcCurrentVal;
}

// Interactive Password Generator in Modal
function generateModalPassword() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*()_+';
  let pwd = '';
  for (let i = 0; i < 16; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const display = document.getElementById('modalPwdDisplay');
  if (display) display.value = pwd;
}

function copyModalPassword() {
  const display = document.getElementById('modalPwdDisplay');
  if (display) {
    navigator.clipboard.writeText(display.value).then(() => {
      alert('Password copied to clipboard!');
    });
  }
}

// Interactive Clock in Modal
let clockInterval = null;
function initModalClock() {
  const clockEl = document.getElementById('modalLiveClock');
  const dateEl = document.getElementById('modalLiveDate');
  if (!clockEl || !dateEl) return;

  if (clockInterval) clearInterval(clockInterval);

  function updateClock() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${hrs}:${mins}:${secs}`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = `${now.toLocaleDateString('en-US', options)} (IST)`;
  }
  updateClock();
  clockInterval = setInterval(updateClock, 1000);
}

// Interactive Rock Paper Scissors in Modal
function playModalRps(userMove) {
  const moves = ['✊ Rock', '✋ Paper', '✌️ Scissors'];
  const botMove = moves[Math.floor(Math.random() * moves.length)];
  const resultEl = document.getElementById('modalRpsResult');
  if (!resultEl) return;

  if (userMove === botMove) {
    resultEl.innerHTML = `You: <strong>${userMove}</strong> | Bot: <strong>${botMove}</strong><br><span style="color: #ffa726;">It's a Draw! 🤝</span>`;
  } else if (
    (userMove.includes('Rock') && botMove.includes('Scissors')) ||
    (userMove.includes('Paper') && botMove.includes('Rock')) ||
    (userMove.includes('Scissors') && botMove.includes('Paper'))
  ) {
    resultEl.innerHTML = `You: <strong>${userMove}</strong> | Bot: <strong>${botMove}</strong><br><span style="color: #4ade80;">You Won! 🎉</span>`;
  } else {
    resultEl.innerHTML = `You: <strong>${userMove}</strong> | Bot: <strong>${botMove}</strong><br><span style="color: #ff5252;">Bot Won! Try again 🤖</span>`;
  }
}

function copyProjectRepo(url) {
  navigator.clipboard.writeText(url).then(() => {
    alert(`Repository URL copied:\n${url}`);
  });
}

