# Aufgabe 04 – Clash Royale 👑

## Ziel
Du gestaltest einen **Deck-Builder** für Clash Royale. Die App zeigt alle Karten. Klickt man auf eine Karte, kommt sie ins **eigene Deck** (8 Plätze).
Oben steht, wie viel Elixier das Deck im Durchschnitt kostet.

Das JavaScript ist **komplett fertig**: Karten laden, filtern, Deck bauen, Elixier ausrechnen.
**Du schreibst nur HTML und CSS.**

## So soll es am Ende aussehen
```
                👑 Mein Clash-Royale-Deck
              Baue dein bestes Deck!

  +----------------- Dein Deck -----------------+
  | [Knight] [Archers] [Fireball] [  ] [  ] ... |
  |   Ø Elixier: 3.3 💧        3 / 8 Karten      |
  +---------------------------------------------+

   [Alle] [Truppen] [Gebäude] [Zauber]

  +--------+  +--------+  +--------+  +--------+
  |(3)     |  |(3)     |  |(4)     |  |(5)     |
  | [Bild] |  | [Bild] |  | [Bild] |  | [Bild] |
  | Knight |  |Archers |  |Fireball|  | Prince |
  |Gewöhnl.|  |Gewöhnl.|  | Selten |  | Episch |
  +--------+  +--------+  +--------+  +--------+
     ↑ Elixier-Kosten
```

**So funktioniert die App:**
- Klick auf eine Karte unten → sie kommt ins Deck
- Klick auf eine Karte im Deck → sie fliegt wieder raus
- Mehr als 8 Karten gehen nicht

---

## Teil 1 – HTML (in `index.html`)

Suche im Code nach **`DEIN HTML`**. Diese Werte kannst du benutzen:

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{karte.name}` | Name der Karte, z. B. *Knight* |
| `{bild}` | Adresse vom Kartenbild |
| `{karte.elixir}` | Elixier-Kosten, z. B. *3* |
| `{seltenheit}` | *Gewöhnlich*, *Selten*, *Episch*, *Legendär* oder *Champion* |
| `{typ}` | *Truppe*, *Gebäude* oder *Zauber* |
| `{anzahlImDeck}` | Wie viele Karten im Deck sind |
| `{durchschnitt}` | Durchschnittliche Elixier-Kosten des Decks |

### To-do
- [ ] **HTML 1 – Kopf:** `<h1>` mit „👑 Mein Clash-Royale-Deck“ und ein `<p className="untertitel">`.
- [ ] **HTML 2 – Karte:** Schreibe in die Karte:
  - die Elixier-Kosten in einem `<span className="elixier">`
  - das Bild: `<img src={bild} alt={karte.name} />`
  - den Namen in einer `<h3>`
  - die Seltenheit in einem `<p className="seltenheit">`
- [ ] **HTML 3 – Deck-Karte:** Klicke ein paar Karten an. Oben im Deck erscheinen leere Felder. Schreibe hinein:
  - das Bild und den Namen (diesmal ohne Seltenheit, die Felder sind klein)
- [ ] **HTML 4 – Deck-Info:** Unter dem Deck: `<p>Ø Elixier: {durchschnitt} 💧</p>` und `<p>{anzahlImDeck} / 8 Karten</p>`
- [ ] **HTML 5 – Deck voll:** Wähle 8 Karten. Jetzt erscheint eine leere Box. Schreibe hinein: „🎉 Dein Deck ist komplett!“
- [ ] **HTML 6 – Fußzeile:** „Daten und Bilder: RoyaleAPI“ und „Gebaut von DEIN NAME“

---

## Teil 2 – CSS (in `style.css`)

Das **Layout ist oben schon fertig** (Raster, Position vom Elixier-Tropfen, Animationen, Handy-Ansicht). Unten im Bereich **`DEIN CSS`** gestaltest du die App.

### To-do
- [ ] **CSS 1 – Seite:** dunkler Hintergrund (z. B. Dunkelblau `#1a2a6c`), helle Schrift, Schriftart
- [ ] **CSS 2 – Überschrift:** Gold-Farbe (`#ffd700`) passt gut zu Clash Royale!
- [ ] **CSS 3 – Deck-Box:** Hintergrund, Rahmen in Gold, runde Ecken, Innenabstand
- [ ] **CSS 4 – Leere Deck-Plätze (`.leer-platz`):** gestrichelter Rahmen (`border: 2px dashed ...`), runde Ecken
- [ ] **CSS 5 – Filter-Buttons:** Farben und runde Ecken. Der aktive (`.filter-button.aktiv`) in Gold.
- [ ] **CSS 6 – Karte:** Hintergrund, runde Ecken, dicker Rahmen (`border: 4px solid gray`)
- [ ] **CSS 7 – Seltenheits-Farben:** Jede Karte hat zusätzlich eine Klasse für ihre Seltenheit. Gib jeder eine andere **Rahmenfarbe** (`border-color`):

  | Klasse | Vorschlag |
  |--------|-----------|
  | `.common` (Gewöhnlich) | Grau `#9e9e9e` |
  | `.rare` (Selten) | Orange `#ff9800` |
  | `.epic` (Episch) | Lila `#9c27b0` |
  | `.legendary` (Legendär) | Türkis `#00bcd4` |
  | `.champion` (Champion) | Gold `#ffd700` |

