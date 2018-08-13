//a) Declara tu nombre y muéstralo por consola:
var name = 'Gianluca';
console.log(name); //Mark
//b) Declara tu edad y muéstralo por consola:
var age = 45;
console.log(age); //38
//c) Declara tu nombre, tu apellido y tu edad en un array en diferentes posiciones y muéstrala por consola:
var info = ['Gianluca', 'Bragaglia', 45];
console.log(info); //['Mark', 'Zuckerberg', 21]
//d) Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:
var data = {
    name: 'Gianluca',
    age: 45
}
console.log(data); //{ name: 'Mark', age: 21}
//e) Ahora utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.
for(i=0; i<info.length; i++) {
    console.log(info[i]);
    
}
 //'Mark'
 //'Zuckerberg'
 //21
//f) Crea una estructura condicional que imprima el número mayor entre dos números.


var a = 25;
var b = 12;
if( a < b) {
    console.log(b);
    
}else{
    console.log(a);
    
}

//25
//f1) Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales:
var a = 23;
var b = 23;
if( a < b) {
    console.log(b);

}else if(a===b) {
    console.log('the number are equals');
    
}else{
    console.log(a);
    
}
//var a = 25;
//var b = 12;
//else if(...)
// The numbers are equal
//g) Recorre un array de 5 números y cuando llegues a la mitad muestra el siguiente mensaje: 'We are in the middle of loop'.
var numbers = [34, 55, 3, 67, 22];
for(i=0; i<numbers.length; i++){
    if(i===2)
    {console.log("We are in the middle of loop");}
    console.log(numbers[i]);
    
}
//}
//g1) Declara tu nombre y tu edad en dos variables y crea un condicional para, en caso de no coincidir con tus datos, mostrar un error.

var myName = 'Gianluca';
var myAge = 45;
if(myName != 'Gianluca' || myAge != 45 ){
    console.log("this is not you!");
    
}else{
    console.log("Hi!! Glad to see u again!");
    
}
//h) Declara tu nombre y DNI en dos variables y crea un condicional para, en caso de que coincida uno de los dos datos, muestre un mensaje.
var myName = 'Gianluca';
var myId = 4565;
if(myName != 'Gianluca' || myId != 4565 ){
    console.log("Try again.");
    
}else{
    console.log("Permission granted");
    
}

//i) Crea un array, introduce los datos anteriores y unos cuantos más de forma que al recorrer el array muestre un mensaje cuando encuentre tus datos.

var datos = ['Gino', 78, 67, 'Tony', 45, 'Gianluca'];
for(i=0; i<datos.length; i++) {
    if(datos[i] === 'Gianluca' || datos[i] === 45) {
        console.log('We find your data ' + datos[i]);
        
    }
}

//j) Crea un array de strings y recorre cada una de esos valores. Imprime cada caracter en una línea distinta.

var arr = ["hello","world","Skylab"];
  for (var i = 0; i<arr.length;i++) {
    for (var j = 0; j<arr[i].length; j++) {
       console.log(arr[i][j]);
    }
}