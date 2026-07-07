// Hero typewriter effect (home page only)
(function () {
  var lines = document.querySelectorAll('#typed-heading .type-line');
  if (!lines.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    lines.forEach(function (el) { el.textContent = el.dataset.text; });
    return;
  }

  var lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) return;
    var el = lines[lineIndex];
    var text = el.dataset.text;
    var charIndex = 0;

    var interval = setInterval(function () {
      el.textContent = text.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex >= text.length) {
        clearInterval(interval);
        lineIndex++;
        setTimeout(typeLine, 120);
      }
    }, 22);
  }

  typeLine();
})();

// Gallery lightbox carousel (project pages only)
(function () {
  var galleryImgs = Array.prototype.slice.call(document.querySelectorAll('.gallery-grid img'));
  if (!galleryImgs.length) return;

  var images = galleryImgs.map(function (img) {
    return { src: img.getAttribute('src'), alt: img.getAttribute('alt') || '' };
  });
  var currentIndex = 0;

  // Build lightbox DOM
  var lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML =
    '<div class="lightbox-stage">' +
      '<button class="lightbox-close" aria-label="Close">&#10005;</button>' +
      '<button class="lightbox-prev" aria-label="Previous image">&#8249;</button>' +
      '<div class="lightbox-track"></div>' +
      '<button class="lightbox-next" aria-label="Next image">&#8250;</button>' +
      '<div class="lightbox-counter"></div>' +
    '</div>';
  document.body.appendChild(lightbox);

  var track = lightbox.querySelector('.lightbox-track');
  var counter = lightbox.querySelector('.lightbox-counter');
  var btnClose = lightbox.querySelector('.lightbox-close');
  var btnPrev = lightbox.querySelector('.lightbox-prev');
  var btnNext = lightbox.querySelector('.lightbox-next');

  images.forEach(function (data, i) {
    var slide = document.createElement('div');
    slide.className = 'lightbox-slide';
    slide.dataset.index = i;
    var img = document.createElement('img');
    img.src = data.src;
    img.alt = data.alt;
    slide.appendChild(img);
    slide.addEventListener('click', function (e) {
      e.stopPropagation();
      if (parseInt(slide.dataset.index, 10) !== currentIndex) goTo(parseInt(slide.dataset.index, 10));
    });
    track.appendChild(slide);
  });

  var slides = Array.prototype.slice.call(track.querySelectorAll('.lightbox-slide'));

  function updateTrack(animate) {
    track.style.transition = animate === false ? 'none' : '';
    var stageWidth = lightbox.querySelector('.lightbox-stage').clientWidth;
    var slide = slides[currentIndex];
    var offset = stageWidth / 2 - (slide.offsetLeft + slide.offsetWidth / 2);
    track.style.transform = 'translateX(' + offset + 'px)';
    slides.forEach(function (s, i) { s.classList.toggle('is-active', i === currentIndex); });
    counter.textContent = (currentIndex + 1) + ' / ' + images.length;
    if (animate === false) {
      // force reflow then restore transition
      // eslint-disable-next-line no-unused-expressions
      track.offsetHeight;
      track.style.transition = '';
    }
  }

  function goTo(index) {
    currentIndex = (index + images.length) % images.length;
    updateTrack(true);
  }

  function open(index) {
    currentIndex = index;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Wait for the browser to actually apply display:flex and lay out the
    // slides before measuring their position, otherwise the offset is
    // computed against the stale (hidden) layout and the active slide
    // lands on the left instead of centered.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { updateTrack(false); });
    });
  }

  function close() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  galleryImgs.forEach(function (img, i) {
    img.addEventListener('click', function () { open(i); });
  });

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', function () { goTo(currentIndex - 1); });
  btnNext.addEventListener('click', function () { goTo(currentIndex + 1); });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox-stage')) close();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
    if (e.key === 'ArrowRight') goTo(currentIndex + 1);
  });

  window.addEventListener('resize', function () {
    if (lightbox.classList.contains('is-open')) updateTrack(false);
  });
})();
