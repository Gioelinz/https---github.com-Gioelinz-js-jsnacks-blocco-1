// SNACK 1
// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

const displayElement = document.getElementById("display");

const firstNumber = parseInt(prompt("Inserisci un numero"));

const secondNumber = parseInt(prompt("Inserisci un' altro numero"));

console.log(`firstNumber: ${firstNumber} secondNumber: ${secondNumber}`)

let message = "Numeri uguali!";

if (firstNumber > secondNumber) {
    message = `Il Numero maggiore è ${firstNumber}`;
} else if (firstNumber < secondNumber) {
    message = `Il Numero maggiore è ${secondNumber}`;
}

displayElement.innerText = message;