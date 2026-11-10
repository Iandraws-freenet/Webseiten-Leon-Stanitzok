// =========================================
// Aufgabe 01 – Variablen und Ausgabe
// Starten mit:  node aufgabe.js
// =========================================

console.log("Hallo, ich bin JavaScript!");


// ---------- Teil A – Steckbrief ----------

// TODO: Variablen erstellen: vorname, nachname, alter, stadt, istAzubi
let vorname = "leon";
let nachname = "Stanitzok";
let alter = 15;
let stadt =  "Büdelsdorf";
let istAzubi = false;
// TODO: Steckbrief ausgeben (siehe README)
// --- Steckbrief ---
// Name: ...
console.log (vorname + nachname )
// Alter: ...
console.log (alter)
// Stadt: ...
console.log (stadt)
// Azubi: ...
console.log (istAzubi)


// ---------- Teil B – Ändern ----------

// TODO: Alter um 1 erhöhen
alter = alter + 1;
console.log(alter)
// TODO: Ausgeben: "Nächstes Jahr bin ich ..."
console.log("Nächstes Jahr bin ich " + alter)


// ---------- Teil C – Datentypen ----------

// TODO: Mit typeof den Typ von vorname, alter und istAzubi ausgeben
function addition(x,y){ 
    console.log(x+y)
}
addition(2,3)
function multiplikation(x,y){
    console.log(x*y)
}
multiplikation(8,5)
function Azubicheck(istAzubi){
    if(istAzubi === true){
        console.log("Ich bin ein Azubi")
    }
    else{
        console.log("Ich bin kein Azubi")
    }
}Azubicheck(false)

let Rucksack = ["Kohle","Schwert","Spitzhacke","Basketball"];

function oeffneInventar(rkinhalt){
    for(let i=0;i< rkinhalt.lenght;i++){
        console.log(rkinhalt)
    }
}

oeffneInventar(Rucksack)
// ---------- Teil D – Ein Satz ----------

// TODO: Mit Backticks ausgeben:
// "Ich heiße ... ..., bin ... Jahre alt und wohne in ...."

