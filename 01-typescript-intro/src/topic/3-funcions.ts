// En este código practicamos funciones en TypeScript, destacando la tipificación de parámetros y resultados, y el uso de parámetros opcionales y valores predeterminados. Además, aplicamos estas habilidades en un ejemplo con objetos y métodos, reforzando el uso de interfaces.

function addNumbers(a:number, b:number):number{
  return a + b  
}

const addNumbersArrow = (a:number, b:number):string => {
   return `${ a + b }`
}

function multiply(firstNumber:number, secondNumber?:number, base = 2){
    return firstNumber * base;
}

// const result:number = addNumbers(1, 2)
// const result2:string = addNumbersArrow(1, 2)
// const multiplyResult:number=multiply(5);
// console.log({ result, result2, multiplyResult })

interface Character{
    name:string,
    hp: number,
    showHp: () => void;
}

const healCharacter = (Character: Character, amount:number) => {


    Character.hp += amount;

}

const strider: Character = {
    name:'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp}`)
    }
}
healCharacter(strider, 10)
healCharacter(strider, 50)

strider.showHp();
export{} // Esto es para transformar el archivo en un Modulo.