/* ==========================================================================
   Cattery Okaukuejo — shared components & data (luxe design, light theme)

   GENERATED FILE — the DATA below (SITE, IMAGES, KITTENS, CATS,
   PAST_LITTERS, SHOW_RESULTS) is regenerated from content/ by build.js.
   Don't hand-edit it — instead:
     - Kittens: use the CMS ("Kittens" collection) or edit content/kittens/*.json
     - Onze katten: content/cats/*.json
     - Voorgaande nestjes: content/litters/*.json
     - Kattenshow-resultaten: content/shows/*.json
     - Contactgegevens: content/settings.json
     - Vaste foto's (logo/hero/intro/galerij): content/site-photos.json
   ...then run `node build.js` (or push — Netlify runs it automatically).

   Everything below the data (icons, render functions, mountLayout) is
   regular hand-written code — edit it directly here as needed.
   ========================================================================== */

/* --------------------------------------------------------------------------
   Icons
   -------------------------------------------------------------------------- */
const ICONS = {
  paw: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.5 10.5c1.1 0 2-1.12 2-2.5s-.9-2.5-2-2.5-2 1.12-2 2.5.9 2.5 2 2.5zm5-3c1.1 0 2-1.12 2-2.5S10.6 2.5 9.5 2.5s-2 1.12-2 2.5.9 2.5 2 2.5zm5 0c1.1 0 2-1.12 2-2.5s-.9-2.5-2-2.5-2 1.12-2 2.5.9 2.5 2 2.5zm5 3c1.1 0 2-1.12 2-2.5S20.6 5.5 19.5 5.5s-2 1.12-2 2.5.9 2.5 2 2.5zM12 12c-2.9 0-7 2.7-7 5.7 0 1.6 1.3 2.8 2.9 2.8.9 0 1.6-.3 2.4-.6.7-.3 1.4-.6 1.7-.6s1 .3 1.7.6c.8.3 1.5.6 2.4.6 1.6 0 2.9-1.2 2.9-2.8 0-3-4.1-5.7-7-5.7z"/>
  </svg>`,
  menu: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  close: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6 6 18"/></svg>`,
};

/* --------------------------------------------------------------------------
   Generated from content/ — see the file header above.
   -------------------------------------------------------------------------- */
const IMAGES = {
  "logo": "/assets/img/logo.png",
  "hero": "/assets/img/hero.png",
  "intro": "/assets/img/intro.jpeg",
  "founders": "/assets/img/gal4.jpg",
  "ctabg": "/assets/img/ctabg.webp",
  "about": "/assets/img/gal3.jpg",
  "gal1": "/assets/img/gal1.jpg",
  "gal2": "/assets/img/gal2.webp",
  "gal3": "/assets/img/gal3.jpg",
  "gal4": "/assets/img/gal4.jpg",
  "gal5": "/assets/img/gal5.jpg",
  "gal6": "/assets/img/gal6.jpg"
};
const SITE = {
  "email": "info@catteryokaukuejo.nl",
  "phone": "+31 6 00 00 00 00",
  "facebook": "https://facebook.com/catteryokaukuejo",
  "instagram": "https://instagram.com/catteryokaukuejo"
};
const KITTENS = [];
const CATS = [
  {
    "name": "Éclaire",
    "role": {
      "nl": "Poes",
      "en": "Female"
    },
    "colorName": "Brits Korthaar",
    "img": "/assets/img/gal2.webp",
    "born": 2022,
    "desc": {
      "nl": "Een van onze fokpoezen.",
      "en": "One of our breeding females."
    }
  },
  {
    "name": "Ella",
    "role": {
      "nl": "Poes",
      "en": "Female"
    },
    "colorName": "Brits Korthaar",
    "img": "/assets/img/gal3.jpg",
    "born": 2023,
    "desc": {
      "nl": "Een van onze fokpoezen.",
      "en": "One of our breeding females."
    }
  },
  {
    "name": "Lilly",
    "role": {
      "nl": "Poes",
      "en": "Female"
    },
    "colorName": "Brits Langhaar",
    "img": "/assets/img/intro.jpeg",
    "born": 2021,
    "desc": {
      "nl": "Een van onze fokpoezen.",
      "en": "One of our breeding females."
    }
  },
  {
    "name": "Mowgli",
    "role": {
      "nl": "Kater",
      "en": "Male"
    },
    "colorName": "Brits Korthaar",
    "img": "/assets/img/hero.png",
    "born": 2021,
    "desc": {
      "nl": "Onze kater, rustig en zelfverzekerd.",
      "en": "Our male, calm and confident."
    }
  },
  {
    "name": "Sara",
    "role": {
      "nl": "Poes",
      "en": "Female"
    },
    "colorName": "Brits Korthaar",
    "img": "/assets/img/ctabg.webp",
    "born": 2022,
    "desc": {
      "nl": "Een van onze fokpoezen.",
      "en": "One of our breeding females."
    }
  },
  {
    "name": "Yindi",
    "role": {
      "nl": "Poes",
      "en": "Female"
    },
    "colorName": "Brits Langhaar",
    "img": "/assets/img/gal4.jpg",
    "born": 2023,
    "desc": {
      "nl": "Een van onze fokpoezen.",
      "en": "One of our breeding females."
    }
  }
];
const PAST_LITTERS = [
  {
    "name": "A-nest",
    "year": "November 2022",
    "img": "/assets/img/gal1.jpg",
    "desc": {
      "nl": "Ons allereerste nestje — een bijzondere en leerzame ervaring.",
      "en": "Our very first litter — a special and instructive experience."
    }
  }
];
const SHOW_RESULTS = [
  {
    "cat": "Éclaire",
    "show": "Mundikat kattenshow",
    "year": "2024",
    "result": "Excellent 1, Best of Colour"
  },
  {
    "cat": "Lilly",
    "show": "Mundikat kattenshow",
    "year": "2023",
    "result": "Excellent 2"
  },
  {
    "cat": "Mowgli",
    "show": "Mundikat kattenshow",
    "year": "2023",
    "result": "Excellent 1"
  }
];

