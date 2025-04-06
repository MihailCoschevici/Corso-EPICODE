// Creiamo tre oggetti, uno per ogni utente, con le proprietà nome, cognome e se è ambassador.
const marco = {
    nome: "Marco",
    cognome: "Rossi",
    isAmbassador: true // Marco ha diritto allo sconto
  };
  
  const paul = {
    nome: "Paul",
    cognome: "Flynn",
    isAmbassador: false // Paul non ha diritto allo sconto
  };
  
  const amy = {
    nome: "Amy",
    cognome: "Reed",
    isAmbassador: false // Amy non ha diritto allo sconto
  };
  
  // Definiamo  dei dati del carrello

  const prezzi = [34, 5, 2];
  const costoSpedizione = 50;
  let utenteAcquirente = paul; 
  
  // Creeamo  dell'array degli utenti
  
  const utenti = [];
  utenti.push(marco);
  utenti.push(paul);
  utenti.push(amy);
  
  for (let i = 0; i < utenti.length; i++) {
    let utente = utenti[i];
    if (utente.isAmbassador === true) {
      console.log(utente.nome + " " + utente.cognome + " è un ambassador");
    } else {
      console.log(utente.nome + " " + utente.cognome + " non è un ambassador");
    }
  }
  

  let totaleProdotti = 0;
  for (let i = 0; i < prezzi.length; i++) {
    totaleProdotti += prezzi[i];
  }

  let totaleScontato = totaleProdotti;
  if (utenteAcquirente.isAmbassador === true) {
    totaleScontato = totaleProdotti * 0.7;
  }
  

  let totaleFinale = totaleScontato;
  if (totaleScontato <= 100) {
    totaleFinale += costoSpedizione;
  }
  
  
  console.log("Il totale da pagare per " + utenteAcquirente.nome + " " + utenteAcquirente.cognome + " è: €" + totaleFinale);
  
  
  const ambassador = [];
  for (let i = 0; i < utenti.length; i++) {
    if (utenti[i].isAmbassador === true) {
      ambassador.push(utenti[i]);
    }
  }
  console.log("Array di Ambassador:", ambassador);
  






/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.


const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }
  
  const prices = [34, 5, 2]
  const shippingCost = 50
  let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!*/


















/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.


const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }
  
  const prices = [34, 5, 2]
  const shippingCost = 50
  let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!*/