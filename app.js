/* ============================================================
   AURA SALON & BEAUTY SPA — interactions & 3D animations
   ============================================================ */
(function () {
  'use strict';

  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FINE_POINTER = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function icons() { if (window.lucide) { window.lucide.createIcons(); } }

  /* ==========================================================
     DATA — services (African hair first) & braid-bar styles
     ========================================================== */
  var IMG = {
    knotless: 'assets/braids-closeup-portrait-pexels.jpg',
    box: 'assets/braids-nigeria-portrait-pexels.jpg',
    cornrows: 'assets/braids-detailed-pattern-pexels.jpg',
    bantu: 'assets/braids-bun-hoop-earrings-pexels.jpg',
    colour: 'assets/braids-colorful-sunglasses-pexels.jpg',
    locs: 'assets/locs-closeup-portrait-pexels.jpg',
    locsFull: 'assets/locs-woman-greenery-pexels.jpg',
    afro: 'assets/afro-stylish-portrait-pexels.jpg',
    silk: 'assets/blow-dry-salon-pexels.jpg',
    ritual: 'assets/black-woman-hair-salon-treatment-pexels-1.jpg',
    gelMani: 'assets/manicure-polish-bottle-pexels.jpg',
    classicMani: 'assets/manicure-filing-pexels.jpg',
    pedi: 'assets/pedicure-selfcare-pexels.jpg',
    spaPedi: 'assets/manicure-dark-nails-pexels.jpg',
    fullSet: 'assets/manicure-dark-polish-pexels.jpg',
    nailArt: 'assets/african-woman-nail-art-salon-pexels-1.jpg',
    fade: 'assets/barber-cut-portrait-pexels.jpg',
    taper: 'assets/barber-clippers-comb-pexels.jpg',
    lineup: 'assets/barber-beard-styling-pexels.jpg',
    shave: 'assets/barber-trim-wide-pexels.jpg',
    groom: 'assets/barber-trendy-shop-pexels.jpg',
    kids: 'assets/barber-styling-client-pexels.jpg',
    facial: 'assets/east-african-spa-beauty-treatment-woman--1.jpg',
    makeup: 'assets/bridal-makeup-studio-pexels.jpg',
    bridal: 'assets/bridal-african-bride-pexels.jpg'
  };

  var SERVICES = {
    Hair: [
      ['Knotless Braids', '3 hr 30 min', 'KES 8,500', IMG.knotless, 'Lightweight, painless and protective — the Nairobi favourite.'],
      ['Box Braids', '3 hr', 'KES 7,000', IMG.box, 'Classic jumbo to mid-size, with hair of your choice.'],
      ['Cornrows & Feed-Ins', '1 hr 30 min', 'KES 4,000', IMG.cornrows, 'Clean parts, straight backs and beautiful designs.'],
      ['Bantu Knots & Updos', '1 hr', 'KES 3,500', IMG.bantu, 'Traditional knots and elegant braided updos.'],
      ['Coloured Knotless', '3 hr 30 min', 'KES 9,500', IMG.colour, 'Ombre, burgundy, blonde — bold colour, done right.'],
      ['Locs Starter & Retwist', '2 hr', 'KES 5,500', IMG.locs, 'Start your journey or keep it fresh and neat.'],
      ['Silk Press & Blowout', '1 hr 45 min', 'KES 4,500', IMG.silk, 'Sleek, silky natural hair without the chemicals.'],
      ['Natural Hair Ritual', '1 hr 30 min', 'KES 3,800', IMG.ritual, 'Wash, deep condition, trim and scalp massage.']
    ],
    Nails: [
      ['Aura Gel Manicure', '1 hr 15 min', 'KES 3,200', IMG.gelMani, 'Gel colour that stays flawless for weeks.'],
      ['Classic Manicure', '45 min', 'KES 2,200', IMG.classicMani, 'Shape, cuticle care and a perfect polish.'],
      ['Signature Pedicure', '1 hr', 'KES 2,800', IMG.pedi, 'Soak, scrub, shape and polish for happy feet.'],
      ['Luxury Spa Pedicure', '1 hr 15 min', 'KES 3,600', IMG.spaPedi, 'Hot towel, scrub, mask and a long massage.'],
      ['Full Set & Acrylics', '2 hr', 'KES 5,500', IMG.fullSet, 'Length and shape, built to impress.'],
      ['Nail Art Edit', '1 hr 30 min', 'KES 4,000', IMG.nailArt, 'Hand-painted art, from minimal to bold.']
    ],
    Barber: [
      ['Signature Skin Fade', '45 min', 'KES 1,500', IMG.fade, 'Bald, low or mid — blended to perfection.'],
      ['Afro Taper & Shape', '45 min', 'KES 1,500', IMG.taper, 'Shape up that crown with a clean taper.'],
      ['Line-Up & Beard Sculpt', '30 min', 'KES 1,000', IMG.lineup, 'Crisp edges and sharp beard lines.'],
      ['Hot Towel Shave', '45 min', 'KES 1,200', IMG.shave, 'The classic ritual, done properly.'],
      ['The Full Groom', '1 hr 30 min', 'KES 3,000', IMG.groom, 'Cut, shave, mask and massage — the works.'],
      ["Kids' Cut", '30 min', 'KES 800', IMG.kids, 'Under-12s, gentle and patient.']
    ],
    Skin: [
      ['Aura Glow Facial', '1 hr', 'KES 5,500', IMG.facial, 'A brightening ritual for melanin-rich skin.'],
      ['Deep Cleanse Facial', '1 hr 15 min', 'KES 4,800', IMG.facial, 'Steam, extraction and calming mask.'],
      ['Back Renewal', '50 min', 'KES 3,500', IMG.facial, 'Scrub, steam and a tension-melting massage.']
    ],
    Makeup: [
      ['Soft Glam Makeup', '1 hr 30 min', 'KES 6,500', IMG.makeup, 'Shades matched to your beautiful skin tone.'],
      ['Editorial Makeup', '2 hr', 'KES 9,000', IMG.makeup, 'Camera-ready artistry for shoots and events.'],
      ['Makeup Lesson', '2 hr', 'KES 8,000', IMG.makeup, 'Learn your routine with our artists.']
    ],
    Bridal: [
      ['Bridal Beauty Trial', '2 hr 30 min', 'KES 12,000', IMG.bridal, 'Sit-down trial of glam, hair and skin prep.'],
      ['Wedding Day Glam', '3 hr', 'KES 18,000', IMG.bridal, 'The full look — makeup, hair and touch-up kit.'],
      ['Bridal Party Glam', '4 hr', 'KES 28,000', IMG.bridal, 'Hair and makeup for your whole crew.']
    ]
  };

  var STYLES = [
    { name: 'Knotless Braids', book: 'Knotless Braids', time: '3 hr 30 min', price: 'KES 8,500', img: IMG.knotless },
    { name: 'Box Braids', book: 'Box Braids', time: '3 hr', price: 'KES 7,000', img: IMG.box },
    { name: 'Cornrows', book: 'Cornrows & Feed-Ins', time: '1 hr 30 min', price: 'KES 4,000', img: IMG.cornrows },
    { name: 'Bantu Knots', book: 'Bantu Knots & Updos', time: '1 hr', price: 'KES 3,500', img: IMG.bantu },
    { name: 'Coloured Knotless', book: 'Coloured Knotless', time: '3 hr 30 min', price: 'KES 9,500', img: IMG.colour },
    { name: 'Locs', book: 'Locs Starter & Retwist', time: '2 hr', price: 'KES 5,500', img: IMG.locsFull },
    { name: 'Natural Afro', book: 'Natural Hair Ritual', time: '1 hr', price: 'KES 3,000', img: IMG.afro },
    { name: 'Silk Press', book: 'Silk Press & Blowout', time: '1 hr 45 min', price: 'KES 4,500', img: IMG.silk }
  ];

  /* ==========================================================
     SERVICES TABS
     ========================================================== */
  var grid = document.getElementById('service-grid');

  function renderServices(cat) {
    grid.innerHTML = SERVICES[cat].map(function (s, i) {
      return (
        '<article class="service-card" style="animation-delay:' + i * 70 + 'ms">' +
          '<img src="' + s[3] + '" alt="' + s[0] + '" loading="lazy" decoding="async">' +
          '<div class="service-info">' +
            '<h3>' + s[0] + '</h3>' +
            '<p class="service-desc">' + s[4] + '</p>' +
            '<div class="meta"><span><i data-lucide="clock"></i> ' + s[1] + '</span><span>&middot;</span><span>' + cat + '</span></div>' +
            '<div class="service-bottom"><span class="price">' + s[2] + '</span>' +
            '<a class="book-mini" href="#book" data-service="' + s[0] + '">Book this</a></div>' +
          '</div>' +
        '</article>'
      );
    }).join('');
    icons();
    if (FINE_POINTER && !REDUCED) { attachTilt(grid.querySelectorAll('.service-card'), 6, 8); }
  }

  renderServices('Hair');
  document.querySelectorAll('.tabs button').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelector('.tabs .active').classList.remove('active');
      b.classList.add('active');
      renderServices(b.dataset.cat);
    });
  });

  /* ==========================================================
     3D CAROUSEL — the Braid Bar
     ========================================================== */
  var stage = document.getElementById('carouselStage');
  var ring = document.getElementById('carouselRing');
  var ccName = document.getElementById('ccName');
  var ccMeta = document.getElementById('ccMeta');
  var ccCount = document.getElementById('ccCount');
  var ccBook = document.getElementById('ccBook');
  var caption = document.getElementById('carouselCaption');
  var prevBtn = document.getElementById('carouselPrev');
  var nextBtn = document.getElementById('carouselNext');
  var N = STYLES.length;
  var ANGLE = 360 / N;
  var rot = 0, target = 0, radius = 260;
  var dragging = false, moved = false, startX = 0, startTarget = 0, lastX = 0, vel = 0;
  var hoverPause = false, idleUntil = 0, activeIdx = -1;
  var AUTO_SPEED = 7; /* degrees per second */

  function mod(n, m) { return ((n % m) + m) % m; }

  function buildRing() {
    ring.innerHTML = STYLES.map(function (s, i) {
      return (
        '<figure class="carousel-card" style="transform:rotateY(' + (i * ANGLE) + 'deg) translateZ(' + radius + 'px)" data-index="' + i + '">' +
          '<img src="' + s.img + '" alt="' + s.name + '" decoding="async">' +
          '<figcaption>' + s.name + '</figcaption>' +
        '</figure>'
      );
    }).join('');
  }

  function layout() {
    var cardW = ring.offsetWidth || 200;
    /* half-card / tan(half-angle) gives the ring radius; add breathing room */
    radius = Math.round((cardW / 2) / Math.tan(Math.PI / N)) + Math.round(cardW * 0.28);
    var cards = ring.querySelectorAll('.carousel-card');
    cards.forEach(function (c, i) {
      c.style.transform = 'rotateY(' + (i * ANGLE) + 'deg) translateZ(' + radius + 'px)';
    });
  }

  function setActive(idx) {
    if (idx === activeIdx) return;
    activeIdx = idx;
    var cards = ring.querySelectorAll('.carousel-card');
    cards.forEach(function (c, i) { c.classList.toggle('active', i === idx); });
    var s = STYLES[idx];
    ccName.textContent = s.name;
    ccMeta.textContent = s.time + ' \u00B7 from ' + s.price;
    ccCount.textContent = (idx + 1) + ' / ' + N;
    ccBook.dataset.service = s.book;
    if (!REDUCED) {
      caption.classList.remove('swap');
      void caption.offsetWidth; /* restart the swap animation */
      caption.classList.add('swap');
    }
  }

  var lastT = 0;
  function tick(t) {
    var dt = lastT ? (t - lastT) / 1000 : 0;
    lastT = t;

    if (!dragging) {
      /* inertia after a flick */
      if (Math.abs(vel) > 0.02) {
        target += vel;
        vel *= 0.94;
        idleUntil = t + 2000;
      }
      /* gentle auto-rotation when idle */
      if (!REDUCED && !hoverPause && t > idleUntil) {
        target += AUTO_SPEED * dt;
      }
      if (REDUCED) { rot = target; }
      else { rot += (target - rot) * 0.09; }
    }

    ring.style.transform = 'rotateY(' + rot + 'deg)';
    setActive(mod(Math.round(-rot / ANGLE), N));
    requestAnimationFrame(tick);
  }

  function snap(dir) {
    var base = Math.round(target / ANGLE);
    target = (base + dir) * ANGLE;
    vel = 0;
    idleUntil = performance.now() + 3000;
  }

  if (stage && ring) {
    buildRing();
    layout();
    requestAnimationFrame(tick);

    window.addEventListener('resize', layout);

    prevBtn.addEventListener('click', function () { snap(-1); });
    nextBtn.addEventListener('click', function () { snap(1); });

    stage.addEventListener('pointerenter', function () { hoverPause = true; });
    stage.addEventListener('pointerleave', function () { hoverPause = false; });

    stage.addEventListener('pointerdown', function (e) {
      dragging = true; moved = false;
      startX = lastX = e.clientX;
      startTarget = target; vel = 0;
      stage.classList.add('grabbing');
      stage.setPointerCapture(e.pointerId);
    });

    stage.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 6) { moved = true; }
      target = startTarget + dx * 0.35;
      vel = (e.clientX - lastX) * 0.35;
      lastX = e.clientX;
      rot += (target - rot) * 0.35; /* follow the finger closely */
      idleUntil = performance.now() + 2000;
    });

    function endDrag() {
      if (!dragging) return;
      dragging = false;
      stage.classList.remove('grabbing');
      idleUntil = performance.now() + 2000;
    }
    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);

    /* tap the front card to prefill the booking form */
    ring.addEventListener('click', function (e) {
      if (moved) return;
      var card = e.target.closest('.carousel-card.active');
      if (!card) return;
      prefill(STYLES[Number(card.dataset.index)].book);
      document.getElementById('book').scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth' });
    });
  }

  /* ==========================================================
     3D TILT — cards that lean toward the cursor
     ========================================================== */
  function attachTilt(els, maxDeg, lift) {
    els.forEach(function (el) {
      var raf = null;
      el.addEventListener('pointermove', function (e) {
        if (raf) return;
        raf = requestAnimationFrame(function () {
          raf = null;
          var r = el.getBoundingClientRect();
          var px = (e.clientX - r.left) / r.width - 0.5;
          var py = (e.clientY - r.top) / r.height - 0.5;
          el.style.setProperty('--ry', (px * maxDeg).toFixed(2) + 'deg');
          el.style.setProperty('--rx', (-py * maxDeg).toFixed(2) + 'deg');
          el.style.setProperty('--tz', lift + 'px');
        });
      });
      el.addEventListener('pointerleave', function () {
        el.style.setProperty('--ry', '0deg');
        el.style.setProperty('--rx', '0deg');
        el.style.setProperty('--tz', '0px');
      });
    });
  }

  if (FINE_POINTER && !REDUCED) {
    attachTilt(document.querySelectorAll('.barber-photo'), 8, 14);
  }

  /* ==========================================================
     SCROLL REVEALS — sections rise in with a 3D tilt
     ========================================================== */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !REDUCED) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ==========================================================
     HERO PARALLAX — layered 3D depth
     ========================================================== */
  var hero = document.querySelector('.hero');
  var heroBg = document.getElementById('heroBg');
  var heroContent = document.getElementById('heroContent');
  if (hero && heroBg && heroContent && FINE_POINTER && !REDUCED) {
    var hRaf = null, hx = 0, hy = 0;
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      hx = (e.clientX - r.left) / r.width - 0.5;
      hy = (e.clientY - r.top) / r.height - 0.5;
      if (hRaf) return;
      hRaf = requestAnimationFrame(function () {
        hRaf = null;
        heroBg.style.transform = 'translate3d(' + (hx * -22).toFixed(1) + 'px,' + (hy * -13).toFixed(1) + 'px,0)';
        heroContent.style.transform = 'translate3d(' + (hx * 12).toFixed(1) + 'px,' + (hy * 8).toFixed(1) + 'px,0)';
      });
    });
    hero.addEventListener('pointerleave', function () {
      heroBg.style.transform = 'translate3d(0,0,0)';
      heroContent.style.transform = 'translate3d(0,0,0)';
    });
  }

  /* ==========================================================
     HERO SLIDESHOW — people of Aura crossfade across the hero
     ========================================================== */
  var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
  var dotsWrap = document.getElementById('heroDots');
  if (slides.length) {
    var slideIdx = 0, slideTimer = null, dots = [];

    if (dotsWrap) {
      slides.forEach(function (_, i) {
        var d = document.createElement('button');
        d.type = 'button';
        if (i === 0) { d.classList.add('is-on'); }
        var label = slides[i].getAttribute('data-label');
        d.setAttribute('aria-label', (label ? label : 'Look ' + (i + 1)) + ' (' + (i + 1) + ' of ' + slides.length + ')');
        d.addEventListener('click', function () {
          showSlide(i);
          restartSlides();
        });
        dotsWrap.appendChild(d);
        dots.push(d);
      });
    }

    var heroCaption = document.getElementById('heroCaption');
    var captionTimer = null;
    function setCaption(label) {
      if (!heroCaption) return;
      if (captionTimer) { clearTimeout(captionTimer); }
      heroCaption.classList.add('swap');
      captionTimer = setTimeout(function () {
        heroCaption.textContent = label || '';
        heroCaption.classList.remove('swap');
      }, 400);
    }

    function showSlide(i) {
      slides[slideIdx].classList.remove('is-on');
      if (dots[slideIdx]) { dots[slideIdx].classList.remove('is-on'); }
      slideIdx = (i + slides.length) % slides.length;
      slides[slideIdx].classList.add('is-on');
      if (dots[slideIdx]) { dots[slideIdx].classList.add('is-on'); }
      setCaption(slides[slideIdx].getAttribute('data-label'));
    }

    function restartSlides() {
      if (slideTimer) { clearInterval(slideTimer); }
      if (REDUCED) return; /* keep the first portrait static for reduced motion */
      slideTimer = setInterval(function () { showSlide(slideIdx + 1); }, 5000);
    }
    restartSlides();

    /* pause the rotation while the tab is hidden */
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        if (slideTimer) { clearInterval(slideTimer); slideTimer = null; }
      } else {
        restartSlides();
      }
    });
  }

  /* ==========================================================
     GALLERY FILTER
     ========================================================== */
  var galleryItems = document.querySelectorAll('.gallery-item');
  document.querySelectorAll('.gallery-tabs button').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelector('.gallery-tabs .active').classList.remove('active');
      b.classList.add('active');
      var f = b.dataset.filter;
      galleryItems.forEach(function (item) {
        var show = f === 'All' || item.dataset.cat === f;
        item.classList.toggle('hide', !show);
      });
    });
  });

  /* ==========================================================
     BOOKING — prefill + submit
     ========================================================== */
  var serviceSelect = document.getElementById('serviceSelect');

  function prefill(service) {
    if (!serviceSelect || !service) return;
    var options = Array.prototype.slice.call(serviceSelect.options);
    var exact = options.find(function (o) { return o.value === service || o.text === service; });
    if (!exact) { exact = options.find(function (o) { return o.text.indexOf(service) === 0 || service.indexOf(o.text) === 0; }); }
    if (exact) {
      serviceSelect.value = exact.value || exact.text;
      serviceSelect.classList.add('prefilled');
      setTimeout(function () { serviceSelect.classList.remove('prefilled'); }, 1800);
    }
  }

  /* any link carrying data-service prefill the form */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-service]');
    if (!link) return;
    prefill(link.dataset.service);
  });

  var form = document.getElementById('bookingForm');
  var formNote = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('bookName').value.trim();
      var phone = document.getElementById('bookPhone').value.trim();
      var service = serviceSelect.value || 'a consultation';
      if (!name || !phone) return;
      formNote.textContent = 'Asante ' + name.split(' ')[0] + '! Your request for ' + service +
        ' has been received — our Aura concierge will confirm on WhatsApp within one business hour.';
      formNote.classList.add('success');
      form.reset();
      window.setTimeout(function () {
        formNote.textContent = "We'll confirm availability via WhatsApp within one business hour.";
        formNote.classList.remove('success');
      }, 12000);
    });
  }

  /* ==========================================================
     MOBILE MENU
     ========================================================== */
  var menuToggle = document.querySelector('.menu-toggle');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () { mobileMenu.classList.add('open'); });
    mobileMenu.querySelector('.close-menu').addEventListener('click', function () { mobileMenu.classList.remove('open'); });
    mobileMenu.querySelectorAll('.mobile-links a').forEach(function (a) {
      a.addEventListener('click', function () { mobileMenu.classList.remove('open'); });
    });
  }

  /* ==========================================================
     FLIP CARDS — tap to flip on touch screens
     ========================================================== */
  if (!FINE_POINTER) {
    document.querySelectorAll('.flip').forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('a')) return; /* let links through */
        card.classList.toggle('flipped');
      });
    });
  }

  icons();
})();
