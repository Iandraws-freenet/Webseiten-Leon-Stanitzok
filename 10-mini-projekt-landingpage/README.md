# Aufgabe 10 – Mini-Projekt: Landingpage ⭐⭐⭐

## Ziel
Du baust eine komplette kleine Webseite (Landingpage) für ein **ausgedachtes Produkt** oder einen **Verein**.
Hier wendest du alles an, was du in Aufgabe 01–09 gelernt hast.

## Ideen
- Eine Fitness-App „FitNow“
- Ein Sportverein „FC Coding“
- Ein Food-Truck „Burger Bude“
- Oder etwas Eigenes!

## Aufbau der Seite
Das HTML-Gerüst mit den Bereichen ist schon vorbereitet:

| Bereich | Inhalt | Was du übst |
|---------|--------|-------------|
| `header` | Logo + Navigation | Flexbox (Aufgabe 07) |
| `.hero` | Große Überschrift, Text, Button | Hintergrund, Zentrieren |
| `#vorteile` | 3 Karten mit Vorteilen | Grid oder Flexbox (Aufgabe 08/09) |
| `#ueber-uns` | Bild + Text nebeneinander | Flexbox, Bilder |
| `#kontakt` | Kleines Formular | Formulare (Aufgabe 06) |
| `footer` | Copyright | Text, Farben |

## To-do

### HTML
- [ ] Denk dir einen Namen für dein Produkt/Verein aus und trage ihn als Logo und `<title>` ein.
- [ ] Die Navigation soll auf die Bereiche verlinken (`href="#vorteile"` usw.).
- [ ] Fülle die `.hero` mit `<h1>`, einem Satz und einem Button-Link.
- [ ] Erstelle in `#vorteile` **3 Karten** (`<div class="karte">`) mit Überschrift und Text.
- [ ] Fülle `#ueber-uns` mit einem Bild und einem Text.
- [ ] Erstelle in `#kontakt` ein Formular mit Name, E-Mail, Nachricht und Button.
- [ ] Ergänze den `footer`.

### CSS
- [ ] Lege oben in `:root` deine **Farben** als Variablen fest und nutze sie überall.
- [ ] Header mit Flexbox (Logo links, Menü rechts).
- [ ] Hero-Bereich: große Fläche (`min-height: 60vh`), Inhalt zentriert, farbiger Hintergrund oder Bild.
- [ ] Vorteile: 3 Karten nebeneinander (Grid), auf dem Handy untereinander.
- [ ] Über uns: Bild und Text nebeneinander (Flexbox), auf dem Handy untereinander.
- [ ] Formular schön gestalten.
- [ ] Alle Buttons und Links mit Hover-Effekt.
- [ ] Die Seite soll auf dem **Handy** gut aussehen (Media Query, max. 700px).

## Tipps
```css
:root {
    --hauptfarbe: #2a7ae2;
}

.button {
    background-color: var(--hauptfarbe);
}
```
- Für weiches Scrollen beim Klick auf das Menü: `html { scroll-behavior: smooth; }`
- Arbeite **Bereich für Bereich**. Erst HTML, dann CSS – und immer wieder im Browser testen.

## Bewertung / Checkliste zum Schluss
- [ ] Alle Bereiche sind gefüllt
- [ ] Navigation funktioniert
- [ ] Mindestens ein Bild mit `alt`-Text
- [ ] Farben über CSS-Variablen
- [ ] Flexbox **und** Grid wurden verwendet
- [ ] Hover-Effekte vorhanden
- [ ] Seite funktioniert auf dem Handy

## Bonus
- [ ] Mache den Header „klebend“: `position: sticky; top: 0;`
- [ ] Füge einen Bereich „Preise“ mit 3 Preis-Karten hinzu.
- [ ] Prüfe deinen HTML-Code auf Fehler: https://validator.w3.org/
