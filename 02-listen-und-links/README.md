# Aufgabe 02 – Listen und Links ⭐

## Ziel
Du erstellst eine Seite mit deinen Lieblingsdingen und nützlichen Links.

## Das lernst du
- Ungeordnete Listen `<ul>` (mit Punkten)
- Geordnete Listen `<ol>` (mit Nummern)
- Listeneinträge `<li>`
- Links `<a href="...">`

## To-do
- [ ] Erstelle unter „Meine Lieblingsessen“ eine **ungeordnete Liste** (`<ul>`) mit mindestens 4 Einträgen.
- [ ] Erstelle unter „Mein Morgen“ eine **geordnete Liste** (`<ol>`) mit 5 Schritten (z. B. Aufstehen, Zähne putzen, …).
- [ ] Erstelle unter „Nützliche Links“ eine Liste mit 3 Links:
  - [ ] Ein Link zu `https://wiki.selfhtml.org/`
  - [ ] Ein Link zu `https://developer.mozilla.org/de/`
  - [ ] Ein Link zu einer Webseite deiner Wahl
- [ ] Sorge dafür, dass sich die Links **in einem neuen Tab** öffnen (`target="_blank"`).
- [ ] Erstelle ganz unten einen Link **„Nach oben“**, der zur Überschrift oben springt.

## Tipps
```html
<ul>
    <li>Pizza</li>
    <li>Nudeln</li>
</ul>

<a href="https://www.example.com" target="_blank">Zur Beispielseite</a>
```
- Für „Nach oben“: Gib der `<h1>` ein `id="oben"` und verlinke mit `<a href="#oben">`.

## Bonus
- [ ] Baue eine **verschachtelte Liste** (eine Liste in einem `<li>`), z. B. „Obst“ → „Apfel, Banane“.
- [ ] Erstelle einen E-Mail-Link mit `href="mailto:deine@email.de"`.
