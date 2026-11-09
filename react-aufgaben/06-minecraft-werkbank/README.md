# Aufgabe 06 – Minecraft-Werkbank 🛠️

## Ziel
Du gestaltest eine **Werkbank (Crafting Table)** wie in Minecraft. Oben ist das **3x3-Feld**, daneben ein **Pfeil** und das **Ergebnis**. Unten ist dein **Inventar** mit der **Hotbar**.
Legst du die Items im richtigen Muster hin, erscheint rechts das Ergebnis. Ein Klick darauf, und das Item ist gebaut!

Das JavaScript ist **komplett fertig**: Items und über 2000 echte Rezepte laden, Rezept erkennen, bauen, zählen.
**Du schreibst nur HTML und CSS.**

> Das ist die Fortsetzung von [Aufgabe 05 – Minecraft-Hotbar](../05-minecraft/). Mach zuerst Aufgabe 05 fertig.

## So soll es am Ende aussehen
```
                   🛠️ Meine Werkbank
              Was baust du als Nächstes?

  +----------------------------------------------------+
  |  Crafting                                          |
  |       [  ][  ][  ]                                 |
  |       [  ][  ][  ]     ➜      [ Ergebnis ]         |
  |       [  ][  ][  ]                     4           |
  |                                                    |
  |  ✋ In der Hand: Stick    🛠️ 2 / 20   [Feld leeren] |
  |                                                    |
  |  Inventar                                          |
  |  [Holz][Bretter][Stock][Stein][  ] ... (3 Reihen)  |
  |                                                    |
  |  [Fackel][Werkbank][  ][  ][  ][  ][  ][  ][  ]    |  ← Hotbar
  +----------------------------------------------------+

              🎉 Du hast Torch gebaut!

  📖 Rezept-Ideen
  [Werkbank ✅] [Fackel ✅] [Truhe] [Ofen] [Spitzhacke] ...
```

**So funktioniert die App:**
1. Klick auf ein Item im **Inventar** → du hast es **in der Hand** (der Platz wird markiert)
2. Klick auf einen Platz im **3x3-Feld** → das Item wird hingelegt
3. Klick auf einen Platz im Feld mit **leerer Hand** → das Item wird weggenommen
4. Passt das Muster zu einem Rezept, erscheint rechts das **Ergebnis** und wackelt
5. Klick auf das Ergebnis → das Item landet in der **Hotbar** und in den Rezept-Ideen gibt es einen ✅
6. Gebaute Items in der Hotbar kannst du auch wieder in die Hand nehmen und weiterbauen

Von den Start-Items hast du **unendlich viele**.

