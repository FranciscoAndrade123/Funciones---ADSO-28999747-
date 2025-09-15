// p: "Aprobaré el curso"
// q: "Estudio"
// Proposición: p ↔ q

function bicondicional(p, q) {
  return p === q; // p ↔ q es verdadero si ambos son iguales
}

console.log("\nEjercicio 4: Bicondicional (p ↔ q)");
console.log(bicondicional(true, true));   // Verdadero
console.log(bicondicional(true, false));  // Falso
console.log(bicondicional(false, true));  // Falso
console.log(bicondicional(false, false)); // Verdadero
