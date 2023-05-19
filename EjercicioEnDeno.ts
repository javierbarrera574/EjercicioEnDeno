//Un programa que calcula el área de un triángulo.

function calcularArea(base: number, altura: number): number
{
  return (base * altura) / 2;
}


const base = 10;
const altura = 5;


const area = calcularArea(base, altura);

console.log(`El área del triángulo con base ${base} y altura ${altura} es: ${area}`);