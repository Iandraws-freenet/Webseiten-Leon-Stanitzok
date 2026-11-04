# Aufgabe 01 – Variablen und Ausgabe ⭐

## Ziel
Du schreibst deine ersten Zeilen JavaScript: Du speicherst Werte in **Variablen** und gibst sie aus.

## Was ist eine Variable?
Eine Variable ist wie eine **Box mit einem Namen**, in die man etwas hineinlegt.

```js
let alter = 17;          // Box "alter" enthält die Zahl 17
const name = "Lisa";     // Box "name" enthält den Text "Lisa"

console.log(name);       // gibt aus: Lisa
```

- `let`: der Wert darf sich später **ändern**
- `const`: der Wert bleibt **immer gleich**
- `console.log(...)`: gibt etwas auf dem Bildschirm aus

## Datentypen

| Typ | Beispiel | Bedeutung |
|-----|----------|-----------|
| `string` | `"Hallo"` | Text (immer in Anführungszeichen) |
| `number` | `17`, `3.5` | Zahl (Kommazahlen mit **Punkt**!) |
| `boolean` | `true`, `false` | wahr oder falsch |

## Texte zusammensetzen
```js
const stadt = "Hamburg";
console.log("Ich wohne in " + stadt);        // mit +
console.log(`Ich wohne in ${stadt}`);        // mit Backticks ` und ${ }
```

## To-do (in `aufgabe.js`)
- [ ] Starte die Datei einmal (`node aufgabe.js`). Es erscheint „Hallo, ich bin JavaScript!“.
- [ ] **Teil A – Steckbrief:** Erstelle Variablen für Vorname, Nachname, Alter, Stadt und `istAzubi` (true/false).
- [ ] Gib einen Steckbrief aus, genau so:
  ```
  --- Steckbrief ---
  Name: Lisa Müller
  Alter: 17
  Stadt: Berlin
  Azubi: true
  ```
- [ ] **Teil B – Ändern:** Erhöhe das Alter um 1 und gib aus: `Nächstes Jahr bin ich 18.`
- [ ] **Teil C – Datentypen:** Gib mit `typeof` den Typ von drei Variablen aus.
- [ ] **Teil D – Ein Satz:** Gib mit Backticks einen ganzen Satz aus:
  `Ich heiße Lisa Müller, bin 18 Jahre alt und wohne in Berlin.`

## Tipps
- `alter = alter + 1;` erhöht die Zahl um 1. Kürzer: `alter++;`
- `console.log(typeof alter);` gibt `number` aus.

## Bonus
- [ ] Was passiert, wenn du eine `const`-Variable änderst? Probiere es aus und lies die Fehlermeldung.
- [ ] Was kommt bei `"5" + 3` heraus? Und bei `5 + 3`? Schreibe die Erklärung als Kommentar auf.
