# Aufgabe 13 – Pokémon-Kampf ⚔️

## Ziel
Du gestaltest eine **Kampf-Arena** für die ersten **151 Pokémon**. Du wählst ein Pokémon aus, ein **zufälliger Gegner** erscheint, und dann wird gekämpft: mit Attacken, **KP-Balken** und Kampf-Text wie im echten Spiel.
Dabei zählt der **Typ**: Wasser ist stark gegen Feuer, Feuer ist stark gegen Pflanze ...

Das JavaScript ist **komplett fertig**: Pokémon laden, Gegner wählen, Schaden ausrechnen, Sieger bestimmen.
**Du schreibst nur HTML und CSS.**

## So soll es am Ende aussehen
```
                  ⚔️ Pokémon-Kampf
               Wähle dein Pokémon. Los!

  +------------------- Arena --------------------+
  |   Bisaflor                                   |
  |   [Pflanze] [Gift]                 [Bild     |
  |   [██████░░░░░░░░]                  von      |
  |              84 / 190 KP            vorn]    |
  |                                              |
  |  [Bild                 Glurak                |
  |   von                  [Feuer] [Flug]        |
  |   hinten]              [████████████░░]      |
  |                               165 / 188 KP   |
  |                                              |
  |  Glurak setzt Flammenwurf ein!               |
  |  Das ist sehr effektiv! (−75 KP)             |
  |  Bisaflor setzt Rasierblatt ein!             |
  |  Das ist nicht sehr effektiv. (−10 KP)       |
  |                                              |
  |  [ Flammenwurf ]  [ Flügelschlag ]           |
  |  [   Tackle    ]                             |
  +----------------------------------------------+

          [ Pokémon suchen (Name oder Nummer) ... ]
  [Alle] [Pflanze] [Gift] [Feuer] [Flug] [Wasser] ...

  +----------+  +----------+  +----------+  +----------+
  |#001  [ℹ️]|  |#002  [ℹ️]|  |#003  [ℹ️]|  |#004  [ℹ️]|
  |  [Bild]  |  |  [Bild]  |  |  [Bild]  |  |  [Bild]  |
  | Bisasam  |  | Bisaknosp|  | Bisaflor |  | Glumanda |
  +----------+  +----------+  +----------+  +----------+
```

**So funktioniert die App:**
- Klick auf ein Pokémon unten → der Kampf beginnt. Der Gegner ist jedes Mal ein anderer.
- Dein Pokémon hat **eine Attacke für jeden seiner Typen** (z. B. *Flammenwurf* für Feuer) und dazu **Tackle**.
- Typ-Attacken sind stark, gehen aber manchmal **daneben**. Tackle ist schwächer, trifft aber **immer**.
- Nach deiner Attacke greift der Gegner an. Wer mehr **Initiative** hat, ist zuerst dran.
- Wer zuerst **0 KP** hat, hat verloren.

**So wird der Schaden berechnet:**

| Wirkung | Text im Kampf | Schaden |
|---------|---------------|---------|
| Der Typ der Attacke ist **stark** gegen den Gegner | *Das ist sehr effektiv!* | doppelt (× 2) |
| normal | – | normal (× 1) |
| Der Typ der Attacke ist **schwach** gegen den Gegner | *Das ist nicht sehr effektiv.* | halb (× 0,5) |
| Der Typ wirkt gar nicht (z. B. Elektro gegen Boden) | *Es hat keine Wirkung!* | 0 |

Dazu zählt: Viel **Angriff** macht mehr Schaden, viel **Verteidigung** beim Gegner macht weniger Schaden.

