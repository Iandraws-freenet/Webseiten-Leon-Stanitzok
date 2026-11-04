# Aufgabe 04 – CSS: Farben und Schrift ⭐

## Ziel
Die HTML-Seite ist schon fertig. Du gestaltest sie **nur mit CSS** in `style.css`.

## Das lernst du
- Eine CSS-Datei mit `<link>` einbinden
- Selektoren: Element (`h1`), Klasse (`.hinweis`), ID (`#fusszeile`)
- Eigenschaften: `color`, `background-color`, `font-family`, `font-size`, `text-align`

## To-do
- [ ] Öffne `index.html`: Binde die Datei `style.css` im `<head>` ein (siehe TODO).
- [ ] Öffne `style.css` und bearbeite alle TODOs:
  - [ ] `body`: Hintergrundfarbe hellgrau, Schriftart `Arial, sans-serif`
  - [ ] `h1`: Farbe dunkelblau, zentriert
  - [ ] `h2`: eine Farbe deiner Wahl
  - [ ] `p`: Schriftgröße `18px`, Zeilenabstand `1.5`
  - [ ] `.hinweis`: gelber Hintergrund, fetter Text
  - [ ] `#fusszeile`: kleine Schrift (`12px`), grau, zentriert
- [ ] Prüfe im Browser, ob alles richtig aussieht.

## Tipps
```css
h1 {
    color: darkblue;
    text-align: center;
}
```
- Farben kannst du als Namen (`red`), Hex-Code (`#ff0000`) oder `rgb(255, 0, 0)` angeben.
- Eine **Klasse** schreibst du in CSS mit Punkt: `.hinweis`
- Eine **ID** schreibst du in CSS mit Raute: `#fusszeile`

## Bonus
- [ ] Binde eine Google-Schrift ein (https://fonts.google.com) und verwende sie für die Überschriften.
- [ ] Lass Links beim Drüberfahren die Farbe wechseln: `a:hover { ... }`
