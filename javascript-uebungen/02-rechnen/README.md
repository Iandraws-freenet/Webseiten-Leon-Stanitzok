# Aufgabe 02 – Rechnen ⭐

## Ziel
Du benutzt JavaScript als **Taschenrechner** und löst kleine Rechenaufgaben aus dem Alltag.

## Rechenzeichen

| Zeichen | Bedeutung | Beispiel | Ergebnis |
|---------|-----------|----------|----------|
| `+` | plus | `7 + 3` | `10` |
| `-` | minus | `7 - 3` | `4` |
| `*` | mal | `7 * 3` | `21` |
| `/` | geteilt | `7 / 2` | `3.5` |
| `%` | Rest beim Teilen (Modulo) | `7 % 3` | `1` |
| `**` | hoch | `2 ** 3` | `8` |

Nützlich:
- `Math.floor(3.7)` → `3` (immer **ab**runden)
- `Math.round(3.5)` → `4` (normal runden)
- `zahl.toFixed(2)` → zeigt genau 2 Nachkommastellen (z. B. für Euro-Preise)

## To-do (in `aufgabe.js`)

Jede Teilaufgabe hat eine **erwartete Ausgabe**. Vergleiche dein Ergebnis damit!

- [ ] **A – Rechteck:** Breite 7, Höhe 4. Berechne Fläche und Umfang.
  Erwartet: `Fläche: 28` und `Umfang: 22`
- [ ] **B – Einkauf:** 3 Brötchen zu je 0.45 € und 1 Milch zu 1.29 €.
  Erwartet: `Gesamt: 2.64 €` (benutze `toFixed(2)`)
- [ ] **C – Temperatur:** Rechne 25 °C in Fahrenheit um. Formel: `celsius * 9 / 5 + 32`
  Erwartet: `25 °C sind 77 °F`
- [ ] **D – Notendurchschnitt:** Noten 2, 3 und 1.
  Erwartet: `Durchschnitt: 2`
- [ ] **E – Gerade oder ungerade:** Gib `17 % 2` und `18 % 2` aus. Was fällt dir auf? (Kommentar)
- [ ] **F – Zeit umrechnen:** 3725 Sekunden in Stunden, Minuten und Sekunden.
  Erwartet: `1 Stunde(n), 2 Minute(n), 5 Sekunde(n)`

## Tipps
- Klammern funktionieren wie in Mathe: `(2 + 3) * 4` ergibt `20`.
- Für F: Eine Stunde hat 3600 Sekunden. `Math.floor(3725 / 3600)` ergibt die Stunden.
  Der **Rest** (`%`) sind die übrigen Sekunden.

## Bonus
- [ ] **Trinkgeld-Rechner:** Rechnung 48.50 €, 10 % Trinkgeld. Wie viel ist das Trinkgeld, wie viel zahlt man insgesamt?
- [ ] **Alter in Tagen:** Wie viele Tage bist du ungefähr alt? (Alter × 365)
