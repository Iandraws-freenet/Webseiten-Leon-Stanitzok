# Aufgabe 10 – Mini-Projekt: Notenverwaltung ⭐⭐⭐

## Ziel
Du programmierst eine kleine **Notenverwaltung** für eine Klasse.
Hier benutzt du **alles**, was du gelernt hast: Variablen, Funktionen, if/else, Schleifen, Arrays und Objekte.

## Die Daten
In `aufgabe.js` ist eine Klasse schon vorbereitet: eine **Liste von Objekten**.

```js
const klasse = [
    { name: "Lisa", noten: [1, 2, 3] },
    { name: "Tom",  noten: [4, 5, 6] },
    ...
];
```

Jeder Schüler hat einen `name` und eine Liste `noten`.

## To-do (in `aufgabe.js`)

### Schritt 1 – Rechnen
- [ ] `durchschnitt(noten)` berechnet den Durchschnitt einer Notenliste.
- [ ] `schuelerDurchschnitt(schueler)` gibt den Durchschnitt **eines** Schülers zurück.
  (Tipp: Benutze `durchschnitt`!)
- [ ] `klassenDurchschnitt(klasse)` gibt den Durchschnitt aller **Schüler-Durchschnitte** zurück.

### Schritt 2 – Auswerten
- [ ] `besterSchueler(klasse)` gibt den **Namen** des Schülers mit dem besten (also **kleinsten**) Durchschnitt zurück.
- [ ] `bestanden(klasse)` gibt eine Liste mit den Namen aller Schüler zurück, deren Durchschnitt **4 oder besser** ist.
- [ ] `nichtBestanden(klasse)` gibt die Namen aller Schüler zurück, die **nicht** bestanden haben.
- [ ] `noteHinzufuegen(klasse, name, note)` fügt einem Schüler eine neue Note hinzu.
  Gibt `true` zurück, wenn der Schüler gefunden wurde, sonst `false`.

### Schritt 3 – Zeugnis ausgeben
- [ ] `zeugnisAusgeben(klasse)` gibt für jeden Schüler eine Zeile in der Konsole aus, z. B.:
  ```
  ===== Zeugnis =====
  Lisa: Durchschnitt 2 → bestanden ✅
  Tom: Durchschnitt 5 → nicht bestanden ❌
  ...
  Klassendurchschnitt: 3
  ```
  (Diese Funktion hat keinen Test. Prüfe die Ausgabe selbst.)

- [ ] **Alle Tests grün ✅**

## Tipps
- Arbeite **Schritt für Schritt** und starte das Programm nach jeder Funktion.
- Viele Funktionen können **andere Funktionen benutzen**. Das spart Arbeit!
  Zum Beispiel braucht `bestanden` die Funktion `schuelerDurchschnitt`.
- Teste mit `console.log(...)`, was in deinen Variablen steht, wenn etwas nicht klappt.

## Abschluss-Checkliste
- [ ] Alle Tests sind grün
- [ ] Das Zeugnis wird schön ausgegeben
- [ ] Jede Funktion hat einen kurzen Kommentar, was sie macht
- [ ] Keine unnötigen `console.log` mehr im Code

## Bonus
- [ ] Runde die Durchschnitte im Zeugnis auf **eine Nachkommastelle** (`toFixed(1)`).
- [ ] `notenspiegel(klasse)` zählt, wie oft jede Note (1–6) in der ganzen Klasse vorkommt, z. B. `{ 1: 4, 2: 3, ... }`.
- [ ] `schuelerHinzufuegen(klasse, name)` fügt einen neuen Schüler mit leerer Notenliste hinzu.
- [ ] Sortiere die Klasse nach Durchschnitt (beste zuerst) und gib eine **Rangliste** aus.
