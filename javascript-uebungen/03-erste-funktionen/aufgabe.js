// =========================================
// Aufgabe 03 – Erste Funktionen
// Starten mit:  node aufgabe.js
// =========================================

// ---------- Beispiel (schon fertig) ----------
function verdoppeln(zahl) {
    return zahl * 2;
}


// TODO: Gib die Zahl mal sich selbst zurück
function quadrat(zahl) {

}


// TODO: Gib die Summe von a und b zurück
function addiere(a, b) {

}


// TODO: Gib "Hallo NAME!" zurück
function begruessung(name) {

}


// TODO: Rechne Celsius in Fahrenheit um (celsius * 9 / 5 + 32)
function celsiusZuFahrenheit(celsius) {

}


// TODO: Rechne Minuten in Sekunden um
function minutenZuSekunden(minuten) {

}


// TODO: Gib den Durchschnitt von a, b und c zurück
function durchschnitt(a, b, c) {

}


// TODO: Gib den Umfang eines Rechtecks zurück (2 * breite + 2 * hoehe)
function rechteckUmfang(breite, hoehe) {

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
test("verdoppeln(5) ergibt 10", verdoppeln(5), 10);
test("quadrat(4) ergibt 16", quadrat(4), 16);
test("quadrat(0) ergibt 0", quadrat(0), 0);
test("addiere(2, 3) ergibt 5", addiere(2, 3), 5);
test("addiere(-4, 10) ergibt 6", addiere(-4, 10), 6);
test('begruessung("Lisa") ergibt "Hallo Lisa!"', begruessung("Lisa"), "Hallo Lisa!");
test('begruessung("Tom") ergibt "Hallo Tom!"', begruessung("Tom"), "Hallo Tom!");
test("celsiusZuFahrenheit(0) ergibt 32", celsiusZuFahrenheit(0), 32);
test("celsiusZuFahrenheit(100) ergibt 212", celsiusZuFahrenheit(100), 212);
test("minutenZuSekunden(3) ergibt 180", minutenZuSekunden(3), 180);
test("durchschnitt(2, 3, 4) ergibt 3", durchschnitt(2, 3, 4), 3);
test("durchschnitt(1, 1, 4) ergibt 2", durchschnitt(1, 1, 4), 2);
test("rechteckUmfang(7, 4) ergibt 22", rechteckUmfang(7, 4), 22);
