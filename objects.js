//var deportes={conBalon: ["futbol", "basquet", "rugby"], 
//sinBalon:["natacion","boxeo","gimnacia"],
//};

// ACCEDER y ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
//console.log(persona.edad);
persona.nombre="Martin";
console.log(persona.nombre);
//CREAR y BORRAR
var autos={};
autos.marcas=["ford", "ferrari", "audi"];
delete autos.marcas;
console.log(autos);

//De la misma manera que utilizamos la Dot-Notation o notación por puntos para acceder o asignar un valor, también podemos usar Bracket-Notation, o notación por corchetes. Lo único que cambia es la forma en la que lo escribimos.

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
console.log(atuendos.pies);

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

var comidas={};
var diferenciadeNotaciones= function(prop1,prop2){
    comidas.prop1= ["Frutas", "Vegetales"];
    comidas[prop2]= ["hamburguesas", "Papas Fritas"];
};
diferenciadeNotaciones("saludable", "no saludable");
console.log(comidas);


//Métodos de objetos

// HAS OWN PROPERTY (nos permitirá especificar un nombre, y verificar si este existe como una propiedad dentro de un objeto)
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);//false


// KEYS (devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo)
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades); //[ 'autor', 'genero', 'año' ]


//Recorridos en objetos

// FOR IN (NOS SIRVE SOLO PARA RECORRER OBJETOS)
 var mundo= {continentes:7, paises:195, oceanos:5};
 for(var prop in mundo){
    console.log('Esta es la propiedad: ' + prop);
    console.log('Este es el valor: ' + mundo[prop]);
 } //Esta es la propiedad: continentes
 //Este es el valor: 7
 //Esta es la propiedad: paises
 //Este es el valor: 195
 //Esta es la propiedad: oceanos
 //Este es el valor: 5

 //THIS
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: function() {
       console.log('Mi perro es un  ' + this.raza);
    },
 };
 mascota.info();