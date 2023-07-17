

// En este código, aprendemos sobre los genéricos en TypeScript. Los genéricos son una manera poderosa de permitir a los usuarios definir el tipo de los datos que quieren utilizar. En el ejemplo, la función whatsMyType acepta un argumento de cualquier tipo 'T' y devuelve un valor del mismo tipo. De este modo, podemos garantizar la coherencia del tipo de datos en nuestra función y manipularlos de forma segura.

export function whatsMyType<T>(argument:T):T{
    return argument;
}

let amIString = whatsMyType<string>('hola mundo')
let amINumber = whatsMyType<number>(100)
let amIArray = whatsMyType<number[]>([1,2,3,4,5])

console.log(amIString.split(' '))
console.log(amINumber.toFixed())
console.log(amIArray.join('-'))