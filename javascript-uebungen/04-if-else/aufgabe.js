// =========================================
// Aufgabe 04 – Entscheidungen (if / else)
// Starten mit:  node aufgabe.js
// =========================================

// TODO: true, wenn die Zahl gerade ist, sonst false
function istGerade(zahl) {

}


// TODO: true ab 18, sonst false
function istVolljaehrig(alter) {

}


// TODO: Gib die größte der drei Zahlen zurück
function groessteVonDrei(a, b, c) {

}


// TODO: Gib die Note zurück (ab 90 → 1, ab 75 → 2, ab 60 → 3, ab 50 → 4, sonst 5)
function note(punkte) {

}


// TODO: unter 6 → 0, unter 18 → 5, ab 65 → 6, sonst 10
function ticketPreis(alter) {

}


// TODO: Schaltjahr-Regel (siehe README)
function istSchaltjahr(jahr) {

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
test("istGerade(4) ergibt true", istGerade(4), true);
test("istGerade(7) ergibt false", istGerade(7), false);
test("istGerade(0) ergibt true", istGerade(0), true);
test("istVolljaehrig(18) ergibt true", istVolljaehrig(18), true);
test("istVolljaehrig(17) ergibt false", istVolljaehrig(17), false);
test("groessteVonDrei(3, 9, 5) ergibt 9", groessteVonDrei(3, 9, 5), 9);
test("groessteVonDrei(10, 2, 7) ergibt 10", groessteVonDrei(10, 2, 7), 10);
test("groessteVonDrei(1, 2, 3) ergibt 3", groessteVonDrei(1, 2, 3), 3);
test("note(95) ergibt 1", note(95), 1);
test("note(75) ergibt 2", note(75), 2);
test("note(61) ergibt 3", note(61), 3);
test("note(50) ergibt 4", note(50), 4);
test("note(20) ergibt 5", note(20), 5);
test("ticketPreis(4) ergibt 0", ticketPreis(4), 0);
test("ticketPreis(12) ergibt 5", ticketPreis(12), 5);
test("ticketPreis(30) ergibt 10", ticketPreis(30), 10);
test("ticketPreis(70) ergibt 6", ticketPreis(70), 6);
test("istSchaltjahr(2024) ergibt true", istSchaltjahr(2024), true);
test("istSchaltjahr(2023) ergibt false", istSchaltjahr(2023), false);
test("istSchaltjahr(1900) ergibt false", istSchaltjahr(1900), false);
test("istSchaltjahr(2000) ergibt true", istSchaltjahr(2000), true);
