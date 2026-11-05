# Aufgabe 03 – Schwimmen 🏊

## Ziel
Du gestaltest eine App über **berühmte Schwimmerinnen und Schwimmer**. Die Infos und Fotos kommen von **Wikipedia**.
Man kann auf Namen klicken oder selbst einen Namen suchen. Unten steht, wen man schon angesehen hat.

Das JavaScript ist **komplett fertig**: Daten laden, Suche, Fehler und Verlauf.
**Du schreibst nur HTML und CSS.**

## So soll es am Ende aussehen
```
                 🏊 Schwimm-Stars
        Klicke auf einen Namen oder suche selbst!

 [Michael Phelps] [Katie Ledecky] [Florian Wellbrock] ...

         [ Name eingeben ...        ] [Suchen]

        +--------------------------------+
        |           ( Foto )             |
        |        Michael Phelps          |
        |  Michael Fred Phelps II ist    |
        |  ein ehemaliger Schwimmer ...  |
        |      Mehr bei Wikipedia        |
        +--------------------------------+

   Zuletzt angesehen: [Michael Phelps] [Katie Ledecky]
```

---

## Teil 1 – HTML (in `index.html`)

Suche im Code nach **`DEIN HTML`**. Diese Werte kannst du benutzen:

| Das schreibst du | Das erscheint |
|------------------|---------------|
| `{info.title}` | Name, z. B. *Michael Phelps* |
| `{info.extract}` | Ein Text über die Person |
| `{link}` | Adresse vom ganzen Wikipedia-Artikel |

Das Foto zeigt die App schon von selbst an, aber nur, wenn es eins gibt.

### To-do
- [ ] **HTML 1 – Kopf:** `<h1>` mit „🏊 Schwimm-Stars“ und ein `<p className="untertitel">`.
- [ ] **HTML 2 – Profil:** Klicke auf einen Namen. Unter dem Foto ist noch alles leer. Schreibe dort hin:
  - den Namen in einer `<h2>`
  - den Text in einem `<p>`
  - einen Link: `<a href={link} target="_blank">Mehr bei Wikipedia</a>`
- [ ] **HTML 3 – Laden:** Schreibe in die Lade-Box einen Text, z. B. „Taucht ab ... 🌊“.
  (Du siehst ihn nur ganz kurz, wenn du auf einen Namen klickst.)
- [ ] **HTML 4 – Fehler:** Suche einen Namen, den es nicht gibt (z. B. „Quatschname“). Schreibe in die Fehler-Box:
  ein großes Emoji (z. B. in einem `<p className="emoji">`) und den Text „Leider nicht gefunden“.
- [ ] **HTML 5 – Verlauf:** Schreibe vor die Verlaufs-Buttons den Text „Zuletzt angesehen:“ in ein `<span>`.

---

## Teil 2 – CSS (in `style.css`)

Das **Layout ist oben schon fertig** (Anordnung, Animationen, Handy-Ansicht). Unten im Bereich **`DEIN CSS`** gestaltest du die App.

### To-do
- [ ] **CSS 1 – Seite:** Hintergrundfarbe (z. B. Wasserblau `#0288d1`), Schriftfarbe, Schriftart
- [ ] **CSS 2 – Überschrift und Untertitel**
- [ ] **CSS 3 – Namens-Buttons:** Hintergrund, Schriftfarbe, fette Schrift, runde Ecken (`border-radius: 25px`), kein Rahmen.
  Der ausgewählte Button (`.schwimmer-button.aktiv`) bekommt eine andere Farbe.
- [ ] **CSS 4 – Suchfeld und Such-Button:** Innenabstand, Schriftgröße, runde Ecken, kein Rahmen
- [ ] **CSS 5 – Profil-Box:** weißer Hintergrund, dunkle Schrift, Innenabstand, runde Ecken, Schatten
- [ ] **CSS 6 – Foto:** **rund** machen (`border-radius: 50%`) und einen dicken Rahmen in deiner Lieblingsfarbe
- [ ] **CSS 7 – Text im Profil:** Farbe vom Namen, Zeilenabstand vom Text, Farbe vom Link
- [ ] **CSS 8 – Lade-Box und Fehler-Box:** Farben, Innenabstand, runde Ecken. Das Emoji schön groß.
- [ ] **CSS 9 – Verlauf:** kleine Buttons, durchsichtiger Hintergrund (`rgba(255, 255, 255, 0.2)`), weiße Schrift

## Tipps
- In React heißt es **`className`** statt `class`.
- Jedes Tag muss geschlossen werden.
- Wenn die Seite weiß bleibt: **F12** → Konsole.
- Weitere Namen zum Suchen: *Mark Spitz*, *Paul Biedermann*, *Ian Thorpe*

## Extra-Ideen
- [ ] Füge in der Liste `SCHWIMMER` (oben im Code) weitere Namen hinzu. Den Rest macht die App von selbst!
- [ ] Gib den Namens-Buttons beim Drüberfahren (`:hover`) eine andere Farbe.
- [ ] Mach aus der Schwimm-App eine App für deinen Lieblingssport: Ändere die Namen in `SCHWIMMER`, die Überschrift und die Farben.
