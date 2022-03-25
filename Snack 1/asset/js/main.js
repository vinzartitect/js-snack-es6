// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// creazione array di oggetti
let listaBici = [
    {
        'Nome' : 'Bianchi',
        'Peso' : 7.00,
    },
    {
        'Nome' : 'Savadeck',
        'Peso' : 6.90,        
    },
    {
        'Nome' : 'Hiland',
        'Peso' : 7.50,        
    },
    {
        'Nome' : 'Atala',
        'Peso' : 6.80,
    },
    {
        'Nome' : 'Saccarelli',
        'Peso' : 7.30,
    },
    {
        'Nome' : 'Lapierre',
        'Peso' : 7.80,
    },
    {
        'Nome' : 'Declathon',
        'Peso' : 8.00,
    }
];
// stampo in console tutta la lista
console.log(listaBici);

// seleziono in una variabile il primo elemento dell oggetto listaBici
let pesoMin = listaBici[0];
// stampo in console il primo elemento
console.log(pesoMin);

// utilizzo il ciclo for per estrarre il peso piu basso
for ( let i = 1; i < listaBici.length; i++) {
    let x = listaBici[i];
    if ( x['Peso'] < pesoMin['Peso'] ) {
        pesoMin = x;
    }
}

//stampo in console log la bici col peso più basso
console.log(pesoMin);

// seleziono l id dall html
let risultato = document.getElementById('output');

// destrutturo l oggetto
let { Nome, Peso } = pesoMin;

// metto in stampa in schermo il risultato col template literal
risultato.innerHTML = 
`
<div> La Bici da Corsa più leggera in mercato! </div>
<div> nome -> ${Nome} </div>
<div> peso -> ${Peso} Kg </div>
`;
