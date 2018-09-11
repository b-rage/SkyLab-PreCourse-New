/*

Realiza un programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse. Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre), para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número, si coincide con alguno de los existentes en el cartón, cambiará por una "X" o un 0. El cartón se mostrará, al final de cada turno, con los cambios efectuados, indicándole al usuario qué número se ha encontrado. El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, seguirá el mismo patrón que hasta el momento.

Por supuesto, cuando todos los números de una misma linea estén en "X", mostrará un mensaje "LINEA!", pero la ejecución seguirá, el juego solo acabará cuando todos los números estén a "X".

Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. Por último, deberá preguntar si desea volver a jugar.

Empieza por la versión más básica!
Why?:
Comenzar por una versión muy pequeña y básica nos hará tener un programa de principio a fin, es decir, que empieza, que acaba y haga lo que queramos a muy pequeña escala, una vez lo tengamos todo bien dividido podremos empezar a extenderlo tanto como queramos.

Si funciona con 5 números deberá funcionar con 15, no? 

Requisitos de la versión mínima:
Cartón con solo 5 números, sin necesidad de ser generados random. Solo necesitamos un número random cuando recorramos el cartón y veamos si hay alguna coincidencia. No necesitamos asegurarnos que el número random de cada turno no haya salido en turnos anteriores, recuerda que estamos en la mínima versión posible, eso ya lo solucionaremos. Si hay coincidencia, remplazaremos el número por una 'x' y mostramos el cartón modificado

Sepáralo todo en funciones, englobado en una funcion global llamada bingo(), tal que:

-Function! => Generar Numero Random Bombo

-Function! => Nuevo turno (Match carton[i] === randomNum)

-Function! => Preguntar Nuevo Turno

WorkFlow:


Pro 

Cuando se muestre la carta, se preguntará al usuario si realmente quiere ese cartón o generar otro, si realmente quiere ese cartón, deberá responder "yes" para proceder
Establece un sistema de puntos, en cuantos más turnos se complete el cartón, menos puntos (el sistema de puntos intégralo como quieras), por el contrario, a menos turnos, más puntos.
Antes de empezar el juego, muestra el sistema de puntos al usuario.
Ranking de usuarios (ordenado por puntos).
var bingoCard = [
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    //next line
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false }
];
*/

function bingo() {
    var arrPlayers = [];
    var playerName;
    var scoreP;

    function newGame() {
        playerName = prompt('Escribe tu nombre');
        scoreP = 100;
        var card15 = [];
        var card510 = [];
        var card1015 = [];
        var arrN = [];
        var countA;
        var countB;
        var countC;
        console.log('Tienes 100 puntos');
        


        function card() {
            var arr = [] 
            while(arr.length < 15){
            var randomnumber=Math.ceil(Math.random()*100)
            if(arr.indexOf(randomnumber) === -1 && randomnumber <= 90){arr.push(randomnumber)}  
            }
            card15 = arr.slice(0,5);
            card510 = arr.slice(5,10);
            card1015 = arr.slice(10,15);
            console.log(card15);
            console.log(card510);
            console.log(card1015);
            newCard();       
        }
        card();

        function randomArr() { 
            while(arrN.length < 90){
            var randomnumber=Math.ceil(Math.random()*100)
            if(arrN.indexOf(randomnumber) === -1 && randomnumber <= 90){arrN.push(randomnumber)}  
            }
            
        }
        randomArr();

        function newTurn() {
            var c = confirm('Nuevo numero?');
            if(c == true) {
                randomN();
                displayCards();
            }
        }
        newTurn();

        function randomN() {
            
            arrN.shift();
            scoreP--;
            console.log('tienes ' + scoreP + ' puntos');   
               
        }

        function displayCards() {
            var line = ['X','X','X','X','X'];
            console.log(arrN[0]);
            
            
            for(var i=0; i<card15.length; i++) {
                if(arrN[0] == card15[i]) {
                    card15[i] = 'X';
                    console.log('Se ha encontrado el numero ' + arrN[0]);
                }
            }
            for(var j=0;j<card510.length; j++) {
                if(arrN[0] == card510[j]) {
                    card510[j] = 'X';
                    console.log('Se ha encontrado el numero ' + arrN[0]);
                }
            }

            for(var k=0; k<card1015.length; k++) {
                if(arrN[0] == card1015[k]) {
                    card1015[k] = 'X';
                    console.log('Se ha encontrado el numero ' + arrN[0]);
                }
            }

            console.log(card15);
            console.log(card510);
            console.log(card1015);


            function areArrsMatch(arr1, arr2){
                return arr1.sort().toString() === arr2.sort().toString()
            }

            if(areArrsMatch(line, card15) && countA !== 0) {
                if( countB == 0 && countC == 0) {
                    countA = 0;
                    console.log('BINGOOOOO');
                    results();
                    
                }else{
                    countA = 0;
                    console.log('LINEA!!!');
                }
                
            }

            if(areArrsMatch(line, card510) && countB !== 0) {
                
                if( countA == 0 && countC == 0) {
                    countB = 0;
                    console.log('BINGOOOOO');
                    results();
                }else{
                    countB = 0;
                    console.log('LINEA!!!');
                }
                
            }

            if(areArrsMatch(line, card1015) && countC !== 0) {
                
                if( countB == 0 && countA == 0) {
                    countC = 0;
                    console.log('BINGOOOOO');
                    results();
                }else{
                    countC = 0;
                    console.log('LINEA!!!');
                }
            }

            if(countA != 0 || countB != 0 || countC != 0)  {
                
                console.log('viene del if ' + countA + countB + countC);
                newTurn();
                
            }

            
        }
         

        function newCard() {
            var askNewCard = prompt('Quieres otro carton? Yes/No');
            switch (askNewCard) {
                case 'Yes':
                    card();
                    break;
                case 'No':
                    break;
                default:
                    break;
            }
        }

        function sort_by(field, reverse, primer){     //sort array object by

            var key = primer ? 
                function(x) {return primer(x[field])} : 
                function(x) {return x[field]};
            
            reverse = !reverse ? 1 : -1;
            
            return function (a, b) {
                return a = key(a), b = key(b), reverse * ((a < b) - (b < a));
                } 
        }
        
        
        
        
        function results() {
            
            arrPlayers.push({name: playerName, puntos: scoreP } );
            var arrPlayersSort = arrPlayers.sort(sort_by('puntos', true, parseInt));  // Sort by price high to low
            var revArrPlayersSort = arrPlayersSort.reverse();
            console.log('Clasificacion: ');
            revArrPlayersSort.forEach(function(obj) {
            console.log(obj.name + ' => ' + obj.puntos + ' puntos');
                
            })
        }

        askNewGame();
    }
    newGame();

    function askNewGame() {
        var askNewP = confirm('Nuevo bingo?');
        if(askNewP) {
            newGame();
        }else{
            console.log('Adios');
            
        }
    }
    
    
        
    
}
bingo();