- [ ] **CSS 8 – Elixier-Tropfen:** pinke oder lila Hintergrundfarbe (`#d63fd6`), weiße fette Schrift
- [ ] **CSS 9 – Karte im Deck:** Karten, die schon im Deck sind, haben die Klasse `im-deck`. Mache sie halb durchsichtig: `opacity: 0.4;`
- [ ] **CSS 10 – „Deck komplett“-Box und Fußzeile**

---

## Teil 3 – ⭐ Erweiterung: Karten-Infos und Links

Jede Karte hat jetzt oben rechts einen **ℹ️-Knopf**. Klickt man darauf, öffnet sich eine **Info-Box** über der Seite
mit der Beschreibung, allen Werten und **Links** zu RoyaleAPI, zum Wiki und zu YouTube.
Aus der Info-Box kann man die Karte auch direkt ins Deck legen.
Und wenn dein Deck **komplett** ist, bekommst du einen Link, mit dem du das Deck **direkt im Spiel** öffnen kannst!
Das JavaScript ist **schon fertig**.

```
   +--------------------------------------+
   |                                 [✕]  |
   |             [ großes Bild ]          |
   |               Hog Rider              |
   |   Fast melee troop that targets ...  |
   |                                      |
   |   +-----------+    +-----------+     |
   |   | 💧 Elixier |    | 🃏 Typ     |     |
   |   |     4     |    |  Truppe   |     |
   |   +-----------+    +-----------+     |
   |   | ⭐ Seltenh.|    | 🏟️ Arena   |     |
   |   |  Selten   |    |  Arena 5  |     |
   |   +-----------+    +-----------+     |
   |                                      |
   |  [📊 RoyaleAPI] [📖 Wiki] [▶️ YouTube] |
   |  [          ➕ Ins Deck            ]  |
   +--------------------------------------+

   Deck komplett:
   🎉 Dein Deck ist komplett!
   [📲 Deck im Spiel öffnen]  [📊 Deck-Statistik]
```

