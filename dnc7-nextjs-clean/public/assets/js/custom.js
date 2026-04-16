/**
 * DNC7 - Custom JavaScript
 * Tüm interaktiviteler ve animasyonlar
 */

(function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════
  // PRELOADER
  // ═══════════════════════════════════════════════════════════
  const preloader = document.getElementById('preloader');
  const pnum = document.getElementById('pnum');
  const pfill = document.getElementById('pfill');

  let loaded = 0;
  const total = 100;

  const updateCounter = () => {
    if (loaded < total) {
      loaded += Math.random() * 15;
      if (loaded > total) loaded = total;
      pnum.textContent = Math.floor(loaded);
      pfill.style.width = loaded + '%';
      requestAnimationFrame(updateCounter);
    } else {
      pnum.textContent = '100';
      pfill.style.width = '100%';
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.pointerEvents = 'none';
        setTimeout(() => {
          preloader.style.display = 'none';
          initSlider(); // Slider'ı başlat
        }, 500);
      }, 400);
    }
  };

  window.addEventListener('load', () => {
    setTimeout(updateCounter, 300);
  });

  // ═══════════════════════════════════════════════════════════
  // CUSTOM CURSOR
  // ═══════════════════════════════════════════════════════════
  const cdot = document.getElementById('cdot');
  const cring = document.getElementById('cring');

  if (cdot && cring && window.matchMedia('(hover: hover)').matches) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animateCursor = () => {
      const dt = 0.15;
      cursorX += (mouseX - cursorX) * dt;
      cursorY += (mouseY - cursorY) * dt;

      cdot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      cring.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;

      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Hover efektleri
    const hoverElements = document.querySelectorAll('a, button, .svc-item, .proj-card, .team-card, .faq-item');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cur-on'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cur-on'));
    });
  }

  // ═══════════════════════════════════════════════════════════
  // NAVBAR SCROLL
  // ═══════════════════════════════════════════════════════════
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // ═══════════════════════════════════════════════════════════
  // MOBİL NAV
  // ═══════════════════════════════════════════════════════════
  const nbtn = document.getElementById('nbtn');
  const mnav = document.getElementById('mnav');
  const mclose = document.getElementById('mclose');

  nbtn?.addEventListener('click', () => mnav.classList.add('open'));
  mclose?.addEventListener('click', () => mnav.classList.remove('open'));

  window.closeMob = () => mnav.classList.remove('open');

  // ═══════════════════════════════════════════════════════════
  // HERO SLIDER
  // ═══════════════════════════════════════════════════════════
  let currentSlide = 0;
  let slideInterval;
  const slides = document.querySelectorAll('.sc');
  const totalSlides = slides.length;
  const spfill = document.getElementById('spfill');
  const scurn = document.getElementById('scurn');
  const hbg = document.getElementById('hbg');
  const sdots = document.querySelectorAll('.sl-dot');
  const sprev = document.getElementById('sprev');
  const snext = document.getElementById('snext');

  const slideColors = ['#F97316', '#6366F1', '#0EA5E9', '#10B981', '#F59E0B', '#EC4899', '#3B82F6'];

  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    slides[currentSlide].classList.remove('active');
    sdots[currentSlide].classList.remove('on');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    sdots[currentSlide].classList.add('on');

    scurn.innerHTML = `<em>${String(currentSlide + 1).padStart(2, '0')}</em>`;
    hbg.style.background = `${slideColors[currentSlide]}15`;

    // Slide animasyonları
    const slide = slides[currentSlide];
    const catIn = slide.querySelector('.sc-cat-in');
    const lines = slide.querySelectorAll('.sc-lin');
    const desc = slide.querySelector('.sc-desc');
    const tags = slide.querySelector('.sc-tags');
    const acts = slide.querySelector('.sc-acts');
    const img = slide.querySelector('.sc-img img');

    if (catIn) catIn.style.transform = 'translateY(0)';
    lines.forEach((line, i) => {
      setTimeout(() => line.style.transform = 'translateY(0)', i * 100);
    });
    if (desc) { desc.style.opacity = '1'; desc.style.transform = 'translateY(0)'; }
    if (tags) { tags.style.opacity = '1'; tags.style.transform = 'translateY(0)'; }
    if (acts) { acts.style.opacity = '1'; acts.style.transform = 'translateY(0)'; }
    if (img) { img.classList.add('vis'); }

    // Progress bar
    spfill.style.width = '0%';
    setTimeout(() => {
      spfill.style.transition = 'width 5s linear';
      spfill.style.width = '100%';
    }, 50);

    resetInterval();
  }

  function nextSlide() { goToSlide(currentSlide + 1); }
  function prevSlide() { goToSlide(currentSlide - 1); }

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 6000);
  }

  function initSlider() {
    // Dot clicks
    sdots.forEach((dot, i) => {
      dot.addEventListener('click', () => goToSlide(i));
    });

    // Arrow clicks
    sprev?.addEventListener('click', () => { prevSlide(); });
    snext?.addEventListener('click', () => { nextSlide(); });

    // İlk slide
    goToSlide(0);
  }

  // ═══════════════════════════════════════════════════════════
  // PROJE FİLTRELEME
  // ═══════════════════════════════════════════════════════════
  const pfs = document.querySelectorAll('.pf');
  const projCards = document.querySelectorAll('.proj-card');

  pfs.forEach(btn => {
    btn.addEventListener('click', () => {
      pfs.forEach(b => b.classList.remove('on'));
      btn.classList.add('on');

      const filter = btn.dataset.f;

      projCards.forEach(card => {
        if (filter === 'all' || card.dataset.cat === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => card.style.display = 'none', 300);
        }
      });
    });
  });

  // ═══════════════════════════════════════════════════════════
  // FAQ ACCORDION
  // ═══════════════════════════════════════════════════════════
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const q = item.querySelector('.faq-q');
    q?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      faqItems.forEach(i => i.classList.remove('open'));
      
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // ═══════════════════════════════════════════════════════════
  // SCROLL TO TOP
  // ═══════════════════════════════════════════════════════════
  const stbtn = document.getElementById('stbtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      stbtn.style.display = 'flex';
    } else {
      stbtn.style.display = 'none';
    }
  });

  stbtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ═══════════════════════════════════════════════════════════
  // SMOOTH SCROLL (anchor links)
  // ═══════════════════════════════════════════════════════════
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = nav.offsetHeight;
        const targetPos = target.offsetTop - navHeight - 20;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // ═══════════════════════════════════════════════════════════
  // FORM GÖNDERME (DEMO)
  // ═══════════════════════════════════════════════════════════
  const contactForm = document.querySelector('.contact-sec form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-send');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = 'Gönderiliyor...';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = '✓ Mesaj Gönderildi!';
      btn.style.background = '#10B981';
      
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.disabled = false;
        contactForm.reset();
      }, 2500);
    }, 1500);
  });

  // ═══════════════════════════════════════════════════════════
  // NAV HIGHLIGHT (scroll)
  // ═══════════════════════════════════════════════════════════
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a, .mob-nav a');

  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // ═══════════════════════════════════════════════════════════
  // HİZMETLER CLICK EFFECT
  // ═══════════════════════════════════════════════════════════
  const svcItems = document.querySelectorAll('.svc-item');
  svcItems.forEach(item => {
    item.addEventListener('click', () => {
      const serviceName = item.querySelector('.svc-name').childNodes[0].textContent.trim();
      const contactSection = document.getElementById('iletisim');
      const subjectInput = document.querySelector('.contact-sec input[placeholder="Konu"]');
      
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        if (subjectInput) {
          setTimeout(() => {
            subjectInput.value = serviceName + ' Hakkında Teklif';
            subjectInput.focus();
          }, 800);
        }
      }
    });
  });

})();