const NAV_LINKS = [
  { key: "home", href: "index.html" },
  { key: "kittens", href: "kittens.html" },
  { key: "cats", href: "cats.html" },
  { key: "about", href: "about.html" },
  { key: "contact", href: "contact.html" },
];

// Base colour palette for the home page "colours we specialise in" section.
// A fixed design token set, not CMS content — names are used as-is in both
// languages (standard cat-fancy terminology).
const COLORS = [
  { key: "chocolate", hex: "#6b4327", hexLight: "#8a5a38", hexDark: "#4a2c17", name: "Chocolate", desc: { nl: "Warm, diep bruin met een fluweelzachte uitstraling.", en: "Warm, deep brown with a velvety look." } },
  { key: "lilac", hex: "#9c8ea3", hexLight: "#b6a8bd", hexDark: "#786a80", name: "Lilac", desc: { nl: "Zacht roze-grijs, zeldzaam en gewild.", en: "Soft pinkish-grey, rare and sought-after." } },
  { key: "blue", hex: "#7c8794", hexLight: "#9aa5b1", hexDark: "#5a636e", name: "Blue", desc: { nl: "Het klassieke, rookblauwe British-tintje.", en: "The classic, smoky-blue British shade." } },
  { key: "blackgolden", hex: "#3d3122", hexLight: "#5c4a32", hexDark: "#1f1810", name: "Black Golden", desc: { nl: "Diep zwart met een gouden glans in de ondervacht.", en: "Deep black with a golden shimmer in the undercoat." } },
  { key: "point", hex: "#c9b8a3", hexLight: "#e0d3c1", hexDark: "#a3927c", name: "Point (colourpoint)", desc: { nl: "Contrastrijke maskers, oren en staart, met blauwe ogen.", en: "High-contrast mask, ears and tail, with blue eyes." } },
];

const STATUS_META = {
  available: { bg: "rgba(122,169,110,.18)", color: "#8fc47e", label: { nl: "Beschikbaar", en: "Available" } },
  reserved: { bg: "rgba(201,160,92,.18)", color: "#c9a05c", label: { nl: "Gereserveerd", en: "Reserved" } },
  sold: { bg: "rgba(42,33,26,.1)", color: "rgba(42,33,26,.5)", label: { nl: "Verkocht", en: "Sold" } },
};

function translateGender(gender, lang) {
  if (lang === "nl") return gender;
  return gender === "Man" ? "Male" : "Female";
}

function catAge(bornYear, lang = getCurrentLang()) {
  const years = new Date().getFullYear() - bornYear;
  return lang === "nl" ? `${years} jaar` : `${years} years`;
}

/* --------------------------------------------------------------------------
   Navbar
   -------------------------------------------------------------------------- */
function renderLangButton() {
  const lang = getCurrentLang();
  const otherLang = lang === "nl" ? "en" : "nl";
  const otherLabel = lang === "nl" ? "EN" : "NL";
  return `<button type="button" data-lang-btn="${otherLang}" class="lang-btn">${otherLabel}</button>`;
}

