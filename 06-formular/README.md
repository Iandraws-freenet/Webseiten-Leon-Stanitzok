# Aufgabe 06 – Kontaktformular ⭐⭐

## Ziel
Du baust ein Kontaktformular und gestaltest es mit CSS.

## Das lernst du
- `<form>`, `<label>`, `<input>`, `<textarea>`, `<select>`, `<button>`
- Verschiedene Input-Typen: `text`, `email`, `radio`, `checkbox`
- Pflichtfelder mit `required`
- Formulare mit CSS schöner machen

## To-do

### Teil A – HTML (`index.html`)
- [ ] Das Feld **Name** ist schon als Beispiel da.
- [ ] Füge ein Feld **E-Mail** hinzu (`type="email"`).
- [ ] Füge ein Auswahlfeld (`<select>`) **Betreff** mit 3 Optionen hinzu: „Frage“, „Feedback“, „Sonstiges“.
- [ ] Füge zwei **Radio-Buttons** hinzu: „Schüler/in“ und „Azubi“ (gleicher `name`!).
- [ ] Füge ein Textfeld **Nachricht** (`<textarea>`) hinzu.
- [ ] Füge eine **Checkbox** „Ich akzeptiere die Datenschutzerklärung“ hinzu.
- [ ] Mache Name, E-Mail und Nachricht zu **Pflichtfeldern** (`required`).
- [ ] Füge einen Button **„Absenden“** hinzu.

### Teil B – CSS (`style.css`)
- [ ] Gestalte das Formular als weiße Box mit Schatten (siehe TODOs).
- [ ] Alle Eingabefelder sollen **100 % breit** sein.
- [ ] Gestalte den Button (Farbe, Abstand, abgerundete Ecken).
- [ ] Der Button soll beim Drüberfahren (`:hover`) die Farbe ändern.

## Tipps
```html
<label for="email">E-Mail:</label>
<input type="email" id="email" name="email" required>
```
- Das `for` beim `<label>` muss gleich sein wie die `id` beim `<input>`.
- Teste: Klicke auf „Absenden“, ohne etwas einzugeben. Was passiert?

## Bonus
- [ ] Füge `placeholder="..."` zu den Feldern hinzu.
- [ ] Gib Feldern beim Anklicken einen farbigen Rahmen: `input:focus { ... }`
