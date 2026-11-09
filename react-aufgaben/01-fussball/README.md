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

---

## Teil 3 – ⭐ Erweiterung: Mehr Infos und Links

Fertig mit Teil 1 und 2? Dann wird die Detail-Box jetzt richtig groß!
Unter deinem HTML 3 ist ein neuer Bereich `mehr-infos`. Das JavaScript dafür ist **schon fertig**:
Es lädt sogar das **letzte Spiel** vom Team aus dem Internet.

```
 +---------------------------------------------+
 |  Bayern Munich                       [✕]    |
 |  Gegründet: 1900 ... (dein HTML 3)          |
 |                                             |
 |  [============ Banner-Bild ============]    |
 |                                             |
 |  📋 Steckbrief            👕 Trikot         |
 |  Spitznamen: FC Bayern    [Trikot-Bild]     |
 |  Wettbewerbe:                               |
 |   • German Bundesliga                       |
 |   • DFB-Pokal                               |
 |  Vereinsfarben: 🔴 ⚪ 🔵                     |
 |                                             |
 |              ⚽ Letztes Spiel               |
 |                 2026-10-31                  |
 |   [Wappen] Bayern Munich  2 : 2  Dortmund [Wappen] |
 |                                             |
 |  [📸 Instagram] [👍 Facebook] [▶️ YouTube]   |
 |  [📖 Wikipedia]                             |
 +---------------------------------------------+
```

**Neue Werte, die du benutzen kannst:**

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{team.strBanner}` | Adresse vom Banner-Bild |
| `{team.strEquipment}` | Adresse vom Trikot-Bild |
| `{spitznamen}` | Andere Namen vom Verein, z. B. *FC Bayern* |
| `{wettbewerb}` | Ein Wettbewerb (in der Liste), z. B. *DFB-Pokal* |
| `{link.name}` / `{link.adresse}` | Name und Adresse von einem Social-Media-Link |
| `{wikipedia}` | Adresse der Wikipedia-Suche nach dem Team |
| `{spiel.dateEvent}` | Datum vom letzten Spiel |
| `{spiel.strHomeTeam}` / `{spiel.strAwayTeam}` | Heim-Team / Gast-Team |
| `{spiel.intHomeScore}` / `{spiel.intAwayScore}` | Tore Heim / Tore Gast |
| `{spiel.strHomeTeamBadge}` / `{spiel.strAwayTeamBadge}` | Wappen vom Heim-Team / Gast-Team |

### To-do HTML
- [ ] **HTML 5 – Banner:** `<img className="banner" ... />` mit dem Banner-Bild. Vergiss `alt` nicht!
- [ ] **HTML 6 – Steckbrief:** `<h3>📋 Steckbrief</h3>`, `<p><strong>Spitznamen:</strong> ...</p>` und `<p><strong>Wettbewerbe:</strong></p>`.
  In die Liste (`<li>`) kommt der Name vom Wettbewerb.
- [ ] **HTML 7 – Vereinsfarben:** ein `<p>` mit „Vereinsfarben:“. Die bunten Punkte macht das JavaScript.
- [ ] **HTML 8 – Trikot:** `<h3>👕 Trikot</h3>` und das Trikot-Bild mit `className="trikot"`.
- [ ] **HTML 9 – Letztes Spiel:**
  - oben (9a): `<h3>⚽ Letztes Spiel</h3>` und ein `<p>` mit dem Datum
  - darunter (9b) in einer Reihe: Heim-Wappen, Heim-Team, das Ergebnis in `<span className="tore">2 : 2</span>`, Gast-Team, Gast-Wappen
- [ ] **HTML 10 – Links:** In jeden Link-Button kommt `{link.name}`. Danach schreibst du selbst noch einen Link:
  `<a className="link-button" href={wikipedia} target="_blank">📖 Wikipedia</a>`

> 💡 `target="_blank"` heißt: Der Link öffnet sich in einem **neuen Tab**. So bleibt deine App offen.

### To-do CSS (unten in `style.css`, Bereich **TEIL C**)
- [ ] **CSS 8 – Banner und h3:** Banner mit runden Ecken (`border-radius`), Überschriften in einer Farbe deiner Wahl
- [ ] **CSS 9 – Wettbewerbe:** Abstand zwischen den Listenpunkten. Tipp: `list-style: "🏆 ";` macht einen Pokal statt Punkt!
- [ ] **CSS 10 – Letztes Spiel:** Hintergrund, Innenabstand, runde Ecken. Das Ergebnis (`.tore`) groß und fett, z. B. `font-size: 28px;`
- [ ] **CSS 11 – Link-Buttons:** Hintergrundfarbe, Schriftfarbe, runde Ecken. Beim Drüberfahren (`:hover`) eine andere Farbe.

### Extra-Ideen zur Erweiterung
- [ ] Gib jedem Social-Media-Button seine eigene Farbe (Instagram pink, Facebook blau, YouTube rot). Tipp: `.link-button:nth-child(1) { ... }`
- [ ] Zeige auch die Zuschauerzahl vom letzten Spiel: `{spiel.intSpectators}`
- [ ] Zeige ein Fan-Bild: `{team.strFanart1}`

---

## Tipps
- In React heißt es **`className`** statt `class`.
- Jedes Tag muss geschlossen werden, auch `<img ... />`.
- Wenn die Seite weiß bleibt: **F12** → Konsole. Meistens fehlt ein `/>` oder ein schließendes Tag.
- Farben aussuchen: https://htmlcolorcodes.com/de/

## Extra-Ideen
- [ ] Zeige in der Karte zusätzlich das Gründungsjahr.
- [ ] Die Karte soll beim Drüberfahren (`.karte:hover`) eine andere Rahmenfarbe bekommen.
- [ ] Gib jeder Liga-Taste ein passendes Emoji: 🇩🇪 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇪🇸 (dafür in `LIGEN` den `name` ändern).
