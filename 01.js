/*

- Lös FizzBuzz-problemet* för talen 0-100.
- Spara alla värden i en array i en array som heter fizzbuzz.
- Skriv ut arrayen.

FizzBuzz är ett elementärt programmeringsproblem där man skriver ut tal i en talserie. Om det aktuella talet är jämnt delbart med 3 skriver man ut Fizz, är det jämnt delbart med 5 skriver man ut Buzz, är det jämnt delbart med båda skriver man ut FizzBuzz och annars skriver man ut talet. I detta fall skriver ni alltså dock inte ut värdet utan sparar det i arrayen och skriver ut arrayen när ni är klara.

*/

function fizzBuzz(n) {
    var FizzBuzz = [];
    if (n === 1) {
        return ["1"];
    } else {
        if (n % 3 === 0 && n % 5 === 0) {
            FizzBuzz.push("fizzbuzz");
        } else if (n % 5 === 0 ) {
            FizzBuzz.push("Buzz");
        } else if (n % 3 === 0 ) {
            FizzBuzz.push("Fizz");
        } else  {
            FizzBuzz.push("" + n);
        }
        return fizzBuzz (n - 1).concat(FizzBuzz);
    }
}

console.log(fizzBuzz(100));