> 💡 Die Daten kommen von der [PokéAPI](https://pokeapi.co). Sie ist kostenlos und hat kein Limit. Die Daten liegen außerdem schon gespeichert in `daten.js`, deshalb lädt die App ganz schnell. Nur die Bilder kommen aus dem Internet.

---

## Teil 1 – HTML (in `index.html`)

Suche im Code nach **`DEIN HTML`**. Diese Werte kannst du benutzen:

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{pokemon.nummer}` | Nummer im Pokédex, z. B. *#006* |
| `{pokemon.name}` | Name, z. B. *Glurak* |
| `{bild}` | Adresse vom Bild |
| `{typ.name}` | Name von einem Typ, z. B. *Feuer* |
| `{kp}` | Die KP, die das Pokémon **jetzt** noch hat |
| `{pokemon.kp}` | Die KP, die das Pokémon **am Anfang** hat |
| `{m.text}` | Ein Satz vom Kampf-Text |
| `{attacke.name}` | Name der Attacke, z. B. *Flammenwurf* |
| `{attacke.typ.name}` | Typ der Attacke, z. B. *Feuer* |
| `{ergebnisText}` | *🎉 Gewonnen! Bisaflor wurde besiegt!* oder *😵 Verloren! Glurak wurde besiegt.* |

### To-do
- [ ] **HTML 1 – Kopf:** `<h1>` mit „⚔️ Pokémon-Kampf“ und ein `<p className="untertitel">` mit einem Satz deiner Wahl.
- [ ] **HTML 2 – Pokémon-Karte:** Schreibe in die Karte:
  ```jsx
  <span className="nummer">{pokemon.nummer}</span>
  <img src={bild} alt={pokemon.name} />
  <h3>{pokemon.name}</h3>
  ```
  Darunter sind schon die Typ-Abzeichen. In jedes kommt `{typ.name}`.
- [ ] **HTML 3 – Hinweis:** Ganz oben ist eine leere Box. Schreibe hinein: `<p>👇 Wähle unten ein Pokémon für den Kampf!</p>`
- [ ] **HTML 4 – Die Kämpfer:** Klicke auf ein Pokémon. Jetzt siehst du die Arena mit zwei Bildern. Schreibe in die Komponente `Kaempfer`:
  - den Namen: `<h3>{pokemon.name}</h3>`
  - in die Typ-Abzeichen: `{typ.name}`
  - unter den KP-Balken: `<p className="kp-text">{kp} / {pokemon.kp} KP</p>`

  Du schreibst das nur **einmal**. Es gilt für dein Pokémon **und** für den Gegner!
- [ ] **HTML 5 – Kampf-Text:** In jedes `<p className="meldung ...">` kommt `{m.text}`.
- [ ] **HTML 6 – Attacken:** In jeden Attacken-Button kommt der Name und klein darunter der Typ:
  ```jsx
  {attacke.name}
  <small>{attacke.typ.name}</small>
  ```
- [ ] **HTML 7 – Ergebnis:** Kämpfe, bis einer gewinnt. Jetzt erscheint eine leere Box. Schreibe hinein: `<h2>{ergebnisText}</h2>`.
  In die zwei Buttons kommt „⚔️ Neuer Kampf“ und „🔄 Anderes Pokémon“.
- [ ] **HTML 8 – Fußzeile:** „Daten: PokéAPI“ und „Gebaut von DEIN NAME“ (je ein `<p>`)

---

## Teil 2 – CSS (in `style.css`)

Das **Layout ist oben schon fertig** (Arena, Raster, Animationen, Handy-Ansicht). Unten im Bereich **`TEIL B – DEIN CSS`** gestaltest du die App.

### To-do
- [ ] **CSS 1 – Seite:** ein dunkles Blau als Hintergrund, z. B. `#1d2c5e`, weiße Schrift, eine Schriftart.
- [ ] **CSS 2 – Überschrift:** Pokémon-Gelb `#ffcb05` mit blauem Schatten wie das Logo: `text-shadow: 3px 3px 0 #3d7dca;`. Der Untertitel etwas kleiner.
- [ ] **CSS 3 – Hinweis-Box:** gestrichelter Rahmen (`border: 3px dashed #ffcb05;`), Innenabstand, runde Ecken.
- [ ] **CSS 4 – Arena:** Die Arena ist eine Wiese: Hintergrund mit Verlauf von Himmel zu Gras, z. B.
  `background: linear-gradient(180deg, #8fd3f4 0%, #c8f0b0 55%, #6abf69 100%);`
  Dazu dunkle Schrift, Innenabstand, runde Ecken und ein dicker Rahmen.
  Die Info-Schilder (`.kaempfer-info`): weißer Hintergrund, Innenabstand, runde Ecken, dunkler Rahmen.
- [ ] **CSS 5 – KP-Balken:** Der Hintergrund (`.kp-platz`) dunkelgrau mit runden Ecken. Der Balken (`.kp-balken`) mit runden Ecken.
  Der Balken hat je nach KP eine andere Klasse. Gib jeder eine Farbe:

  | Klasse | Wann? | Farbe |
  |--------|-------|-------|
  | `.kp-balken.gut` | mehr als die Hälfte | Grün `#4caf50` |
  | `.kp-balken.mittel` | die Hälfte oder weniger | Gelb `#f7d02c` |
  | `.kp-balken.schlecht` | 20 % oder weniger | Rot `#e53935` |
- [ ] **CSS 6 – Kampf-Text:** wie die Text-Box im Spiel: weißer Hintergrund, dunkle Schrift, Innenabstand, runde Ecken, dicker dunkler Rahmen.
- [ ] **CSS 7 – Attacken-Buttons:** weiße fette Schrift, ohne Rahmen, runde Ecken, größere Schrift. Die Farbe kommt gleich von den Typ-Klassen!
- [ ] **CSS 8 – Typ-Abzeichen:** weiße fette Schrift, runde Ecken (`border-radius: 20px;`).
- [ ] **CSS 9 – Typ-Farben:** Jedes Abzeichen hat eine Klasse für seinen Typ. Gib jedem eine **Hintergrundfarbe** (`background-color`).
  Diese Farben passen (wie im Spiel):

  | Klasse | Farbe | Klasse | Farbe | Klasse | Farbe |
  |--------|-------|--------|-------|--------|-------|
  | `.normal` | `#a8a77a` | `.eis` | `#96d9d6` | `.psycho` | `#f95587` |
  | `.feuer` | `#ee8130` | `.kampf` | `#c22e28` | `.kaefer` | `#a6b91a` |
  | `.wasser` | `#6390f0` | `.gift` | `#a33ea1` | `.gestein` | `#b6a136` |
  | `.pflanze` | `#7ac74c` | `.boden` | `#e2bf65` | `.geist` | `#735797` |
  | `.elektro` | `#f7d02c` | `.flug` | `#a98ff3` | `.drache` | `#6f35fc` |
  | `.stahl` | `#b7b7ce` | `.fee` | `#d685ad` | `.unlicht` | `#705746` |

  Tipp: Die Attacken-Buttons und die Filter-Buttons haben **dieselben Klassen**. Sie werden also automatisch bunt!
- [ ] **CSS 10 – Ergebnis-Box:** Innenabstand und runde Ecken. Bei Sieg (`.ergebnis.sieg`) Gelb `#ffcb05` mit dunkelblauer Schrift,
  bei Niederlage (`.ergebnis.niederlage`) Dunkelgrau `#444444` mit weißer Schrift.
  Die zwei Buttons: ohne Rahmen, runde Ecken, fette Schrift. „Neuer Kampf“ in Rot `#dc0a2d` mit weißer Schrift, „Anderes Pokémon“ in Weiß.
- [ ] **CSS 11 – Suchfeld und Filter-Buttons:** Suchfeld mit Innenabstand, ohne Rahmen, runde Ecken. Filter-Buttons mit weißer Schrift, ohne Rahmen, runde Ecken.
  Der aktive Button (`.filter-button.aktiv`) weiß mit dunkler Schrift.
- [ ] **CSS 12 – Karte:** weißer Hintergrund, dunkle Schrift, runde Ecken, Schatten. Die Nummer klein und grau.
  Die Bilder sind **Pixel-Bilder**. Damit sie scharf bleiben: `image-rendering: pixelated;`
  Die Karte von deinem Pokémon (`.karte.gewaehlt`) bekommt einen gelben Leuchtrahmen: `box-shadow: 0 0 0 4px #ffcb05;`
- [ ] **CSS 13 – Fußzeile:** klein und etwas durchsichtig.

---

## Teil 3 – ⭐ Erweiterung: Stärken und Schwächen

Welches Pokémon soll ich nehmen? Jede Karte hat oben rechts einen **ℹ️-Knopf**. Klickt man darauf, öffnet sich eine **Info-Box**:
großes Bild, die **Kampf-Werte als Balken** und die Typen, gegen die das Pokémon **stark** oder **schwach** ist.
Das JavaScript ist **schon fertig**. Es rechnet die Stärken und Schwächen selbst aus.

```
   +----------------------------------------+
   |                                   [✕]  |
   |           [ großes Bild ]              |
   |             #006 Glurak                |
   |            [Feuer] [Flug]              |
   |                                        |
   |  KP              [█████░░░░░]  188     |
   |  Angriff         [███████░░░]  109     |
   |  Verteidigung    [█████░░░░░]   82     |
   |  Initiative      [██████░░░░]  100     |
   |                                        |
   |            💪 Stark gegen              |
   |  [Kampf] [Käfer] [Stahl] [Pflanze] [Eis]|
   |                                        |
   |            😨 Schwach gegen            |
   |      [Gestein] [Wasser] [Elektro]      |
   |                                        |
   |       [📖 PokéWiki]  [▶️ YouTube]       |
   |   [ ⚔️ Mit diesem Pokémon kämpfen  ]   |
   +----------------------------------------+
```

**Neue Werte, die du benutzen kannst:**

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{artwork}` | Adresse vom großen Bild |
| `{w.name}` | Name vom Wert, z. B. *Angriff* |
| `{w.wert}` | Zahl vom Wert, z. B. *109* |
| `{typ.name}` | Name vom Typ (auch bei „Stark gegen“ und „Schwach gegen“) |
| `{pokewiki}` | Link zum Pokémon im PokéWiki |
| `{youtube}` | Link zu YouTube-Videos über das Pokémon |

### To-do HTML (in der Komponente `PokemonDetails`)
- [ ] **HTML 9 – Kopf der Info-Box:** großes Bild `<img className="artwork" src={artwork} alt={pokemon.name} />`
  und eine `<h2>` mit `{pokemon.nummer} {pokemon.name}`. In die Typ-Abzeichen darunter kommt wieder `{typ.name}`.
- [ ] **HTML 10 – Werte:** In jede Zeile kommt links der Name `{w.name}` und rechts die Zahl `{w.wert}`. Den Balken in der Mitte macht das JavaScript, er ist nur noch unsichtbar.
- [ ] **HTML 11 – Stärken und Schwächen:** zwei Überschriften: `<h3>💪 Stark gegen</h3>` und `<h3>😨 Schwach gegen</h3>`.
  In die Typ-Abzeichen darunter kommt `{typ.name}`.
- [ ] **HTML 12 – Links und Kampf-Button:** zwei Links, z. B. `<a className="link-button" href={pokewiki} target="_blank">📖 PokéWiki</a>`. Dann noch ▶️ YouTube mit `{youtube}`.
  In den großen Button kommt „⚔️ Mit diesem Pokémon kämpfen“.

> 💡 `target="_blank"` heißt: Der Link öffnet sich in einem **neuen Tab**. So bleibt deine App offen.

### To-do CSS (unten in `style.css`, Bereich **TEIL C**)
- [ ] **CSS 14 – Info-Box:** weißer Hintergrund, dunkle Schrift, runde Ecken, Innenabstand, dicker gelber Rahmen (`border: 6px solid #ffcb05;`).
- [ ] **CSS 15 – Werte:** Der Balken-Hintergrund (`.balken-platz`) hellgrau mit runden Ecken. Der Balken selbst (`.balken`) bekommt eine Farbe, z. B. Blau `#3d7dca`, und runde Ecken.
- [ ] **CSS 16 – Stark und schwach:** zwei Kästchen mit Innenabstand und runden Ecken.
  „Stark gegen“ mit hellgrünem Hintergrund `#e3f6e0`, „Schwach gegen“ mit hellrotem Hintergrund `#fde3e3`.
- [ ] **CSS 17 – Link-Buttons und Kampf-Button:** Link-Buttons in Blau `#3d7dca` mit weißer Schrift, beim Drüberfahren dunkler.
  Der Kampf-Button groß in Rot `#dc0a2d` mit weißer fetter Schrift, ohne Rahmen, runde Ecken.

> 💡 Probier es aus: Schau dir mit ℹ️ den Gegner an, bevor du angreifst. Welche Attacke ist die beste?

### Extra-Ideen zur Erweiterung
- [ ] Mach den ℹ️-Knopf erst sichtbar, wenn man mit der Maus über die Karte fährt. Tipp: `.info-button { opacity: 0; }` und `.karte:hover .info-button { opacity: 1; }`
- [ ] Das große Bild soll leicht schweben: `animation: schweben 2s ease-in-out infinite alternate;` und dazu `@keyframes schweben { from { transform: translateY(0); } to { transform: translateY(-8px); } }`
- [ ] Gib den Balken einen Farbverlauf: `background: linear-gradient(90deg, #f7d02c, #e53935);`

---

## Teil 4 – ⭐⭐ Erweiterung: Siegesserie, Orden und Kampf-Protokoll

Wie viele Kämpfe gewinnst du **hintereinander**? Die App zählt jetzt deine **🏆 Siegesserie** und merkt sich deinen **Rekord**, auch wenn du die Seite neu lädst.
Für lange Serien gibt es **Orden**. Der **🎲-Knopf** schickt ein zufälliges Pokémon in den Kampf.
Und das **📜 Kampf-Protokoll** schreibt jeden Zug mit.
Das JavaScript ist **schon fertig**.

```
  +---------------- 🏆 Siegesserie ----------------+
  |               4 Siege in Folge                 |
  |                  Rekord: 6                     |
  |                                                |
  |     🥉             🥈             🥇           |
  |  Bronze-Orden   Silber-Orden   Gold-Orden      |
  |  ab 3 Siegen    ab 5 Siegen    ab 10 Siegen    |
  |  (erreicht)     (erreicht)     (noch grau)     |
  |                                                |
  |             [🎲 Zufalls-Pokémon]               |
  +------------------------------------------------+

  +-------------- 📜 Kampf-Protokoll --------------+
  | Runde 1: Glurak setzt Flammenwurf ein!         |  ← grün: sehr effektiv
  |          Das ist sehr effektiv! (−75 KP)       |
  | Runde 1: Bisaflor setzt Rasierblatt ein!       |  ← grau: nicht sehr effektiv
  |          Das ist nicht sehr effektiv. (−10 KP) |
  | Runde 2: Glurak setzt Flammenwurf ein! Daneben!|  ← durchgestrichen
  +------------------------------------------------+
```

**So funktioniert es:**
- Jeder Sieg zählt **+1**. Eine Niederlage setzt die Serie auf **0**.
- Wer mitten im Kampf ein anderes Pokémon anklickt, **läuft weg**. Auch dann ist die Serie weg!
- Ein Orden hat die Klasse `erreicht`, sobald dein **Rekord** hoch genug ist.
- Jeder Zug im Protokoll hat Klassen: `spieler` oder `gegner` (wer hat angegriffen?) und
  `effektiv`, `schwach`, `daneben` oder `treffer` (wie hat die Attacke gewirkt?).

**Neue Werte, die du benutzen kannst:**

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{serie}` | Wie viele Kämpfe du gerade hintereinander gewonnen hast |
| `{rekord}` | Deine längste Serie |
| `{orden.emoji}` | 🥉, 🥈 oder 🥇 |
| `{orden.name}` | Name vom Orden, z. B. *Bronze-Orden* |
| `{orden.ab}` | Ab wie vielen Siegen in Folge es den Orden gibt |
| `{zug.runde}` | In welcher Runde der Zug war |
| `{zug.text}` | Was passiert ist |

### To-do HTML
- [ ] **HTML 13 – Serie:** In die Box ganz oben kommen `<h2>🏆 Siegesserie</h2>`,
  `<p className="serie">{serie} Siege in Folge</p>` und `<p>Rekord: {rekord}</p>`.
- [ ] **HTML 14 – Orden:** In jeden Orden kommt:
  ```jsx
  <span className="orden-emoji">{orden.emoji}</span>
  <strong>{orden.name}</strong>
  <small>ab {orden.ab} Siegen</small>
  ```
- [ ] **HTML 15 – Zufalls-Knopf:** In den leeren Knopf kommt „🎲 Zufalls-Pokémon“.
- [ ] **HTML 16 – Protokoll:** Mach einen Zug im Kampf. Unter der Arena erscheint eine neue Box. Schreibe hinein: `<h2>📜 Kampf-Protokoll</h2>`.
  In jede Zeile (`li`) kommt `<strong>Runde {zug.runde}:</strong> {zug.text}`.

### To-do CSS (unten in `style.css`, Bereich **TEIL D**)
- [ ] **CSS 18 – Serien-Box:** Hintergrund (z. B. `rgba(0, 0, 0, 0.25)`), runde Ecken, Innenabstand. Die Zahl der Siege (`.serie`) groß, fett und in Gelb.
- [ ] **CSS 19 – Orden:** Ein Orden, den du noch nicht hast, ist grau und blass:
  ```css
  .orden {
      opacity: 0.35;
      filter: grayscale(1);
  }
  ```
  Ein erreichter Orden (`.orden.erreicht`) ist bunt: `opacity: 1;` und `filter: none;`
- [ ] **CSS 20 – Zufalls-Knopf:** in Gelb `#ffcb05` mit dunkelblauer fetter Schrift, ohne Rahmen, runde Ecken.
- [ ] **CSS 21 – Protokoll:** weißer Hintergrund, dunkle Schrift, runde Ecken, Innenabstand.
  Jeder Zug (`.zug`) mit hellgrauem Hintergrund `#f2f2f2`, runden Ecken und einem Strich links: `border-left: 5px solid #999999;`
- [ ] **CSS 22 – Besondere Züge:** sehr effektiv (`.zug.effektiv`) mit grünem Strich und hellgrünem Hintergrund,
  nicht sehr effektiv (`.zug.schwach`) in grauer Schrift, daneben (`.zug.daneben`) durchgestrichen: `text-decoration: line-through;`

> 💡 Schaffst du den Gold-Orden? Tipp: Schau dir vor jeder Attacke die Typen vom Gegner an!

### Extra-Ideen zu Teil 4
- [ ] Deine Züge und die vom Gegner sollen verschieden aussehen: `.zug.spieler { border-left-color: #3d7dca; }` und `.zug.gegner { border-left-color: #dc0a2d; }`
- [ ] Ein erreichter Orden soll leuchten: `.orden.erreicht .orden-emoji { text-shadow: 0 0 15px #ffcb05; }`
- [ ] Für Mutige mit JavaScript: Erfinde einen vierten Orden, z. B. den *Meister-Orden* 👑 ab 20 Siegen. Tipp: Suche nach `const ORDEN`.
- [ ] Für Mutige mit JavaScript: Mach die Kämpfe länger oder kürzer. Tipp: Suche nach `GRUND_SCHADEN`.

---

## Tipps
- In React heißt es **`className`** statt `class`.
- Jedes Tag muss geschlossen werden, auch `<img ... />`.
- Wenn die Seite weiß bleibt: **F12** → Konsole.
- Farben aussuchen: https://htmlcolorcodes.com/de/
- Die Kampf-Werte sind vereinfacht: **KP**, **Angriff**, **Verteidigung** und **Initiative**. Im echten Spiel gibt es noch mehr.

## Extra-Ideen
- [ ] Der KP-Balken soll blinken, wenn es eng wird: `.kp-balken.schlecht { animation: blinken 0.6s infinite alternate; }` und dazu `@keyframes blinken { from { opacity: 1; } to { opacity: 0.4; } }`
- [ ] Die Attacken-Buttons sollen beim Drüberfahren leuchten: `.attacke-button:hover { box-shadow: 0 0 12px #ffffff; }`
- [ ] Zeige auf der Karte auch die KP: `<p>{pokemon.kp} KP</p>`
- [ ] Probier die Pixel-Schrift „Press Start 2P“ von https://fonts.google.com für die Überschrift aus.

---

*Pokémon ist eine Marke von Nintendo, Game Freak und The Pokémon Company. Die Daten kommen von der [PokéAPI](https://pokeapi.co), die Bilder aus dem [PokeAPI-Sprites-Projekt](https://github.com/PokeAPI/sprites). Diese Aufgabe ist nur zum Lernen gedacht.*
