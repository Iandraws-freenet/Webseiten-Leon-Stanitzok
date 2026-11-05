# React-Aufgaben: Sport- und Spiele-Apps ⚽🏀🏊👑

In diesen 4 Aufgaben baust du kleine **Sport- und Spiele-Apps** mit **React**.
Die Daten (Teams, Wappen, Sportler) kommen **live aus dem Internet**.

**Das JavaScript ist komplett fertig.** Du schreibst nur:
- **HTML**: was in den Karten und Boxen steht
- **CSS**: wie es aussieht (Farben, Schrift, Abstände, Ecken, Schatten)

Das schwierige CSS (Anordnung, Animationen, Handy-Ansicht) ist auch schon fertig.

## Was ist React?

React hilft dabei, Webseiten aus **Bausteinen** zu bauen, so ähnlich wie mit LEGO.
Einen Baustein nennt man **Komponente**.

```jsx
function Begruessung() {
    return <h1>Hallo!</h1>;
}
```

Das sieht fast aus wie HTML. Man nennt es **JSX**.

## Was ist eine API?

Eine API ist wie ein **Kellner im Restaurant**:

```
Deine App  ──── "Bitte alle Fußball-Teams!" ────▶  Sport-Server
Deine App  ◀──── Liste mit Teams, Wappen ...  ────  Sport-Server
```

Das Bestellen macht der Befehl `fetch`. Den haben wir schon für dich geschrieben.

## Die 4 Aufgaben

| Nr. | Aufgabe | Die fertige App kann … | Du gestaltest … |
|-----|---------|------------------------|-----------------|
| 01 | [Fußball](01-fussball/) | 3 Ligen umschalten, Team anklicken → Details | Kopf, Team-Karten, Detail-Box, Liga-Buttons |
| 02 | [Basketball](02-basketball/) | Teams suchen, sortieren, Favoriten ❤️ merken | Kopf, Team-Karten, Suchfeld, Sortier-Buttons |
| 03 | [Schwimmen](03-schwimmen/) | Schwimm-Stars von Wikipedia laden, suchen, Verlauf | Kopf, Profil mit Foto, Lade- und Fehler-Box |
| 04 | [Clash Royale](04-clash-royale/) | Alle Karten anzeigen, filtern, eigenes Deck aus 8 Karten bauen | Kopf, Karten mit Elixier-Tropfen, Seltenheits-Farben, Deck |

Jede Aufgabe hat 2 Teile: **Teil 1 – HTML** und **Teil 2 – CSS**.
Suche im Code nach **`DEIN HTML`** und **`DEIN CSS`**.

## So startest du

1. Öffne den Ordner der Aufgabe und lies die **`README.md`**.
2. Öffne **`index.html`** im Editor (VS Code). Dein Code steht im Bereich `<script type="text/babel">`.
3. Öffne **`index.html`** auch im **Browser** (Doppelklick).
4. Nach jeder Änderung: **Speichern** (Strg + S) und im Browser **neu laden** (F5).

> ⚠️ Du brauchst **Internet**: React und die Sport-Daten werden aus dem Internet geladen.

## Die 4 wichtigsten Regeln in JSX

| Regel | Beispiel |
|-------|----------|
| JavaScript kommt in **geschweifte Klammern** `{ }` | `<h2>{team.strTeam}</h2>` |
| Statt `class` schreibt man **`className`** | `<div className="karte">` |
| Jedes Tag muss **geschlossen** werden, auch `img` | `<img src={...} />` |
| Kommentare schreibt man so | `{/* Das ist ein Kommentar */}` |

## Wenn etwas nicht klappt

- Die Seite ist **weiß**? Drücke **F12** → **Konsole**. Dort steht der Fehler in Rot.
- Häufige Fehler: Eine Klammer `}` oder `)` fehlt, oder ein Tag ist nicht geschlossen (`<img ... />`).
- Mach die letzte Änderung rückgängig (**Strg + Z**) und probiere es nochmal.

## Woher kommen die Daten?

- Fußball und Basketball: [TheSportsDB](https://www.thesportsdb.com/) (kostenloser Test-Zugang)
- Schwimmen: [Wikipedia](https://de.wikipedia.org/)
- Clash Royale: [RoyaleAPI](https://royaleapi.com/) (Clash Royale ist eine Marke von Supercell)

Viel Spaß! 🚀
