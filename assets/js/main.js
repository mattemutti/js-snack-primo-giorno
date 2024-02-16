// Ex1 Dichiara una variabile chiamata number e assegnale il valore 100. Stampa il valore della variabile in console

const number = 100; //number
console.log(number);


// Ex2 Dichiara una costante chiamata PI e assegnale il valore di 3.14. Stampa il valore della costante in console.

const PI = 3.14; //number
console.log(PI);


// Ex2/B Prova ad assegnare alla costante chiamata PI il valore di 3.1416. Sai dire cosa succede?

// La console darà errore perchè una volta dichiarata, non posso cambiare il valore di una variabile const. In quel caso dovrei dichiarare una variabile let



/* Ex2/C

- Dichiara una variabile chiamata radius e assegnale il valore 8.
- Moltiplica radius x 2 e x PI e assegna il valore a una variabile di nome circle.
- Stampa il valore della variabile circle in console.
*/


const radius = 8;	//number
const circle = radius * 2 * PI; //number
console.log(circle);


/* Ex3

- Dichiara una variabile chiamata name e
- assegnale il valore "Carlo".
- Successivamente, modifica il valore della variabile in "Marco".
- Stampa il nuovo valore in console.
*/

let name = `Carlo` //string
name = `Marco`//string
console.log(name);


