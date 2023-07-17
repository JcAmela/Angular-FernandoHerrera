// Este código ilustra la desestructuración de funciones en TypeScript. Definimos interfaces para estructurar nuestros datos y luego usamos esas interfaces en nuestra función 'taxCalculator'. La función recibe un objeto y desestructura sus propiedades. También se desestructura el precio directamente del producto en el loop forEach. Este código refuerza la comprensión de interfaces, funciones y desestructuración en TypeScript.

export interface Product{
    description: string,
    price: number,
}
interface TaxCalculatorOptions{
    tax:number,
    product:Product[];
}

//--------------------------------------------------------------

const phone: Product={
    description: 'Nokia 3310',
    price: 150.0,
}
const tablet: Product={
    description: 'iPad Air',
    price: 250.0,
}


const shoppingCart = [phone, tablet];
const [total, tax] = taxCalculator({
    product:shoppingCart,
    tax: 0.21,
}) 

//--------------------------------------------------------------

export function taxCalculator(options:TaxCalculatorOptions): [number, number]{
    let total = 0;
    const { product, tax} = options

    product.forEach(({price}) => {
        total += price;
    })
    return [total, total*tax]
}

//--------------------------------------------------------------

console.log('total', total)
console.log('tax', tax)

//--------------------------------------------------------------
