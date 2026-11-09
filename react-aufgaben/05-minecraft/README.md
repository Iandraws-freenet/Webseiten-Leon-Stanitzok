# Aufgabe 05 – Minecraft ⛏️

## Ziel
Du gestaltest einen **Hotbar-Builder** für Minecraft. Die App zeigt über 500 Blöcke. Klickt man auf einen Block, kommt er in die **eigene Hotbar** (9 Plätze).
Unten an der Hotbar steht, wie viele Blöcke drin sind und wie viele davon leuchten 💡.

Das JavaScript ist **komplett fertig**: Blöcke laden, filtern, Hotbar füllen, zählen.
**Du schreibst nur HTML und CSS.**

## So soll es am Ende aussehen
```
                ⛏️ Meine Minecraft-Hotbar
              Welche Blöcke nimmst du mit?

  +-------------------- Deine Hotbar --------------------+
  | [Stein] [Erde] [Holz] [  ] [  ] [  ] [  ] [  ] [  ]  |
  |   3 / 9 Blöcke                      💡 1 leuchten    |
  +------------------------------------------------------+

   [Alle] [⛏️ Spitzhacke] [🪓 Axt] [🥄 Schaufel] [✋ Hand]

  +-----------+  +-----------+  +-----------+  +-----------+
  |  [Bild]   |  |  [Bild]   |  |  [Bild]   |  |  [Bild] 💡|
  |   Stone   |  |   Dirt    |  | Oak Planks|  | Glowstone |
  |Spitzhacke |  | Schaufel  |  |    Axt    |  |   Hand    |
  |  Mittel   |  |   Weich   |  |  Mittel   |  |   Weich   |
  |         64|  |         64|  |         64|  |         64|
  +-----------+  +-----------+  +-----------+  +-----------+
                                    Stapelgröße ↑
```

**So funktioniert die App:**
- Klick auf einen Block unten → er kommt in die Hotbar
- Klick auf einen Block in der Hotbar → er fliegt wieder raus
- Mehr als 9 Blöcke gehen nicht

---

## Teil 1 – HTML (in `index.html`)

Suche im Code nach **`DEIN HTML`**. Diese Werte kannst du benutzen:

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{block.displayName}` | Name des Blocks, z. B. *Stone* |
| `{bild}` | Adresse vom Blockbild |
| `{block.stackSize}` | Wie viele auf einen Stapel passen, z. B. *64* |
| `{werkzeug}` | *Spitzhacke*, *Axt*, *Schaufel*, *Hacke* oder *Hand* |
| `{stufe}` | *Weich*, *Mittel*, *Hart* oder *Unzerstörbar* |
| `{anzahlInHotbar}` | Wie viele Blöcke in der Hotbar sind |
| `{anzahlLeuchtend}` | Wie viele Blöcke in der Hotbar leuchten |

### To-do
- [ ] **HTML 1 – Kopf:** `<h1>` mit „⛏️ Meine Minecraft-Hotbar“ und ein `<p className="untertitel">`.
- [ ] **HTML 2 – Block-Karte:** Schreibe in die Karte:
  - die Stapelgröße in einem `<span className="stapel">`
  - das Bild: `<img src={bild} alt={block.displayName} />`
  - den Namen in einer `<h3>`
  - das Werkzeug in einem `<p>`, z. B. „⛏️ Spitzhacke“
  - die Härte in einem `<p className="haerte">`

  Die Glühbirne 💡 für leuchtende Blöcke ist schon da.
- [ ] **HTML 3 – Hotbar-Platz:** Klicke ein paar Blöcke an. In der Hotbar erscheinen leere Felder. Schreibe hinein:
  - nur das Bild (die Plätze sind klein)
- [ ] **HTML 4 – Hotbar-Info:** Unter der Hotbar: `<p>{anzahlInHotbar} / 9 Blöcke</p>` und `<p>💡 {anzahlLeuchtend} leuchten</p>`
- [ ] **HTML 5 – Hotbar voll:** Wähle 9 Blöcke. Jetzt erscheint eine leere Box. Schreibe hinein: „🎉 Deine Hotbar ist voll! Los geht's!“
- [ ] **HTML 6 – Fußzeile:** „Daten und Bilder: PrismarineJS“ und „Gebaut von DEIN NAME“

---

## Teil 2 – CSS (in `style.css`)

Das **Layout ist oben schon fertig** (Raster, Position der Stapelgröße, scharfe Pixel-Bilder, Animationen, Handy-Ansicht). Unten im Bereich **`DEIN CSS`** gestaltest du die App.

**Minecraft-Farben zum Ausprobieren:**

| Farbe | Code |
|-------|------|
| Gras-Grün | `#5b8731` |
| Erd-Braun | `#866043` |
| Stein-Grau | `#7f7f7f` |
| Dunkles Grau (Inventar) | `#373737` |
| Helles Grau (Inventar) | `#c6c6c6` |

