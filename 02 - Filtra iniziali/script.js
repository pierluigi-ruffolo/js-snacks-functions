/* Scrivi una funzione che accetti un'array 
di stringhe e una lettera e restituisca 
un array contenente solo le parole che iniziano 
con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
/* function filtraPerLettera(name, lettera) {
  const paroleFiltrate = [];
  const letteraMaiuscola = lettera.toUpperCase();

  for (let i = 0; i < name.length; i++) {
    const nome = name[i];
    const iniziale = nome[0].toUpperCase();
    if (iniziale === letteraMaiuscola) {
      paroleFiltrate.push(nome);
    }
  }

  return paroleFiltrate;
}
 */
// Invoca la funzione qui e stampa il risultato in console
/* const risultato = filtraPerLettera(names, "A");
console.log(risultato); */

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

const filtraPerLettera = (name, lettera) => {
  const paroleFiltrate = [];
  const letteraMaiuscola = lettera.toUpperCase();

  for (let i = 0; i < name.length; i++) {
    const nome = name[i];
    const iniziale = nome[0].toUpperCase();
    if (iniziale === letteraMaiuscola) {
      paroleFiltrate.push(nome);
    }
  }

  return paroleFiltrate;
};

const risultato = filtraPerLettera(names, "A");
console.log(risultato);
