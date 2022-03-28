// Snack 3
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

// array di oggetti base
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// definisco due numeri min e max
const min = 1;
const max = 5;

// stampo in console tutta la lista
console.log(myArray);



// Esercizio con il forEach
// creaiamo un nuovo array, per il momento vuoto
const newArray = [];

// eseguiamo il forEach
// selezioniamo l'array di base e scriviamo .forEach
myArray.forEach(
    ( element, index ) => { // selezioniamo sia select che index, cosi da utilizzare la posizione degli elementi
        if ( index > min && index < max ){   // creaimo la condizione
            newArray.push(element);   // push degli elementi dell array nuovo creato
        }       
    }
);

// visualizziamo in console log il nuovo array fatto col forEach
console.log(newArray);



// Esercizio con il filter
const newArray2 = myArray.filter(
    (element, index) => {
        if (index > min && index < max) { // creaimo la condizione
            return true // usiamo valore booleano, se è true ci pusha gli elementi dentro all array nuovo creato
        }
    }
);

// visualizziamo in console log il nuovo array fatto col filter
console.log(newArray2);