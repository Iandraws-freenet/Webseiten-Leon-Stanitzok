# Aufgabe 04 – Entscheidungen (if / else) ⭐⭐

## Ziel
Deine Funktionen sollen **Entscheidungen treffen**: Wenn etwas stimmt, mache A, sonst mache B.

## So funktioniert `if / else`
```js
function pruefeAlter(alter) {
    if (alter >= 18) {
        return "volljährig";
    } else {
        return "minderjährig";
    }
}
```
Auf Deutsch: **Wenn** das Alter größer oder gleich 18 ist, **dann** … **sonst** …

Mehrere Fälle mit `else if`:
```js
if (temperatur > 25) {
    return "warm";
} else if (temperatur > 10) {
    return "mild";
} else {
    return "kalt";
}
```

## Vergleiche

| Zeichen | Bedeutung | Beispiel |
|---------|-----------|----------|
| `===` | ist gleich | `x === 5` |
| `!==` | ist nicht gleich | `x !== 5` |
| `>` / `<` | größer / kleiner | `x > 5` |
| `>=` / `<=` | größer gleich / kleiner gleich | `x >= 18` |
| `&&` | UND (beides muss stimmen) | `x > 0 && x < 10` |
| `\|\|` | ODER (eins muss stimmen) | `x < 0 \|\| x > 100` |
| `!` | NICHT | `!istGerade` |

> ⚠️ `=` bedeutet **zuweisen** (etwas in die Box legen). `===` bedeutet **vergleichen**.

## To-do (in `aufgabe.js`)
- [ ] `istGerade(zahl)` gibt `true` zurück, wenn die Zahl gerade ist, sonst `false`.
- [ ] `istVolljaehrig(alter)` gibt `true` ab 18 zurück, sonst `false`.
- [ ] `groessteVonDrei(a, b, c)` gibt die größte der drei Zahlen zurück.
- [ ] `note(punkte)` gibt die Schulnote als Zahl zurück:

  | Punkte | Note |
  |--------|------|
  | ab 90 | 1 |
  | ab 75 | 2 |
  | ab 60 | 3 |
  | ab 50 | 4 |
  | unter 50 | 5 |

- [ ] `ticketPreis(alter)` gibt den Kinopreis zurück:
  unter 6 Jahre → `0`, unter 18 → `5`, ab 65 → `6`, sonst → `10`
- [ ] `istSchaltjahr(jahr)` gibt `true` oder `false` zurück. Die Regel:
  - Ein Jahr ist ein Schaltjahr, wenn es durch **4** teilbar ist,
  - **außer** es ist durch **100** teilbar,
  - **aber** wenn es durch **400** teilbar ist, ist es doch eins.
- [ ] **Alle Tests grün ✅**

## Tipps
- „Gerade“ heißt: Beim Teilen durch 2 bleibt **kein Rest** → `zahl % 2 === 0`
- Bei `note`: Prüfe zuerst die **höchste** Grenze! Die Reihenfolge ist wichtig.
- Ein Vergleich ergibt schon `true` oder `false`. Statt
  `if (x > 5) { return true; } else { return false; }`
  kannst du einfach schreiben: `return x > 5;`

## Bonus
- [ ] `note(punkte)` soll `"ungültig"` zurückgeben, wenn die Punkte unter 0 oder über 100 liegen.
- [ ] Schreibe `wochentag(nummer)`, die für 1 → `"Montag"`, 2 → `"Dienstag"` … zurückgibt. Probiere dafür `switch` aus.
