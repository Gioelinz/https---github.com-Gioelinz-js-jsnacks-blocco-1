// Snack 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

//  !opzione no
/*
const firstNumber = parseInt(prompt("inserisci un numero", '1'));
const secondNumber = parseInt(prompt("inserisci un' altro numero", '2'));
const thirdNumber = parseInt(prompt("inserisci un' altro numero", '3'));
const fourthNumber = parseInt(prompt("inserisci un' altro numero", '4'));
const fifthNumber = parseInt(prompt("inserisci un' altro numero", '5'));
const sixthNumber = parseInt(prompt("inserisci un' altro numero", '6'));
const seventhNumber = parseInt(prompt("inserisci un' altro numero", '7'));
const eightNumber = parseInt(prompt("inserisci un' altro numero", '8'));
const ninethNumber = parseInt(prompt("inserisci un' altro numero", '9'));
const tenNumber = parseInt(prompt("inserisci un' altro numero", '10'));


const allNumbers = firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber + sixthNumber + seventhNumber + eightNumber + ninethNumber + tenNumber;
if (isNaN(allNumbers)) {
    document.getElementById("display").innerText = `Non hai inserito un valore valido`;
} else {
    document.getElementById("display").innerText = `La somma dei tuoi numeri è ${allNumbers}`;
}
console.log(allNumbers)
*/

// !opzione migliore

const displayElement = document.getElementById("display")

let sum = 0;
let isValid = true;

for (let i = 0; i < 5; i++) {
    const number = parseInt(prompt('inserisci un numero', '5'));
    if (isNaN(number)) {
        isValid = false;
    } else {
        sum += number;
    }
}

if (isValid) {
    displayElement.innerText = 'somma finale: ' + sum;
} else {
    displayElement.innerText = 'hai inserito elementi non validi';
}

console.log(sum)