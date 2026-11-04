# Aufgabe 03 – Erste Funktionen ⭐

## Ziel
Du schreibst eigene **Funktionen**: kleine Programme, die du immer wieder benutzen kannst.
Ab jetzt gibt es **automatische Tests**, die deine Lösung prüfen.

## Was ist eine Funktion?
Eine Funktion ist wie eine **Maschine**: Oben wirft man etwas hinein (**Parameter**), unten kommt ein Ergebnis heraus (**return**).

```
      5
      ↓
 +-----------+
 | verdoppeln|
 +-----------+
      ↓
     10
```

```js
// Funktion schreiben
function verdoppeln(zahl) {
    return zahl * 2;
}

// Funktion benutzen (aufrufen)
const ergebnis = verdoppeln(5);
console.log(ergebnis);   // 10
```

- `zahl` ist der **Parameter**, also der Wert, den man hineingibt.
- `return` gibt das **Ergebnis zurück**.
- Eine Funktion kann auch **mehrere** Parameter haben: `function addiere(a, b) { ... }`

## Die Tests
Ganz unten in `aufgabe.js` stehen Tests. Wenn du die Datei startest, siehst du:
```
✅ verdoppeln(5) ergibt 10
❌ quadrat(4) ergibt 16  →  erwartet: 16, bekommen: undefined
```
`undefined` heißt: Deine Funktion gibt noch **nichts** zurück. Du hast also `return` vergessen oder die Funktion ist noch leer.

## To-do (in `aufgabe.js`)
- [ ] Starte die Datei. Der Test für `verdoppeln` ist schon grün ✅ (Beispiel).
- [ ] `quadrat(zahl)` gibt die Zahl mal sich selbst zurück.
- [ ] `addiere(a, b)` gibt die Summe zurück.
- [ ] `begruessung(name)` gibt den Text `"Hallo NAME!"` zurück (z. B. `"Hallo Lisa!"`).
- [ ] `celsiusZuFahrenheit(celsius)` rechnet um (Formel: `celsius * 9 / 5 + 32`).
- [ ] `minutenZuSekunden(minuten)` rechnet Minuten in Sekunden um.
- [ ] `durchschnitt(a, b, c)` gibt den Durchschnitt von drei Zahlen zurück.
- [ ] `rechteckUmfang(breite, hoehe)` gibt den Umfang zurück.
- [ ] **Alle Tests grün ✅**

## Tipps
- **Nicht** `console.log` statt `return` benutzen! `console.log` zeigt nur etwas an, `return` gibt den Wert zurück.
- Ändere **nichts** im Test-Bereich ganz unten.

## Bonus
- [ ] Schreibe eine Funktion `bmi(gewicht, groesse)`. Formel: `gewicht / (groesse * groesse)`.
- [ ] Schreibe `addiere` als **Pfeilfunktion**: `const addiere = (a, b) => a + b;`
