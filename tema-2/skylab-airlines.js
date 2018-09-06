/* 

Skylab Airlines! 
(Los datos de los vuelos están al final del enunciado, podéis usarlos en vuestro código)

Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de manera global, cuando se llame a la función:

Se preguntará por el nombre de usuario y dará la bienvenida.
El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
A continuación, el usuario verá el coste medio de los vuelos.
También podrá ver cuantos vuelos efectúan escalas.
Sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.


PRO!:

Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER, dependiendo de la elección, el programa se comportará de la siguiente manera:

Si eres ADMIN, la función debería permitir:

Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
Poder eliminar vuelos mediante el ID.
Si eres USER la función debería permitir:

Buscar por precio (más alto, más bajo o igual), el usuario debería mostrar los datos de los vuelos encontrados y, indicando el ID, el programa responderá: "Gracias por su compra, vuelva pronto."


*/

var flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];


function terminal() {
    var name = prompt('Escribe tu nombre');
    console.log('Bienvenido ' + name);

    //listado vuelos:
    flights.forEach(function(fly) {
        if(fly.scale === true) {
           console.log('El vuelo con origen: ' + fly.from + ', y destino: ' + fly.to + ' tiene un coste de ' + fly.cost + '€ y realiza escalo'); 
        }else{
            console.log('El vuelo con origen: ' + fly.from + ', y destino: ' + fly.to + ' tiene un coste de ' + fly.cost + '€ y no realiza ningun escalo');
        }
        
        
        
    })

    //listado ultimos 5 vuelos:
    console.log('Los ultimos 5 vuelos tiene destino: ');
    
    flights.forEach(function(fly){
        if(fly.id > 05) {
            console.log(fly.to);
            
        }
    })

    //coste medio:    
    average = flights.reduce(function(a, b) {
        return a + b.cost;
      }, 0) / flights.length;
    
    console.log('El coste medio de un vuelo es: ' + average.toFixed(0) + '€');


    //cuantos vuelos con escalo:
    var countScale = 0;
    flights.forEach(function(fly){
        if(fly.scale === true) {
            countScale++;
        }
    }) 

    console.log('Los vuelos que realizan escalos son: ' + countScale);
    
    

    function admin() {

        if(flights.length < 15) {
            var addVuelos = prompt('Quieres añadir vuelos? s/n');
            switch (addVuelos) {
                case 's':
                    addFlight();
                    break;
                case 'n':
                    break;
                default:
                    break;
            }
        }else{
            console.log('No puedes añadir mas vuelos');
            
        }


        var delVuelos = prompt('Quieres eliminar vuelos? s/n');
        switch (delVuelos) {
            case 's':
                DeleteFlight();
                break;
            case 'n':
                break;
            default:
                break;
        }

        function DeleteFlight() {
            var askDelVuelos = prompt('Escribe el ID del vuelo que quieres cancelar');
            flights.splice(askDelVuelos,1);
            console.log(flights);
            
        }

        function addFlight() {
            
            var origen = prompt('Escribe el origen del vuelo');
            var destino = prompt('Escribe el destino del vuelo');
            var coste = prompt('Escribe el coste del vuelo');
            var escalo = prompt('El vuelo tiene escalo? s/n');
            var costeN = parseInt(coste);
            if(escalo === 's') {
                escalo = true
            }else if(escalo === 'n') {
                escalo = false
            }
            flights.push({id:flights.length, to:origen, from:destino, cost:costeN, scale:escalo});
            console.log(flights);
            
            
        }
        
        
        
    }

    function user() {
        flights.sort(function(a, b) {           // de mas bajo a mas alto
            return parseFloat(a.cost) - parseFloat(b.cost);
        });
        console.log(flights);
        flights.reverse();  // de mas alto a mas bajo
        console.log(flights);
        
        
        
    }

    var admUse = prompt('Eres ADMIN o USER?');
    switch (admUse) {
        case 'ADMIN':
            admin();
            break;
        case 'USER':
            user();
            break;
        default:
            break;
    }

    
}

terminal();