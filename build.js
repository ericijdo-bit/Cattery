#!/usr/bin/env node
/* ==========================================================================
   Cattery Okaukuejo — content build script

   Reads everything under content/ (edited via the Decap CMS admin panel at
   /admin, or by hand as plain JSON) and regenerates:
     - assets/js/i18n.js        (all NL/EN page copy)
     - assets/js/components.js  (kittens, cats, litters, show results, site
                                  settings and photos)

   Netlify runs this automatically on every push (including CMS saves).
   Run it yourself with `node build.js` to preview changes before pushing.

   IMPORTANT: assets/js/i18n.js and assets/js/components.js are generated —
   don't hand-edit the DATA sections in those files, edit content/*.json
   (or this script's templates for structural/behavioural changes) instead.
   ========================================================================== */
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const CONTENT = path.join(ROOT, "content");
const OUT_DIR = path.join(ROOT, "assets", "js");

function readJSON(relPath) {
  return JSON.parse(fs.readFileSync(path.join(CONTENT, relPath), "utf8"));
}

function readFolder(relFolder) {
  const dir = path.join(CONTENT, relFolder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));
}

// Recursively splits { nl: X, en: Y } leaf pairs into two separate trees —
// one per language. Plain strings/numbers pass through unchanged to both.
// Arrays and nested objects are walked recursively.
function unzip(node) {
  if (Array.isArray(node)) {
    const nl = [];
    const en = [];
    for (const item of node) {
      const u = unzip(item);
      nl.push(u.nl);
      en.push(u.en);
    }
    return { nl, en };
  }
  if (node && typeof node === "object") {
    const keys = Object.keys(node);
    if (keys.length === 2 && keys.includes("nl") && keys.includes("en")) {
      return { nl: node.nl, en: node.en };
    }
    const nl = {};
    const en = {};
    for (const key of keys) {
      const u = unzip(node[key]);
      nl[key] = u.nl;
      en[key] = u.en;
    }
    return { nl, en };
  }
  return { nl: node, en: node };
}

function withoutMeta(obj) {
  const { meta, ...rest } = obj;
  return rest;
}

// Decap's "list" widget with a single `field:` (singular) is supposed to
// store plain values, but some versions wrap each item in an object keyed
// by the field name — accept either shape so the CMS's exact behaviour
// never breaks the build.
function unwrapListItem(item) {
  if (typeof item === "string") return item;
  if (item && typeof item === "object") {
    const values = Object.values(item);
    return values[0] || "";
  }
  return item;
}

const ROLE_LABELS = {
  male: { nl: "Kater", en: "Male" },
  female: { nl: "Poes", en: "Female" },
};

// ---------------------------------------------------------------------------
// Load content
// ---------------------------------------------------------------------------
const settings = readJSON("settings.json");
const photos = readJSON("photos.json");
const sitePhotos = readJSON("site-photos.json");
const nav = readJSON("pages/nav.json");
const footer = readJSON("pages/footer.json");
const home = readJSON("pages/home.json");
const kittensPage = readJSON("pages/kittens.json");
const catsPage = readJSON("pages/cats.json");
const aboutPage = readJSON("pages/about.json");
const contactPage = readJSON("pages/contact.json");

const kittensData = readFolder("kittens");
const catsData = readFolder("cats");
const littersData = readFolder("litters");
const showsData = readFolder("shows");

// ---------------------------------------------------------------------------
// TRANSLATIONS (assets/js/i18n.js)
// ---------------------------------------------------------------------------
const navU = unzip(nav);
const footerU = unzip(footer);
const photosU = unzip(photos);
const homeU = unzip(home);
const kittensPageU = unzip(kittensPage);
const catsPageU = unzip(catsPage);
const aboutPageU = unzip(aboutPage);
const contactPageU = unzip(contactPage);
const addressU = unzip(settings.address);

