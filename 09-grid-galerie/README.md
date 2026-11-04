# Aufgabe 09 – Bildergalerie mit CSS Grid ⭐⭐⭐

## Ziel
Du baust eine Bildergalerie mit **CSS Grid**, die sich an die Bildschirmgröße anpasst (**responsive**).

## Das lernst du
- `display: grid;`
- `grid-template-columns` und die Einheit `fr`
- `gap`
- `object-fit: cover;` für gleich große Bilder
- Media Queries `@media` für Handy/Tablet/PC

## To-do

### HTML
- [ ] In der Galerie sind schon 3 Bilder. Füge **3 weitere** hinzu (insgesamt 6).
  Tipp: Ändere die Zahl am Ende der Adresse, z. B. `https://picsum.photos/id/40/400/300`.
- [ ] Jedes Bild braucht einen `alt`-Text.

### CSS
- [ ] Mache `.galerie` zu einem Grid mit **3 gleich breiten Spalten** (`repeat(3, 1fr)`).
- [ ] Abstand zwischen den Bildern: `15px`.
- [ ] Alle Bilder: Breite 100 %, Höhe `200px`, `object-fit: cover;`, abgerundete Ecken.
- [ ] **Tablet** (max. 800px Breite): nur **2 Spalten**.
- [ ] **Handy** (max. 500px Breite): nur **1 Spalte**.
- [ ] Teste es: Mache das Browserfenster schmaler oder drücke F12 → Handy-Symbol.

## Tipps
```css
.raster {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

@media (max-width: 800px) {
    .raster {
        grid-template-columns: repeat(2, 1fr);
    }
}
```
- Gutes Lernspiel für Grid: **https://cssgridgarden.com/#de**

## Bonus
- [ ] Das erste Bild soll **2 Spalten breit** sein: `grid-column: span 2;`
- [ ] Bilder sollen beim Hover leicht größer werden: `transform: scale(1.05);` + `transition`
- [ ] Probiere statt Media Queries: `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`
