/* //-------------------------------------------------------------------------------------------------------------------------------------------------
// ESERCIZIO 1 - 2 (Dichiarazione variabili | Cambio valore)
let var1 = 5;
const var2 = 2;

console.log(var1 , var2);

var1 = 6;

console.log(var1);
//-------------------------------------------------------------------------------------------------------------------------------------------------
// ESERCIZIO 3 (Ridefinizione variabili)

let number = 10;
{
    let number = 5
    console.log(number);
}

console.log(number);
//-------------------------------------------------------------------------------------------------------------------------------------------------
// ESERCIZIO 4 (Scoping delle variabili)

let outside = 5;
{
    let inside = 8;

    console.log(outside);
    console.log(inside);
}

    console.log(outside);
    console.log(inside);
//-------------------------------------------------------------------------------------------------------------------------------------------------
// ESERCIZIO 5 (Genera numeri pari)

for(i=0 ; i<=20 ; i++)
    if(i % 2 === 0){
        console.log(i);
    };
//-------------------------------------------------------------------------------------------------------------------------------------------------
// ESERCIZIO 6 (Numeri dispari decrescenti) */
let i=10;
while(i>=10);{
    i--
    console.log(i);
};