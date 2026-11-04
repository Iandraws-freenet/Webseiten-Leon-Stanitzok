// =========================================
// Aufgabe 05 – Schleifen
// Starten mit:  node aufgabe.js
// =========================================

// ---------- Teil A – Ausgaben ----------

console.log("--- 1 bis 10 ---");
// TODO: Zahlen von 1 bis 10 ausgeben


console.log("--- Countdown ---");
// TODO: Von 10 bis 1 zählen (Tipp: i--), danach "Start! 🚀"


console.log("--- Einmaleins der 7 ---");
// TODO: "1 x 7 = 7" bis "10 x 7 = 70"



// ---------- Teil B – Funktionen ----------

// TODO: Summe von 1 bis n
function summeBis(n) {

}


// TODO: 1 * 2 * 3 * ... * n
function fakultaet(n) {

}


// TODO: basis hoch exponent (ohne ** und ohne Math.pow)
function potenz(basis, exponent) {

}


// TODO: Durch wie viele Zahlen (von 1 bis zahl) ist zahl ohne Rest teilbar?
function anzahlTeiler(zahl) {

}


// TODO: Wie viele gerade Zahlen gibt es von 1 bis n?
function zaehleGerade(n) {

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
test("summeBis(4) ergibt 10", summeBis(4), 10);
test("summeBis(100) ergibt 5050", summeBis(100), 5050);
test("fakultaet(4) ergibt 24", fakultaet(4), 24);
test("fakultaet(5) ergibt 120", fakultaet(5), 120);
test("fakultaet(0) ergibt 1", fakultaet(0), 1);
test("potenz(2, 3) ergibt 8", potenz(2, 3), 8);
test("potenz(2, 10) ergibt 1024", potenz(2, 10), 1024);
test("potenz(5, 0) ergibt 1", potenz(5, 0), 1);
test("anzahlTeiler(6) ergibt 4", anzahlTeiler(6), 4);
test("anzahlTeiler(12) ergibt 6", anzahlTeiler(12), 6);
test("anzahlTeiler(7) ergibt 2", anzahlTeiler(7), 2);
test("zaehleGerade(10) ergibt 5", zaehleGerade(10), 5);
test("zaehleGerade(7) ergibt 3", zaehleGerade(7), 3);
