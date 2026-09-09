# Portfolio: projectupdate met screenshots en video

Deze versie bouwt voort op Portfolio-English.zip. Alle portfolioteksten blijven Engels.
De originele taal van de screenshots en de video is behouden.

## Wat is nieuw?

Read The Room is het eerste, uitgelichte project. De projectkaart toont echte
app-screenshots. De uitgebreide projectpagina vermeldt de duur van zes maanden,
de app, de gebruikte technieken en de door Elisa gemaakte productvideo.
Er staan acht aanklikbare app-screenshots op de pagina. Op een telefoon kun je
horizontaal door de galerie vegen. In de vergroting werken de knoppen Previous,
Next en Close, de pijltjestoetsen en Escape. De screenshots zijn niet inhoudelijk
veranderd. De video heeft een eigen speler met bediening; hij speelt niet automatisch.

Joke van Boxtel Fonds staat als vijfde project, onderaan het overzicht. De echte
website-afbeelding vervangt de tijdelijke tekstcover. De tekst beschrijft de
stichting, studieondersteuning, informatie voor aanvragers en het aanvraagformulier.

Volgorde: Read The Room > Gebarentaal bij Intake > Open Hiring > Heemraadshive >
Joke van Boxtel Fonds. Ook de nummers en 'Keep exploring'-links op de
projectpagina's zijn op deze volgorde afgestemd.

## Dit pakket op je bestaande portfolio toepassen

1. Maak een kopie van je huidige projectmap als back-up.
2. Pak de ZIP helemaal uit.
3. Open de uitgepakte map Portfolio-update (updatepakket) of Portfolio-English
   (volledige versie).
4. Kopieer de INHOUD naar de bestaande map waar de gepubliceerde index.html staat.
   Kopieer niet de buitenste map als een nieuwe submap in je website.
5. Kies voor bestanden vervangen en mappen samenvoegen. Maak de oude map niet leeg.
6. Commit en push de wijzigingen zoals je bij je huidige website doet.

Laat je bestaande .git, .github, .gitignore en eventueel CNAME staan.
Deze pakketten bevatten geen vervangende Git-instellingen of domeinconfiguratie.
Werk alleen de portfolio-repository bij, niet de Read The Room- of fondswebsite.
Er is niets door ChatGPT naar GitHub gepubliceerd.

Het updatepakket bevat uitsluitend nieuwe en gewijzigde bestanden ten opzichte
van Portfolio-English.zip. Het is geen zelfstandige website: bestaande bestanden
zoals de profielfoto, het cv en de oude projectafbeeldingen blijven nodig.
De volledige versie bevat die ongewijzigde websitebestanden wel.

## Welke code is veranderd?

- index.html: projectvolgorde, projectkaarten, echte afbeeldingen en korte teksten.
- css/style.css: telefoonschermen, fotogalerie, video, dialoogvenster en mobiele layout.
- js/main.js: vergroten van screenshots en volgende/vorige/sluiten.
- projecten/readtheroom.html: uitgebreide projectpagina met alle media en links.
- projecten/joke-van-boxtel-fonds.html: uitgebreide projectpagina en echte website-afbeelding.
- projecten/gebarentaal.html, projecten/open-hiring.html en projecten/heemraadshive.html:
  projectnummer en/of de link naar het volgende project.

Nieuwe media:

- images/readtheroom/: acht app-screenshots, de one-pager en een videoposter.
- images/joke-van-boxtel-fonds/: de website-afbeelding en een kleinere kaartversie.
- videos/readtheroom-product-video.mp4: de productvideo.

De video is een webkopie op 1080 x 1920, 30 beelden per seconde, H.264 met de
bestaande audiotrack. Duur: ongeveer 41 seconden. Bestandsgrootte: ongeveer
10,5 MB. De inhoud en de volledige duur zijn behouden. De oorspronkelijke upload
is niet gewijzigd. Afbeeldingen zijn als WebP-kopie opgenomen.

## Zelf later teksten en media aanpassen

Korte projecttekst: index.html.
Uitgebreide projecttekst: het betreffende bestand in projecten/.
Galerietitels en beschrijvingen: projecten/readtheroom.html.
Video: videos/readtheroom-product-video.mp4.
Galerie-afbeeldingen: images/readtheroom/.

Als je een galerietekst wijzigt, pas dan zowel het zichtbare figcaption als
het data-title/data-caption van de bijbehorende link aan. De vergroting leest
die data-attributen. Voor het toevoegen van een scherm kun je een bestaand
figure.screen-card kopieren; de teller past zich automatisch aan.

## Gebruikte inhoud en bronnen

De aanvullende beschrijvingen zijn gebaseerd op de informatie van Elisa, de
geuploade screenshots en video, en deze projectwebsites (geraadpleegd 9 september 2026):

- https://elisazornig.github.io/ReadTheRoomOnePager/
- https://jokevanboxtelfonds.nl/

De inhoud van de JavaScript-one-pager is ook gelezen in de openbare broncode:
https://github.com/ElisaZornig/ReadTheRoomOnePager/blob/main/src/app/App.tsx
Daar staan onder meer de functies, technieken en de link naar de appdemo:
https://elisazornig.github.io/PLE_Reading_Room/

Er is geen programmeertaal of framework voor de fondswebsite ingevuld zonder
bevestiging. De eerdere, niet-onderbouwde vermelding 'team of five' bij
Read The Room is verwijderd. Er zijn geen gebruikersaantallen, testresultaten
of gemeten effecten verzonnen.

Let op de oorspronkelijke bestandsnamen: stats.jpeg toont boekdetails en
boek.jpeg toont de start van de boekkeuze. In de portfolio hebben deze bestanden
daarom de namen book-details.webp en choose-a-book.webp gekregen.

## Controle

Alle lokale links, afbeeldingen, videopaden en ankers zijn gecontroleerd.
De HTML/CSS en JavaScript zijn lokaal in Chromium gerenderd en getest op
schermbreedtes 320, 390, 768, 1024 en 1440 pixels. Er is gecontroleerd op
ontbrekende afbeeldingen, horizontale pagina-overloop, projectfilters,
mobiele navigatie, de galerij en het afspelen van de video. De publicatie
op je eigen GitHub Pages en het versturen van formulieren op de externe
projectwebsites zijn niet uitgevoerd.
