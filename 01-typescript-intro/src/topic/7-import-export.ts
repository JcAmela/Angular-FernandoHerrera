// Este código destaca la importancia de los conceptos de 'import' y 'export' en TypeScript. Importamos la interfaz 'Product' y la función 'taxCalculator' de otro módulo. Luego utilizamos estos elementos importados para calcular y mostrar el total y los impuestos de un carrito de compras. Es un excelente ejemplo de cómo se pueden compartir y reutilizar elementos en diferentes partes de nuestra aplicación.

import {Product, taxCalculator} from './6-functions-destructuring';


const shoppingCart: Product []= [
{
    description: 'Nokia',
    price: 100
},
{
    description: 'Ipad',
    price: 200
}
];

const [total,tax]= taxCalculator({
    product:shoppingCart,
    tax:0.21
});

console.log('total', total)
console.log('tax', tax)