### To-do
- [ ] **CSS 1 – Seite:** Hintergrund (z. B. Himmelblau `#87ceeb` oder ein Verlauf von Himmel zu Gras), Schriftfarbe, Schriftart. Tipp: `font-family: "Courier New", monospace;` sieht pixelig aus.
- [ ] **CSS 2 – Überschrift:** groß, weiß, mit Schatten: `text-shadow: 3px 3px 0 #3f3f3f;`
- [ ] **CSS 3 – Hotbar-Box:** Hintergrund in Dunkelgrau, dicker Rahmen, Innenabstand. Die Hotbar-Plätze (`.hotbar-platz`) in hellem Grau mit Rahmen.
- [ ] **CSS 4 – Leere Plätze (`.leer-platz`):** gestrichelter Rahmen (`border: 2px dashed ...`)
- [ ] **CSS 5 – Filter-Buttons:** Farben und Rahmen. Der aktive (`.filter-button.aktiv`) in Gras-Grün.
- [ ] **CSS 6 – Karte:** Hintergrund, dicker Rahmen (`border: 4px solid gray`). Minecraft hat **eckige** Kanten, also kein `border-radius`!
- [ ] **CSS 7 – Härte-Farben:** Jede Karte hat zusätzlich eine Klasse für ihre Härte. Gib jeder eine andere **Rahmenfarbe** (`border-color`):

  | Klasse | Vorschlag |
  |--------|-----------|
  | `.weich` (Weich) | Grün `#5b8731` |
  | `.mittel` (Mittel) | Gelb `#f2c94c` |
  | `.hart` (Hart) | Rot `#c0392b` |
  | `.unzerstoerbar` (Unzerstörbar) | Schwarz `#111111` |

- [ ] **CSS 8 – Stapelgröße:** weiße fette Schrift mit Schatten (`text-shadow: 2px 2px 0 #3f3f3f;`), so wie im Spiel
- [ ] **CSS 9 – Block in der Hotbar:** Blöcke, die schon in der Hotbar sind, haben die Klasse `in-hotbar`. Mache sie halb durchsichtig: `opacity: 0.4;`
- [ ] **CSS 10 – „Hotbar voll“-Box und Fußzeile**

## Tipps
- In React heißt es **`className`** statt `class`.
- Jedes Tag muss geschlossen werden, auch `<img ... />`.
- Wenn die Seite weiß bleibt: **F12** → Konsole.
- Die Blocknamen sind auf **Englisch**, weil die Daten so aus dem Internet kommen.
- Es sind über 500 Blöcke. Beim ersten Laden kann es ein paar Sekunden dauern.

## Extra-Ideen
- [ ] Zeige mit `{block.hardness}` die genaue Härte als Zahl an.
- [ ] Gib `.unzerstoerbar`-Karten einen dunklen Hintergrund mit Farbverlauf: `background: linear-gradient(...)`
- [ ] Die Karte soll beim Drüberfahren (`:hover`) leuchten: `box-shadow: 0 0 15px yellow;`
- [ ] Lass die Glühbirne 💡 (`.licht`) blinken. Tipp: `@keyframes` und `animation`.

## Weiter geht's
Fertig? Dann bau dir in **[Aufgabe 06 – Minecraft-Werkbank](../06-minecraft-werkbank/)** eine eigene Werkbank! 🛠️

---

*Minecraft ist eine Marke von Mojang Studios. Die Daten und Bilder kommen von [PrismarineJS](https://github.com/PrismarineJS). Diese Aufgabe ist nur zum Lernen gedacht.*
