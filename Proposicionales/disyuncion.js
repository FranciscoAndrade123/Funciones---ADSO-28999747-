// p: "Estudio matemáticas"
// q: "Estudio programación"
// Proposición: p ∨ q

function disyuncion(p, q) {
  return p || q;
}

console.log("\nEjercicio 3: Disyunción (p ∨ q)");
console.log(disyuncion(true, true));   // Verdadero
console.log(disyuncion(true, false));  // Verdadero
console.log(disyuncion(false, true));  // Verdadero
console.log(disyuncion(false, false)); // Falso
