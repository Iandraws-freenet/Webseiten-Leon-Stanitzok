# Aufgabe 07 – Arrays (Listen) ⭐⭐

## Ziel
Du speicherst **mehrere Werte** in einer Liste (einem **Array**) und wertest sie aus.

## Was ist ein Array?
Ein Array ist wie ein **Regal mit nummerierten Fächern**.

```js
const zahlen = [4, 8, 15, 16];
//   Position:   0  1   2   3
```

## Die wichtigsten Befehle

| Befehl | Bedeutung | Beispiel |
|--------|-----------|----------|
| `liste[0]` | Element an Position 0 | `zahlen[0]` → `4` |
| `liste.length` | Anzahl der Elemente | `zahlen.length` → `4` |
| `liste.push(x)` | Element hinten anhängen | `zahlen.push(23)` |
| `liste.includes(x)` | Ist x in der Liste? | `zahlen.includes(8)` → `true` |
| `[]` | eine leere Liste | `const neu = [];` |

## Durch ein Array laufen
```js
const zahlen = [4, 8, 15];

// Variante 1: mit Position
for (let i = 0; i < zahlen.length; i++) {
    console.log(zahlen[i]);
}

// Variante 2: kürzer
for (const zahl of zahlen) {
    console.log(zahl);
}
```

## To-do (in `aufgabe.js`)
- [ ] `summe(zahlen)` gibt die Summe aller Zahlen zurück. Leere Liste → `0`.
- [ ] `durchschnitt(zahlen)` gibt den Durchschnitt zurück.
- [ ] `groessteZahl(zahlen)` gibt die größte Zahl zurück (**ohne** `Math.max`).
- [ ] `nurGerade(zahlen)` gibt eine **neue Liste** nur mit den geraden Zahlen zurück.
- [ ] `verdoppleAlle(zahlen)` gibt eine neue Liste zurück, in der jede Zahl verdoppelt ist.
- [ ] `umgekehrt(liste)` gibt die Liste rückwärts zurück (**ohne** `reverse()`).
- [ ] `zaehleGroesserAls(zahlen, grenze)` zählt, wie viele Zahlen größer als `grenze` sind.
- [ ] `ohneDuplikate(liste)` gibt eine Liste zurück, in der jedes Element nur **einmal** vorkommt.
- [ ] **Alle Tests grün ✅**

## Tipps
- Eine neue Liste baust du so:
  ```js
  const ergebnis = [];
  ergebnis.push(5);
  ergebnis.push(7);
  // ergebnis ist jetzt [5, 7]
  ```
- Bei `groessteZahl`: Merke dir die **erste** Zahl als „bisher größte“ und vergleiche dann alle anderen damit.
- Bei `durchschnitt`: Du hast `summe` schon geschrieben. Benutze die Funktion!

## Bonus
- [ ] Löse `nurGerade` und `verdoppleAlle` nochmal mit `filter` und `map`:
  ```js
  zahlen.filter(z => z % 2 === 0);
  zahlen.map(z => z * 2);
  ```
- [ ] `kleinsteZahl(zahlen)` gibt die kleinste Zahl zurück.
