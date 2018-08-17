function calculatorPro() {
    var arr; 
    
    sumF = function() {
      
              return arr.reduce(function(a,b){return (a+b)}); //suma los numeros de un array
    }
      
    restF = function() {
  
      return arr.reduce(function(a,b){return (a-b).toFixed(3)});
  
    }    
  
    multiF = function() {
  
      return arr.reduce(function(a,b){return (a*b).toFixed(3)});
    }
  
    divF = function() {
  
      return arr.reduce(function(a,b){return (a/b).toFixed(3)});
    }
    
    function start() {
      var numArr = prompt('Introducir los numeros separados por coma: \npor exemplo 34,65,4,12  ....');
      
      arr = numArr.split(',').map(Number); //crea array desde prompt
              for(var j=0; j<arr.length; j++) {
                  if (isNaN(arr[j]) === true || arr[j] == undefined || arr[j] == 0) {
                      alert('tienes que introducir numeros');
                      start();
                  }
              }
    }
    
    start();
    
    function startCalc() {
              
              if (arr.length == 1) {
                  console.log('La raiz cuandrada del numero introducico es ' + Math.sqrt(arr[0]).toFixed(3));
      
              } else {
                  console.log('La suma de los numeros introducidos es ' + sumF() + ', la resta es ' + restF() + ' la multiplicación es ' + multiF() + ' la división es ' + divF());
              }
            setTimeout(choiceF, 3000)
            function choiceF() {
              var choice = prompt('quieres hacer otras operaciones?  y/n');
              var choiceM = choice.toUpperCase();
  
              switch (choiceM) {
                case 'Y':
                  calculatorPro();
                  break;
                case 'N':
                  console.log('Bye bye!');
                  break;
              }
            }
              
          }
      
          startCalc();
    
  }
  
  calculatorPro()