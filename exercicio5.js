const leia = require("readline-sync");

let nome = leia.question("Digite uma palavra: ");

function reverterString(string) {
  var stringRevertida = "";

  for (let i = string.length - 1; i >= 0; i--) {
    stringRevertida += string[i];
  }

  return stringRevertida;
}

console.log("Palavra invertidada:", reverterString(nome));
