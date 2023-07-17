// En este fragmento de código, se presenta la definición y utilización de clases en TypeScript. Definimos una clase 'Person' con propiedades y un constructor. Luego creamos una nueva instancia de 'Person', asignando a 'hulk'. Este código sirve para familiarizarse con la creación y el uso de clases en TypeScript.

export class Person {

    public name: string;
    private address: string;

    constructor(){
        this.name = 'Bruce';
        this.address = 'New York';
    }
}

const hulk = new Person();
console.log(hulk);
