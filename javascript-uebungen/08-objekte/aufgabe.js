// =========================================
// Aufgabe 08 – Objekte
// Starten mit:  node aufgabe.js
// =========================================

// ---------- Teil A – Eine Person ----------

// TODO: "Ich bin NAME, ALTER Jahre alt und wohne in STADT."
function vorstellen(person) {

}


// TODO: true, wenn person.alter mindestens 18 ist
function istErwachsen(person) {

}


// TODO: person.alter um 1 erhöhen und das neue Alter zurückgeben
function geburtstag(person) {

}



// ---------- Teil B – Der Warenkorb ----------
// Ein Warenkorb ist eine Liste von Objekten: { name, preis, menge }

// TODO: Alle Mengen zusammenzählen
function anzahlArtikel(warenkorb) {

}


// TODO: Summe von preis * menge für alle Artikel
function gesamtpreis(warenkorb) {

}


// TODO: Name des Artikels mit dem höchsten Einzelpreis
function teuersterArtikel(warenkorb) {

}


// TODO: true, wenn ein Artikel mit diesem Namen im Warenkorb ist
function istImWarenkorb(warenkorb, name) {

}



// =========================================
// TESTS – bitte nicht verändern!
// =========================================
function test(beschreibung, bekommen, erwartet) {
    if (JSON.stringify(bekommen) === JSON.stringify(erwartet)) {
        console.log("✅ " + beschreibung);
    } else {
        console.log("❌ " + beschreibung + "  →  erwartet: " + JSON.stringify(erwartet) + ", bekommen: " + JSON.stringify(bekommen));
    }
}

const lisa = { name: "Lisa", alter: 17, stadt: "Berlin" };
const tom = { name: "Tom", alter: 20, stadt: "Hamburg" };

const warenkorb = [
    { name: "Brot", preis: 2, menge: 1 },
    { name: "Milch", preis: 1.5, menge: 2 },
    { name: "Apfel", preis: 0.5, menge: 4 }
];

console.log("\n--- Tests ---");
test("vorstellen(lisa)", vorstellen(lisa), "Ich bin Lisa, 17 Jahre alt und wohne in Berlin.");
test("vorstellen(tom)", vorstellen(tom), "Ich bin Tom, 20 Jahre alt und wohne in Hamburg.");
test("istErwachsen(lisa) ergibt false", istErwachsen(lisa), false);
test("istErwachsen(tom) ergibt true", istErwachsen(tom), true);
test("geburtstag(tom) ergibt 21", geburtstag(tom), 21);
test("tom.alter ist danach 21", tom.alter, 21);
test("anzahlArtikel(warenkorb) ergibt 7", anzahlArtikel(warenkorb), 7);
test("gesamtpreis(warenkorb) ergibt 7", gesamtpreis(warenkorb), 7);
test("gesamtpreis([]) ergibt 0", gesamtpreis([]), 0);
test('teuersterArtikel(warenkorb) ergibt "Brot"', teuersterArtikel(warenkorb), "Brot");
test('istImWarenkorb(warenkorb, "Milch") ergibt true', istImWarenkorb(warenkorb, "Milch"), true);
test('istImWarenkorb(warenkorb, "Käse") ergibt false', istImWarenkorb(warenkorb, "Käse"), false);
