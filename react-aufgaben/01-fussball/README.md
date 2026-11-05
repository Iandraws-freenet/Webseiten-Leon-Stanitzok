# Aufgabe 01 – Fußball ⚽

## Ziel
Du gestaltest eine Fußball-App. Man kann zwischen **3 Ligen** wechseln, und beim Klick auf ein Team öffnet sich eine **Detail-Box**.

Das JavaScript ist **komplett fertig**: Daten laden, Klicks, Liga wechseln.
**Du schreibst nur HTML und CSS.**

## So soll es am Ende aussehen
```
                 ⚽ Fußball-App
         Die besten Teams aus Europa
   [Bundesliga]  [Premier League]  [La Liga]

 +-----------+  +-----------+  +-----------+
 |  [Wappen] |  |  [Wappen] |  |  [Wappen] |
 |  Augsburg |  |  Bayern   |  |  Dortmund |   ← anklickbar
 +-----------+  +-----------+  +-----------+

 +---------------------------------------------+
 |  Bayern Munich                       [✕]    |
 |  Gegründet: 1900                            |
 |  Stadion: Allianz Arena                     |
 |  Der FC Bayern München ist ...              |
 |  Zur Webseite                               |
 +---------------------------------------------+
```

---

## Teil 1 – HTML (in `index.html`)

Suche im Code nach **`DEIN HTML`**. Dort schreibst du deine HTML-Tags.

Die Daten setzt du mit **geschweiften Klammern** ein. Diese Werte kannst du benutzen:

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{team.strTeam}` | Name, z. B. *Augsburg* |
| `{team.strBadge}` | Adresse vom Wappen-Bild |
| `{team.intFormedYear}` | Gründungsjahr, z. B. *1907* |
| `{team.strStadium}` | Stadion, z. B. *WWK Arena* |
| `{team.strLocation}` | Ort, z. B. *Augsburg, Germany* |
| `{beschreibung}` | Ein kurzer Text über das Team |
| `{webseite}` | Adresse der Webseite |

### To-do
- [ ] **HTML 1 – Kopf:** Schreibe eine `<h1>` mit „⚽ Fußball-App“ und darunter ein `<p className="untertitel">` mit einem Satz deiner Wahl.
- [ ] **HTML 2 – Karte:** Schreibe in die Karte das Wappen und den Namen:
  ```jsx
  <img src={team.strBadge} alt={team.strTeam} />
  <h2>{team.strTeam}</h2>
  ```
- [ ] **HTML 3 – Detail-Box:** Klicke auf eine Karte. Jetzt öffnet sich eine leere Box. Fülle sie mit:
  - einer `<h2>` mit dem Namen
  - drei `<p>`: Gegründet, Stadion, Ort, z. B. `<p><strong>Gegründet:</strong> {team.intFormedYear}</p>`
  - einem `<p>` mit der Beschreibung
  - einem Link: `<a href={webseite} target="_blank">Zur Webseite</a>`
- [ ] **HTML 4 – Fußzeile:** Schreibe in den `<footer>` ein `<p>` mit „Gemacht von DEIN NAME“.

---

## Teil 2 – CSS (in `style.css`)

Oben in der Datei ist das **Layout schon fertig** (Raster, Abstände, Animationen, Handy-Ansicht). Das musst du nicht ändern.
Unten im Bereich **`DEIN CSS`** gestaltest du die App.

### To-do
- [ ] **CSS 1 – Seite:** Hintergrundfarbe (z. B. Rasengrün `#1b7a3a`), Schriftfarbe weiß, eine Schriftart
- [ ] **CSS 2 – Überschrift:** Schriftgröße, Farbe. Der Untertitel etwas kleiner.
- [ ] **CSS 3 – Liga-Buttons:** Hintergrundfarbe, Schriftfarbe, Rahmen, abgerundete Ecken.
  Der **aktive** Button (`.liga-button.aktiv`) soll anders aussehen.
- [ ] **CSS 4 – Karte:** weißer Hintergrund, Innenabstand, abgerundete Ecken, Schatten
- [ ] **CSS 5 – Wappen:** Breite und Höhe (z. B. `90px`)
- [ ] **CSS 6 – Detail-Box:** Hintergrund, Innenabstand, abgerundete Ecken, Farbe der Überschrift und des Links
- [ ] **CSS 7 – Fußzeile:** kleine, helle Schrift

## Tipps
- In React heißt es **`className`** statt `class`.
- Jedes Tag muss geschlossen werden, auch `<img ... />`.
- Wenn die Seite weiß bleibt: **F12** → Konsole. Meistens fehlt ein `/>` oder ein schließendes Tag.
- Farben aussuchen: https://htmlcolorcodes.com/de/

## Extra-Ideen
- [ ] Zeige in der Karte zusätzlich das Gründungsjahr.
- [ ] Die Karte soll beim Drüberfahren (`.karte:hover`) eine andere Rahmenfarbe bekommen.
- [ ] Gib jeder Liga-Taste ein passendes Emoji: 🇩🇪 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇪🇸 (dafür in `LIGEN` den `name` ändern).