function renderNavbar(activePage) {
  const links = NAV_LINKS.map(
    (link) => `
      <a href="${link.href}" data-i18n="nav.${link.key}" class="nav-link ${activePage === link.key ? "active" : ""}">${t(`nav.${link.key}`)}</a>`
  ).join("");

  // Mobile menu is always an opaque light panel, so it reuses .nav-link —
  // the #mobile-menu descendant rules in style.css keep its text dark ink.
  const mobileLinks = NAV_LINKS.map(
    (link) => `
      <a href="${link.href}" data-i18n="nav.${link.key}" class="nav-link block px-2 py-3 font-display text-lg font-semibold tracking-wide uppercase ${activePage === link.key ? "active" : ""}">${t(`nav.${link.key}`)}</a>`
  ).join("");

  return `
    <header id="nav-wrap">
      <nav id="site-nav">
        <a href="index.html" class="flex items-center gap-3">
          <img src="${IMAGES.logo}" alt="Cattery Okaukuejo" class="h-[34px] w-[34px] shrink-0 object-contain" />
          <span class="nav-logo-text font-display text-xl font-semibold tracking-wide">Cattery <span class="text-gold">Okaukuejo</span></span>
        </a>

        <div class="hidden items-center gap-9 md:flex">
          ${links}
        </div>

        <div class="flex items-center gap-4">
          <span class="hidden md:inline-block">${renderLangButton()}</span>
          <button id="menu-btn" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu" class="md:hidden">
            <span id="menu-icon-open">${ICONS.menu}</span>
            <span id="menu-icon-close" class="hidden">${ICONS.close}</span>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" class="md:hidden">
        <div class="space-y-1 px-[8vw] pb-6 pt-2">
          ${mobileLinks}
          <div class="mt-3">${renderLangButton()}</div>
        </div>
      </div>
    </header>`;
}

/* --------------------------------------------------------------------------
   Footer
   -------------------------------------------------------------------------- */
function renderFooter() {
  return `
    <footer class="border-t border-ink/[.08] px-[8vw] pb-10 pt-[72px]">
      <div class="mb-12 grid gap-10" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr));">
        <div>
          <div class="mb-3.5 font-display text-xl tracking-wide text-ink">Cattery <span class="text-gold">Okaukuejo</span></div>
          <p class="max-w-[280px] text-sm leading-relaxed text-ink/55" data-i18n="footer.tagline">${t("footer.tagline")}</p>
        </div>
        <div>
          <div class="mb-3.5 font-display text-[13px] font-bold uppercase tracking-[.1em] text-gold" data-i18n="footer.addressTitle">${t("footer.addressTitle")}</div>
          <div class="text-sm leading-loose text-ink/60" data-i18n="contact.address">${t("contact.address")}</div>
        </div>
        <div>
          <div class="mb-3.5 font-display text-[13px] font-bold uppercase tracking-[.1em] text-gold" data-i18n="footer.contactTitle">${t("footer.contactTitle")}</div>
          <div class="text-sm leading-loose text-ink/60">${SITE.email}<br>${SITE.phone}</div>
        </div>
        <div>
          <div class="mb-3.5 font-display text-[13px] font-bold uppercase tracking-[.1em] text-gold" data-i18n="footer.followTitle">${t("footer.followTitle")}</div>
          <div class="flex gap-4">
            <a href="${SITE.facebook}" target="_blank" rel="noopener" class="text-sm">Facebook</a>
            <a href="${SITE.instagram}" target="_blank" rel="noopener" class="text-sm">Instagram</a>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-4 border-t border-ink/[.08] pt-7">
        <div class="text-[13px] text-ink/40" data-i18n="footer.rights">${t("footer.rights")}</div>
      </div>
    </footer>`;
}

/* --------------------------------------------------------------------------
   Photo slots — real <img> when a photo path is given, otherwise falls
   back to the paw placeholder (used for future kittens without a photo yet).
   -------------------------------------------------------------------------- */
function renderPhoto(src, placeholderText, extraClasses = "", extraStyle = "") {
  if (src) {
    return `<img src="${src}" alt="${placeholderText}" class="${extraClasses}" style="display:block;width:100%;object-fit:cover;${extraStyle}" />`;
  }
  return `
    <div class="ph ${extraClasses}" style="${extraStyle}">
      <svg class="ph-paw" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${ICONS.paw.match(/<path[^>]*>/)[0]}</svg>
      <span class="ph-caption">${placeholderText}</span>
    </div>`;
}

/* --------------------------------------------------------------------------
   Cards
   -------------------------------------------------------------------------- */
function renderKittenCard(kitten, mode = "full") {
  const lang = getCurrentLang();
  const meta = STATUS_META[kitten.status];
  const photoHeight = mode === "teaser" ? "280px" : "300px";
  return `
    <div class="fi card-lift glossy-card overflow-hidden rounded border border-ink/[.08]">
      ${renderPhoto(kitten.img, `Foto: ${kitten.name}`, "", `height:${photoHeight};`)}
      <div class="p-6">
        <div class="mb-2.5 flex items-center justify-between">
          <div class="font-display text-2xl font-bold text-ink">${kitten.name}</div>
          <div class="rounded-sm px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[.1em]" style="background:${meta.bg};color:${meta.color};">${meta.label[lang]}</div>
        </div>
        <div class="text-sm text-ink/55 ${mode === "full" ? "mb-3.5" : ""}">${kitten.colorName} &middot; ${mode === "full" ? translateGender(kitten.gender, lang) + " &middot; " : ""}${kitten.litter}</div>
        ${mode === "full" ? `<div class="text-[15px] leading-relaxed text-ink/70">${kitten.desc[lang]}</div>` : ""}
      </div>
    </div>`;
}

