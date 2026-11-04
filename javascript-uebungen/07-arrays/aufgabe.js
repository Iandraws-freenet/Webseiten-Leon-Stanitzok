// =========================================
// Aufgabe 07 – Arrays (Listen)
// Starten mit:  node aufgabe.js
// =========================================

// TODO: Summe aller Zahlen (leere Liste → 0)
function summe(zahlen) {

}


// TODO: Durchschnitt aller Zahlen
function durchschnitt(zahlen) {

}


// TODO: Größte Zahl (ohne Math.max)
function groessteZahl(zahlen) {

}


// TODO: Neue Liste nur mit den geraden Zahlen
function nurGerade(zahlen) {

}


// TODO: Neue Liste, in der jede Zahl verdoppelt ist
function verdoppleAlle(zahlen) {

}


// TODO: Liste rückwärts (ohne reverse())
function umgekehrt(liste) {

}


// TODO: Wie viele Zahlen sind größer als grenze?
function zaehleGroesserAls(zahlen, grenze) {

}


// TODO: Jedes Element nur einmal (Tipp: includes)
function ohneDuplikate(liste) {

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
test("summe([1, 2, 3, 4]) ergibt 10", summe([1, 2, 3, 4]), 10);
test("summe([]) ergibt 0", summe([]), 0);
test("durchschnitt([2, 4, 6]) ergibt 4", durchschnitt([2, 4, 6]), 4);
test("durchschnitt([1, 2, 3, 6]) ergibt 3", durchschnitt([1, 2, 3, 6]), 3);
test("groessteZahl([3, 9, 2, 7]) ergibt 9", groessteZahl([3, 9, 2, 7]), 9);
test("groessteZahl([-5, -2, -9]) ergibt -2", groessteZahl([-5, -2, -9]), -2);
test("nurGerade([1, 2, 3, 4, 5, 6]) ergibt [2, 4, 6]", nurGerade([1, 2, 3, 4, 5, 6]), [2, 4, 6]);
test("nurGerade([1, 3, 5]) ergibt []", nurGerade([1, 3, 5]), []);
test("verdoppleAlle([1, 2, 3]) ergibt [2, 4, 6]", verdoppleAlle([1, 2, 3]), [2, 4, 6]);
test("umgekehrt([1, 2, 3]) ergibt [3, 2, 1]", umgekehrt([1, 2, 3]), [3, 2, 1]);
test('umgekehrt(["a", "b"]) ergibt ["b", "a"]', umgekehrt(["a", "b"]), ["b", "a"]);
test("zaehleGroesserAls([5, 12, 8, 20, 3], 7) ergibt 3", zaehleGroesserAls([5, 12, 8, 20, 3], 7), 3);
test("ohneDuplikate([1, 2, 2, 3, 1]) ergibt [1, 2, 3]", ohneDuplikate([1, 2, 2, 3, 1]), [1, 2, 3]);
test('ohneDuplikate(["a", "b", "a"]) ergibt ["a", "b"]', ohneDuplikate(["a", "b", "a"]), ["a", "b"]);
