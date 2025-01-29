const leia = require("readline-sync");

let fibonacci = [0, 1];

let final = leia.questionInt(
  "Digite quantos números da sequência de Fibonacci você deseja: "
);

for (let i = 2; i < final; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);
