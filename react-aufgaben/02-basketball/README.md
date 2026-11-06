# Aufgabe 02 – Basketball: Go Spurs Go! 🏀

## Ziel
Du gestaltest eine NBA-App im Look der **San Antonio Spurs** (Schwarz und Silber) mit **Suchfeld**, **Sortierung** und **Favoriten** ❤️.
Die App zeigt alle NBA-Teams. Die Spurs sind dein Lieblings-Team!

Das JavaScript ist **komplett fertig**: Daten laden, suchen, sortieren, Favoriten merken.
**Du schreibst nur HTML und CSS.**

## So soll es am Ende aussehen
```
                🏀 NBA-Teams
        Go Spurs Go! Finde dein Lieblings-Team!
       [ Team suchen ...               ]
     [A–Z]  [Älteste zuerst]  [Neueste zuerst]
        30 Teams · 1 Favoriten ❤️

 +-------------------+  +----------------+
 |      [Logo]       |  |     [Logo]     |
 | San Antonio Spurs |  | Boston Celtics |
 |       SAS         |  |      BOS       |
 |    seit 1967      |  |   seit 1946    |
 |    Frost Bank C.  |  |   TD Garden    |
 |        ❤️         |  |      🤍        |
 +-------------------+  +----------------+

   Hintergrund schwarz, Schrift und Rahmen silbern
```

---

## Teil 1 – HTML (in `index.html`)

Suche im Code nach **`DEIN HTML`**. Diese Werte kannst du benutzen:

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{team.strTeam}` | Name, z. B. *San Antonio Spurs* |
| `{team.strBadge}` | Adresse vom Logo-Bild |
| `{team.strTeamShort}` | Abkürzung, z. B. *SAS* |
| `{team.intFormedYear}` | Gründungsjahr |
| `{team.strStadium}` | Halle, z. B. *Frost Bank Center* |
| `{anzahlTeams}` | Wie viele Teams gerade angezeigt werden |
| `{anzahlFavoriten}` | Wie viele Favoriten es gibt |

### To-do
- [ ] **HTML 1 – Kopf:** `<h1>` mit „🏀 NBA-Teams“ und ein `<p className="untertitel">`, z. B. „Go Spurs Go! Finde dein Lieblings-Team!“
- [ ] **HTML 2 – Zähler:** Schreibe ein `<p className="zaehler">` mit dem Text:
  `{anzahlTeams} Teams · {anzahlFavoriten} Favoriten ❤️`
- [ ] **HTML 3 – Karte:** Schreibe in die Karte:
  - das Logo (`<img ... />`)
  - den Namen (`<h2>`)
  - die Abkürzung in einem `<span className="kurz">`
  - das Gründungsjahr („seit 1946“) und die Halle in je einem `<p>`
  
  Der Herz-Button ist schon da. Probiere ihn aus: Such nach „Spurs“ und mach sie zu deinem Favoriten!
- [ ] **HTML 4 – Nichts gefunden:** Tippe „xyz“ ins Suchfeld. Jetzt erscheint eine leere Box.
  Schreibe dort hinein: ein großes Emoji (z. B. 😢) und den Text „Kein Team gefunden“.

---

## Teil 2 – CSS (in `style.css`)

Das **Layout ist oben schon fertig**. Unten im Bereich **`DEIN CSS`** gestaltest du die App im **Spurs-Look**.

**Die Spurs-Farben:**

| Farbe | Code |
|-------|------|
| Schwarz | `#000000` |
| Silber | `#c4ced4` |
| Grau | `#8a8d8f` |
| Weiß | `#ffffff` |

### To-do
- [ ] **CSS 1 – Seite:** schwarzer Hintergrund (oder ein Verlauf: `background: linear-gradient(180deg, #000000, #2b2b2b);`), helle Schrift, Schriftart
- [ ] **CSS 2 – Überschrift, Untertitel, Zähler:** Größen und Farben. Die Überschrift in Silber, Tipp: `text-transform: uppercase;`
- [ ] **CSS 3 – Suchfeld:** Innenabstand, Schriftgröße, abgerundete Ecken (`border-radius: 30px`), kein Rahmen
- [ ] **CSS 4 – Sortier-Buttons:** Farben, Rahmen, abgerundete Ecken. Der aktive Button (`.sortier-button.aktiv`) soll anders aussehen, z. B. silberner Hintergrund mit schwarzer Schrift.
- [ ] **CSS 5 – Karte:** dunkler Hintergrund (z. B. `#1a1a1a`), grauer Rahmen, Innenabstand, abgerundete Ecken, Schatten
- [ ] **CSS 6 – Logo und Text in der Karte:** Logo-Größe, Farbe vom Namen
- [ ] **CSS 7 – Abkürzung (`.kurz`):** wie ein kleines Schild: silberner Hintergrund, schwarze fette Schrift, Innenabstand, runde Ecken
- [ ] **CSS 8 – Herz-Button:** Hintergrundfarbe, Größe der Schrift (das Emoji)
- [ ] **CSS 9 – „Nichts gefunden“-Box:** Hintergrund, Innenabstand, runde Ecken. Das Emoji schön groß.

## Tipps
- In React heißt es **`className`** statt `class`.
- Jedes Tag muss geschlossen werden, auch `<img ... />`.
- Wenn die Seite weiß bleibt: **F12** → Konsole.
- Farben aussuchen: https://htmlcolorcodes.com/de/

## Extra-Ideen
- [ ] Favoriten-Karten sollen anders aussehen. Sie haben zusätzlich die Klasse `favorit`, also kannst du `.karte.favorit { ... }` gestalten. Wie wäre ein silberner Leuchtrahmen: `box-shadow: 0 0 18px #c4ced4;`
- [ ] Für Mutige mit JavaScript: Die Spurs-Karte soll immer besonders aussehen. Tipp: `team.strTeam === "San Antonio Spurs"`
- [ ] Ändere den Platzhalter-Text im Suchfeld (`placeholder="..."`).
- [ ] Probiere andere Schriftarten aus, zum Beispiel von https://fonts.google.com
