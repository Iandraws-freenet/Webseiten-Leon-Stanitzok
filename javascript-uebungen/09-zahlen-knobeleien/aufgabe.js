// =========================================
// Aufgabe 09 – Zahlen-Knobeleien
// Starten mit:  node aufgabe.js
// =========================================

// TODO: true, wenn zahl eine Primzahl ist (1 ist keine Primzahl!)
function istPrimzahl(zahl) {

}


// TODO: Liste aller Primzahlen von 2 bis n
function primzahlenBis(n) {

}


// TODO: Summe aller Ziffern (Tipp: % 10 und Math.floor(zahl / 10))
function quersumme(zahl) {

}


// TODO: Größter gemeinsamer Teiler von a und b
function ggT(a, b) {

}


// TODO: Die ersten "anzahl" Fibonacci-Zahlen als Liste
function fibonacci(anzahl) {

}


// TODO: 1 → "eins", 2 → "zwei", ... 5 → "fünf", sonst "unbekannt"
function zahlZuText(zahl) {

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

console.log("\n--- Tests ---");
test("istPrimzahl(2) ergibt true", istPrimzahl(2), true);
test("istPrimzahl(7) ergibt true", istPrimzahl(7), true);
test("istPrimzahl(13) ergibt true", istPrimzahl(13), true);
test("istPrimzahl(9) ergibt false", istPrimzahl(9), false);
test("istPrimzahl(1) ergibt false", istPrimzahl(1), false);
test("primzahlenBis(20)", primzahlenBis(20), [2, 3, 5, 7, 11, 13, 17, 19]);
test("primzahlenBis(10)", primzahlenBis(10), [2, 3, 5, 7]);
test("quersumme(1234) ergibt 10", quersumme(1234), 10);
test("quersumme(9) ergibt 9", quersumme(9), 9);
test("quersumme(999) ergibt 27", quersumme(999), 27);
test("ggT(12, 18) ergibt 6", ggT(12, 18), 6);
test("ggT(7, 5) ergibt 1", ggT(7, 5), 1);
test("ggT(20, 10) ergibt 10", ggT(20, 10), 10);
test("fibonacci(7)", fibonacci(7), [0, 1, 1, 2, 3, 5, 8]);
test("fibonacci(10)", fibonacci(10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
test('zahlZuText(3) ergibt "drei"', zahlZuText(3), "drei");
test('zahlZuText(5) ergibt "fünf"', zahlZuText(5), "fünf");
test('zahlZuText(9) ergibt "unbekannt"', zahlZuText(9), "unbekannt");
