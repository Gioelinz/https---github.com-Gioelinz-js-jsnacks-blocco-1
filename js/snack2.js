// Snack 2
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt("inserisci una parola").trim();
const secondWord = prompt("inserisci un' altra parola").trim();

let message = "Stessa lunghezza di caratteri";
const displayElement = document.getElementById("display");

if (firstWord.length > secondWord.length) {
    message = `${secondWord} ${firstWord}`;
} else if (firstWord.length < secondWord.length) {
    message = `${firstWord} ${secondWord}`;
}

displayElement.innerText = message;