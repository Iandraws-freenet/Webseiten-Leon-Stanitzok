# Aufgabe 05 – Schleifen ⭐⭐

## Ziel
Du lässt den Computer Dinge **wiederholen**, ohne den Code zehnmal abzuschreiben.

## Die `for`-Schleife
```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Ausgabe: 1 2 3 4 5 (jede Zahl in einer eigenen Zeile)
```

| Teil | Beispiel | Bedeutung |
|------|----------|-----------|
| Start | `let i = 1` | Wir fangen bei 1 an |
| Bedingung | `i <= 5` | Solange i ≤ 5 ist, mach weiter |
| Schritt | `i++` | Nach jedem Durchlauf: i um 1 erhöhen |

## Die `while`-Schleife
```js
let zahl = 1;
while (zahl <= 5) {
    console.log(zahl);
    zahl++;
}
```

> ⚠️ **Endlosschleife:** Wenn die Bedingung nie falsch wird (z. B. du vergisst `zahl++`), läuft das Programm für immer.
> Im Terminal stoppst du es mit **Strg + C**.

## Etwas in einer Schleife aufsummieren
```js
let summe = 0;                  // 1. Startwert VOR der Schleife
for (let i = 1; i <= 3; i++) {
    summe = summe + i;          // 2. In jedem Durchlauf dazu addieren
}
console.log(summe);             // 3. Nach der Schleife: 6
```

## To-do (in `aufgabe.js`)

### Teil A – Ausgaben (ohne Tests)
- [ ] Gib die Zahlen von **1 bis 10** aus.
- [ ] Gib einen **Countdown** von 10 bis 1 aus, danach `Start! 🚀`.
- [ ] Gib das **Einmaleins der 7** aus: `1 x 7 = 7` bis `10 x 7 = 70`.

### Teil B – Funktionen (mit Tests)
- [ ] `summeBis(n)` gibt die Summe aller Zahlen von 1 bis n zurück. (`summeBis(4)` = 1+2+3+4 = 10)
- [ ] `fakultaet(n)` gibt 1 · 2 · 3 · … · n zurück. (`fakultaet(4)` = 24, `fakultaet(0)` = 1)
- [ ] `potenz(basis, exponent)` rechnet „basis hoch exponent“, **ohne** `**` oder `Math.pow`.
- [ ] `anzahlTeiler(zahl)` zählt, durch wie viele Zahlen `zahl` ohne Rest teilbar ist.
  (`anzahlTeiler(6)` = 4, weil 1, 2, 3, 6)
- [ ] `zaehleGerade(n)` zählt, wie viele gerade Zahlen es von 1 bis n gibt.
- [ ] **Alle Tests grün ✅**

## Tipps
- `i++` bedeutet dasselbe wie `i = i + 1`.
- `summe += i` bedeutet dasselbe wie `summe = summe + i`.
- Bei `fakultaet` und `potenz` startest du mit `1` statt `0`. Warum? (Was ist 0 mal irgendwas?)

## Bonus
- [ ] Gib eine **Treppe** aus Sternchen aus (Tipp: `"*".repeat(i)`):
  ```
  *
  **
  ***
  ****
  ```
- [ ] **FizzBuzz:** Zähle von 1 bis 30. Durch 3 teilbar → `Fizz`, durch 5 → `Buzz`, durch beides → `FizzBuzz`, sonst die Zahl.
