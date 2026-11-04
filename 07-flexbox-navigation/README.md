# Aufgabe 07 – Navigation mit Flexbox ⭐⭐

## Ziel
Du baust eine horizontale Navigationsleiste (Menü) mit **Flexbox**.

## Das lernst du
- `display: flex;`
- `justify-content` (Ausrichtung auf der Hauptachse)
- `align-items` (Ausrichtung auf der Querachse)
- `gap` (Abstand zwischen Elementen)
- `list-style`, `text-decoration`, `:hover`

## Ausgangslage
Das HTML ist fertig. Im Moment stehen die Menüpunkte **untereinander** mit Punkten davor. Das wollen wir ändern!

## To-do (alles in `style.css`)
- [ ] Gib dem `header` eine dunkle Hintergrundfarbe und Innenabstand.
- [ ] Mache den `header` zu einem Flex-Container: Logo **links**, Menü **rechts**.
  (`display: flex;` + `justify-content: space-between;` + `align-items: center;`)
- [ ] Entferne bei `nav ul` die Aufzählungspunkte (`list-style: none;`) und den Standard-Abstand (`margin: 0; padding: 0;`).
- [ ] Mache `nav ul` ebenfalls zu einem Flex-Container mit `gap: 20px;`, damit die Links **nebeneinander** stehen.
- [ ] Gestalte die Links: weiße Schrift, keine Unterstreichung.
- [ ] Links sollen beim Drüberfahren (`:hover`) eine andere Farbe bekommen.
- [ ] Der aktive Link (Klasse `.aktiv`) soll unterstrichen oder farbig hervorgehoben sein.

## Tipps
```css
.eltern {
    display: flex;
    justify-content: space-between; /* links und rechts verteilen */
    align-items: center;            /* vertikal mittig */
}
```
- Gutes Lernspiel für Flexbox: **https://flexboxfroggy.com/#de**

## Bonus
- [ ] Probiere andere Werte für `justify-content` aus: `center`, `flex-end`, `space-around`. Schreibe als Kommentar, was passiert.
- [ ] Gib den Links beim Hover einen Hintergrund mit `padding` und `border-radius` – wie Buttons.
