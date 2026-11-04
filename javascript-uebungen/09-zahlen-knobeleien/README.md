# Aufgabe 09 – Zahlen-Knobeleien ⭐⭐⭐

## Ziel
Du löst klassische Programmier-Rätsel mit Zahlen. Hier musst du **Schleifen, if/else und Arrays kombinieren**.

> 💡 Nimm dir für jede Funktion Zeit. Überlege dir **zuerst auf Papier**, wie du es als Mensch lösen würdest. Erst dann programmierst du.

## To-do (in `aufgabe.js`)

### 1. `istPrimzahl(zahl)`
Eine **Primzahl** ist nur durch 1 und sich selbst teilbar. Beispiele: 2, 3, 5, 7, 11, 13 …
- 1 ist **keine** Primzahl.
- Idee: Prüfe alle Zahlen von 2 bis `zahl - 1`. Teilt eine davon `zahl` ohne Rest, ist es **keine** Primzahl.

### 2. `primzahlenBis(n)`
Gib eine **Liste** aller Primzahlen von 2 bis n zurück.
- `primzahlenBis(20)` → `[2, 3, 5, 7, 11, 13, 17, 19]`
- Tipp: Benutze `istPrimzahl`!

### 3. `quersumme(zahl)`
Die Quersumme ist die Summe aller Ziffern: `quersumme(1234)` = 1 + 2 + 3 + 4 = `10`
- Tipp: `zahl % 10` gibt die **letzte Ziffer**. `Math.floor(zahl / 10)` **entfernt** die letzte Ziffer.
- Wiederhole das mit `while`, solange `zahl > 0` ist.

### 4. `ggT(a, b)`
Der **größte gemeinsame Teiler**: die größte Zahl, durch die `a` **und** `b` ohne Rest teilbar sind.
- `ggT(12, 18)` → `6`
- Idee: Zähle von der kleineren Zahl **rückwärts**, bis du eine findest, die beide teilt.

### 5. `fibonacci(anzahl)`
Die Fibonacci-Folge: Jede Zahl ist die **Summe der beiden davor**.
- `0, 1, 1, 2, 3, 5, 8, 13, …`
- `fibonacci(7)` → `[0, 1, 1, 2, 3, 5, 8]`
- Tipp: Starte mit `[0, 1]` und hänge immer `liste[liste.length - 1] + liste[liste.length - 2]` an.

### 6. `zahlZuText(zahl)`
Gib eine Zahl von 1 bis 5 als Wort zurück. Alles andere ergibt `"unbekannt"`.
- `zahlZuText(3)` → `"drei"`
- Tipp: Ein Array `["eins", "zwei", ...]` hilft.

- [ ] **Alle Tests grün ✅**

## Bonus
- [ ] `istPerfekt(zahl)`: Eine Zahl ist „perfekt“, wenn die Summe ihrer Teiler (ohne sich selbst) gleich der Zahl ist. Beispiel: 6 = 1 + 2 + 3. Finde alle perfekten Zahlen bis 10000.
- [ ] Mache `istPrimzahl` schneller: Man muss nur bis zur **Wurzel** der Zahl prüfen (`Math.sqrt`).