**Neue Werte, die du benutzen kannst:**

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{bild}` | Adresse vom Kartenbild |
| `{karte.name}` | Name der Karte |
| `{beschreibung}` | Beschreibung der Karte (auf Englisch) |
| `{karte.elixir}` | Elixier-Kosten |
| `{typ}` | *Truppe*, *Gebäude* oder *Zauber* |
| `{seltenheit}` | *Gewöhnlich*, *Selten*, ... |
| `{arena}` | Ab wann man die Karte bekommt, z. B. *Arena 5* |
| `{royaleApi}` | Link zur Karte auf RoyaleAPI |
| `{wiki}` | Link zur Karte im Clash-Royale-Wiki |
| `{youtube}` | Link zu YouTube-Videos über die Karte |
| `{deckImSpiel}` | Link, der dein Deck **im Spiel** öffnet (in der „Deck komplett“-Box) |
| `{deckStatistik}` | Link zur Statistik von deinem Deck auf RoyaleAPI |

### To-do HTML
- [ ] **HTML 7 – Info-Box oben:** großes Bild `<img className="gross" ... />`, den Namen in `<h2>` und die Beschreibung in `<p className="beschreibung">`.
- [ ] **HTML 8 – Werte:** vier Kästchen. Jedes sieht so aus:
  ```jsx
  <div className="wert">
      <span>💧 Elixier</span>
      <strong>{karte.elixir}</strong>
  </div>
  ```
  Mach dasselbe für 🃏 Typ, ⭐ Seltenheit und 🏟️ Arena.
- [ ] **HTML 9 – Links:** drei Links, z. B. `<a className="link-button" href={royaleApi} target="_blank">📊 RoyaleAPI</a>`. Dann noch 📖 Wiki und ▶️ YouTube.
- [ ] **HTML 10 – Deck-Links:** Baue ein komplettes Deck. In der „Deck komplett“-Box schreibst du unter deinen Text zwei Links:
  „📲 Deck im Spiel öffnen“ mit `{deckImSpiel}` und „📊 Deck-Statistik“ mit `{deckStatistik}`.
  Tipp: Pack beide in ein `<div className="link-leiste">`, dann stehen sie schön nebeneinander.

> 💡 `target="_blank"` heißt: Der Link öffnet sich in einem **neuen Tab**. So bleibt deine App offen.
> 📲 Öffnest du den Deck-Link auf einem Handy mit Clash Royale, wird das Deck **direkt ins Spiel kopiert**!

### To-do CSS (unten in `style.css`, Bereich **TEIL C**)
- [ ] **CSS 11 – Info-Box:** dunkler Hintergrund, Innenabstand, runde Ecken, dicker Rahmen (`border: 5px solid gray`). Name in Gold, Beschreibung kursiv (`font-style: italic`).
  Tipp: Die Box hat auch die Seltenheits-Klasse. Deine Rahmenfarben aus CSS 7 funktionieren hier also automatisch!
- [ ] **CSS 12 – Werte-Kästchen:** Hintergrund (z. B. `rgba(255, 255, 255, 0.1)`), runde Ecken. Titel (`span`) klein, Wert (`strong`) groß.
- [ ] **CSS 13 – Link-Buttons:** Farben, Innenabstand ist schon da, runde Ecken. Beim Drüberfahren in Gold.
- [ ] **CSS 14 – „Ins Deck“-Button:** groß und auffällig, z. B. Grün `#4caf50` mit weißer fetter Schrift

### Extra-Ideen zur Erweiterung
- [ ] Mach den ℹ️-Knopf erst sichtbar, wenn man mit der Maus über die Karte fährt. Tipp: `.info-button { opacity: 0; }` und `.karte:hover .info-button { opacity: 1; }`
- [ ] Gib `.details.legendary` einen Regenbogen-Rahmen mit `border-image: linear-gradient(...) 1;`
- [ ] Färbe das Elixier-Kästchen in Pink wie den Elixier-Tropfen. Tipp: `.wert:first-child { ... }`

---

## Tipps
- In React heißt es **`className`** statt `class`.
- Jedes Tag muss geschlossen werden, auch `<img ... />`.
- Wenn die Seite weiß bleibt: **F12** → Konsole.
- Die Kartennamen sind auf **Englisch**, weil die Daten so aus dem Internet kommen.

## Extra-Ideen
- [ ] Zeige in der Karte zusätzlich den Typ (`{typ}`).
- [ ] Gib `.legendary`-Karten einen Farbverlauf als Hintergrund: `background: linear-gradient(...)`
- [ ] Die Karte soll beim Drüberfahren (`:hover`) leuchten: `box-shadow: 0 0 15px gold;`
- [ ] Färbe den Elixier-Durchschnitt: Unter 3.5 grün (schnelles Deck), darüber rot (teures Deck). Dafür musst du dich etwas in JavaScript trauen!

---

*Clash Royale ist eine Marke von Supercell. Die Daten und Bilder kommen von [RoyaleAPI](https://royaleapi.com/). Diese Aufgabe ist nur zum Lernen gedacht.*
