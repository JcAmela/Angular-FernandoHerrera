interface Audioplay{
audioVolume:number;
songDuration:number;
song: string;
details: Details
}

interface Details{
    author: string;
    year: number;
}
const audioPlayer: Audioplay ={
    audioVolume: 90,
    songDuration: 36,
    song: "BOOOOMBAAAA",
    details:{
        author:'King Africa',
        year: 2000,
    }
}
//Desestructuración
const {audioVolume:volumen,
    songDuration:duracion, 
    song: cancion,
    details:detalles  } = audioPlayer;

    //de objetos
const{author:autor, 
    year: anio} = detalles

    //de arrays
const [,,Trunks = 'Not found']:string[]=['Goku', 'Vegeta'];

// Mostramos los resultados por consola:
    //Resultado de la Desestructuracion del objeto [audioplayer]
console.log('Desestructuramos el Objeto:[audioPlayer]'
 +' -> audioVolume = ' + volumen + ','
 + ' songsDuration = ' + duracion + ','
 + ' song = ' + cancion + '.'
 +' Y tambien de dentro del atributo [DETAILS] ='
 + ' (details:author) -> ' + autor + ','
 + ' (details:year) -> ' + anio + ','
 )
 //Resultado de la Desestructuracion del array:
console.log('Aqui vamos a ver el resultado de la Desestructuración de un array, voy a pedir el valor de "Trunks" ya que no existe en el array para que me diga: no encontrado -> ' + Trunks)

    export { }; // Esto es para transformar el archivo en un Modulo.