
interface Product{
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


const shoppingCart= [phone, tablet];
const tax = 0.21;
const result= taxCalculator({
    product:shoppingCart,
    tax:tax,
}) 

//--------------------------------------------------------------

function taxCalculator(options:TaxCalculatorOptions):number[]{
    let total = 0;
    options.product.forEach(product => {
        total += product.price;
    })
    return [total, total*options.tax]
}

//--------------------------------------------------------------

console.log('total', result[0])
console.log('tax', result[1])

//--------------------------------------------------------------

export { }; // Esto es para transformar el archivo en un Modulo.