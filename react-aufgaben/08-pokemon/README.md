# Aufgabe 08 – Pokémon 🔴

## Ziel
Du gestaltest einen **Pokédex** mit den ersten **151 Pokémon**. Man kann suchen, nach **Typ** filtern und sich ein **Team aus 6 Pokémon** zusammenstellen.
Jeder Typ (Feuer, Wasser, Pflanze ...) bekommt bei dir eine eigene Farbe.

Das JavaScript ist **komplett fertig**: Pokémon laden, suchen, filtern, Team bauen.
**Du schreibst nur HTML und CSS.**

## So soll es am Ende aussehen
```
                    🔴 Mein Pokédex
                Schnapp sie dir alle!

  +-------------------- Dein Team --------------------+
  |  (Pikachu) (Glurak) (Turtok) (  ) (  ) (  )       |
  |                  3 / 6 Pokémon                    |
  +---------------------------------------------------+

          [ Pokémon suchen (Name oder Nummer) ... ]
  [Alle] [Pflanze] [Gift] [Feuer] [Flug] [Wasser] [Käfer] ...
           ↑ jeder Typ in seiner Farbe

  +----------+  +----------+  +----------+  +----------+
  |#001  [ℹ️]|  |#002  [ℹ️]|  |#003  [ℹ️]|  |#004  [ℹ️]|
  |  [Bild]  |  |  [Bild]  |  |  [Bild]  |  |  [Bild]  |
  | Bisasam  |  | Bisaknosp|  | Bisaflor |  | Glumanda |
  |[Pflanze] |  |[Pflanze] |  |[Pflanze] |  | [Feuer]  |
  |  [Gift]  |  |  [Gift]  |  |  [Gift]  |  |          |
  +----------+  +----------+  +----------+  +----------+
```

**So funktioniert die App:**
- Klick auf ein Pokémon unten → es kommt ins Team
- Klick auf ein Pokémon im Team → es fliegt wieder raus
- Mehr als 6 Pokémon gehen nicht (wie im echten Spiel!)
- Im Suchfeld kannst du einen Namen (z. B. *Pika*) oder eine Nummer (z. B. *25*) eingeben

