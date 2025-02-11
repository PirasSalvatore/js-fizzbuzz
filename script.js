
let printed = false; // variabile di appoggio per capire se ho già effettuato una stampa

for (let i = 0; i <= 100; i++) { // ciclo da 0 a 100 estremi inclusi

    if (i % 3 === 0 && i % 5 === 0 && i > 0) { //controllo che i sia multiplo di 3 e anche multiplo di 5 e che i sia maggiore di 0 (caso limite in cui si triggera)
        console.log("FizzBuzz");
        printed = true;
    } else if (i % 3 === 0 && !printed && i > 0) {//controllo che i sia multiplo di 3 e che i sia maggiore di 0 (caso limite in cui si triggera)
        console.log("Fizz");
        printed = true;
    } else if (i % 5 === 0 && !printed && i > 0) {//controllo che i sia multiplo di 5 e che i sia maggiore di 0 (caso limite in cui si triggera)
        console.log("Buzz");
        printed = true;
    } else { // se i è uguale a 0 e non è multiplo di 3 o 5
        console.log(i);
    }

    printed = false; // azzero la variabile d'appoggio
}