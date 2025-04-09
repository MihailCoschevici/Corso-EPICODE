/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*function crazySum(num1, num2) {
    if (num1 === num2) {
      return (num1 + num2) * 3;
    }
    return num1 + num2;
  }
  console.log("crazySum(4, 5):",crazySum(4, 5)); 
  console.log("crazySum(5, 5):", crazySum(5, 5));*/



/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
      return true;  
    } else {
      return false; 
    }
  }
  console.log("boundary(50):", boundary(50));  //true perche 50 e tra 20 e 100
  console.log("boundary(400):", boundary(400)); //true
  console.log("boundary(10):", boundary(10)); //false*/



/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*function reverseString(str) {
  let arr = str.split('');
  arr.reverse();
  let strInvertita = arr.join('');
  return strInvertita;
}
console.log('reverseString("EPICODE"):', reverseString("EPICODE"));*/


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

 /*function upperFirst(str) {
  let parole = str.split(' ');
  for (let i = 0; i < parole.length; i++) {
    parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
  }
  return parole.join(' ');
}
console.log('upperFirst("questo e essercizio numero 4 in data di 07.04.2025"):', upperFirst("questo e essercizio numero 4 in data di 07.04.2025")); */



/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*function giveMeRandom(m) {
    let numeriCasuali = [];
    for (let i = 0; i < m; i++) {
      let randomNum = Math.floor(Math.random() * 11);
      numeriCasuali.push(randomNum);
    }
    return numeriCasuali;
  }
  console.log("giveMeRandom(5):", giveMeRandom(5)); // risultato:array di 5 numeri casuali tra 0 e 10
  console.log("giveMeRandom(3):", giveMeRandom(3)); // risulato: array di 3 numeri casuali tra 0 e 10

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*/*function getArea(l1, l2) {
    return l1 * l2;
  }
   console.log("getArea(2, 2):", getArea(2, 2));  // Risultato: 4
  console.log("getArea(6, 6):", getArea(6, 6));  // Risultato: 36

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*function codify(str) {
  if (str.startsWith("code")) {
    return str;
  } else {
    return "code" + str;
  }
}
console.log(codify("learn"));*/ // STAMPA: codelearn */


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

 /*function check3and7(n) {
  if (n % 3 === 0 || n % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(9));   // STAMPA: true 
console.log(check3and7(10))    // STAMPA: false

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/*function cutString(str) {
  return str.slice(1, -1);
}
console.log(cutString("JavaScript"));  // STAMPA: "avaScrip"*/


