/* Scrivi una funzione che accetti una stringa contenente
 un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/
/* 
const name = "Mario";

// Dichiara la funzione qui.
function salutotime(names) {
  const data = new Date();
  console.log(data);
  const hours = data.getHours();
  let saluto = "";
  if (hours <= 13) {
    saluto = `Buongiorno ${names}`;
  } else if (hours <= 17) {
    saluto = `Buon pomeriggio ${names}`;
  } else if (hours >= 18) {
    saluto = `Buonasera ${names}`;
  }
  return saluto;
} */

// Invoca la funzione qui e stampa il risultato in console

/* const risultato = salutotime(name);
console.log(risultato); */
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
const name = "Mario";

const salutotime = (names) => {
  const data = new Date();
  console.log(data);
  const hours = data.getHours();
  let saluto = "";
  if (hours <= 13) {
    saluto = `Buongiorno ${names}`;
  } else if (hours <= 17) {
    saluto = `Buon pomeriggio ${names}`;
  } else if (hours >= 18) {
    saluto = `Buonasera ${names}`;
  }
  return saluto;
};

const risultato = salutotime(name);
console.log(risultato);
