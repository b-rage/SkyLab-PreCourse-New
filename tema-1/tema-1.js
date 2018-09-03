//a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.

function myF(myName){

    console.log('hello ' + myName)
}

myF('Gianluca');



//b) Intenta retornar los valores en lugar de usar console.log


function myF2(myName){

    return 'hello ' + myName;
}

console.log(myF2('Gianluca'));


// c) Ahora, añade tu edad y concaténala al return



function myF2(myName, myAge){

    return 'hello ' + myName + " you're " + myAge + " years old."
}

console.log(myF2('Gianluca', 45));


// d) Iguala tu función a una variable y ejecútala


var myF = function (myName, myAge){

    return 'hello ' + myName + " you're " + myAge + " years old."
}

console.log(myF('Gianluca', 45));


// e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados 

function myNameF() {
  
  return 'Gianluca';
}


function myAgeF(age) {
  
  return 45;
}

console.log(myNameF() + myAgeF());




//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.


function myNameF(name) {
  
  return name;
}


function myAgeF(age) {
  
  return age;
}

console.log(myNameF('Gianluca ') + myAgeF(45));


// g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas



function myNameF() {
  
  return 'Gianluca';
}


function myAgeF(age) {
  
  return 45;
}

function all(){
    var x = myNameF()
    var y = myAgeF()
    return x + y
}


// h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()



function myNameF() {
  
  return 'Gianluca ';
}


function myAgeF(age) {
  
  return Math.random();
}

function all(){
    var x = myNameF()
    var y = myAgeF()
    return x + y
}

console.log(all());

//i) Al return de la función name(), concaténale otro mensaje


function myNameF() {
  
  return 'Tony Stark...aka Gianluca ';
}


function myAgeF(age) {
  
  return Math.random();
}

function all(){
    var x = myNameF()
    var y = myAgeF()
    return x + y + "...Sure you're Tony Stark?"
}

console.log(all());