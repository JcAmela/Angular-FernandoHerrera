function classDecorator<T extends {new (...args:any[]):{}}>(
    contructor : any
){
    return class extends contructor{
        newProperty = 'New Property'
        hello = 'override';
    }
}

@classDecorator
export class SupperClass{
    public myProperty: string = 'Abc123'
    print() {
        console.log('hola mundo')
    }
}
 console.log(SupperClass)
 const myClass = new SupperClass();
 console.log(myClass)