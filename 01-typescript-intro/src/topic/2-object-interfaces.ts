// Este código es una práctica sobre objetos e interfaces en TypeScript. Se definen las propiedades requeridas y opcionales de un objeto 'Character' mediante una interfaz. Luego, se crea un objeto siguiendo dicha interfaz. Finalmente, se asigna un valor a la propiedad opcional 'homeTown'.

const skills: string[] = [
    'Bash', 'Counter', 'Healing'];

    interface Character {
        name: string;
        hp: number;
        skills: string [];
        homeTown?: string;
    }


const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills:['Bash', 'Counter']
}
strider.homeTown='Rivendell'

console.table(strider)
export{} // Esto es para transformar el archivo en un Modulo.