function renderCatCard(cat) {
  const lang = getCurrentLang();
  return `
    <div class="fi card-lift text-center">
      ${renderPhoto(cat.img, `Foto: ${cat.name}`, "mb-5 rounded-[4px]", "height:340px;")}
      <div class="font-display text-[26px] font-bold text-ink">${cat.name}</div>
      <div class="mt-2 font-display text-[13px] font-bold uppercase tracking-[.1em] text-gold">${cat.role[lang]} &middot; ${cat.colorName}</div>
      <div class="mb-3 text-[13px] text-ink/45">${catAge(cat.born, lang)}</div>
      <div class="mx-auto max-w-[280px] text-[15px] leading-relaxed text-ink/60">${cat.desc[lang]}</div>
    </div>`;
}

function renderColorSwatch(color) {
  const lang = getCurrentLang();
  return `
    <div class="card-lift glossy-card overflow-hidden rounded border border-ink/10">
      <div class="glossy-swatch" style="height:150px;background:linear-gradient(155deg,${color.hexLight},${color.hex} 60%,${color.hexDark});">
        <div class="absolute inset-0" style="background:linear-gradient(180deg,transparent,rgba(0,0,0,.25));"></div>
      </div>
      <div class="px-[22px] py-5">
        <div class="mb-1.5 font-display text-xl font-bold text-ink">${color.name}</div>
        <div class="text-sm leading-relaxed text-ink/55">${color.desc[lang]}</div>
      </div>
    </div>`;
}

function renderPastLitterCard(litter) {
  const lang = getCurrentLang();
  return `
    <div class="glossy-card card-lift overflow-hidden rounded border border-ink/[.08]">
      ${renderPhoto(litter.img, `Foto: ${litter.name}`, "", "height:260px;")}
      <div class="p-6">
        <div class="mb-1.5 font-display text-2xl font-bold text-ink">${litter.name}</div>
        <div class="mb-3 text-[13px] font-bold tracking-[.06em] text-gold">${litter.year}</div>
        <div class="text-sm leading-relaxed text-ink/60">${litter.desc[lang]}</div>
      </div>
    </div>`;
}

/* --------------------------------------------------------------------------
   Empty-state card — used when there are no kittens to show (home teaser,
   "Planning" tab, and the "Beschikbaar" tab when nothing matches the filter)
   -------------------------------------------------------------------------- */
function renderEmptyCard({ kicker, title, text, titleSize = "32px" }) {
  return `
    <div style="text-align:center;background:rgba(42,33,26,.03);border:1px solid rgba(42,33,26,.08);border-radius:4px;padding:64px 8vw;">
      ${kicker ? `<div class="kicker mb-4">${kicker}</div>` : ""}
      <div class="font-display font-semibold" style="font-size:${titleSize};margin-bottom:${text ? "14px" : "0"};">${title}</div>
      ${text ? `<div class="mx-auto" style="max-width:480px;font-size:16px;color:rgba(42,33,26,.6);">${text}</div>` : ""}
    </div>`;
}

/* --------------------------------------------------------------------------
   Tabs (used for the Kittens "Beschikbaar/Planning/Voorgaande" view switch
   and the Onze katten "Alle/Poezen/Kater/Castraten" filter)
   -------------------------------------------------------------------------- */
function renderTabs(options, activeKey, dataAttr) {
  return options
    .map(
      (o) => `<button type="button" data-${dataAttr}="${o.key}" class="chip ${activeKey === o.key ? "active" : ""}">${o.label}</button>`
    )
    .join("");
}

/* --------------------------------------------------------------------------
   Mount helper — injects navbar/footer. Call from each page's inline
   script: mountLayout('home'). Re-invoked automatically on language change.
   -------------------------------------------------------------------------- */
let ACTIVE_PAGE = null;

function mountLayout(activePage) {
  if (activePage) ACTIVE_PAGE = activePage;
  const navEl = document.getElementById("navbar");
  const footerEl = document.getElementById("footer");
  if (navEl) navEl.innerHTML = renderNavbar(ACTIVE_PAGE);
  if (footerEl) footerEl.innerHTML = renderFooter();
  // Mobile-menu, nav-scroll and language-switch behaviour are handled via
  // delegated listeners bound once in main.js, so no rebinding is needed
  // here even though this markup gets fully replaced on every language toggle.
  if (typeof syncNavScrollState === "function") syncNavScrollState();
}
