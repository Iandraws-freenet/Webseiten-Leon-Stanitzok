# Aufgabe 06 – Texte (Strings) ⭐⭐

## Ziel
Du untersuchst und veränderst **Texte**: umdrehen, zählen, Buchstaben groß machen.

## Ein Text ist eine Reihe von Zeichen
```js
const wort = "Hallo";
//            H a l l o
//  Position: 0 1 2 3 4
```
> ⚠️ Das Zählen beginnt bei **0**!

## Die wichtigsten Befehle

| Befehl | Ergebnis | Bedeutung |
|--------|----------|-----------|
| `wort.length` | `5` | Anzahl der Zeichen |
| `wort[0]` | `"H"` | Zeichen an Position 0 |
| `wort[wort.length - 1]` | `"o"` | letztes Zeichen |
| `wort.toUpperCase()` | `"HALLO"` | alles groß |
| `wort.toLowerCase()` | `"hallo"` | alles klein |
| `wort.slice(1)` | `"allo"` | Text ab Position 1 |
| `wort.includes("ll")` | `true` | Kommt „ll“ vor? |
| `"a b c".split(" ")` | `["a", "b", "c"]` | Text in eine Liste teilen |

## Durch einen Text laufen
```js
const wort = "Hallo";
for (let i = 0; i < wort.length; i++) {
    console.log(wort[i]);   // H, a, l, l, o
}
```

## To-do (in `aufgabe.js`)
- [ ] `ersterBuchstabe(text)` gibt das erste Zeichen zurück.
- [ ] `letzterBuchstabe(text)` gibt das letzte Zeichen zurück.
- [ ] `ersterBuchstabeGross(text)` macht den ersten Buchstaben groß: `"hallo"` → `"Hallo"`.
- [ ] `umdrehen(text)` dreht den Text um: `"Hallo"` → `"ollaH"`.
  (Benutze eine **Schleife**, die von hinten nach vorne läuft.)
- [ ] `zaehleBuchstabe(text, buchstabe)` zählt, wie oft ein Buchstabe vorkommt.
- [ ] `zaehleVokale(text)` zählt alle Vokale (a, e, i, o, u – groß und klein).
- [ ] `istPalindrom(text)` prüft, ob ein Wort vorwärts und rückwärts gleich ist (`"Anna"`, `"Otto"`). Groß/klein soll egal sein.
- [ ] `initialen(name)` gibt die Anfangsbuchstaben zurück: `"Max Mustermann"` → `"M.M."`
- [ ] **Alle Tests grün ✅**

## Tipps
- Einen Text kann man mit `+` Stück für Stück aufbauen:
  ```js
  let ergebnis = "";
  ergebnis = ergebnis + "a";   // "a"
  ergebnis = ergebnis + "b";   // "ab"
  ```
- Für `zaehleVokale`: `"aeiou".includes(zeichen)` prüft, ob ein Zeichen ein Vokal ist.
- Für `istPalindrom`: Du hast `umdrehen` schon geschrieben. Benutze die Funktion!

## Bonus
- [ ] `woerterZaehlen(satz)` zählt die Wörter in einem Satz (Tipp: `split(" ")`).
- [ ] `geheimschrift(text)` ersetzt jedes `a` durch `4`, jedes `e` durch `3` und jedes `o` durch `0`.
