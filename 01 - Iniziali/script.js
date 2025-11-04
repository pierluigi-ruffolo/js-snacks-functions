/* Scrivi una funzione che accetti un array di nomi e 
restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = [
  "Anna",
  "Luca",
  "Marco",
  "Adele",
  "Giovanni",
  "Alessandra",
  "Giovanna",
];

// Dichiara la funzione qui.
/* function iniziali(nomi) {
  const inizialiArray = [];
  for (let i = 0; i < nomi.length; i++) {
    const nome = nomi[i];
    const iniziale = nome[0];
    inizialiArray.push(iniziale);
  }
  return inizialiArray;
} */

// Invoca la funzione qui e stampa il risultato in console
/* const risultato = iniziali(names);
console.log(risultato); */

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

const iniziali = (names) => {
  const inizialiArray = [];
  for (let i = 0; i < names.length; i++) {
    const nome = names[i];
    const iniziale = nome[0];
    inizialiArray.push(iniziale);
  }
  return inizialiArray;
};
const risultato = iniziali(names);
console.log(risultato);
