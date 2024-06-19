import './style.css';

// 1. Intercambio de Valores: Declara dos variables (a, b) y utiliza una variable auxiliar (temp) para intercambiar sus valores.

let a = 5;
let b = 10;
let temp;

temp = a;
a = b;
b = temp;

console.log(a, b);

// 2. Función que reciba 2 números como entrada y determine cuál es el mayor.

function mayorNumero() {
  let num1 = parseFloat(prompt('Ingrese el primer número: '));
  let num2 = parseFloat(prompt('Ingrese el segundo número: '));

  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return 'Ambos números son iguales';
  }
}
console.log(mayorNumero());

// 3. Función que reciba un número y retorne si es un número dado es par o impar.

function esParOImpar() {
  let num = parseInt(prompt('Ingrese un número: '));
  return num % 2 === 0 ? 'Par' : 'Impar';
}
console.log(esParOImpar());

// 4. Funcion que calcula el precio final de un producto después de aplicar un descuento basado en el precio original y el porcentaje de descuento.

function precioConDescuento() {
  let precioOriginal = parseFloat(prompt('Ingrese un precio: '));
  let porcentajeDescuento = parseFloat(
    prompt('Ingrese un monto de descuento: '),
  );
  let descuento = (precioOriginal * porcentajeDescuento) / 100;
  let precioFinal = precioOriginal - descuento;
  return precioFinal;
}

console.log(precioConDescuento());

// 5. Función para Calcular Área: Crea una función que reciba el radio de un círculo y devuelva su área.

function areaCiruclo() {
  let radio = parseFloat(prompt('Ingrese el radio del circulo: '));
  const PI = Math.PI;
  return PI * radio * radio;
}
console.log(areaCiruclo());

// 6. Función para Convertir Temperatura: Crea una función que convierta de Celsius a Fahrenheit.

function celsiusAFahrenheit() {
  let temperatura = parseFloat(
    prompt('Ingrese el la temperatura en grados centigrados: '),
  );
  return (temperatura * 9) / 5 + 32;
}
console.log(celsiusAFahrenheit(0));

// 7. Bucle for: Utiliza un bucle for para imprimir los números del 1 al 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 8. Bucle while: Utiliza un bucle while para pedir al usuario números hasta que ingrese un número negativo.

let num = 0;
while (num >= 0) {
  num = parseInt(prompt('Ingrese un número: '));
}
console.log('Ingresaste un número negativo.');

// 9. Tabla de Multiplicar: Pide al usuario un número y muestra su tabla de multiplicar del 1 al 10.

let numero = parseInt(prompt('Ingrese un número: '));
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

// 10. Suma de Números Pares: Calcula la suma de los números pares del 1 al 100.

let suma = 0;
for (let i = 2; i <= 100; i += 2) {
  suma += i;
}
console.log(suma);

// 11. Objeto Persona: Crea un objeto persona con propiedades como nombre, edad, ciudad y un método presentarse() que muestre un mensaje de presentación.

let persona = {
  nombre: 'Nicolas',
  edad: 32,
  ciudad: 'Tucuman',
  presentarse: function () {
    return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y vivo en ${this.ciudad}.`;
  },
};
console.log(persona.presentarse());

// 12. Array de Objetos: Crea un array de objetos persona y utiliza un bucle para mostrar la información de cada persona.

let personas = [
  { nombre: 'Juan', edad: 30, ciudad: 'Buenos Aires' },
  { nombre: 'Ana', edad: 25, ciudad: 'Córdoba' },
  { nombre: 'Pedro', edad: 35, ciudad: 'Rosario' },
];
personas.forEach((persona) => {
  console.log(
    `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`,
  );
});

// 13. Función para Calcular Promedio: Crea una función que reciba un array de números y devuelva su promedio.

function calcularPromedio(numeros) {
  let suma = numeros.reduce((acc, num) => acc + num, 0);
  return suma / numeros.length;
}
console.log(calcularPromedio([10, 20, 30, 40, 50]));
