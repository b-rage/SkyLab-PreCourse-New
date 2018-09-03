//a) Puedes contar cuantas letras tiene tu nombre?
var myName = 'Gianluca';
console.log(myName.length) // My Name has 8 letters 

//b) Añade tu apellido e indica en que posición del string empieza (prueba a buscar el espacio entre el nombre y el apellido):

var myName = 'Gianluca Bragaglia';
var myString = myName.search(' ');

console.log(myString + 1)// Your last name starts on position 5

//c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre (lo que haya antes del espacio):
var myString1 = myName.split(' ');
console.log(myString1[0]) // My Name is Tony 
//d) Ahora, solo tu apellido.

console.log(myString1[1]) // My lastname is Stark
//d1) Iguala el resultado a una variable nueva e imprímela por pantalla.

console.log(myName +", " + myString1[1]) // Tony Stark, Stark
//e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.
myNewString = 'Hello,  Mr ' + myString1[1];
console.log(myNewString) // Hello, Mr. Stark 
//f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.
mySelection = myString1[1].toLocaleUpperCase();
console.log(mySelection) // my lastname is STARK
//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.

var something = mySelection + " is awesome"
console.log(something) // "Tony is awesome"
//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
var myFirstLastnameLetters = myName[0] + '.' + myName[9] ;
console.log(myFirstLastnameLetters) // S.Y
//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"
var myNameArr = ['G', 'I', 'A', 'N', 'L', 'U', 'C', 'A', 'B', 'R', 'A', 'G', 'A', 'G', 'L', 'I', 'A'];
console.log(myNameArr.join('/')) // T/O/N/Y/S/T/A/R/K
//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"
myName = myNameArr.slice(8);
console.log(myName.join('|')) // S|T|A|R|K
//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)

//console.log(myName) // 1º T, 2º O, 3º N, 4º Y
//d)Como en el ejercicio anterior, pero seleccionando tu apellido

//console.log(myLastName) // 5º S, 6º T, 7º A, 8º R, 9º K
//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings

//console.log(myInitials) // T.S
//f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.

//console.log(mySelector) // My name is TONY and i'm 40 years old
//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

//console.log(myCityAdd) // City added to array! => Tony, Stark, 40, New York
//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

//myCityAdd() // City added to array! => Tony, Stark, 40, New York
//myCityDelete() // City deleted! => Tony, Stark, 40
//j) Ahora, elimina el nombre y asegura los cambios Resources: https://www.w3schools.com/jsref/jsref_shift.asp

//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?

//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

//numbers = [...]
//var multByTwo = numbers.map(...)
//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.

//var num = 3; // cada número se multiplicará por 3
//function multByNum(num){
    //var arrayMult = numbers.map(...)
    //return arrayMult
//}
//m) Podrías mostrarlos en el orden inverso? Resources: https://www.w3schools.com/jsref/jsref_sort.asp

//n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

//console.log(repeatLetters) // Tony Stark, the letter 'T' => 2 times.
//n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras

//console.log(repeatLetters) // Tony Stark, the letters => o, n, y, s, a, r, k are not repeated, the name is => Ony Sark
//a) Que hora es? Declara la hora como número y devuelvela como String

//console.log(myString + myNumberStringify) // I'ts 10.45 of morning
//b) Nono, que hora exactamente? Dime la hora sin minutos!

//console.log(myString) // It's around 10 of morning
//c) Ahora, declara tu hora y muéstrala redondeada.

//console.log(...(10.34)) // 11!
//d) Hagamos una calculadora. Primero, la suma. Crea variables con valores distintos y súmalos.

//console.log(sum) //The sum of 7+3 is 10
//d1) Añade la resta...

//console.log(sum + rest) // The sum and rest of 7 and 3 is 10 and 4 
//d2) La multiplicación...

//console.log(sum + rest + mult) // 10, 4 and 21
//d3) Y, por ultimo, la división.

//console.log(sum + rest + mult + div) // 10, 4, 21 and 2.3
//d4) Ahora, intenta multiplicar un número por una string, que devuelve?

//console.log(10*"hour") // ....?!
//e) Podemos controlar este error con un condicional if?

//console.log(10*"hour") // You can't do this operation!