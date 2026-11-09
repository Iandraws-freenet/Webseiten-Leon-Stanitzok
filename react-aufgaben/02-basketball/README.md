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
        11 Teams · 1 Favoriten ❤️

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

---

## Teil 3 – ⭐ Erweiterung: Klick aufs Team → Details und Links

Jetzt kann man eine Karte **anklicken**! Dann öffnet sich eine **Detail-Box über der Seite** mit mehr Infos,
dem **letzten Spiel** und **Links** zu Webseite, Instagram, YouTube und Wikipedia.
Das JavaScript ist **schon fertig**. Der Herz-Button öffnet die Box übrigens **nicht**, der merkt sich nur den Favoriten.

```
   +------------------------------------------+
   | [=========== Banner-Bild ===========] [✕]|
   |  San Antonio Spurs                       |
   |  Ort: San Antonio, Texas                 |
   |  Halle: Frost Bank Center                |
   |  Gegründet: 1967                         |
   |  Die San Antonio Spurs sind ...          |
   |  Team-Farben: ⚫ ⚪                       |
   |                                          |
   |            🏀 Letztes Spiel              |
   |               2026-11-08                 |
   |  [Logo] Spurs  118 : 109  Lakers [Logo]  |
   |                                          |
   |  [🌐 Webseite] [📸 Instagram] [▶️ YouTube]|
   |  [📖 Wikipedia]                          |
   +------------------------------------------+
     Klick auf ✕ oder daneben → Box geht zu
```

**Neue Werte, die du in der Detail-Box benutzen kannst:**

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{team.strBanner}` | Adresse vom Banner-Bild |
| `{team.strLocation}` | Ort, z. B. *San Antonio, Texas* |
| `{team.strStadium}` | Halle |
| `{team.intFormedYear}` | Gründungsjahr |
| `{beschreibung}` | Ein kurzer Text über das Team |
| `{webseite}` | Adresse der Team-Webseite (nba.com) |
| `{wikipedia}` | Adresse der Wikipedia-Suche nach dem Team |
| `{link.name}` / `{link.adresse}` | Name und Adresse von einem Social-Media-Link |
| `{spiel.dateEvent}` | Datum vom letzten Spiel |
| `{spiel.strHomeTeam}` / `{spiel.strAwayTeam}` | Heim-Team / Gast-Team |
| `{spiel.intHomeScore}` / `{spiel.intAwayScore}` | Punkte Heim / Punkte Gast |
| `{spiel.strHomeTeamBadge}` / `{spiel.strAwayTeamBadge}` | Logo vom Heim-Team / Gast-Team |

### To-do HTML (in der neuen Komponente `Details`)
- [ ] **HTML 5 – Banner:** `<img className="banner" ... />` mit dem Banner-Bild
- [ ] **HTML 6 – Infos:** Name in `<h2>`, dann Ort, Halle und Gegründet in je einem `<p>`, z. B. `<p><strong>Halle:</strong> {team.strStadium}</p>`.
  Danach die Beschreibung in `<p className="beschreibung">`.
- [ ] **HTML 7 – Team-Farben:** ein `<p>` mit „Team-Farben:“. Die Punkte macht das JavaScript.
- [ ] **HTML 8 – Letztes Spiel:**
  - oben (8a): `<h3>🏀 Letztes Spiel</h3>` und ein `<p>` mit dem Datum
  - darunter (8b) in einer Reihe: Heim-Logo, Heim-Team, Ergebnis in `<span className="punkte">118 : 109</span>`, Gast-Team, Gast-Logo
- [ ] **HTML 9 – Links:**
  - zuerst ein Link zur Webseite: `<a className="link-button" href={webseite} target="_blank">🌐 Webseite</a>`
  - in die Social-Media-Buttons kommt `{link.name}`
  - zum Schluss ein Link zu Wikipedia (genauso wie die Webseite, aber mit `{wikipedia}`)

> 💡 `target="_blank"` heißt: Der Link öffnet sich in einem **neuen Tab**. So bleibt deine App offen.

### To-do CSS (unten in `style.css`, Bereich **TEIL C**)
- [ ] **CSS 10 – Detail-Box:** dunkler Hintergrund (`#1a1a1a`), silberner Rahmen, Innenabstand, runde Ecken. Die `h2` in Silber.
- [ ] **CSS 11 – Banner und Beschreibung:** Banner mit runden Ecken, Beschreibung etwas kleiner und in Grau `#8a8d8f`
- [ ] **CSS 12 – Letztes Spiel:** Hintergrund, Innenabstand, runde Ecken. Die Punkte (`.punkte`) groß und fett.
- [ ] **CSS 13 – Link-Buttons:** im Spurs-Look: silberner Hintergrund, schwarze Schrift, runde Ecken. Beim Drüberfahren umgekehrt (schwarz mit silberner Schrift).

### Extra-Ideen zur Erweiterung
- [ ] Gib der Detail-Box einen silbernen Leuchtrahmen: `box-shadow: 0 0 25px #c4ced4;`
- [ ] Zeige in der Detail-Box auch die Abkürzung `{team.strTeamShort}` im `.kurz`-Schild
- [ ] Zeige ein Fan-Bild: `{team.strFanart1}`

---

## Tipps
- In React heißt es **`className`** statt `class`.
- Jedes Tag muss geschlossen werden, auch `<img ... />`.
- Wenn die Seite weiß bleibt: **F12** → Konsole.
- Farben aussuchen: https://htmlcolorcodes.com/de/
- Der kostenlose Test-Zugang von TheSportsDB liefert nur **10 NBA-Teams**. Die **Spurs** lädt die App extra dazu, deshalb siehst du 11.

## Extra-Ideen
- [ ] Favoriten-Karten sollen anders aussehen. Sie haben zusätzlich die Klasse `favorit`, also kannst du `.karte.favorit { ... }` gestalten. Wie wäre ein silberner Leuchtrahmen: `box-shadow: 0 0 18px #c4ced4;`
- [ ] Für Mutige mit JavaScript: Die Spurs-Karte soll immer besonders aussehen. Tipp: `team.strTeam === "San Antonio Spurs"`
- [ ] Ändere den Platzhalter-Text im Suchfeld (`placeholder="..."`).
- [ ] Probiere andere Schriftarten aus, zum Beispiel von https://fonts.google.com
