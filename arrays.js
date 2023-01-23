//var palabra= "Henri"
//var palabraSeparada= palabra.split(''); //El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos.
//palabraSeparada.pop(); //El método pop() elimina y devuelve el último elemento de un arreglo.
//palabraSeparada.push('y'); //El método push() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array
//console.log(palabraSeparada);
//var palabraArreglada=palabraSeparada.join('');//El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.
//console.log(palabraArreglada);

//Métodos de recorrido 
var numeros = [1, 2, 3, 4];
//numeros.forEach((num) => {
  //  if(num===3) {
    //    console.log(num);
    //} ; //El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.
 //});

 var masUno= numeros.map((num)=>{
    return num+1;
 });
 console.log (masUno); 
 // El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.

 // PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);
// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);
// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);

// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);
// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )
// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);

//Bucle For

//Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

//Sintaxis: for ([expresion-inicial]; [condicion]; [expresion-final])sentencia 
// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);