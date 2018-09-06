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
var myName1 = myNameArr.slice(0,8);
for(var i=0; i<myName1.length; i++) {
    console.log(i+1 + 'º' + myName1[i]);
    
}

//d)Como en el ejercicio anterior, pero seleccionando tu apellido

var myLastName = myNameArr.slice(8);
for(var i=0; i<myLastName.length; i++) {
    console.log(i+9 + 'º' + myLastName[i]);
    
}

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings

console.log(myNameArr[0] + '.' + myNameArr[8]) // T.S

//f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.

var myArr = ['Gianluca', 'Bragaglia', 46];

console.log('My name is ' + myArr[0] + ' and I\'m ' + myArr[2] + ' years old.' ) // My name is TONY and im 40 years old

//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

function myCityAdd() {
    return myArr.push('Barcelona');
}
myCityAdd();
console.log(myArr) // City added to array! => Tony, Stark, 40, New York
//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.
function myCityDelete() {
    return myArr.pop(3);
}
myCityDelete();
console.log(myArr)
//myCityAdd() // City added to array! => Tony, Stark, 40, New York
//myCityDelete() // City deleted! => Tony, Stark, 40
//j) Ahora, elimina el nombre y asegura los cambios Resources: https://www.w3schools.com/jsref/jsref_shift.asp
myArr.shift();
console.log(myArr);

//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?
myArr.unshift('Gianluca');
console.log(myArr);

//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var multByTwo = numbers.map(x => x * 2);
console.log(multByTwo );

//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.

var num = 3; // cada número se multiplicará por 3
var arrayMult;
function multByNum(num){
    arrayMult = numbers.map(x => x * num);
    return arrayMult;
}
console.log(multByNum(3));

//m) Podrías mostrarlos en el orden inverso? Resources: https://www.w3schools.com/jsref/jsref_sort.asp
arrayMult.reverse();
console.log(arrayMult);

//n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

var str = 'Gianluca Bragaglia';
var letr = [];
for (var i = 0; i < str.length; i++) {
    if(str[i] !== ' '){
    letr.push(str[i].toUpperCase());  // array with letters of str uppercase
    }
}

console.log(letr);


function count() {
    array_elements = letr;

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                if(cnt > 1) {
                console.log('the letter ' + current + ' => ' + cnt + ' times');
                }
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        if(cnt > 1) {
            console.log('the letter ' + current + ' => ' + cnt + ' times');
        }
    }

}
count();
//console.log(str + ", the letter ' " + results[0] + " ' => " + (results.length +1) + " times");
// Tony Stark, the letter 'T' => 2 times.
//console.log(repeatLetters) // Tony Stark, the letter 'T' => 2 times.

//n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras

var str2 = 'Gianluca Bragaglia';
var letr2 = [];
for (var i = 0; i < str2.length; i++) {
    if(str2[i] != ' '){
    letr2.push(str2[i].toUpperCase());  // array with letters of str uppercase
    }
}

console.log(letr2);
var letr3 = [];
for(var j=0;  j<letr2.length; j++) {
    if(letr2[j] != 'A' && letr2[j] != 'G' && letr2[j] != 'I' && letr2[j] != 'L') {
        letr3.push(letr2[j]);
    }
}

var repeatLetters = str2 + ', The letters => ' + letr3.join(',') + ' are not repeated, the name is => ' + letr3.join('');

console.log(repeatLetters);



//console.log(repeatLetters) // Tony Stark, the letters => o, n, y, s, a, r, k are not repeated, the name is => Ony Sark
//a) Que hora es? Declara la hora como número y devuelvela como String
var fecha = new Date;
console.log(fecha);

//console.log(myString + myNumberStringify) // I'ts 10.45 of morning
//b) Nono, que hora exactamente? Dime la hora sin minutos!
console.log(fecha.getHours() + '.' + fecha.getMinutes());

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