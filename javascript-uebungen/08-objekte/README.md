# Aufgabe 08 – Objekte ⭐⭐

## Ziel
Du fasst zusammengehörende Daten in einem **Objekt** zusammen, z. B. alle Infos über eine Person.

## Was ist ein Objekt?
Ein Objekt ist wie ein **Steckbrief**: Es hat mehrere **Eigenschaften** mit Namen und Wert.

```js
const person = {
    name: "Lisa",
    alter: 17,
    stadt: "Berlin"
};

console.log(person.name);    // "Lisa"
console.log(person.alter);   // 17

person.alter = 18;           // Wert ändern
```

| Schreibweise | Bedeutung |
|--------------|-----------|
| `{ name: "Lisa" }` | Objekt erstellen |
| `person.name` | Eigenschaft lesen |
| `person.alter = 18` | Eigenschaft ändern |

## Objekte in einer Liste
Oft hat man eine **Liste von Objekten**, z. B. einen Warenkorb:
```js
const warenkorb = [
    { name: "Brot",  preis: 2,   menge: 1 },
    { name: "Milch", preis: 1.5, menge: 2 }
];

for (const artikel of warenkorb) {
    console.log(artikel.name + ": " + artikel.preis + " €");
}
```

## To-do (in `aufgabe.js`)

### Teil A – Eine Person
- [ ] `vorstellen(person)` gibt einen Satz zurück:
  `"Ich bin Lisa, 17 Jahre alt und wohne in Berlin."`
- [ ] `istErwachsen(person)` gibt `true` zurück, wenn die Person mindestens 18 ist.
- [ ] `geburtstag(person)` erhöht das Alter der Person um 1 und gibt das **neue Alter** zurück.

### Teil B – Der Warenkorb
- [ ] `anzahlArtikel(warenkorb)` zählt alle Mengen zusammen (1 Brot + 2 Milch = 3).
- [ ] `gesamtpreis(warenkorb)` berechnet den Gesamtpreis (Preis × Menge für jeden Artikel).
- [ ] `teuersterArtikel(warenkorb)` gibt den **Namen** des Artikels mit dem höchsten Einzelpreis zurück.
- [ ] `istImWarenkorb(warenkorb, name)` gibt `true` zurück, wenn ein Artikel mit diesem Namen dabei ist.
- [ ] **Alle Tests grün ✅**

## Tipps
- Mit Backticks kannst du den Satz in `vorstellen` gut bauen:
  `` `Ich bin ${person.name}, ...` ``
- Bei `teuersterArtikel` merkst du dir den ganzen **Artikel**, nicht nur den Preis. Am Ende gibst du `artikel.name` zurück.

## Bonus
- [ ] Erstelle ein Objekt über **dich selbst** mit mindestens 5 Eigenschaften, darunter ein Array `hobbys`. Gib alle Hobbys mit einer Schleife aus.
- [ ] `rabatt(warenkorb, prozent)` gibt den Gesamtpreis mit Rabatt zurück.