**Probier zuerst diese Rezepte:**
```
Werkbank           Fackel             Holzspitzhacke
[Br][Br][  ]       [Ko][  ][  ]       [Br][Br][Br]
[Br][Br][  ]       [St][  ][  ]       [  ][St][  ]
[  ][  ][  ]       [  ][  ][  ]       [  ][St][  ]

Br = Oak Planks   St = Stick   Ko = Coal
```
Die anderen Rezepte findest du selbst heraus (oder im [Minecraft-Wiki](https://minecraft.wiki/w/Crafting)).

---

## Teil 1 – HTML (in `index.html`)

Suche im Code nach **`DEIN HTML`**. Diese Werte kannst du benutzen:

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{item.displayName}` | Name des Items, z. B. *Oak Planks* |
| `{item.bild}` / `{bild}` | Adresse vom Bild |
| `{ergebnisItem.bild}` | Bild vom Ergebnis |
| `{ergebnis.count}` | Wie viele Items du bekommst, z. B. *4* |
| `{handName}` | Was du in der Hand hältst (oder *nichts*) |
| `{anzahlGeschafft}` | Wie viele Rezept-Ideen du schon gebaut hast |
| `{anzahlIdeen}` | Wie viele Rezept-Ideen es gibt (20) |
| `{letztesItem.displayName}` | Was du zuletzt gebaut hast |

### To-do
- [ ] **HTML 1 – Kopf:** `<h1>` mit „🛠️ Meine Werkbank“ und ein `<p className="untertitel">`.
- [ ] **HTML 2 – Fenster-Überschriften:** `<h2>Crafting</h2>` über dem Feld (2a) und `<h2>Inventar</h2>` über dem Inventar (2b).
- [ ] **HTML 3 – Inventar-Platz:** das Bild `<img ... />` mit `src`, `alt` **und** `title`. Fahr danach mit der Maus über ein Item. Was passiert?
- [ ] **HTML 4 – Werkbank-Platz:** Nimm ein Item in die Hand und klicke ins 3x3-Feld. Schreib das Bild hinein, damit man es sieht.
- [ ] **HTML 5 – Pfeil:** ein `➜` zwischen Feld und Ergebnis.
- [ ] **HTML 6 – Ergebnis:** Lege Holzbretter wie bei der Werkbank hin. Schreib das Bild vom Ergebnis und die Anzahl (`<span className="anzahl">`) hinein.
- [ ] **HTML 7 – Rezept-Idee:** Bild, Name in einem `<p>` und den Haken ✅ (steht im Kommentar).
- [ ] **HTML 8 – Werkbank-Info:** `<p>✋ In der Hand: {handName}</p>` und `<p>🛠️ {anzahlGeschafft} / {anzahlIdeen} Rezepte</p>`
- [ ] **HTML 9 – Meldung:** Bau etwas. Jetzt erscheint eine leere Box. Schreibe hinein: „🎉 Du hast … gebaut!“
- [ ] **HTML 10 – Rezept-Ideen:** Überschrift `<h2>📖 Rezept-Ideen</h2>`
- [ ] **HTML 11 – Fußzeile:** „Daten und Bilder: PrismarineJS“ und „Gebaut von DEIN NAME“

---

## Teil 2 – CSS (in `style.css`)

Das **Layout ist oben schon fertig** (3x3-Raster, Inventar mit 9 Spalten, Wackel-Animation, Handy-Ansicht). Unten im Bereich **`DEIN CSS`** gestaltest du die App.

**Farben aus dem Minecraft-Inventar:**

| Farbe | Code |
|-------|------|
| Fenster (hellgrau) | `#c6c6c6` |
| Platz (mittelgrau) | `#8b8b8b` |
| Dunkler Rand | `#373737` |
| Heller Rand | `#ffffff` |
| Schrift im Fenster | `#3f3f3f` |
| Gras-Grün | `#5b8731` |

### Der Minecraft-3D-Trick 🧱
Im Spiel sehen die Plätze aus, als wären sie **eingedrückt**: oben und links dunkel, unten und rechts hell.
Das Fenster ist genau andersherum, es sieht **herausstehend** aus. Das geht mit vier verschiedenen Rahmenfarben:

```css
border: 3px solid;
border-color: #373737 #ffffff #ffffff #373737;  /* oben rechts unten links */
```

### To-do
- [ ] **CSS 1 – Seite:** Hintergrund (z. B. dunkel wie eine Höhle `#1e1e1e` oder Holz-Braun `#866043`), Schriftfarbe, Schriftart. Tipp: `font-family: "Courier New", monospace;`
- [ ] **CSS 2 – Überschrift:** groß, weiß, mit Schatten: `text-shadow: 3px 3px 0 #3f3f3f;`
- [ ] **CSS 3 – Fenster:** Hintergrund `#c6c6c6`, Innenabstand, Rahmen mit dem **3D-Trick** (herausstehend: oben/links hell, unten/rechts dunkel). Die Überschriften `h2` in `#3f3f3f`, nicht zu groß.
- [ ] **CSS 4 – Plätze (`.slot`):** Hintergrund `#8b8b8b`, Rahmen mit dem **3D-Trick** (eingedrückt). Wieder **kein** `border-radius`!
- [ ] **CSS 5 – Ausgewählt:** Der Platz in der Hand soll auffallen, z. B. heller Hintergrund und `outline: 3px solid white;`
- [ ] **CSS 6 – Ergebnis und Pfeil:** Pfeil in Grau `#8b8b8b`. Wenn man etwas bauen kann (`.ergebnis.bereit`), soll das Ergebnis leuchten, z. B. `box-shadow: 0 0 12px yellow;`
- [ ] **CSS 7 – Anzahl:** weiße fette Schrift mit Schatten (`text-shadow: 2px 2px 0 #3f3f3f;`), so wie im Spiel
- [ ] **CSS 8 – Button „Feld leeren“:** Farben, Rahmen, Schrift
- [ ] **CSS 9 – Meldung:** Hintergrund (z. B. Gras-Grün), weiße Schrift, Innenabstand, Rahmen
- [ ] **CSS 10 – Rezept-Ideen:** Karten wie Slots gestalten. Noch nicht gebaut = halb durchsichtig (`opacity: 0.5;`), geschafft (`.idee.geschafft`) = voll sichtbar mit grünem Rahmen
- [ ] **CSS 11 – Fußzeile**

## Tipps
- In React heißt es **`className`** statt `class`.
- Jedes Tag muss geschlossen werden, auch `<img ... />`.
- `<> ... </>` ist ein **leerer Behälter** in React. Schreib dein HTML einfach hinein.
- Wenn die Seite weiß bleibt: **F12** → Konsole.
- Die Namen sind auf **Englisch**, weil die Daten so aus dem Internet kommen.
- Ein paar Items haben kein eigenes Bild in den Daten. Die Truhe sieht dann z. B. aus wie Holzbretter. Das ist kein Fehler von dir.

## Extra-Ideen
- [ ] Zeige unter dem Ergebnis den Namen an: `{ergebnisItem.displayName}`
- [ ] Zeige mit `{item.stackSize}` in jedem Inventar-Platz, wie viele auf einen Stapel passen
- [ ] Gib dem Fenster einen Schatten: `box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.5);`
- [ ] Die Plätze sollen beim Drüberfahren (`:hover`) heller werden, so wie im Spiel
- [ ] Wenn alle 20 Rezept-Ideen geschafft sind: Lass die Überschrift in Regenbogenfarben blinken (`@keyframes`)
- [ ] **Profi:** Schreib eigene Ideen in die Liste `REZEPT_IDEEN` oben im Code (z. B. `"iron_door"`, `"shield"`, `"cake"`) und gib dir selbst Start-Items dazu in `START_ITEMS`

---

*Minecraft ist eine Marke von Mojang Studios. Die Daten und Bilder kommen von [PrismarineJS](https://github.com/PrismarineJS). Diese Aufgabe ist nur zum Lernen gedacht.*
