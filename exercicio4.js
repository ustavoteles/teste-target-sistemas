let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros = 19849.53;

let soma = sp + rj + mg + es + outros;

function percentual(valor, soma) {
  return ((valor * 100) / soma).toFixed(2) + " %";
}

console.log("SP", percentual(sp, soma));
console.log("RJ", percentual(rj, soma));
console.log("MG", percentual(mg, soma));
console.log("ES", percentual(es, soma));
console.log("OUTROS", percentual(outros, soma));
