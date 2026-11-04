# Aufgabe 03 – Bilder und Tabellen ⭐

## Ziel
Du baust eine kleine Seite mit Bildern und einem Stundenplan als Tabelle.

## Das lernst du
- Bilder einfügen mit `<img>`
- Das Attribut `alt` (wichtig für Barrierefreiheit!)
- Tabellen mit `<table>`, `<tr>`, `<th>`, `<td>`

## To-do

### Teil A – Bilder
- [ ] Füge unter „Mein Lieblingsbild“ ein Bild ein. Du kannst diese Adresse benutzen:
  `https://picsum.photos/400/250`
- [ ] Gib dem Bild einen sinnvollen `alt`-Text.
- [ ] Setze die Breite des Bildes mit dem Attribut `width="300"`.
- [ ] Mache das Bild zu einem **Link** (Bild in ein `<a>` packen).

### Teil B – Tabelle
- [ ] Vervollständige die Tabelle „Mein Stundenplan“.
- [ ] Die erste Zeile ist schon da (Kopfzeile mit `<th>`).
- [ ] Füge **mindestens 4 Zeilen** (`<tr>`) mit Uhrzeiten und Fächern hinzu.
- [ ] Jede Zeile braucht genau so viele Zellen (`<td>`) wie die Kopfzeile.

## Tipps
```html
<img src="https://picsum.photos/400/250" alt="Zufälliges Landschaftsbild" width="300">

<tr>
    <td>08:00</td>
    <td>Mathe</td>
</tr>
```
- Das Attribut `border="1"` am `<table>` ist schon gesetzt, damit du die Rahmen siehst.

## Bonus
- [ ] Benutze `<figure>` und `<figcaption>`, um eine Bildunterschrift hinzuzufügen.
- [ ] Verbinde zwei Zellen mit `colspan="2"` (z. B. für „Mittagspause“).
