
// En este código se introduce un nivel más avanzado de las clases en TypeScript. Definimos dos clases, 'Person' y 'Hero'. Cada 'Hero' incorpora una instancia de 'Person'. Esto muestra cómo las clases pueden ser utilizadas para crear estructuras de datos más complejas y cómo las instancias de una clase pueden ser utilizadas como propiedades dentro de otra clase, facilitando la organización y manejo de datos más complejos.

export class Person {

    constructor(
        public name: string,
        public lastName: string,
        private address: string = 'No Address',
    ) { }
}

// export class Hero extends Person{

//     constructor(
//         public alterEgo: string,
//         public age:number,
//         public realName:string,

//     ){
//         super(realName, ' New York') 
//     }
//     }

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,

    ) {
    }
}
const tony = new Person('Tony','Stark', 'New york')
const ironman = new Hero('Ironman', 45, 'Tony Stark', tony)
console.log(ironman)

// Aquí, 'Hero' y 'Person' son clases distintas. Un 'Hero' tiene una 'Person' adentro, pero no son lo mismo. Cada uno puede cambiar sin afectar al otro. Cuando creamos un nuevo 'Hero', le damos una 'Person' para que la use. En nuestro ejemplo, 'ironman' es un 'Hero' que usa la 'Person' 'tony'.