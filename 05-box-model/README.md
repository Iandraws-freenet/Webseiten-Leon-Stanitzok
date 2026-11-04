# Aufgabe 05 – Das Box-Model ⭐⭐

## Ziel
Du lernst, wie Abstände und Rahmen in CSS funktionieren, und gestaltest drei Info-Boxen.

## Das lernst du
Jedes HTML-Element ist eine **Box**. Von innen nach außen:

```
+--------------------------- margin (Außenabstand) ---+
|  +------------------------ border (Rahmen) -------+ |
|  |  +--------------------- padding (Innenabstand) | |
|  |  |        CONTENT (Inhalt)                     | |
|  |  +---------------------------------------------+ |
|  +------------------------------------------------+ |
+-----------------------------------------------------+
```

- `padding` – Abstand **innen** zwischen Inhalt und Rahmen
- `border` – der **Rahmen**
- `margin` – Abstand **außen** zu anderen Elementen

## To-do
- [ ] Bearbeite in `style.css` die Klasse `.box`:
  - [ ] Breite `300px`
  - [ ] Innenabstand `20px`
  - [ ] Rahmen `2px solid` in einer Farbe deiner Wahl
  - [ ] Außenabstand `20px`
  - [ ] Abgerundete Ecken mit `border-radius: 10px`
- [ ] Gib den drei Boxen unterschiedliche Hintergrundfarben (`.box-rot`, `.box-gruen`, `.box-blau`).
- [ ] Zentriere den `.container` auf der Seite mit `margin: 0 auto;` und einer Breite von `400px`.
- [ ] Öffne die Entwicklertools im Browser (**F12**), klicke ein Element an und schau dir das Box-Model an.

## Tipps
```css
.box {
    padding: 20px;           /* oben, rechts, unten, links gleich */
    margin: 10px 20px;       /* oben/unten 10px, links/rechts 20px */
    border: 2px solid black;
}
```

## Bonus
- [ ] Füge `box-sizing: border-box;` hinzu. Was verändert sich an der Größe? Schreibe die Antwort als Kommentar in die CSS-Datei.
- [ ] Gib den Boxen einen Schatten mit `box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);`