function buildTranslations(lang) {
  const homeL = lang === "nl" ? homeU.nl : homeU.en;
  const kittensL = lang === "nl" ? kittensPageU.nl : kittensPageU.en;
  const catsL = lang === "nl" ? catsPageU.nl : catsPageU.en;
  const aboutL = lang === "nl" ? aboutPageU.nl : aboutPageU.en;
  const contactL = lang === "nl" ? contactPageU.nl : contactPageU.en;
  return {
    nav: lang === "nl" ? navU.nl : navU.en,
    meta: {
      home: homeL.meta,
      kittens: kittensL.meta,
      cats: catsL.meta,
      about: aboutL.meta,
      contact: contactL.meta,
    },
    photos: lang === "nl" ? photosU.nl : photosU.en,
    home: withoutMeta(homeL),
    kittens: withoutMeta(kittensL),
    cats: withoutMeta(catsL),
    about: withoutMeta(aboutL),
    contact: { ...withoutMeta(contactL), address: lang === "nl" ? addressU.nl : addressU.en },
    footer: lang === "nl" ? footerU.nl : footerU.en,
  };
}

const TRANSLATIONS = {
  nl: buildTranslations("nl"),
  en: buildTranslations("en"),
};

// ---------------------------------------------------------------------------
// components.js data
// ---------------------------------------------------------------------------
const SITE = {
  email: settings.email,
  phone: settings.phone,
  facebook: settings.facebook,
  instagram: settings.instagram,
};

const IMAGES = {
  logo: sitePhotos.logo,
  hero: sitePhotos.hero,
  intro: sitePhotos.intro,
  founders: sitePhotos.founders,
  ctabg: sitePhotos.ctabg,
  about: sitePhotos.about,
};
(sitePhotos.gallery || []).forEach((item, i) => {
  IMAGES[`gal${i + 1}`] = unwrapListItem(item);
});

const KITTENS = kittensData.map((k) => ({
  name: k.name,
  color: k.color,
  colorName: k.colorName,
  gender: k.gender,
  litter: k.litter,
  status: k.status,
  img: k.photo,
  desc: k.description,
}));

const CATS = catsData.map((c) => ({
  name: c.name,
  role: ROLE_LABELS[c.role] || { nl: c.role, en: c.role },
  colorName: c.colorName,
  img: c.photo,
  born: c.born,
  desc: c.description,
}));

const PAST_LITTERS = littersData.map((l) => ({
  name: l.name,
  year: l.year,
  img: l.photo,
  desc: l.description,
}));

const SHOW_RESULTS = showsData.map((s) => ({
  cat: s.cat,
  show: s.show,
  year: s.year,
  result: s.result,
}));

// ---------------------------------------------------------------------------
// Write assets/js/i18n.js
// ---------------------------------------------------------------------------
const i18nOut = `/* ==========================================================================
   Cattery Okaukuejo — bilingual support (NL default, EN optional)

   GENERATED FILE — do not hand-edit the TRANSLATIONS object below.
   Edit the source content instead:
     - content/pages/*.json (page copy, in NL + EN side by side)
     - content/photos.json  (photo alt-text captions)
     - content/settings.json (address)
   ...then run \`node build.js\` (or push — Netlify runs it automatically).

   Elements marked with data-i18n="some.key" get their innerHTML replaced by
   the matching translation on load and whenever the visitor toggles language.
   ========================================================================== */

const LANG_STORAGE_KEY = "okaukuejo-lang";
const DEFAULT_LANG = "nl";

const TRANSLATIONS = ${JSON.stringify(TRANSLATIONS, null, 2)};

/* --------------------------------------------------------------------------
   Helpers
   -------------------------------------------------------------------------- */
function getCurrentLang() {
  return localStorage.getItem(LANG_STORAGE_KEY) || DEFAULT_LANG;
}

// Dot-path lookup, e.g. t("home.heroTitle1")
function t(key, lang = getCurrentLang()) {
  const node = key.split(".").reduce((acc, part) => (acc == null ? acc : acc[part]), TRANSLATIONS[lang]);
  if (node === undefined) {
    console.warn(\`Missing translation for "\${key}" (\${lang})\`);
    return key;
  }
  return node;
}

// Applies the current language to every element marked for translation.
// Pages register window.onLanguageChange to re-render JS-driven content
// (cards, FAQ, legends, tabs) whenever the language switches.
function applyTranslations() {
  const lang = getCurrentLang();
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.getAttribute("data-i18n"), lang);
  });

  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    el.setAttribute("content", t(el.getAttribute("data-i18n-content"), lang));
  });

  if (typeof window.onLanguageChange === "function") window.onLanguageChange();
}

function setLang(lang) {
  if (lang !== "nl" && lang !== "en") return;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  applyTranslations();
}
`;

