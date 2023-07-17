
// En este fragmento de código, se ilustra el concepto de Decoradores en TypeScript. Los decoradores son una propuesta de etapa 2 para JavaScript que permite añadir anotaciones y una sintaxis de metaprogramación a las declaraciones de clase y miembro. En nuestro ejemplo, se ha utilizado un decorador de clase classDecorator que agrega nuevas propiedades a la clase que decora. Este decorador toma la clase SupperClass y le agrega newProperty y sobrescribe hello. La magia de los decoradores reside en su capacidad de permitir la modificación de clases en tiempo de ejecución, proporcionando una potente herramienta para la metaprogramación.

function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      newProperty = 'New Property';
      hello = 'override';
    }
  }
  
  type DecoratedSupperClass = {
    new(): SupperClass & { newProperty: string, hello: string },
    prototype: SupperClass
  }
  
  @classDecorator
  class SupperClass {
    public myProperty: string = 'Abc123'
    print() {
      console.log('hola mundo')
    }
  }
  
  const DecoratedClass = SupperClass as unknown as DecoratedSupperClass;
  console.log(DecoratedClass)
  const myClass = new DecoratedClass();
  console.log(myClass)
  