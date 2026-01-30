(function initNavToggle() {
  const btn = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!btn || !links) return;

  btn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
})();

(function initCarousels() {
  const carousels = document.querySelectorAll("[data-carousel]");
  if (!carousels.length) return;

  carousels.forEach((carousel) => {
    const track = carousel.querySelector(".lab-carousel-track");
    const slides = Array.from(carousel.querySelectorAll(".lab-carousel-slide"));
    const prevBtn = carousel.querySelector(".lab-carousel-btn.prev");
    const nextBtn = carousel.querySelector(".lab-carousel-btn.next");
    const dotsWrap = carousel.querySelector(".lab-carousel-dots");

    if (!track || slides.length === 0) return;

    let index = 0;
    const intervalMs = 3500;
    let timer = null;

    // Build dots
    const dots = (dotsWrap ? slides : []).map((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "lab-carousel-dot" + (i === 0 ? " is-active" : "");
      b.setAttribute("aria-label", `Go to slide ${i + 1}`);
      b.addEventListener("click", () => goTo(i, true));
      dotsWrap.appendChild(b);
      return b;
    });

    function setActiveDot(i) {
      dots.forEach((d, di) => d.classList.toggle("is-active", di === i));
    }

    function goTo(i, userInitiated = false) {
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(${-index * 100}%)`;
      setActiveDot(index);
      if (userInitiated) restartAutoplay();
    }

    function next(userInitiated = false) { goTo(index + 1, userInitiated); }
    function prev(userInitiated = false) { goTo(index - 1, userInitiated); }

    prevBtn?.addEventListener("click", () => prev(true));
    nextBtn?.addEventListener("click", () => next(true));

    // Autoplay
    function startAutoplay() {
      stopAutoplay();
      timer = window.setInterval(() => next(false), intervalMs);
    }

    function stopAutoplay() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    function restartAutoplay() {
      startAutoplay();
    }

    // Pause on hover/focus (desktop)
    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    carousel.addEventListener("focusin", stopAutoplay);
    carousel.addEventListener("focusout", startAutoplay);

    // Pause when tab not visible
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopAutoplay();
      else startAutoplay();
    });

    // Touch swipe (mobile)
    let startX = 0;
    let deltaX = 0;
    let touching = false;

    carousel.addEventListener("touchstart", (e) => {
      touching = true;
      startX = e.touches[0].clientX;
      deltaX = 0;
      stopAutoplay();
    }, { passive: true });

    carousel.addEventListener("touchmove", (e) => {
      if (!touching) return;
      deltaX = e.touches[0].clientX - startX;
    }, { passive: true });

    carousel.addEventListener("touchend", () => {
      if (!touching) return;
      touching = false;

      const threshold = 50;
      if (deltaX > threshold) prev(true);
      else if (deltaX < -threshold) next(true);

      startAutoplay();
    });

    // Init
    goTo(0, false);
    startAutoplay();
  });
})();
