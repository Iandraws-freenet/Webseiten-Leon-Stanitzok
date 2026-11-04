# JavaScript Übungsaufgaben für Einsteiger

Diese Aufgaben sind für Leute, die **noch nie programmiert** haben.
Du lernst die Grundlagen von JavaScript mit klassischen Übungen: rechnen, entscheiden, wiederholen, mit Texten und Listen arbeiten.

## Wie sind die Aufgaben aufgebaut?

Jeder Ordner enthält:

| Datei | Wofür? |
|-------|--------|
| `README.md` | Erklärung des Themas + To-do-Liste. **Hier fängst du an.** |
| `aufgabe.js` | Hier schreibst du deinen Code. Suche nach `TODO`. |
| `index.html` | Nur zum Starten im Browser (nicht verändern). |

Ab Aufgabe 03 sind unten in `aufgabe.js` **Tests** eingebaut. Sie prüfen deine Lösung automatisch:

```
✅ quadrat(4) ergibt 16
❌ quadrat(3) ergibt 9  →  erwartet: 9, bekommen: undefined
```

Dein Ziel: **Alle Tests sind grün ✅**

## So startest du eine Aufgabe

### Variante 1: Mit Node.js im Terminal (empfohlen)
1. Öffne in VS Code das Terminal: **Strg + Ö** (oder Menü „Terminal“ → „Neues Terminal“).
2. Wechsle in den Ordner der Aufgabe, z. B.:
   ```
   cd javascript-uebungen/01-variablen-und-ausgabe
   ```
3. Starte die Datei:
   ```
   node aufgabe.js
   ```
4. Nach jeder Änderung: speichern (Strg + S) und den Befehl nochmal ausführen (Pfeiltaste ↑ + Enter).

> Node.js muss installiert sein: https://nodejs.org (die „LTS“-Version nehmen).
> Prüfen kannst du das im Terminal mit `node -v`.

### Variante 2: Im Browser
1. Öffne `index.html` im Browser.
2. Drücke **F12** → Reiter **„Konsole“**.
3. Nach jeder Änderung: speichern und die Seite neu laden (F5).

## Übersicht

| Nr. | Aufgabe | Thema | Schwierigkeit |
|-----|---------|-------|---------------|
| 01 | [Variablen und Ausgabe](01-variablen-und-ausgabe/) | `let`, `const`, `console.log` | ⭐ leicht |
| 02 | [Rechnen](02-rechnen/) | `+ - * / %`, kleine Rechner | ⭐ leicht |
| 03 | [Erste Funktionen](03-erste-funktionen/) | `function`, Parameter, `return` | ⭐ leicht |
| 04 | [Entscheidungen (if / else)](04-if-else/) | Bedingungen, Vergleiche | ⭐⭐ leicht–mittel |
| 05 | [Schleifen](05-schleifen/) | `for`, `while` | ⭐⭐ leicht–mittel |
| 06 | [Texte (Strings)](06-texte-strings/) | Texte untersuchen und verändern | ⭐⭐ mittel |
| 07 | [Arrays (Listen)](07-arrays/) | Listen durchlaufen und auswerten | ⭐⭐ mittel |
| 08 | [Objekte](08-objekte/) | Daten zusammenfassen | ⭐⭐ mittel |
| 09 | [Zahlen-Knobeleien](09-zahlen-knobeleien/) | Primzahlen, Quersumme, ggT | ⭐⭐⭐ mittel |
| 10 | [Mini-Projekt: Notenverwaltung](10-mini-projekt-notenverwaltung/) | Alles zusammen | ⭐⭐⭐ mittel |

## Die wichtigsten Regeln am Anfang

- Groß- und Kleinschreibung ist wichtig: `name` und `Name` sind **verschiedene** Dinge.
- Texte stehen in Anführungszeichen: `"Hallo"`.
- Eine Anweisung endet mit einem Semikolon `;`.
- Kommentare beginnen mit `//`. Diese Zeilen ignoriert der Computer.
- **Fehler sind normal!** Lies die Fehlermeldung. Dort steht meistens, **in welcher Zeile** der Fehler ist.

## Hilfreiche Links

- [MDN: Erste Schritte mit JavaScript (Deutsch)](https://developer.mozilla.org/de/docs/Learn/JavaScript/First_steps)
- [SELFHTML: JavaScript](https://wiki.selfhtml.org/wiki/JavaScript)
- [W3Schools: JavaScript](https://www.w3schools.com/js/)

Viel Erfolg! 🚀
