// p: "Está lloviendo"
// q: "Salgo de casa"
// Proposición: p -> ¬q

function implicacion(p, q) {
  return (!p) || (!q); // p → ¬q
}

// Pruebas
console.log("Ejercicio 1: Negación (p → ¬q)");
console.log(implicacion(true, true));   // Falso
console.log(implicacion(true, false));  // Verdadero
console.log(implicacion(false, true));  // Verdadero
console.log(implicacion(false, false)); // Verdadero
