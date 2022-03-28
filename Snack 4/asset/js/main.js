// Snack 4
// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
//   ];
// 1-  Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. 
//     Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

// abbiamo la nostra array con gli oggetti
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];


// 1- nuovo array di stringhe con nome tutto maiuscolo
const targheStudents = students.map (
    (element, index) => {
        nomeBig = element.name.toUpperCase(); // do l uppercase alla key name
        return nomeBig;  // mi restituisce il valore della variabile usata nomeBig
    }
);
console.log(targheStudents);


// 2- nuovo array con voti maggiorni di 70
const studentsVoti70 = students.filter(
    ( element, index, array ) => {
        if ( element.grades > 70){ // se la condizione è verificata
            return true; // il return sarà true e pusherà automaticamente l'elemento dentro al nuovo array studentsVoti70
        }
    }
);
console.log(studentsVoti70);


// 3- nuovo array con voti maggiorni di 70 e id maggiore di 120
const studentsId120 = students.filter(
    ( element, index, array ) => {
        if ( element.grades > 70 && element.id > 120 ){ // se entrambe le condizione sono verificate
            return true; // il return sarà true e pusherà automaticamente l'elemento dentro al nuovo array studentsId120
        }
    }
);
console.log(studentsId120);