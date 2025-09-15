// p: "Voy al cine"
// q: "Como palomitas"
// Proposición: p ∧ q

function conjuncion(p, q) {
  return p && q;
}

console.log("\nEjercicio 2: Conjunción (p ∧ q)");
console.log(conjuncion(true, true));   // Verdadero
console.log(conjuncion(true, false));  // Falso
console.log(conjuncion(false, true));  // Falso
console.log(conjuncion(false, false)); // Falso
