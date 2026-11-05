# Aufgabe 02 – Basketball 🏀

## Ziel
Du gestaltest eine NBA-App mit **Suchfeld**, **Sortierung** und **Favoriten** ❤️.

Das JavaScript ist **komplett fertig**: Daten laden, suchen, sortieren, Favoriten merken.
**Du schreibst nur HTML und CSS.**

## So soll es am Ende aussehen
```
                🏀 NBA-Teams
       Finde dein Lieblings-Team!
       [ Team suchen ...               ]
     [A–Z]  [Älteste zuerst]  [Neueste zuerst]
        10 Teams · 2 Favoriten ❤️

 +----------------+  +----------------+
 |     [Logo]     |  |     [Logo]     |
 | Boston Celtics |  | Atlanta Hawks  |
 |      BOS       |  |      ATL       |
 |   seit 1946    |  |   seit 1946    |
 |   TD Garden    |  | State Farm A.  |
 |      ❤️        |  |      🤍        |
 +----------------+  +----------------+
```

---

## Teil 1 – HTML (in `index.html`)

Suche im Code nach **`DEIN HTML`**. Diese Werte kannst du benutzen:

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{team.strTeam}` | Name, z. B. *Boston Celtics* |
| `{team.strBadge}` | Adresse vom Logo-Bild |
| `{team.strTeamShort}` | Abkürzung, z. B. *BOS* |
| `{team.intFormedYear}` | Gründungsjahr |
| `{team.strStadium}` | Halle, z. B. *TD Garden* |
| `{anzahlTeams}` | Wie viele Teams gerade angezeigt werden |
| `{anzahlFavoriten}` | Wie viele Favoriten es gibt |

### To-do
- [ ] **HTML 1 – Kopf:** `<h1>` mit „🏀 NBA-Teams“ und ein `<p className="untertitel">`.
- [ ] **HTML 2 – Zähler:** Schreibe ein `<p className="zaehler">` mit dem Text:
  `{anzahlTeams} Teams · {anzahlFavoriten} Favoriten ❤️`
- [ ] **HTML 3 – Karte:** Schreibe in die Karte:
  - das Logo (`<img ... />`)
  - den Namen (`<h2>`)
  - die Abkürzung in einem `<span className="kurz">`
  - das Gründungsjahr („seit 1946“) und die Halle in je einem `<p>`
  
  Der Herz-Button ist schon da. Probiere ihn aus!
- [ ] **HTML 4 – Nichts gefunden:** Tippe „xyz“ ins Suchfeld. Jetzt erscheint eine leere Box.
  Schreibe dort hinein: ein großes Emoji (z. B. 😢) und den Text „Kein Team gefunden“.

---

## Teil 2 – CSS (in `style.css`)

Das **Layout ist oben schon fertig**. Unten im Bereich **`DEIN CSS`** gestaltest du die App.

### To-do
- [ ] **CSS 1 – Seite:** Hintergrundfarbe (z. B. Orange `#f57c00`), Schriftfarbe, Schriftart
- [ ] **CSS 2 – Überschrift, Untertitel, Zähler:** Größen und Farben
- [ ] **CSS 3 – Suchfeld:** Innenabstand, Schriftgröße, abgerundete Ecken (`border-radius: 30px`), kein Rahmen
- [ ] **CSS 4 – Sortier-Buttons:** Farben, Rahmen, abgerundete Ecken. Der aktive Button (`.sortier-button.aktiv`) soll anders aussehen.
- [ ] **CSS 5 – Karte:** Hintergrund, Innenabstand, abgerundete Ecken, Schatten
- [ ] **CSS 6 – Logo und Text in der Karte:** Logo-Größe, Farbe vom Namen
- [ ] **CSS 7 – Abkürzung (`.kurz`):** wie ein kleines Schild: Hintergrundfarbe, weiße fette Schrift, Innenabstand, runde Ecken
- [ ] **CSS 8 – Herz-Button:** Hintergrundfarbe, Größe der Schrift (das Emoji)
- [ ] **CSS 9 – „Nichts gefunden“-Box:** Hintergrund, Innenabstand, runde Ecken. Das Emoji schön groß.

## Tipps
- In React heißt es **`className`** statt `class`.
- Jedes Tag muss geschlossen werden, auch `<img ... />`.
- Wenn die Seite weiß bleibt: **F12** → Konsole.
- Farben aussuchen: https://htmlcolorcodes.com/de/

## Extra-Ideen
- [ ] Favoriten-Karten sollen anders aussehen. Sie haben zusätzlich die Klasse `favorit`, also kannst du `.karte.favorit { ... }` gestalten.
- [ ] Ändere den Platzhalter-Text im Suchfeld (`placeholder="..."`).
- [ ] Probiere andere Schriftarten aus, zum Beispiel von https://fonts.google.com
