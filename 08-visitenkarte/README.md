# Aufgabe 08 – Digitale Visitenkarte ⭐⭐

## Ziel
Du baust eine schöne digitale Visitenkarte – diesmal schreibst du **HTML und CSS** selbst.

## So soll es ungefähr aussehen
```
+-----------------------------+
|          ( Foto )           |
|                             |
|        Max Mustermann       |
|    Fachinformatiker Azubi   |
|                             |
|  Ich lerne HTML, CSS und... |
|                             |
|   [HTML] [CSS] [Git]        |
|                             |
|      [ Kontakt aufnehmen ]  |
+-----------------------------+
```

## Das lernst du
- HTML mit sinnvollen **Klassen** strukturieren
- Runde Bilder mit `border-radius: 50%`
- Elemente mit Flexbox zentrieren
- Wiederverwendbare Styles (z. B. `.tag`)

## To-do

### HTML
- [ ] Erstelle in der `.karte` ein Profilbild (`https://i.pravatar.cc/150`) mit der Klasse `profilbild`.
- [ ] Füge deinen Namen als `<h1>` und deinen Beruf als `<p class="beruf">` hinzu.
- [ ] Schreibe einen kurzen Text über dich (`<p class="beschreibung">`).
- [ ] Erstelle einen Bereich `<div class="tags">` mit 3–4 `<span class="tag">` (z. B. HTML, CSS, Git).
- [ ] Füge einen Link `<a class="button">Kontakt aufnehmen</a>` hinzu.

### CSS
- [ ] Zentriere die Karte in der Mitte des Bildschirms (Tipp im CSS).
- [ ] Gestalte die Karte: weiß, Breite `320px`, Innenabstand, abgerundete Ecken, Schatten, Text zentriert.
- [ ] Mache das Profilbild **rund** mit einem Rahmen.
- [ ] Gestalte `.beruf` grau und etwas kleiner.
- [ ] Gestalte die `.tag`-Elemente wie kleine farbige „Pillen“.
- [ ] Gestalte den `.button` mit Hover-Effekt.

## Tipps
```css
/* Etwas mittig auf dem Bildschirm zentrieren */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

## Bonus
- [ ] Die Karte soll beim Drüberfahren leicht nach oben gehen:
  `transform: translateY(-5px);` + `transition: 0.3s;`
- [ ] Füge einen Farbverlauf als Hintergrund der Seite hinzu: `background: linear-gradient(...)`
