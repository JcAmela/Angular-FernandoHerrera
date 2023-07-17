
// Este código es una demostración de los tipos básicos en TypeScript. Se muestra cómo declarar variables con tipos específicos (string, number y boolean) y cómo permitir múltiples tipos para una misma variable, en este caso 'hpPoints', que puede ser tanto un número como el string 'FULL'.

const name:string = "Juan Carlos Amela";
let hpPoints: number |'FULL' = 95;
const isAlive :boolean = true;

hpPoints = 'FULL'
console.log({
    name, hpPoints, isAlive
})

export{}