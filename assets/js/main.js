/* ==========================================================================
   Cattery Okaukuejo — page behaviour (luxe design)
   Nav scroll transition, hero parallax, mobile menu, language toggle,
   FAQ accordion, kitten colour filter, mailto contact form.

   The navbar/footer/FAQ/kitten-grid markup is regenerated on language
   toggle (see i18n.js), so interactive bits use event delegation bound
   once on `document` — listeners keep working no matter how many times
   the underlying markup gets replaced.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initLangButtons();
  initNavScroll();
  initHeroParallax();
  initFaqAccordion();
  initContactForm();
});

/* --------------------------------------------------------------------------
   Fixed nav — transparent over the hero, dark/blurred once scrolled past
   40px. Throttled with requestAnimationFrame.
   -------------------------------------------------------------------------- */
let navScrollTicking = false;

function syncNavScrollState() {
  const nav = document.getElementById("nav-wrap");
  if (!nav) return;
  nav.classList.toggle("scrolled", window.scrollY > 40);
}

function initNavScroll() {
  window.addEventListener(
    "scroll",
    () => {
      if (navScrollTicking) return;
      navScrollTicking = true;
      requestAnimationFrame(() => {
        syncNavScrollState();
        navScrollTicking = false;
      });
    },
    { passive: true }
  );
}

/* --------------------------------------------------------------------------
   Hero parallax (home page only) — background photo shifts slower than
   scroll: translateY = min(scrollY * 0.35, 200px).
   -------------------------------------------------------------------------- */
let heroScrollTicking = false;

function initHeroParallax() {
  const hero = document.getElementById("hero-photo");
  if (!hero) return;

  const apply = () => {
    const offset = Math.min(window.scrollY * 0.35, 200);
    hero.style.transform = `translateY(${offset}px)`;
  };
  apply();

  window.addEventListener(
    "scroll",
    () => {
      if (heroScrollTicking) return;
      heroScrollTicking = true;
      requestAnimationFrame(() => {
        apply();
        heroScrollTicking = false;
      });
    },
    { passive: true }
  );
}

/* Mobile hamburger menu (delegated — the navbar is re-rendered on language switch) */
function initMobileMenu() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("#menu-btn");
    if (btn) {
      const menu = document.getElementById("mobile-menu");
      const iconOpen = document.getElementById("menu-icon-open");
      const iconClose = document.getElementById("menu-icon-close");
      const isOpen = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
      iconOpen.classList.toggle("hidden", isOpen);
      iconClose.classList.toggle("hidden", !isOpen);
      return;
    }

    // Close the menu when a nav link inside it is tapped
    if (e.target.closest("#mobile-menu a")) {
      const menu = document.getElementById("mobile-menu");
      const openBtn = document.getElementById("menu-btn");
      menu.classList.remove("open");
      openBtn.setAttribute("aria-expanded", "false");
      document.getElementById("menu-icon-open").classList.remove("hidden");
      document.getElementById("menu-icon-close").classList.add("hidden");
    }
  });
}

/* Language toggle buttons (delegated — regenerated on every language switch) */
function initLangButtons() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-lang-btn]");
    if (btn) setLang(btn.getAttribute("data-lang-btn"));
  });
}

/* Single-open FAQ accordion (delegated — the FAQ list is rebuilt on language switch) */
function initFaqAccordion() {
  document.addEventListener("click", (e) => {
    const toggle = e.target.closest("[data-faq-toggle]");
    if (!toggle) return;

    const panel = document.getElementById(toggle.getAttribute("aria-controls"));
    const sign = toggle.querySelector("[data-faq-sign]");
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    // Close any other open FAQ item for a clean accordion effect
    document.querySelectorAll("[data-faq-toggle]").forEach((other) => {
      if (other !== toggle) {
        other.setAttribute("aria-expanded", "false");
        other.querySelector("[data-faq-sign]").textContent = "+";
        const otherPanel = document.getElementById(other.getAttribute("aria-controls"));
        if (otherPanel) otherPanel.style.maxHeight = null;
      }
    });

    toggle.setAttribute("aria-expanded", String(!isOpen));
    sign.textContent = isOpen ? "+" : "−";
    panel.style.maxHeight = isOpen ? null : panel.scrollHeight + "px";
  });
}

/* Contact form — validates name + email, then opens a pre-filled mailto: link */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const lang = getCurrentLang();
    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const interest = document.getElementById("form-interest").value || t("contact.formInterestGeneral", lang);
    const message = document.getElementById("form-message").value.trim();
    const errorEl = document.getElementById("form-error");

    if (!name || !email) {
      errorEl.classList.remove("hidden");
      return;
    }
    errorEl.classList.add("hidden");

    const subject = `Contactformulier website — ${interest}`;
    const body = `Naam: ${name}\nE-mail: ${email}\nInteresse: ${interest}\n\nBericht:\n${message}`;
    window.location.href = `mailto:info@catteryokaukuejo.nl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    form.classList.add("hidden");
    document.getElementById("form-success").classList.remove("hidden");
  });
}
