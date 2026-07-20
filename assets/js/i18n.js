/* ==========================================================================
   Cattery Okaukuejo — bilingual support (NL default, EN optional)

   GENERATED FILE — do not hand-edit the TRANSLATIONS object below.
   Edit the source content instead:
     - content/pages/*.json (page copy, in NL + EN side by side)
     - content/photos.json  (photo alt-text captions)
     - content/settings.json (address)
   ...then run `node build.js` (or push — Netlify runs it automatically).

   Elements marked with data-i18n="some.key" get their innerHTML replaced by
   the matching translation on load and whenever the visitor toggles language.
   ========================================================================== */

const LANG_STORAGE_KEY = "okaukuejo-lang";
const DEFAULT_LANG = "nl";

const TRANSLATIONS = {
  "nl": {
    "nav": {
      "home": "Home",
      "kittens": "Kittens",
      "cats": "Onze katten",
      "about": "Over ons",
      "contact": "Contact"
    },
    "meta": {
      "home": {
        "title": "Cattery Okaukuejo | Britse katten met karakter en klasse &mdash; Enschede",
        "description": "Kleinschalige fok van British Shorthair en Longhair in chocolate, lilac, blue, black golden en point &mdash; met liefde grootgebracht in Enschede."
      },
      "kittens": {
        "title": "Kittens | Cattery Okaukuejo",
        "description": "Beschikbare nestjes bij Cattery Okaukuejo &mdash; filter op kleur, lees over onze wachtlijst, ons kittenbeleid en veelgestelde vragen."
      },
      "cats": {
        "title": "Onze katten | Cattery Okaukuejo",
        "description": "Maak kennis met de fokkatten van Cattery Okaukuejo &mdash; gezondheid, karakter en type staan bij elke combinatie voorop."
      },
      "about": {
        "title": "Over ons | Cattery Okaukuejo",
        "description": "Wij zijn Pascal en Linda &mdash; het verhaal achter Cattery Okaukuejo in Enschede."
      },
      "contact": {
        "title": "Contact | Cattery Okaukuejo",
        "description": "Neem contact op met Cattery Okaukuejo in Enschede &mdash; vragen over kittens of het ras? Stuur een bericht."
      }
    },
    "photos": {
      "hero": "Sfeerfoto: kat in luxe interieur",
      "intro": "Foto: fokker met kat",
      "founders": "Foto: de fokkers",
      "cta": "Sfeerfoto kitten",
      "about": "Foto: fokker en katten",
      "gallery": "Foto"
    },
    "home": {
      "heroKicker": "Cattery Okaukuejo &middot; Enschede",
      "heroTitle1": "Britse katten,",
      "heroTitle2": "met karakter en klasse",
      "heroSub": "Kleinschalige fok van British Shorthair en Longhair in chocolate, lilac, blue, black golden en point &mdash; met liefde grootgebracht in Enschede.",
      "heroCta": "Bekijk kittens",
      "introKicker": "Onze cattery",
      "introTitle": "Hier beginnen kleine pootjes aan een leven vol liefde",
      "introText": "Onze katten zijn een belangrijk onderdeel van ons gezin en hun gezondheid, welzijn en geluk staan iedere dag centraal. Met veel liefde, zorg en aandacht geven we onze kittens de best mogelijke start, zodat zij kunnen opgroeien tot gezonde, sociale en gelukkige katten.",
      "statYears": "Jaar ervaring",
      "statPosts": "Berichten gedeeld",
      "statFollowers": "Volgers",
      "badgeText": "&ldquo;Elke kitten gaat pas mee als hij er klaar voor is.&rdquo;",
      "colorsKicker": "Kleuren &amp; rassen",
      "colorsTitle": "Waar wij in gespecialiseerd zijn",
      "kittensKicker": "Beschikbaar nu",
      "kittensTitle": "Uitgelichte kittens",
      "kittensSeeAll": "Bekijk alle kittens",
      "galleryKicker": "Momentopnames",
      "galleryTitle": "Uit het leven van de cattery",
      "trustBadges": [
        "Gezondheidsgetest fokprogramma",
        "Kittens groeien op in huiselijke kring",
        "Levenslang advies &amp; nazorg",
        "Kleinschalig, max. 2 nestjes/jaar"
      ],
      "foundersKicker": "De fokkers",
      "foundersTitle": "Graag stellen wij ons voor",
      "foundersText": "Wij fokken British Shorthair en Longhair vanuit ons huis in Enschede, middenin het gezin. Elke keuze in ons fokprogramma draait om gezondheid, karakter en de zeldzame kleuren waar we verliefd op werden.",
      "foundersCta": "Lees meer over ons",
      "testimonialsKicker": "Wat eigenaren vertellen",
      "testimonials": [
        {
          "quote": "We wisten niet dat een kitten zo veel karakter kon hebben. Amber past precies bij ons gezin &mdash; dank je wel, Cattery Okaukuejo.",
          "author": "&mdash; Familie De Vries"
        },
        {
          "quote": "Ontzettend liefdevol opgevoed en goed gesocialiseerd. We krijgen nog steeds updates en advies, ook maanden later.",
          "author": "&mdash; Sanne, nieuwe eigenaar van Anton"
        },
        {
          "quote": "Duidelijk, eerlijk en met heel veel kennis van het ras. Precies wat je zoekt bij de aanschaf van een kitten.",
          "author": "&mdash; Mark &amp; Iris"
        }
      ],
      "ctaTitle": "Benieuwd of er een kitten bij jouw gezin past?",
      "ctaButton": "Neem contact op"
    },
    "kittens": {
      "kicker": "Beschikbare nestjes",
      "title": "Onze kittens",
      "sub": "Filter op kleur om te zien welke kittens beschikbaar zijn.",
      "filterAll": "Alle",
      "noneKicker": "Planning 2026",
      "noneTitle": "Op dit moment hebben wij nog geen planning",
      "noneText": "Zodra er een planning bekend is, maken we dit hier kenbaar.",
      "noneAvailableTitle": "Op dit moment hebben wij geen kittens beschikbaar",
      "noneAvailableText": "Bekijk onze planning voor het komende jaar of meld je aan voor de wachtlijst.",
      "viewBeschikbaar": "Beschikbaar",
      "viewPlanning": "Planning",
      "viewPast": "Voorgaande nestjes",
      "waitlistKicker": "Wachtlijst",
      "waitlistTitle": "Alle nestjes zijn gewild &mdash; zo werkt onze wachtlijst",
      "waitlistText": "Onze kittens gaan vaak al voor de geboorte naar een nieuw thuis. Sta je op de wachtlijst, dan houden we je persoonlijk op de hoogte van geplande nestjes en krijg je als eerste de kans om kennis te maken.",
      "waitlistCta": "Meld je aan voor de wachtlijst",
      "waitlistSteps": [
        {
          "n": "1",
          "title": "Vrijblijvend kennismaken",
          "text": "Je vertelt ons wat je zoekt qua kleur en karakter, wij vertellen over geplande nestjes."
        },
        {
          "n": "2",
          "title": "Plaats op de wachtlijst",
          "text": "Met een kleine aanbetaling reserveer je een plek voor het eerstvolgende passende nestje."
        },
        {
          "n": "3",
          "title": "Kitten kiezen",
          "text": "Zodra de kittens zo'n 6 weken oud zijn, kom je langs om kennis te maken en je kitten te kiezen."
        },
        {
          "n": "4",
          "title": "Ophalen bij ~13 weken",
          "text": "Je kitten verhuist pas als hij gezond, gevaccineerd, gechipt en er echt klaar voor is."
        }
      ],
      "policyKicker": "Kittenbeleid",
      "policyTitle": "Zo werkt het aanvragen van een kitten",
      "policySub": "Om onze kittens een goede start en een passend nieuw thuis te geven, hanteren wij een aantal duidelijke afspraken.",
      "policyItems": [
        {
          "title": "Aanvraag",
          "text": "Interesse in een kitten? Vul het aanvraagformulier in via Contact, dan nemen wij persoonlijk contact met je op."
        },
        {
          "title": "Kennismaking",
          "text": "Voordat je een kitten reserveert, plannen we graag een kennismaking bij ons thuis in Enschede."
        },
        {
          "title": "Aanbetaling",
          "text": "Bij reservering vragen we een aanbetaling. Deze is niet-restitueerbaar, tenzij de cattery de plaatsing niet na kan komen."
        },
        {
          "title": "Gezondheid",
          "text": "Elke kitten gaat mee gechipt, gevaccineerd, ontwormd en met een gezondheidsverklaring van de dierenarts."
        },
        {
          "title": "Castratie/sterilisatie",
          "text": "Kittens die niet voor de fok bestemd zijn, gaan mee onder een castratie-/sterilisatiecontract."
        },
        {
          "title": "Ophalen",
          "text": "Je kitten verhuist op zijn vroegst bij 13 weken, wanneer hij er echt klaar voor is."
        }
      ],
      "policyCta": "Kitten aanvragen",
      "faqKicker": "Veelgestelde vragen",
      "faqTitle": "Vragen over onze kittens",
      "faq": [
        {
          "q": "Hoe oud is een kitten als hij naar zijn nieuwe huis mag?",
          "a": "Onze kittens verhuizen op zijn vroegst bij 13 weken, gezond, gevaccineerd, ontwormd en gechipt."
        },
        {
          "q": "Krijg ik de stamboom en gezondheidspapieren mee?",
          "a": "Ja, elke kitten gaat mee met stamboom, vaccinatieboekje, chipregistratie en een informatiepakket over voeding en verzorging."
        },
        {
          "q": "Kan ik mijn kitten van tevoren bezoeken?",
          "a": "Zeker &mdash; zodra de kittens oud genoeg zijn voor bezoek plannen we graag een kennismaking bij ons thuis in Enschede."
        },
        {
          "q": "Hoeveel kost een kitten bij Cattery Okaukuejo?",
          "a": "De prijs hangt af van kleur, lijn en show-potentieel. Neem contact op voor de actuele prijzen per nestje."
        },
        {
          "q": "Werken jullie met een reserveringsaanbetaling?",
          "a": "Ja, met een aanbetaling zet je jouw plek op de wachtlijst vast voor het eerstvolgende passende nestje."
        },
        {
          "q": "Blijven jullie beschikbaar na de verhuizing van mijn kitten?",
          "a": "Altijd. We houden graag contact en staan klaar met advies, ook lang nadat je kitten bij je thuis is."
        }
      ]
    },
    "cats": {
      "kicker": "Onze kater &amp; poezen",
      "title": "Onze katten",
      "sub": "Gezondheid, karakter en type staan bij elke combinatie voorop.",
      "tabAll": "Alle",
      "tabFemales": "Onze poezen",
      "tabMale": "Onze kater",
      "tabNeutered": "Castraten",
      "neuterTitle": "Op dit moment geen katten beschikbaar",
      "neuterText": "Af en toe biedt een van onze katten, die niet langer voor de fok wordt ingezet, een plekje voor herplaatsing als huisdier &mdash; gecastreerd of gesteriliseerd. Op dit moment is dat niet het geval. Interesse voor de toekomst? Neem gerust contact op.",
      "showKicker": "Kattenshows",
      "showTitle": "Onze show-resultaten",
      "showSub": "We laten onze katten graag af en toe beoordelen door onafhankelijke keurmeesters op shows van rasvereniging Mundikat."
    },
    "about": {
      "kicker": "Ons verhaal",
      "title": "Wij zijn Pascal en Linda",
      "p1": "Wij zijn Pascal en Linda en samen met onze kinderen Senna en Mad&eacute;e wonen wij in Enschede. Onze liefde voor dieren is altijd een belangrijk onderdeel geweest van ons leven. Toen onze Britse kortharen Archie en Ollie bij ons kwamen wonen, groeide niet alleen onze liefde voor dit bijzondere ras, maar ontstond ook de wens om ons verder te verdiepen in Brits kort- en langharen en het verantwoord starten van een kleinschalige hobbycattery.",
      "p2": "In 2021 hebben we de stap gezet. We vonden het belangrijk om goed voorbereid aan dit avontuur te beginnen en hebben ons daarom verdiept in gezondheid, verzorging en genetica. Zo volgden wij onder meer de opleiding houder voor honden en katten en een cursus genetica. Ook zijn we aangesloten bij een rasvereniging (Mundikat) en zijn we af en toe te vinden op kattenshows &mdash; hier vinden wij het leuk om kennis uit te wisselen met andere liefhebbers en onze katten te laten beoordelen door onafhankelijke keurmeesters.",
      "p3": "Onze katten zijn voor ons in de eerste plaats onze huisdieren en maken onderdeel uit van ons gezin. Daarom kiezen wij er bewust voor om slechts af en toe een nestje te hebben, zodat we ieder kitten en moederpoes alle aandacht, liefde en zorg kunnen geven die zij verdienen. In november 2022 is ons eerste nestje geboren &mdash; een bijzondere ervaring waar we ontzettend van genoten hebben.",
      "valuesTitle": "Waar we voor staan",
      "values": [
        {
          "title": "Gezondheid voorop",
          "text": "DNA- en hartonderzoek bij alle fokdieren, in samenwerking met een gespecialiseerde dierenarts."
        },
        {
          "title": "Kleinschalig",
          "text": "Een beperkt aantal nestjes per jaar, zodat elke kitten persoonlijke aandacht krijgt."
        },
        {
          "title": "Levenslang betrokken",
          "text": "Ook na vertrek staan we klaar met advies &mdash; onze band met een kitten stopt nooit."
        }
      ],
      "healthKicker": "Gezondheid en welzijn",
      "healthTitle": "Waar wij onze katten op testen",
      "healthSub": "Onze fokkatten worden regelmatig getest op erfelijke en besmettelijke aandoeningen, zodat we bewust en verantwoord fokken.",
      "healthTests": [
        {
          "abbr": "HCM",
          "name": "Hypertrofische cardiomyopathie (hartscreening)"
        },
        {
          "abbr": "PKD",
          "name": "Polycysteuze nierziekte"
        },
        {
          "abbr": "FIV",
          "name": "Kattenaids"
        },
        {
          "abbr": "FeLV",
          "name": "Feline leukemie"
        },
        {
          "abbr": "FIP",
          "name": "Feline infectieuze peritonitis"
        }
      ]
    },
    "contact": {
      "kicker": "Neem contact op",
      "title": "Laten we kennismaken",
      "sub": "Heb je interesse in een kitten, of gewoon een vraag over het ras? Stuur een bericht, we reageren binnen enkele dagen.",
      "formName": "Naam",
      "formEmail": "E-mailadres",
      "formInterest": "Interesse in",
      "formInterestGeneral": "Algemene vraag",
      "formMessage": "Bericht",
      "formSubmit": "Verstuur bericht",
      "formSuccess": "Bedankt! Je e-mailprogramma opent met je bericht klaar om te versturen naar Cattery Okaukuejo.",
      "formErrorMsg": "Vul in ieder geval je naam en e-mailadres in.",
      "formHint": "Opent je e-mailprogramma met het bericht vooraf ingevuld.",
      "addressLabel": "Locatie",
      "followLabel": "Volg ons",
      "address": "Enschede, Nederland"
    },
    "footer": {
      "rights": "&copy; 2026 Cattery Okaukuejo. Alle rechten voorbehouden.",
      "tagline": "Kleinschalige fok van British Shorthair en Longhair, met liefde grootgebracht in Enschede.",
      "addressTitle": "Adres",
      "contactTitle": "Contact",
      "followTitle": "Volg ons"
    }
  },
  "en": {
    "nav": {
      "home": "Home",
      "kittens": "Kittens",
      "cats": "Our cats",
      "about": "About",
      "contact": "Contact"
    },
    "meta": {
      "home": {
        "title": "Cattery Okaukuejo | British cats raised with character &mdash; Enschede",
        "description": "Small-scale breeder of British Shorthair and Longhair in chocolate, lilac, blue, black golden and point &mdash; raised with love in Enschede."
      },
      "kittens": {
        "title": "Kittens | Cattery Okaukuejo",
        "description": "Available litters at Cattery Okaukuejo &mdash; filter by colour, read about our waiting list, kitten policy and frequently asked questions."
      },
      "cats": {
        "title": "Our cats | Cattery Okaukuejo",
        "description": "Meet the breeding cats of Cattery Okaukuejo &mdash; health, temperament and type come first in every pairing."
      },
      "about": {
        "title": "About | Cattery Okaukuejo",
        "description": "We are Pascal and Linda &mdash; the story behind Cattery Okaukuejo in Enschede."
      },
      "contact": {
        "title": "Contact | Cattery Okaukuejo",
        "description": "Get in touch with Cattery Okaukuejo in Enschede &mdash; questions about kittens or the breed? Send a message."
      }
    },
    "photos": {
      "hero": "Atmosphere photo: cat in a luxury interior",
      "intro": "Photo: breeder with cat",
      "founders": "Photo: the breeders",
      "cta": "Atmosphere photo of a kitten",
      "about": "Photo: breeder and cats",
      "gallery": "Photo"
    },
    "home": {
      "heroKicker": "Cattery Okaukuejo &middot; Enschede, NL",
      "heroTitle1": "British cats,",
      "heroTitle2": "raised with character",
      "heroSub": "Small-scale breeder of British Shorthair and Longhair in chocolate, lilac, blue, black golden and point &mdash; raised with love in Enschede.",
      "heroCta": "View kittens",
      "introKicker": "Our cattery",
      "introTitle": "Where little paws begin a life full of love",
      "introText": "Our cats are an important part of our family, and their health, wellbeing and happiness come first every day. With love, care and attention we give our kittens the best possible start, so they can grow into healthy, social and happy cats.",
      "statYears": "Years of experience",
      "statPosts": "Posts shared",
      "statFollowers": "Followers",
      "badgeText": "&ldquo;Every kitten leaves only when they're truly ready.&rdquo;",
      "colorsKicker": "Colours &amp; breeds",
      "colorsTitle": "What we specialise in",
      "kittensKicker": "Available now",
      "kittensTitle": "Featured kittens",
      "kittensSeeAll": "View all kittens",
      "galleryKicker": "Snapshots",
      "galleryTitle": "Life at the cattery",
      "trustBadges": [
        "Health-tested breeding program",
        "Kittens raised in a home environment",
        "Lifelong advice &amp; support",
        "Small-scale, max. 2 litters/year"
      ],
      "foundersKicker": "The breeders",
      "foundersTitle": "Let us introduce ourselves",
      "foundersText": "We breed British Shorthair and Longhair from our home in Enschede, right in the middle of the family. Every choice in our program comes down to health, temperament and the rare colours we fell for.",
      "foundersCta": "Read more about us",
      "testimonialsKicker": "What owners say",
      "testimonials": [
        {
          "quote": "We never knew a kitten could have so much personality. Amber fits our family perfectly &mdash; thank you, Cattery Okaukuejo.",
          "author": "&mdash; The De Vries family"
        },
        {
          "quote": "Raised with so much love and beautifully socialised. We still get updates and advice, even months later.",
          "author": "&mdash; Sanne, Anton's new owner"
        },
        {
          "quote": "Clear, honest, and hugely knowledgeable about the breed. Exactly what you want when getting a kitten.",
          "author": "&mdash; Mark &amp; Iris"
        }
      ],
      "ctaTitle": "Wondering if a kitten would fit your family?",
      "ctaButton": "Get in touch"
    },
    "kittens": {
      "kicker": "Available litters",
      "title": "Our kittens",
      "sub": "Filter by colour to see which kittens are currently available.",
      "filterAll": "All",
      "noneKicker": "Planning 2026",
      "noneTitle": "No litters are planned yet",
      "noneText": "We'll announce it here as soon as a litter is planned.",
      "noneAvailableTitle": "No kittens currently available",
      "noneAvailableText": "Check our planning for the coming year, or join the waiting list.",
      "viewBeschikbaar": "Available",
      "viewPlanning": "Planning",
      "viewPast": "Past litters",
      "waitlistKicker": "Waiting list",
      "waitlistTitle": "Every litter is in demand &mdash; how our waiting list works",
      "waitlistText": "Our kittens are often spoken for before they're even born. Join the waiting list and we'll keep you personally updated on planned litters, giving you first chance to meet a kitten.",
      "waitlistCta": "Join the waiting list",
      "waitlistSteps": [
        {
          "n": "1",
          "title": "A no-obligation chat",
          "text": "Tell us what you're looking for in colour and character, we tell you about upcoming litters."
        },
        {
          "n": "2",
          "title": "Get on the list",
          "text": "A small deposit reserves you a spot for the next matching litter."
        },
        {
          "n": "3",
          "title": "Choose your kitten",
          "text": "Once the kittens are around 6 weeks old, you visit to meet them and choose yours."
        },
        {
          "n": "4",
          "title": "Pick-up at ~13 weeks",
          "text": "Your kitten only leaves once healthy, vaccinated, chipped, and truly ready."
        }
      ],
      "policyKicker": "Kitten policy",
      "policyTitle": "How applying for a kitten works",
      "policySub": "To give our kittens a good start and the right new home, we work with a few clear agreements.",
      "policyItems": [
        {
          "title": "Application",
          "text": "Interested in a kitten? Fill in the application form via Contact, and we'll get in touch personally."
        },
        {
          "title": "Meet & greet",
          "text": "Before reserving a kitten, we like to plan a meeting at our home in Enschede."
        },
        {
          "title": "Deposit",
          "text": "A deposit is required to reserve a kitten. It is non-refundable, unless we're unable to deliver the placement."
        },
        {
          "title": "Health",
          "text": "Every kitten leaves chipped, vaccinated, dewormed and with a vet health certificate."
        },
        {
          "title": "Neuter/spay contract",
          "text": "Kittens not intended for breeding leave under a neuter/spay contract."
        },
        {
          "title": "Pick-up",
          "text": "Your kitten moves at 13 weeks at the earliest, once truly ready."
        }
      ],
      "policyCta": "Apply for a kitten",
      "faqKicker": "FAQ",
      "faqTitle": "Questions about our kittens",
      "faq": [
        {
          "q": "How old is a kitten when it goes to its new home?",
          "a": "Our kittens leave at 13 weeks at the earliest, healthy, vaccinated, dewormed and chipped."
        },
        {
          "q": "Do I get a pedigree and health papers?",
          "a": "Yes, every kitten comes with a pedigree, vaccination booklet, chip registration and an info pack on feeding and care."
        },
        {
          "q": "Can I visit my kitten beforehand?",
          "a": "Absolutely &mdash; once the kittens are old enough for visits, we're happy to plan a meeting at our home in Enschede."
        },
        {
          "q": "How much does a kitten cost at Cattery Okaukuejo?",
          "a": "Price depends on colour, line and show potential. Get in touch for current pricing per litter."
        },
        {
          "q": "Do you work with a reservation deposit?",
          "a": "Yes, a deposit secures your spot on the waiting list for the next matching litter."
        },
        {
          "q": "Do you stay available after my kitten moves in?",
          "a": "Always. We love staying in touch and are here with advice long after your kitten comes home."
        }
      ]
    },
    "cats": {
      "kicker": "Our male &amp; females",
      "title": "Our cats",
      "sub": "Health, temperament and type come first in every pairing.",
      "tabAll": "All",
      "tabFemales": "Our females",
      "tabMale": "Our male",
      "tabNeutered": "Neutered",
      "neuterTitle": "No cats currently available",
      "neuterText": "Occasionally, one of our cats that's no longer part of the breeding program becomes available for rehoming as a pet &mdash; neutered or spayed. That's not currently the case, but feel free to get in touch for future availability.",
      "showKicker": "Cat shows",
      "showTitle": "Our show results",
      "showSub": "We enjoy occasionally having our cats judged by independent judges at shows held by breed association Mundikat."
    },
    "about": {
      "kicker": "Our story",
      "title": "We are Pascal and Linda",
      "p1": "We are Pascal and Linda, and together with our children Senna and Mad&eacute;e we live in Enschede. Our love for animals has always been an important part of our lives. When our British Shorthairs Archie and Ollie came to live with us, our love for this special breed grew &mdash; and so did the wish to dive deeper into British Short- and Longhair and responsibly start a small-scale hobby cattery.",
      "p2": "In 2021 we took the step. We felt it was important to prepare well for this adventure, so we studied health, care and genetics &mdash; following courses on cat and dog keeping and genetics. We're also members of a breed association (Mundikat) and occasionally attend cat shows, where we love exchanging knowledge with other enthusiasts and having our cats judged by independent judges.",
      "p3": "Our cats are, first and foremost, our pets and part of our family. That's why we deliberately choose to have only the occasional litter, so every kitten and mother cat gets all the attention, love and care they deserve. Our first litter was born in November 2022 &mdash; a special experience we thoroughly enjoyed.",
      "valuesTitle": "What we stand for",
      "values": [
        {
          "title": "Health first",
          "text": "DNA and heart screening for every breeding cat, together with a specialised vet."
        },
        {
          "title": "Small scale",
          "text": "A limited number of litters per year, so every kitten gets personal attention."
        },
        {
          "title": "Lifelong support",
          "text": "Our bond with a kitten never ends &mdash; we're here for advice long after they leave."
        }
      ],
      "healthKicker": "Health and welfare",
      "healthTitle": "What we screen our cats for",
      "healthSub": "Our breeding cats are regularly tested for hereditary and infectious conditions, so we can breed deliberately and responsibly.",
      "healthTests": [
        {
          "abbr": "HCM",
          "name": "Hypertrophic cardiomyopathy (heart screening)"
        },
        {
          "abbr": "PKD",
          "name": "Polycystic kidney disease"
        },
        {
          "abbr": "FIV",
          "name": "Feline immunodeficiency virus"
        },
        {
          "abbr": "FeLV",
          "name": "Feline leukemia virus"
        },
        {
          "abbr": "FIP",
          "name": "Feline infectious peritonitis"
        }
      ]
    },
    "contact": {
      "kicker": "Get in touch",
      "title": "Let's connect",
      "sub": "Interested in a kitten, or just have a question about the breed? Send a message &mdash; we reply within a few days.",
      "formName": "Name",
      "formEmail": "Email address",
      "formInterest": "Interested in",
      "formInterestGeneral": "General question",
      "formMessage": "Message",
      "formSubmit": "Send message",
      "formSuccess": "Thank you! Your email app will open with your message ready to send to Cattery Okaukuejo.",
      "formErrorMsg": "Please fill in at least your name and email address.",
      "formHint": "Opens your email app with the message pre-filled.",
      "addressLabel": "Location",
      "followLabel": "Follow us",
      "address": "Enschede, The Netherlands"
    },
    "footer": {
      "rights": "&copy; 2026 Cattery Okaukuejo. All rights reserved.",
      "tagline": "Small-scale breeder of British Shorthair and Longhair, raised with love in Enschede.",
      "addressTitle": "Address",
      "contactTitle": "Contact",
      "followTitle": "Follow us"
    }
  }
};

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
    console.warn(`Missing translation for "${key}" (${lang})`);
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
