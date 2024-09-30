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
// ESERCIZIO 6 (Numeri dispari decrescenti)
let i=10;
while(i>0){
    i--
    if(i % 2 !== 0){
        console.log(i);
    }
}; */
/*

//-------------------------------------------------------------------------------------------------------------------------------------------------
// ESERCIZIO 7 - 8 - 9 (il Prompt | Lunghezza della parola | Richiesta di input corretto)

let word;
do{
    word = prompt("inserisci una parola");
}while(word.length < 5);

console.log(word.length);
//-------------------------------------------------------------------------------------------------------------------------------------------------
// ESERCIZIO 10 (if & else)

let number = 6;
{
    if(number > 5){
        console.log("la variabile è maggiore di 5");
    }else
    console.log("la variabile è minore o uguale a 5");
}
//-------------------------------------------------------------------------------------------------------------------------------------------------
// ESERCIZIO 11 (if, else & else-if)

let score = prompt("numero");
{
    if(score <= 100 && score >= 90){
        console.log("Voto ottimo");
    }else if(score < 90 && score >= 70){
        console.log("Voto buono");
    }else if(score < 70 && score >= 60){
        console.log("Voto sufficiente");
    }else if(score < 60){
        console.log("Voto insufficiente");
    }else{
        console.log("Voto non valido");
    }
}
//-------------------------------------------------------------------------------------------------------------------------------------------------
// ESERCIZIO 12 (Verifica punteggio)

let score = prompt("numero");

switch (score) {
    case score <= 100 && score >= 90:
        console.log("Voto ottimo");
        break;
    case score < 90 && score >= 70:
        console.log("Voto buono");
        break;
    case score < 70 && score >= 60:
        console.log("Voto sufficiente");
        break;
    case score < 60:
        console.log("Voto insufficiente");
        break;
    default:
        console.log("Voto non valido");
        break;
}
//-------------------------------------------------------------------------------------------------------------------------------------------------
// ESERCIZIO 14 - 15 (Array di numeri | Somma numeri)

let arr = [1, 2, 3, 4, 5];
somma = 0;

for(i=0 ; i<arr.length ; i++){
    somma = somma + arr[i];
}

console.log(arr);
console.log(somma); */
//-------------------------------------------------------------------------------------------------------------------------------------------------
// ESERCIZIO 16 (Array reverse)

let arr = [1,2,3,4,5];

for(i=arr.length-1 ; i>=0 ; i--){
    console.log(arr[i]);
} 

//-------------------------------------------------------------------------------------------------------------------------------------------------
// ESERCIZIO 17 (Popolamento array)
/* let parole[];

for(i=0 ; i<5 ; i++){

} */
//DA CORREGGERE