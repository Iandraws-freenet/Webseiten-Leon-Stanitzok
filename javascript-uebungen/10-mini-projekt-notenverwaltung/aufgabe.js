// =========================================
// Aufgabe 10 – Mini-Projekt: Notenverwaltung
// Starten mit:  node aufgabe.js
// =========================================

// ---------- Die Daten (schon fertig) ----------
function neueKlasse() {
    return [
        { name: "Lisa", noten: [1, 2, 3] },
        { name: "Tom", noten: [4, 5, 6] },
        { name: "Mia", noten: [1, 1, 1] },
        { name: "Ben", noten: [5, 5, 2] },
        { name: "Ali", noten: [2, 3, 4] }
    ];
}

const klasse = neueKlasse();


// ---------- Schritt 1 – Rechnen ----------

// TODO: Durchschnitt einer Notenliste
function durchschnitt(noten) {

}


// TODO: Durchschnitt eines Schülers (Tipp: durchschnitt benutzen)
function schuelerDurchschnitt(schueler) {

}


// TODO: Durchschnitt aller Schüler-Durchschnitte
function klassenDurchschnitt(klasse) {

}


// ---------- Schritt 2 – Auswerten ----------

// TODO: Name des Schülers mit dem kleinsten Durchschnitt
function besterSchueler(klasse) {

}


// TODO: Liste der Namen mit Durchschnitt 4 oder besser (<= 4)
function bestanden(klasse) {

}


// TODO: Liste der Namen mit Durchschnitt schlechter als 4 (> 4)
function nichtBestanden(klasse) {

}


// TODO: Neue Note bei einem Schüler hinzufügen (push).
//       true, wenn der Schüler gefunden wurde, sonst false
function noteHinzufuegen(klasse, name, note) {

}


// ---------- Schritt 3 – Zeugnis ausgeben ----------

// TODO: Für jeden Schüler eine Zeile ausgeben (siehe README)
//       und am Ende den Klassendurchschnitt
function zeugnisAusgeben(klasse) {

}

zeugnisAusgeben(klasse);



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

const testKlasse = neueKlasse();

console.log("\n--- Tests ---");
test("durchschnitt([1, 2, 3]) ergibt 2", durchschnitt([1, 2, 3]), 2);
test("durchschnitt([2, 2, 5, 3]) ergibt 3", durchschnitt([2, 2, 5, 3]), 3);
test("schuelerDurchschnitt(Lisa) ergibt 2", schuelerDurchschnitt(testKlasse[0]), 2);
test("schuelerDurchschnitt(Tom) ergibt 5", schuelerDurchschnitt(testKlasse[1]), 5);
test("klassenDurchschnitt ergibt 3", klassenDurchschnitt(testKlasse), 3);
test('besterSchueler ergibt "Mia"', besterSchueler(testKlasse), "Mia");
test("bestanden", bestanden(testKlasse), ["Lisa", "Mia", "Ben", "Ali"]);
test("nichtBestanden", nichtBestanden(testKlasse), ["Tom"]);
test('noteHinzufuegen(klasse, "Tom", 1) ergibt true', noteHinzufuegen(testKlasse, "Tom", 1), true);
test("Tom hat danach die Noten [4, 5, 6, 1]", testKlasse[1].noten, [4, 5, 6, 1]);
test("Tom hat jetzt den Durchschnitt 4", schuelerDurchschnitt(testKlasse[1]), 4);
test('noteHinzufuegen(klasse, "Max", 2) ergibt false', noteHinzufuegen(testKlasse, "Max", 2), false);
