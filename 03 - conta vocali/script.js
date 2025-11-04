/* Scrivi una funzione che accetti una stringa
 e restituisca il numero di vocali
  contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function numeriVocali(word) {
  let number = 0;
  for (let i = 0; i < word.length; i++) {
    const vocale = word[i].toLowerCase();
    if (
      vocale === "a" ||
      vocale === "e" ||
      vocale === "i" ||
      vocale === "o" ||
      vocale === "u"
    ) {
      number++;
    }
  }
  return number;
}

// Invoca la funzione qui e stampa il risultato in console

const risultato = numeriVocali(word);
console.log(risultato);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
