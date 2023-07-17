// En este fragmento de código, se ilustra el concepto de Decoradores en TypeScript. Los decoradores son una propuesta de etapa 2 para JavaScript que permite añadir anotaciones y una sintaxis de metaprogramación a las declaraciones de clase y miembro. En nuestro ejemplo, se ha utilizado un decorador de clase classDecorator que agrega nuevas propiedades a la clase que decora. Este decorador toma la clase SupperClass y le agrega newProperty y sobrescribe hello. La magia de los decoradores reside en su capacidad de permitir la modificación de clases en tiempo de ejecución, proporcionando una potente herramienta para la metaprogramación.

export interface Passenger{
    name:string
    children?:string[]

}
const passenger1:Passenger = {
    name: 'Juan Carlos'
}
const passenger2:Passenger = {
    name: 'Fernando',
    children: ['Natalia', 'elisabeth'],
}

const printChildren = (passenger:Passenger)=>{
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name,howManyChildren)
}

printChildren(passenger1)
printChildren(passenger2)