// EJERCICIO "PAR/IMPAR A"

/*
• Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
• En el caso de ser 0 (cero) el algoritmo deberá
informarlo
*/

let numero: number = Number(prompt("Por favor, ingrese un número:"));
let resto: number = numero % 2;

if (numero === 0) {
  console.log("El número ingresado es: '0'");
}

if (resto === 0) {
  console.log("El número ingresado es: 'PAR'");
} else {
  console.log("El número ingresado es: 'IMPAR'");
}
