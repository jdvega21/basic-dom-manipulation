//3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let nombre = "David";
let apellido  = "Vega";
let nombrePlatzi  = "jdvega21";
let edad  = 26;
let email = "email@domain.com";
let esMayorEdad = true;
let dineroAhorrado = 1000.00;
let deudas = 200;

function nombreCompleto()
{
    return nombre + " " + apellido;
}

function dineroReal()
{
    return dineroAhorrado - deudas;
}


console.log(nombreCompleto());
console.log(dineroReal());

//2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

//RESPUESTA
function preferenciaNombre(name,lastname,nickname)
{
    return `Mi nombre es ${name} ${lastname}, pero prefiero que me digas ${nickname}.`;
}
console.log(preferenciaNombre("David","Vega Porras","Saiyaying")); 

//2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

//RESPUESTA
const tipoDeSuscripcion = "ExpertPlus";
if (tipoDeSuscripcion === "Free")
    console.log("Solo puedes tomar los cursos gratis");
else if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
const tipoDeSuscripcion = "ExpertPlus";
if (tipoDeSuscripcion === "Free")
    console.log("Solo puedes tomar los cursos gratis");
if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} 
if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//BONUS?
const tipoDeSuscripcion = "ExpertPlus";
const tipoDeSuscripciones = [
    {
        nombre : "Free",
        descripcion : "Solo puedes tomar los cursos gratis"  
    },
    {
        nombre : "Basic",
        descripcion : "Puedes tomar casi todos los cursos de Platzi durante un mes"  
    },
    {
        nombre : "Expert",
        descripcion : "Puedes tomar casi todos los cursos de Platzi durante un año"  
    },
    {
        nombre : "ExpertPlus",
        descripcion : "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"  
    },

];

if (tipoDeSuscripciones.length > 0)
{
    var mitipo = tipoDeSuscripciones.find(function(mySuscripcion){
        return mySuscripcion.nombre  === tipoDeSuscripcion
    });
    console.log(mitipo.descripcion);
}

//solución bonus profe
const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}

/*
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es un ciclo?
    Es un metodo que nos permite repetir una tarea mientrad que se cumpla la condicion
    ¿Qué tipos de ciclos existen en JavaScript?
    generales FOR y While
    ¿Qué es un ciclo infinito y por qué es un problema?
    Es aquel donde la condicion nunca se va a cumplir y el ciclo se repite infinitamente, es un problema porque llena el stack de la memoria
    ¿Puedo mezclar ciclos y condicionales?
    Si

*/

//2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//RESPUESTAS
let i = 0;
while(i < 5)
{
    console.log("El valor de i es: " + i);
    i++
}

let i = 10;
while(i >= 2)
{
    console.log("El valor de i es: " + i);
    i--
}

//3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
let respuesta = 0;
do {
   	respuesta = prompt("Cuánto es 2 + 2?");
    if(respuesta == 4) console.log("FELICIDADES!");
} while (respuesta != 4);

/*
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es un array?
    Es una estructura de datos de tipo objeto
    ¿Qué es un objeto?
    Es una estructura de datos que nos permite representar un objeto real en memoria por medio de atributos y sus valores
    ¿Cuándo es mejor usar objetos o arrays?
    Depende del tipo de problema, arrays generalmente es usado para tener una coleccion de datos, incluso objetos y otros arrays. Los objetos para representar lo mencionado anteriormente
    ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
    Sí
*/

//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

let myArray = ["Element1","Element2","Element3"];

function myFirstElement(userArray)
{
    console.log(userArray[0]);
}

myFirstElement(myArray);

//3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
let myArray = ["Element1","Element2","Element3"];

function myElements(userArray)
{
    userArray.forEach(element => {
        console.log(element);
    });   
}

myElements(myArray);

//4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
let myObject = 
{
    nombre : "David",
    apellido  : "Vega",
    nombrePlatzi  : "jdvega21"
};

function objectAtributes(userObject)
{
    console.log(userObject.nombre);
    console.log(userObject.apellido);
    console.log(userObject.nombrePlatzi);  
}

objectAtributes(myObject);

//Solución profe transformandolo a array
function objectAtributes2(myObject)
{
    const arr = Object.values(myObject);
    arr.forEach(element => {
        console.log(element);
    });   
}

objectAtributes2(myObject);
