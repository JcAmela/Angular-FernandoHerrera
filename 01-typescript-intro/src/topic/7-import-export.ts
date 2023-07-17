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