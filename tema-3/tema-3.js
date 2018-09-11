//a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};

function listProp() {
    console.log(Object.getOwnPropertyNames(avenger).join(',') );
    
    
}
listProp();
//name, class, id
//b) Ahora, crea una función que liste solo los valores de las propiedades.

function listValProp() {
    console.log(avenger.name + ', ' + avenger.class + ', ' + avenger.id);
    
}
listValProp();
//console.log(somethingThatShowsThings) //Tony, VII, 01
//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.
avenger.class = 'XI';
console.log(avenger) //new class = XI
//d) Ahora, elimina la propiedad ID y asegura los cambios.
delete avenger.id;
console.log(avenger);


//console.log(property.ThisProperty) //Not exist :(
//e) Añade una nueva propiedad, por ejemplo city y dale un valor, asegura los cambios solo imprimiendo esa nueva propiedad.
avenger.city = 'New York';
console.log(avenger.city) // City => New York City

//f) Lista el numero de propiedades que contiene el objeto.
console.log(Object.keys(avenger).length);

//console.log() // There are 4 info fields

//g) Cambia la propiedad name por fullName.
avenger.fullName = avenger.name;
delete avenger.name;
console.log(avenger);


//g1) Asegura los cambios.

//console.log(fullName) // Tony Stark
//h) Lista todas las propiedades del objeto a través de un console.log()

//console.log(...) // "Hi there, I'm Tony Stark..."
//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...

//h2) Asegura los cambios volviendo a listar los valores del objeto

//console.log(location) // NYC
//i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)

//http://www.w3schools.com/js/js_object_definition.asp

//Example:

function Avenger(fullName, classRoom, city, job, studies, markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
    this.listProperties =  function() {
        console.log(this.fullName + ', ' + this.classRoom + ', ' + this.city + ', ' + this.job + ', ' + this.studies + ', ' + this.markAv);
        
    }
}
var tonyStark = new Avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
console.log(tonyStark)
//j) Crea otro objeto y imprime sus propiedades por pantalla.

var otherAvenger = new Avenger("Tony Joll", "I", "BCN", "Pilot", "SkyLab", 9)
console.log(otherAvenger) // Hulk...
//k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia.
 otherAvenger.listProperties();


//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados
function listName() {
    console.log(tonyStark.fullName + ', ' + otherAvenger.fullName);
    
}
listName(); // Tony Stark, Hulk, Thor...

//m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.
tios = [
    {name: 'Primo', city: 'BCN', id: 01, markAv: 10},
    {name: 'Secondo', city: 'NYC', id: 02, markAv: 13},
    {name: 'Quarto', city: 'NYC', id: 03, markAv: 8},
    {name: 'Terzo', city: 'Bologna', id: 04, markAv: 12},
    {name: 'Quinto', city: 'NYC', id: 05, markAv: 6},
    {name: 'Sesto', city: 'NYC', id: 06, markAv: 11}
    
]

function myFunction() {
    var numTios = 0;
    var tiosNyc = [];
    tios.forEach(function(obj){
        if(obj.city === 'NYC') {
            tiosNyc.push(obj.name);
            numTios++;    
        }
    });
    return 'Are ' + numTios + ' tios living in NYC: ' + tiosNyc.join(', ');

}
console.log(myFunction());

 // Are 3 avengers living in NYC: Tony, Hulk, Hawkeye
/*Pista: Intenta tener a todos los objetos dentro de una array, al tener todos los datos juntos, podrás filtrarlos y mostrarlos...

Filter
forEach*/

//n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.
var gianluca = new Avenger ("Gianluca", "XII", "BCN", "Developer", "MIT", 30);
function fun() {
    var acc = [];
    tios.forEach(function(obj) {
        
        acc.push(obj.markAv);
    })
    var totAcc = 0;
    for(item in acc) {
        totAcc += acc[item]
    }
    return totAcc / acc.length;
    
}
console.log(fun());



//ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.

function myFunction1() {
    var parejas = tios.map(function(tio) {
        
        return tio.city;
        
    })

    return parejas

}

console.log(myFunction1()) 
// HawkEye vs Tony => Tony is better! \n Thor vs Hulk => Hulk is better! \n Vision vs Captain America => Vision is better
/*
ñ1) Intenta crear las parejas de forma aleatoria.

a) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.

function GenerateRandom(){
    ...
    return randomNumber.
}

function father(){
    var numR = GenerateRandom()
    return ...numR()...
}
b) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.

function father(){
    myFunction();
    myOtherFunction();
    myOtherVarFunction();
    return...
}
c) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los resultados de esta array como siempre.

d) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.

e) Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, mostrando un mensaje indicando cual es mayor. El nombre pasado por parámetro también deberá ser random entre una array de nombres, con lo cual, también deberás refactorizar las funciones hijas.

function grandFather(){
    var names = ['hulk', 'ironMan', '...']
    var selectedName...
    var selectedName2...
    if(father(selectedName) > father(selectedName2))
        ...
    else
        ...
    return father(selectedName).push().join()...
}
e) En lugar de retornar los valores como una array, prepara tus funciones para que devuelvan los resultados como OBJECTS. Muestra por pantalla los objetos sin estilizar el output.

f) Muestra los resultados de los OBJECTS recorriéndolos y mostrando los valores de una forma amigable.

g) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.

myName() + (myAge() + myRandomNumber).toString()//output: IronMan 45
h) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50

return x + y // output: IronMan 3...Sure you're Tony Stark?
*/