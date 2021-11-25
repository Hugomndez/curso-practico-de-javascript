// Este es el codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

// Este es el codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

// Este es el codigo del circulo
console.group("Circulos");

//Radio

//Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Area
function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("inputLado1Triangulo");
  const input2 = document.getElementById("inputLado2Triangulo");
  const input3 = document.getElementById("inputBaseTriangulo");

  const x1 = Number(input1.value);
  const x2 = Number(input2.value);
  const x3 = Number(input3.value);

  const perimetro = perimetroTriangulo(x1, x2, x3);
  alert(perimetro);
}

// function calcularAreaTriangulo(){
//   const input1 = document.getElementById("inputLado1Triangulo");
//   const input2 = document.getElementById("inputLado2Triangulo");
//   const input3 = document.getElementById("inputBaseTriangulo");

//   const lado1 = Number(input1.value);
//   const lado2 = Number(input2.value);
//   const base = Number(input3.value);

//   const area = areaTriangulo(base, );
//   alert(area);
// }

function calcularPerimetroCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}
