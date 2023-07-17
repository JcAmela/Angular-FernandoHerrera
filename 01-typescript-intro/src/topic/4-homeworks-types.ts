
// En este código, practicamos la creación y uso de 'interfaces' en TypeScript para definir la forma de los objetos. También exploramos cómo los métodos dentro de los objetos pueden acceder a las propiedades del objeto a través de 'this'. Finalmente, nos familiarizamos con la transformación de archivos en módulos de TypeScript. Esta tarea refuerza los conceptos clave en TypeScript como interfaces, tipos personalizados, métodos de objetos y el uso de módulos.

/*
import { setupCounter } from './../counter';
    ===== Código de TypeScript =====
*/
interface SuperHero {
    name: string,
    age: number,
    address: Address
    showAddress: () => string
}

interface Address{
    calle:string,
    pais: string,
    ciudad: string
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log(address);




export { }; // Esto es para transformar el archivo en un Modulo.