
let printed = false;


for (let i = 0; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0 && i > 0) {
        console.log("FizzBuzz");
        printed = true;
    } else if (i % 3 === 0 && !printed && i > 0) {
        console.log("Fizz");
        printed = true;
    } else if (i % 5 === 0 && !printed && i > 0) {
        console.log("Buzz");
        printed = true;
    } else {
        console.log(i);
    }

    printed = false;
}