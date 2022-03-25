// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. (modificato) 

// creazione array di oggetti
let listaSquadre = [
    {
        'Nome' : 'ACPicchia',
        'Punti' : 0,
        'Falli' : 0,
    },
    {
        'Nome' : 'PoliscarzeseFC',
        'Punti' : 0,
        'Falli' : 0,        
    },
    {
        'Nome' : 'SaSiCcCalcio',
        'Punti' : 0,
        'Falli' : 0,       
    },
    {
        'Nome' : 'BoysPellerini',
        'Punti' : 0,
        'Falli' : 0,
    },
    {
        'Nome' : 'SPZappatori',
        'Punti' : 0,
        'Falli' : 0,
    }
];
// stampo in console tutta la lista
console.log(listaSquadre);

// generatore di numeri random per i punti e falli
function getRandomArbitrary(min, max) {
    let numRandom = Math.floor(Math.random() * (max + 1 - min) + min );
    return numRandom ;
}
const min = 1;
const max = 100;

// seleziono l id dall html
let risultato = document.getElementById('output');


// utilizzo il ciclo for 
for ( let i = 0; i < listaSquadre.length; i++) {

    // creo die variabili, per indicare punti e falli, e li riempio con un numero random
    let puntiSquadra = getRandomArbitrary(min, max);
    let falliSquadra = getRandomArbitrary(min, max);

    // inserisco i numeri random come valori dentro ai rispettivi nomi
    listaSquadre[i].Punti = puntiSquadra;
    listaSquadre[i].Falli = falliSquadra;

    // destrutturo l oggetto
    let { Nome, Falli } = listaSquadre[i];

    // metto in stampa in schermo il risultato col template literal
    risultato.innerHTML += 
    `
    <div> La Squadra ${Nome} ha subito: ${Falli} falli! </div>
    `;

    //stampo in console log
    console.log( 'La Squadra' + listaSquadre[i].Nome + ' ha subito: ' + listaSquadre[i].Falli + ' falli!' );

};