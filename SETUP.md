# Cattery Okaukuejo — website online zetten & CMS koppelen

Deze gids loodst je door het eenmalig online zetten van de site en het
inschakelen van de beheeromgeving (CMS). Daarna hoef je dit nooit meer te
doen — je logt gewoon in op `jouwsite.nl/admin` om teksten en foto's aan te
passen.

Je hebt hiervoor twee **gratis** accounts nodig: **GitHub** (waar de code
staat) en **Netlify** (waar de site draait). Beide maak je zelf aan — dat
kan een AI-assistent niet voor je doen.

## Stap 1 — GitHub-account en repository

1. Ga naar [github.com](https://github.com) en maak een gratis account aan
   (of log in als je er al een hebt).
2. Klik rechtsboven op **+** → **New repository**.
3. Geef hem een naam, bijvoorbeeld `cattery-okaukuejo`. Laat "Public" of
   "Private" staan zoals je wilt (Private kan geen kwaad, de site werkt
   hetzelfde). Klik **Create repository** — laat de repo verder leeg (geen
   README aanvinken).
4. Je krijgt nu een schermpje met een URL die eruitziet als
   `https://github.com/jouw-gebruikersnaam/cattery-okaukuejo.git`. Stuur die
   naar mij (of plak 'm in de chat) — dan duw ik de code ernaartoe.

## Stap 2 — Netlify-account en site

1. Ga naar [netlify.com](https://netlify.com) en maak een gratis account
   aan. Kies bij het aanmaken voor **"Sign up with GitHub"** — dat maakt
   stap 3 makkelijker.
2. Klik op **Add new site** → **Import an existing project**.
3. Kies **GitHub** en selecteer de repository die je in stap 1 hebt
   aangemaakt.
4. Netlify herkent automatisch de instellingen uit `netlify.toml` in dit
   project (build-commando en publicatiemap) — je hoeft niets aan te
   passen. Klik **Deploy**.
5. Na een minuutje staat je site live op een adres als
   `https://iets-random-123.netlify.app`. Dat mag je later omzetten naar
   een eigen domeinnaam (bv. catteryokaukuejo.nl) via **Domain settings** —
   dat is een aparte, optionele stap.

## Stap 3 — Identity + Git Gateway inschakelen (dit maakt de CMS-login mogelijk)

1. Ga in je Netlify-site naar **Site configuration** → **Identity** (of
   zoek "Identity" in het menu) → klik **Enable Identity**.
2. Scroll naar **Registration preferences** en zet die op **Invite only**
   (zo kan niemand anders zichzelf uitnodigen).
3. Scroll naar **Services** → **Git Gateway** → klik **Enable Git Gateway**.
   Dit is de "brug" die ervoor zorgt dat de CMS namens jou wijzigingen naar
   GitHub kan opslaan, zonder dat jij zelf met git hoeft te werken.
4. Ga naar het tabblad **Identity** bovenaan (niet de instellingen, maar de
   gebruikerslijst) en klik **Invite users**. Vul je eigen e-mailadres in
   (en dat van Pascal/Linda als jullie er samen in willen werken). Je
   krijgt een uitnodigingsmail.
5. Klik de link in die e-mail aan, stel een wachtwoord in — je bent nu een
   CMS-gebruiker.

## Stap 4 — Inloggen en beheren

Ga naar `jouwsite.netlify.app/admin` (of straks je eigen domein + `/admin`),
log in met het wachtwoord van stap 3, en je ziet het beheerformulier:
kittens, katten, nestjes, show-resultaten, site-instellingen en alle
paginateksten — allemaal met gewone invulvelden en een foto-uploadknop.

Elke keer dat je op **Publish** klikt, wordt de site binnen een paar minuten
automatisch bijgewerkt.

## Wat kun je straks aanpassen?

| Onderdeel | Waar in de CMS |
|---|---|
| Kittens toevoegen/wijzigen | "Kittens" |
| Fokkatten (Mowgli, Lilly, ...) | "Onze katten (fokdieren)" |
| Voorgaande nestjes | "Voorgaande nestjes" |
| Kattenshow-resultaten | "Kattenshow-resultaten" |
| E-mail, telefoon, social links, adres | "Site-instellingen" → Contactgegevens |
| Logo, hero-foto, introfoto, galerij | "Site-instellingen" → Vaste foto's |
| Alle teksten per pagina (NL + EN naast elkaar) | "Paginateksten" |

**Niet** via de CMS aanpasbaar (bewust, om de vormgeving niet per ongeluk te
breken): kleurenpalet/hex-codes van de kattenkleuren, lettertypes, en de
algemene opmaak. Wil je dat toch een keer wijzigen, vraag het gewoon.

## Voor de ontwikkelaar (achtergrondinfo)

- `content/` bevat alle brondata (door de CMS bewerkt, of gewoon met de
  hand als platte JSON-bestanden).
- `build.js` zet die content om naar `assets/js/i18n.js` en
  `assets/js/components.js` — **die twee bestanden zijn dus altijd
  gegenereerd** en horen niet met de hand bewerkt te worden. Draai
  `node build.js` lokaal om een voorbeeld te zien; Netlify doet dit
  automatisch bij elke wijziging.
- `admin/config.yml` bepaalt welke velden de CMS toont.
