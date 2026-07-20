# Cattery Okaukuejo — website online zetten & CMS koppelen

Deze gids loodst je door het eenmalig online zetten van de site en het
inschakelen van de beheeromgeving (CMS). Daarna hoef je dit nooit meer te
doen — je logt gewoon in op `jouwsite.nl/admin` om teksten en foto's aan te
passen.

Je hebt hiervoor twee **gratis** accounts nodig: **GitHub** (waar de code
staat) en **Netlify** (waar de site draait). Beide maak je zelf aan — dat
kan een AI-assistent niet voor je doen.

## Stap 1 — GitHub-account en repository ✅ gedaan

Repository: `github.com/ericijdo-bit/Cattery`.

## Stap 2 — Netlify-account en site ✅ gedaan

Live op `catteryokaukuejo.netlify.app`.

## Stap 3 — Inloggen via GitHub koppelen

Netlify Identity (het oorspronkelijke plan) bleek niet meer beschikbaar
voor nieuwe projecten. In plaats daarvan logt de CMS in met je **GitHub-
account** — dat vraagt een eenmalige koppeling:

1. Ga naar GitHub → klik rechtsboven op je profielfoto → **Settings** →
   helemaal onderaan links **Developer settings** → **OAuth Apps** →
   **New OAuth App**.
2. Vul in:
   - **Application name**: bv. `Cattery Okaukuejo CMS`
   - **Homepage URL**: `https://catteryokaukuejo.netlify.app`
   - **Authorization callback URL**: `https://catteryokaukuejo.netlify.app/.netlify/functions/callback`
3. Klik **Register application**. Je krijgt een **Client ID** te zien.
   Klik daarna **Generate a new client secret** — kopieer die meteen (hij
   is later niet meer zichtbaar).
4. Ga naar je Netlify-project → **Project configuration** →
   **Environment variables** → **Add a variable** → **Add a single
   variable**, en voeg twee variabelen toe:
   - `OAUTH_CLIENT_ID` = de Client ID van stap 3
   - `OAUTH_CLIENT_SECRET` = de client secret van stap 3
5. Ga naar **Deploys** en klik **Trigger deploy** → **Deploy site** (zodat
   Netlify de nieuwe omgevingsvariabelen meeneemt).

## Stap 4 — Inloggen en beheren

Ga naar `catteryokaukuejo.netlify.app/admin`, klik **Login with GitHub**,
en log in met je GitHub-account. Je ziet het beheerformulier: kittens,
katten, nestjes, show-resultaten, site-instellingen en alle paginateksten —
allemaal met gewone invulvelden en een foto-uploadknop.

Elke keer dat je op **Publish** klikt, wordt de site binnen een paar minuten
automatisch bijgewerkt.

Wil je dat Pascal/Linda ook zelf kunnen inloggen? Voeg hen toe als
**Collaborator** op de GitHub-repository (**Settings** → **Collaborators**
op de repo-pagina) — iedere collaborator kan dan met hun eigen GitHub-
account inloggen op `/admin`.

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