fs.writeFileSync(path.join(OUT_DIR, "i18n.js"), i18nOut);

// ---------------------------------------------------------------------------
// Write assets/js/components.js
// ---------------------------------------------------------------------------
const componentsOut = `/* ==========================================================================
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
   ...then run \`node build.js\` (or push — Netlify runs it automatically).

   Everything below the data (icons, render functions, mountLayout) is
   regular hand-written code — edit it directly here as needed.
   ========================================================================== */

/* --------------------------------------------------------------------------
   Icons
   -------------------------------------------------------------------------- */
const ICONS = {
  paw: \`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.5 10.5c1.1 0 2-1.12 2-2.5s-.9-2.5-2-2.5-2 1.12-2 2.5.9 2.5 2 2.5zm5-3c1.1 0 2-1.12 2-2.5S10.6 2.5 9.5 2.5s-2 1.12-2 2.5.9 2.5 2 2.5zm5 0c1.1 0 2-1.12 2-2.5s-.9-2.5-2-2.5-2 1.12-2 2.5.9 2.5 2 2.5zm5 3c1.1 0 2-1.12 2-2.5S20.6 5.5 19.5 5.5s-2 1.12-2 2.5.9 2.5 2 2.5zM12 12c-2.9 0-7 2.7-7 5.7 0 1.6 1.3 2.8 2.9 2.8.9 0 1.6-.3 2.4-.6.7-.3 1.4-.6 1.7-.6s1 .3 1.7.6c.8.3 1.5.6 2.4.6 1.6 0 2.9-1.2 2.9-2.8 0-3-4.1-5.7-7-5.7z"/>
  </svg>\`,
  menu: \`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>\`,
  close: \`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6 6 18"/></svg>\`,
};

/* --------------------------------------------------------------------------
   Generated from content/ — see the file header above.
   -------------------------------------------------------------------------- */
const IMAGES = ${JSON.stringify(IMAGES, null, 2)};
const SITE = ${JSON.stringify(SITE, null, 2)};
const KITTENS = ${JSON.stringify(KITTENS, null, 2)};
const CATS = ${JSON.stringify(CATS, null, 2)};
const PAST_LITTERS = ${JSON.stringify(PAST_LITTERS, null, 2)};
const SHOW_RESULTS = ${JSON.stringify(SHOW_RESULTS, null, 2)};

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
  return lang === "nl" ? \`\${years} jaar\` : \`\${years} years\`;
}

/* --------------------------------------------------------------------------
   Navbar
   -------------------------------------------------------------------------- */
function renderLangButton() {
  const lang = getCurrentLang();
  const otherLang = lang === "nl" ? "en" : "nl";
  const otherLabel = lang === "nl" ? "EN" : "NL";
  return \`<button type="button" data-lang-btn="\${otherLang}" class="lang-btn">\${otherLabel}</button>\`;
}

function renderNavbar(activePage) {
  const links = NAV_LINKS.map(
    (link) => \`
      <a href="\${link.href}" data-i18n="nav.\${link.key}" class="nav-link \${activePage === link.key ? "active" : ""}">\${t(\`nav.\${link.key}\`)}</a>\`
  ).join("");

  // Mobile menu is always an opaque light panel, so it reuses .nav-link —
  // the #mobile-menu descendant rules in style.css keep its text dark ink.
  const mobileLinks = NAV_LINKS.map(
    (link) => \`
      <a href="\${link.href}" data-i18n="nav.\${link.key}" class="nav-link block px-2 py-3 font-display text-lg font-semibold tracking-wide uppercase \${activePage === link.key ? "active" : ""}">\${t(\`nav.\${link.key}\`)}</a>\`
  ).join("");

  return \`
    <header id="nav-wrap">
      <nav id="site-nav">
        <a href="index.html" class="flex items-center gap-3">
          <img src="\${IMAGES.logo}" alt="Cattery Okaukuejo" class="h-[34px] w-[34px] shrink-0 object-contain" />
          <span class="nav-logo-text font-display text-xl font-semibold tracking-wide">Cattery <span class="text-gold">Okaukuejo</span></span>
        </a>

        <div class="hidden items-center gap-9 md:flex">
          \${links}
        </div>

        <div class="flex items-center gap-4">
          <span class="hidden md:inline-block">\${renderLangButton()}</span>
          <button id="menu-btn" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu" class="md:hidden">
            <span id="menu-icon-open">\${ICONS.menu}</span>
            <span id="menu-icon-close" class="hidden">\${ICONS.close}</span>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" class="md:hidden">
        <div class="space-y-1 px-[8vw] pb-6 pt-2">
          \${mobileLinks}
          <div class="mt-3">\${renderLangButton()}</div>
        </div>
      </div>
    </header>\`;
}

/* --------------------------------------------------------------------------
   Footer
   -------------------------------------------------------------------------- */
function renderFooter() {
  return \`
    <footer class="border-t border-ink/[.08] px-[8vw] pb-10 pt-[72px]">
      <div class="mb-12 grid gap-10" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr));">
        <div>
          <div class="mb-3.5 font-display text-xl tracking-wide text-ink">Cattery <span class="text-gold">Okaukuejo</span></div>
          <p class="max-w-[280px] text-sm leading-relaxed text-ink/55" data-i18n="footer.tagline">\${t("footer.tagline")}</p>
        </div>
        <div>
          <div class="mb-3.5 font-display text-[13px] font-bold uppercase tracking-[.1em] text-gold" data-i18n="footer.addressTitle">\${t("footer.addressTitle")}</div>
          <div class="text-sm leading-loose text-ink/60" data-i18n="contact.address">\${t("contact.address")}</div>
        </div>
        <div>
          <div class="mb-3.5 font-display text-[13px] font-bold uppercase tracking-[.1em] text-gold" data-i18n="footer.contactTitle">\${t("footer.contactTitle")}</div>
          <div class="text-sm leading-loose text-ink/60">\${SITE.email}<br>\${SITE.phone}</div>
        </div>
        <div>
          <div class="mb-3.5 font-display text-[13px] font-bold uppercase tracking-[.1em] text-gold" data-i18n="footer.followTitle">\${t("footer.followTitle")}</div>
          <div class="flex gap-4">
            <a href="\${SITE.facebook}" target="_blank" rel="noopener" class="text-sm">Facebook</a>
            <a href="\${SITE.instagram}" target="_blank" rel="noopener" class="text-sm">Instagram</a>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-4 border-t border-ink/[.08] pt-7">
        <div class="text-[13px] text-ink/40" data-i18n="footer.rights">\${t("footer.rights")}</div>
      </div>
    </footer>\`;
}

/* --------------------------------------------------------------------------
   Photo slots — real <img> when a photo path is given, otherwise falls
   back to the paw placeholder (used for future kittens without a photo yet).
   -------------------------------------------------------------------------- */
function renderPhoto(src, placeholderText, extraClasses = "", extraStyle = "") {
  if (src) {
    return \`<img src="\${src}" alt="\${placeholderText}" class="\${extraClasses}" style="display:block;width:100%;object-fit:cover;\${extraStyle}" />\`;
  }
  return \`
    <div class="ph \${extraClasses}" style="\${extraStyle}">
      <svg class="ph-paw" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\${ICONS.paw.match(/<path[^>]*>/)[0]}</svg>
      <span class="ph-caption">\${placeholderText}</span>
    </div>\`;
}

/* --------------------------------------------------------------------------
   Cards
   -------------------------------------------------------------------------- */
function renderKittenCard(kitten, mode = "full") {
  const lang = getCurrentLang();
  const meta = STATUS_META[kitten.status];
  const photoHeight = mode === "teaser" ? "280px" : "300px";
  return \`
    <div class="fi card-lift glossy-card overflow-hidden rounded border border-ink/[.08]">
      \${renderPhoto(kitten.img, \`Foto: \${kitten.name}\`, "", \`height:\${photoHeight};\`)}
      <div class="p-6">
        <div class="mb-2.5 flex items-center justify-between">
          <div class="font-display text-2xl font-bold text-ink">\${kitten.name}</div>
          <div class="rounded-sm px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[.1em]" style="background:\${meta.bg};color:\${meta.color};">\${meta.label[lang]}</div>
        </div>
        <div class="text-sm text-ink/55 \${mode === "full" ? "mb-3.5" : ""}">\${kitten.colorName} &middot; \${mode === "full" ? translateGender(kitten.gender, lang) + " &middot; " : ""}\${kitten.litter}</div>
        \${mode === "full" ? \`<div class="text-[15px] leading-relaxed text-ink/70">\${kitten.desc[lang]}</div>\` : ""}
      </div>
    </div>\`;
}

function renderCatCard(cat) {
  const lang = getCurrentLang();
  return \`
    <div class="fi card-lift text-center">
      \${renderPhoto(cat.img, \`Foto: \${cat.name}\`, "mb-5 rounded-[4px]", "height:340px;")}
      <div class="font-display text-[26px] font-bold text-ink">\${cat.name}</div>
      <div class="mt-2 font-display text-[13px] font-bold uppercase tracking-[.1em] text-gold">\${cat.role[lang]} &middot; \${cat.colorName}</div>
      <div class="mb-3 text-[13px] text-ink/45">\${catAge(cat.born, lang)}</div>
      <div class="mx-auto max-w-[280px] text-[15px] leading-relaxed text-ink/60">\${cat.desc[lang]}</div>
    </div>\`;
}

function renderColorSwatch(color) {
  const lang = getCurrentLang();
  return \`
    <div class="card-lift glossy-card overflow-hidden rounded border border-ink/10">
      <div class="glossy-swatch" style="height:150px;background:linear-gradient(155deg,\${color.hexLight},\${color.hex} 60%,\${color.hexDark});">
        <div class="absolute inset-0" style="background:linear-gradient(180deg,transparent,rgba(0,0,0,.25));"></div>
      </div>
      <div class="px-[22px] py-5">
        <div class="mb-1.5 font-display text-xl font-bold text-ink">\${color.name}</div>
        <div class="text-sm leading-relaxed text-ink/55">\${color.desc[lang]}</div>
      </div>
    </div>\`;
}

function renderPastLitterCard(litter) {
  const lang = getCurrentLang();
  return \`
    <div class="glossy-card card-lift overflow-hidden rounded border border-ink/[.08]">
      \${renderPhoto(litter.img, \`Foto: \${litter.name}\`, "", "height:260px;")}
      <div class="p-6">
        <div class="mb-1.5 font-display text-2xl font-bold text-ink">\${litter.name}</div>
        <div class="mb-3 text-[13px] font-bold tracking-[.06em] text-gold">\${litter.year}</div>
        <div class="text-sm leading-relaxed text-ink/60">\${litter.desc[lang]}</div>
      </div>
    </div>\`;
}

/* --------------------------------------------------------------------------
   Empty-state card — used when there are no kittens to show (home teaser,
   "Planning" tab, and the "Beschikbaar" tab when nothing matches the filter)
   -------------------------------------------------------------------------- */
function renderEmptyCard({ kicker, title, text, titleSize = "32px" }) {
  return \`
    <div style="text-align:center;background:rgba(42,33,26,.03);border:1px solid rgba(42,33,26,.08);border-radius:4px;padding:64px 8vw;">
      \${kicker ? \`<div class="kicker mb-4">\${kicker}</div>\` : ""}
      <div class="font-display font-semibold" style="font-size:\${titleSize};margin-bottom:\${text ? "14px" : "0"};">\${title}</div>
      \${text ? \`<div class="mx-auto" style="max-width:480px;font-size:16px;color:rgba(42,33,26,.6);">\${text}</div>\` : ""}
    </div>\`;
}

/* --------------------------------------------------------------------------
   Tabs (used for the Kittens "Beschikbaar/Planning/Voorgaande" view switch
   and the Onze katten "Alle/Poezen/Kater/Castraten" filter)
   -------------------------------------------------------------------------- */
function renderTabs(options, activeKey, dataAttr) {
  return options
    .map(
      (o) => \`<button type="button" data-\${dataAttr}="\${o.key}" class="chip \${activeKey === o.key ? "active" : ""}">\${o.label}</button>\`
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
`;

fs.writeFileSync(path.join(OUT_DIR, "components.js"), componentsOut);

console.log("Build complete:");
console.log(`  - ${KITTENS.length} kitten(s)`);
console.log(`  - ${CATS.length} cat(s)`);
console.log(`  - ${PAST_LITTERS.length} past litter(s)`);
console.log(`  - ${SHOW_RESULTS.length} show result(s)`);
console.log("  - assets/js/i18n.js");
console.log("  - assets/js/components.js");
