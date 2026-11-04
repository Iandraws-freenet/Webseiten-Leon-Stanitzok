// =========================================
// Aufgabe 06 – Texte (Strings)
// Starten mit:  node aufgabe.js
// =========================================

// TODO: Erstes Zeichen zurückgeben
function ersterBuchstabe(text) {

}


// TODO: Letztes Zeichen zurückgeben
function letzterBuchstabe(text) {

}


// TODO: "hallo" → "Hallo"
function ersterBuchstabeGross(text) {

}


// TODO: "Hallo" → "ollaH" (mit einer Schleife von hinten nach vorne)
function umdrehen(text) {

}


// TODO: Wie oft kommt buchstabe in text vor?
function zaehleBuchstabe(text, buchstabe) {

}


// TODO: Wie viele Vokale (a, e, i, o, u) hat der Text? Groß und klein zählen!
function zaehleVokale(text) {

}


// TODO: Ist der Text vorwärts und rückwärts gleich? (Groß/klein egal)
function istPalindrom(text) {

}


// TODO: "Max Mustermann" → "M.M."
function initialen(name) {

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
test('ersterBuchstabe("Hallo") ergibt "H"', ersterBuchstabe("Hallo"), "H");
test('letzterBuchstabe("Hallo") ergibt "o"', letzterBuchstabe("Hallo"), "o");
test('letzterBuchstabe("Code") ergibt "e"', letzterBuchstabe("Code"), "e");
test('ersterBuchstabeGross("hallo") ergibt "Hallo"', ersterBuchstabeGross("hallo"), "Hallo");
test('ersterBuchstabeGross("javascript") ergibt "Javascript"', ersterBuchstabeGross("javascript"), "Javascript");
test('umdrehen("Hallo") ergibt "ollaH"', umdrehen("Hallo"), "ollaH");
test('umdrehen("abc") ergibt "cba"', umdrehen("abc"), "cba");
test('zaehleBuchstabe("Banane", "a") ergibt 2', zaehleBuchstabe("Banane", "a"), 2);
test('zaehleBuchstabe("Mississippi", "s") ergibt 4', zaehleBuchstabe("Mississippi", "s"), 4);
test('zaehleVokale("Programmieren") ergibt 5', zaehleVokale("Programmieren"), 5);
test('zaehleVokale("OTTO") ergibt 2', zaehleVokale("OTTO"), 2);
test('istPalindrom("Anna") ergibt true', istPalindrom("Anna"), true);
test('istPalindrom("Otto") ergibt true', istPalindrom("Otto"), true);
test('istPalindrom("Hallo") ergibt false', istPalindrom("Hallo"), false);
test('initialen("Max Mustermann") ergibt "M.M."', initialen("Max Mustermann"), "M.M.");
test('initialen("Lisa Marie Schmidt") ergibt "L.M.S."', initialen("Lisa Marie Schmidt"), "L.M.S.");