> 💡 Die Daten kommen von der [PokéAPI](https://pokeapi.co). Sie liegen schon gespeichert in `daten.js`, deshalb lädt die App ganz schnell. Nur die Bilder kommen aus dem Internet.

---

## Teil 1 – HTML (in `index.html`)

Suche im Code nach **`DEIN HTML`**. Diese Werte kannst du benutzen:

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{pokemon.nummer}` | Nummer im Pokédex, z. B. *#025* |
| `{pokemon.name}` | Name, z. B. *Pikachu* |
| `{bild}` | Adresse vom Bild |
| `{typ.name}` | Name von einem Typ, z. B. *Elektro* |
| `{anzahlImTeam}` | Wie viele Pokémon im Team sind |

### To-do
- [ ] **HTML 1 – Kopf:** `<h1>` mit „🔴 Mein Pokédex“ und ein `<p className="untertitel">` mit einem Satz deiner Wahl.
- [ ] **HTML 2 – Pokémon-Karte:** Schreibe in die Karte:
  ```jsx
  <span className="nummer">{pokemon.nummer}</span>
  <img src={bild} alt={pokemon.name} />
  <h3>{pokemon.name}</h3>
  ```
  Darunter sind schon die Typ-Abzeichen. In jedes kommt `{typ.name}`.
- [ ] **HTML 3 – Team-Platz:** Klicke ein paar Pokémon an. Oben im Team erscheinen leere Felder. Schreibe hinein: das Bild und den Namen in einem `<p>`.
- [ ] **HTML 4 – Team-Info:** Unter dem Team: `<p>{anzahlImTeam} / 6 Pokémon</p>`
- [ ] **HTML 5 – Team komplett:** Wähle 6 Pokémon. Jetzt erscheint eine leere Box. Schreibe hinein: „🎉 Dein Team ist komplett!“
- [ ] **HTML 6 – Fußzeile:** „Daten: PokéAPI“ und „Gebaut von DEIN NAME“ (je ein `<p>`)

---

## Teil 2 – CSS (in `style.css`)

Das **Layout ist oben schon fertig** (Raster, Team-Plätze, Animationen, Handy-Ansicht). Unten im Bereich **`TEIL B – DEIN CSS`** gestaltest du die App.

### To-do
- [ ] **CSS 1 – Seite:** Pokédex-Rot `#dc0a2d` als Hintergrund, weiße Schrift, eine Schriftart.
- [ ] **CSS 2 – Überschrift:** Pokémon-Gelb `#ffcb05` mit blauem Schatten wie das Logo: `text-shadow: 3px 3px 0 #3d7dca;`. Der Untertitel etwas kleiner.
- [ ] **CSS 3 – Suchfeld und Filter-Buttons:** Suchfeld mit Innenabstand, ohne Rahmen, runde Ecken. Filter-Buttons mit weißer Schrift, ohne Rahmen, runde Ecken.
  Der aktive Button (`.filter-button.aktiv`) weiß mit roter Schrift.
- [ ] **CSS 4 – Team-Box:** Hintergrund (z. B. `rgba(0, 0, 0, 0.2)`), runde Ecken, Innenabstand.
  Die Pokémon im Team und die leeren Plätze sehen aus wie **Pokébälle**: rund (`border-radius: 50%;`), weißer Hintergrund und ein dicker dunkler Rahmen.
  Die leeren Plätze zusätzlich halb durchsichtig (`opacity: 0.4;`).
- [ ] **CSS 5 – Karte:** weißer Hintergrund, dunkle Schrift, runde Ecken, Schatten
- [ ] **CSS 6 – Nummer und Bild:** Nummer klein und grau. Die Bilder sind **Pixel-Bilder**. Damit sie scharf bleiben: `image-rendering: pixelated;`
- [ ] **CSS 7 – Typ-Abzeichen:** weiße fette Schrift, runde Ecken (`border-radius: 20px;`). Das Abzeichen ist ein `span`, deshalb gehen Innenabstände gut.
- [ ] **CSS 8 – Typ-Farben:** Jedes Abzeichen hat eine Klasse für seinen Typ. Gib jedem eine **Hintergrundfarbe** (`background-color`).
  Diese Farben passen (wie im Spiel):

  | Klasse | Farbe | Klasse | Farbe | Klasse | Farbe |
  |--------|-------|--------|-------|--------|-------|
  | `.normal` | `#a8a77a` | `.eis` | `#96d9d6` | `.psycho` | `#f95587` |
  | `.feuer` | `#ee8130` | `.kampf` | `#c22e28` | `.kaefer` | `#a6b91a` |
  | `.wasser` | `#6390f0` | `.gift` | `#a33ea1` | `.gestein` | `#b6a136` |
  | `.pflanze` | `#7ac74c` | `.boden` | `#e2bf65` | `.geist` | `#735797` |
  | `.elektro` | `#f7d02c` | `.flug` | `#a98ff3` | `.drache` | `#6f35fc` |
  | `.stahl` | `#b7b7ce` | `.fee` | `#d685ad` | | |

  Tipp: Die Filter-Buttons haben **dieselben Klassen**. Sie werden also automatisch bunt!
- [ ] **CSS 9 – Pokémon im Team, „Team komplett“-Box und Fußzeile:** Pokémon im Team (`.im-team`) halb durchsichtig (`opacity: 0.4;`).
  Die Box in Gelb mit dunkelblauer fetter Schrift. Fußzeile klein.

---

## Teil 3 – ⭐ Erweiterung: Pokédex-Eintrag mit Basiswerten

Jede Karte hat oben rechts einen **ℹ️-Knopf**. Klickt man darauf, öffnet sich der **Pokédex-Eintrag**:
großes Bild, Kategorie, Pokédex-Text, Größe, Gewicht und die **Basiswerte als Balken**.
Das JavaScript ist **schon fertig**. Es rechnet sogar aus, wie lang jeder Balken sein muss.

```
   +----------------------------------------+
   |                                   [✕]  |
   |           [ großes Bild ]              |
   |            #025 Pikachu                |
   |            Maus-Pokémon                |
   |              [Elektro]                 |
   |  Pikachu begrüßen einander, indem ...  |
   |                                        |
   |   +-------------+   +-------------+    |
   |   |  📏 Größe   |   |  ⚖️ Gewicht  |    |
   |   |   0,4 m     |   |    6 kg     |    |
   |   +-------------+   +-------------+    |
   |                                        |
   |  KP              [████░░░░░░]   35     |
   |  Angriff         [██████░░░░]   55     |
   |  Verteidigung    [████░░░░░░]   40     |
   |  ...                                   |
   |  Initiative      [█████████░]   90     |
   |                                        |
   |       [📖 PokéWiki]  [▶️ YouTube]       |
   |   [           ➕ Ins Team           ]   |
   +----------------------------------------+
```

**Neue Werte, die du benutzen kannst:**

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{artwork}` | Adresse vom großen Bild |
| `{pokemon.kategorie}` | Kategorie, z. B. *Maus-Pokémon* |
| `{pokemon.text}` | Der Pokédex-Text |
| `{pokemon.groesse}` | Größe in Metern, z. B. *0,4* |
| `{pokemon.gewicht}` | Gewicht in Kilogramm, z. B. *6* |
| `{w.name}` | Name vom Basiswert, z. B. *Angriff* |
| `{w.wert}` | Zahl vom Basiswert, z. B. *55* |
| `{pokewiki}` | Link zum Pokémon im PokéWiki |
| `{youtube}` | Link zu YouTube-Videos über das Pokémon |

### To-do HTML
- [ ] **HTML 7 – Kopf vom Eintrag:** großes Bild `<img className="artwork" src={artwork} alt={pokemon.name} />`,
  eine `<h2>` mit `{pokemon.nummer} {pokemon.name}` und `<p className="kategorie">{pokemon.kategorie}</p>`.
  In die Typ-Abzeichen darunter kommt wieder `{typ.name}`.
- [ ] **HTML 8 – Text, Größe und Gewicht:** `<p className="pokedex-text">{pokemon.text}</p>`. Dann zwei Kästchen:
  ```jsx
  <div className="mass">
      <span>📏 Größe</span>
      <strong>{pokemon.groesse} m</strong>
  </div>
  ```
  Mach dasselbe für ⚖️ Gewicht mit `{pokemon.gewicht} kg`.
- [ ] **HTML 9 – Basiswerte:** In jede Zeile kommt links der Name `{w.name}` und rechts die Zahl `{w.wert}`. Den Balken in der Mitte macht das JavaScript, er ist nur noch unsichtbar.
- [ ] **HTML 10 – Links:** zwei Links, z. B. `<a className="link-button" href={pokewiki} target="_blank">📖 PokéWiki</a>`. Dann noch ▶️ YouTube mit `{youtube}`.

> 💡 `target="_blank"` heißt: Der Link öffnet sich in einem **neuen Tab**. So bleibt deine App offen.

### To-do CSS (unten in `style.css`, Bereich **TEIL C**)
- [ ] **CSS 10 – Info-Box:** weißer Hintergrund, dunkle Schrift, runde Ecken, Innenabstand, dicker roter Rahmen (`border: 6px solid #dc0a2d;`).
  Kategorie grau und kursiv, der Pokédex-Text mit hellem Hintergrund und Innenabstand.
- [ ] **CSS 11 – Größe und Gewicht:** Kästchen mit hellem Hintergrund (z. B. `#f2f2f2`) und runden Ecken. Der Wert (`strong`) groß.
- [ ] **CSS 12 – Basiswerte:** Der Balken-Hintergrund (`.balken-platz`) hellgrau mit runden Ecken. Der Balken selbst (`.balken`) bekommt eine Farbe, z. B. Grün `#4caf50`, und runde Ecken.
- [ ] **CSS 13 – Link-Buttons und „Ins Team“-Button:** Link-Buttons in Blau `#3d7dca` mit weißer Schrift, beim Drüberfahren dunkler.
  Der „Ins Team“-Button groß in Rot mit weißer fetter Schrift, ohne Rahmen.

### Extra-Ideen zur Erweiterung
- [ ] Mach den ℹ️-Knopf erst sichtbar, wenn man mit der Maus über die Karte fährt. Tipp: `.info-button { opacity: 0; }` und `.karte:hover .info-button { opacity: 1; }`
- [ ] Das große Bild soll leicht schweben: `animation: schweben 2s ease-in-out infinite alternate;` und dazu `@keyframes schweben { from { transform: translateY(0); } to { transform: translateY(-8px); } }`
- [ ] Gib den Balken einen Farbverlauf: `background: linear-gradient(90deg, #f7d02c, #4caf50);`

---

## Teil 4 – ⭐⭐ Erweiterung: Zufalls-Team, Team-Analyse und Quiz

Unter dem Team gibt es jetzt einen **🎲 Zufalls-Knopf** für 6 zufällige Pokémon.
Die **📊 Team-Analyse** zeigt, wie stark dein Team ist und welche Typen dabei sind.
Und das **❓ Quiz** fragt: **Wer ist das Pokémon?** Du siehst nur den Schattenriss und musst raten!
Das JavaScript ist **schon fertig**.

```
  +---------------- 📊 Team-Analyse ----------------+
  |              💪 Team-Stärke: 2310               |
  |          ⭐ Stärkstes Pokémon: Mewtu            |
  |              Typen im Team: 7 von 18            |
  |  [Feuer] [Flug] [Wasser] [Elektro] [Psycho] ... |
  +-------------------------------------------------+

  +------------- ❓ Wer ist das Pokémon? ------------+
  |                  Punkte: 3 / 4                  |
  |                                                 |
  |                 [ ███████████ ]                 |  ← Schattenriss
  |                 [ ███████████ ]                 |
  |                                                 |
  |          [ Evoli  ]       [ Pikachu ]           |
  |          [ Raichu ]       [ Mauzi   ]           |
  |                                                 |
  |          🎉 Richtig! Es ist Pikachu!            |
  |            [➡️ Nächstes Pokémon]                |
  +-------------------------------------------------+
```

**So funktioniert es:**
- 🎲 Zufalls-Team → 6 zufällige Pokémon. 🗑️ Team leeren → alle fliegen raus.
- **Team-Stärke** = alle Basiswerte von allen Pokémon im Team zusammengezählt
- Im Quiz hat das Bild die Klasse `versteckt`, **bis du geantwortet hast**. Den Schattenriss machst du selbst mit CSS!
- Nach der Antwort hat der richtige Button die Klasse `richtig`. Hast du falsch geraten, hat dein Button die Klasse `falsch`.

**Neue Werte, die du benutzen kannst:**

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{teamStaerke}` | Alle Basiswerte vom Team zusammen |
| `{staerkstes.name}` | Das Pokémon mit den meisten Basiswerten im Team |
| `{anzahlTypen}` | Wie viele verschiedene Typen im Team sind |
| `{punkte}` / `{runden}` | Richtige Antworten / gespielte Runden im Quiz |
| `{p.name}` | Name auf einem Antwort-Button |
| `{ergebnisText}` | *🎉 Richtig! Es ist Pikachu!* oder *😅 Leider falsch! Es ist Pikachu.* |

### To-do HTML
- [ ] **HTML 11 – Knöpfe:** In die zwei leeren Knöpfe unter dem Team kommt „🎲 Zufalls-Team“ und „🗑️ Team leeren“.
- [ ] **HTML 12 – Analyse:** Lege ein Pokémon ins Team. In die neue Box kommen `<h2>📊 Team-Analyse</h2>`,
  `<p className="staerke">💪 Team-Stärke: {teamStaerke}</p>` und `<p>⭐ Stärkstes Pokémon: {staerkstes.name}</p>`.
- [ ] **HTML 13 – Typen im Team:** `<p>Typen im Team: {anzahlTypen} von 18</p>`. In die Typ-Abzeichen darunter kommt `{typ.name}`.
- [ ] **HTML 14 – Quiz-Kopf:** `<h2>❓ Wer ist das Pokémon?</h2>` und `<p className="punkte">Punkte: {punkte} / {runden}</p>`
- [ ] **HTML 15 – Antworten:** In jeden Antwort-Button kommt `{p.name}`.
- [ ] **HTML 16 – Ergebnis:** Klicke auf eine Antwort. In die neue Box kommt `<p>{ergebnisText}</p>` und in den Button „➡️ Nächstes Pokémon“.

### To-do CSS (unten in `style.css`, Bereich **TEIL D**)
- [ ] **CSS 14 – Knöpfe:** Zufalls-Knopf in Gelb `#ffcb05` mit dunkelblauer fetter Schrift, Leeren-Knopf weiß mit roter Schrift. Beide ohne Rahmen, mit runden Ecken.
- [ ] **CSS 15 – Analyse-Box:** weißer Hintergrund, dunkle Schrift, runde Ecken, Innenabstand. Die Team-Stärke groß und fett.
- [ ] **CSS 16 – Quiz-Box:** Hintergrund in Blau `#3d7dca`, runde Ecken, Innenabstand, dicker gelber Rahmen. Die Punkte fett.
- [ ] **CSS 17 – Der Schattenriss:** Das ist der Trick vom Quiz! Mach das versteckte Bild ganz schwarz:
  ```css
  .quiz-bild.versteckt {
      filter: brightness(0);
  }
  ```
  Sobald du antwortest, verschwindet die Klasse und das Pokémon wird **langsam bunt** (die Animation ist schon fertig).
- [ ] **CSS 18 – Antwort-Buttons:** weiß mit dunkler Schrift, ohne Rahmen, runde Ecken.
  Der richtige Button (`.richtig`) grün `#4caf50`, der falsche (`.falsch`) rot `#e53935`, beide mit weißer Schrift.
- [ ] **CSS 19 – „Nächstes Pokémon“-Button:** in Gelb mit dunkelblauer fetter Schrift

> 💡 Spiel ein paar Runden! Wie viele Punkte schaffst du von 10?

### Extra-Ideen zu Teil 4
- [ ] Der Schattenriss soll weiß statt schwarz sein: `filter: brightness(0) invert(1);` Probier auch andere `filter`-Werte aus, z. B. `blur(8px)` (verschwommen)!
- [ ] Der richtige Button soll hüpfen: `.antwort-button.richtig { animation: huepfen 0.6s ease-out; }` (die Animation `huepfen` gibt es schon)
- [ ] Für Mutige mit JavaScript: Mach das Quiz schwerer mit 6 statt 4 Antworten. Tipp: Suche nach `.slice(0, 4)`.

---

## Tipps
- In React heißt es **`className`** statt `class`.
- Jedes Tag muss geschlossen werden, auch `<img ... />`.
- Wenn die Seite weiß bleibt: **F12** → Konsole.
- Farben aussuchen: https://htmlcolorcodes.com/de/

## Extra-Ideen
- [ ] Die Karte soll beim Drüberfahren gelb leuchten: `.karte:hover { box-shadow: 0 0 15px #ffcb05; }`
- [ ] Zeige auf der Karte auch die Kategorie: `{pokemon.kategorie}`
- [ ] Probier die Pixel-Schrift „Press Start 2P“ von https://fonts.google.com für die Überschrift aus.

---

*Pokémon ist eine Marke von Nintendo, Game Freak und The Pokémon Company. Die Daten kommen von der [PokéAPI](https://pokeapi.co), die Bilder aus dem [PokeAPI-Sprites-Projekt](https://github.com/PokeAPI/sprites). Diese Aufgabe ist nur zum Lernen gedacht.*
