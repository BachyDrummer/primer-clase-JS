/*console.log (typeof 'Nucba');
console.log (typeof false);
console.log (typeof true);
console.log (typeof {edad: 35});
console.log (typeof [35]);
console.log (typeof function () {});
console.log (typeof null);
console.log (typeof undefinided);*/

/*var nombre = ('nucba');
var miOtroNombre;
miOtroNombre = ('nucba 2');
console.log (miOtroNombre);

var numero = 36;
var mitexto = 'asdjkhduohfjn1235';
var miBool = false;
var objeto = {name:'Bachy'};
var miArraySuperCheto = ['cheto', 'Maalll'];
var miFunction = Function ();*/

/*console.log (numero); 
console.log (mitexto); 
console.log (miBool); 
console.log (objeto); 
console.log (miArraySuperCheto); 
console.log (miFunction);*/ 



/*if (edad >= 18) {
    if(edad >30) {
        console.log ('Podes Votar, y sos un votante adulto');
        return
    }  
        console.log ('Podes Votar, y sos Joven');
     
}
else {
   console.log ('No podes votar, anda a dormir!!');
    }*/

    /*let miArray = ["Autorizado", "No Autorizado", "Pendiente"];

    switch (miArray [0]) {
        case 'Autorizado':
            console.log ('Podes Votar, y sos Joven');
            break;
            case 'No Autorizado':
            console.log ('Podes Votar, y sos Joven');
            break;
            case 'Pendiente':
            console.log ('Podes Votar, y sos Joven');
            break;
                
        default:
            console.log ('No podes votar, anda a dormir!!');
       }*/
       
/*var miOtrArray = [1,2,3,4,5,6,7,8,9,10];
console.log (miOtrArray[0]);
console.log (miOtrArray[1]);
console.log (miOtrArray[2]);
console.log (miOtrArray[3]);
console.log (miOtrArray[4]);
console.log (miOtrArray[5]);
console.log (miOtrArray[6]);
console.log (miOtrArray[7]);
console.log (miOtrArray[8]);
console.log (miOtrArray[9]);


var numerito = (10);
numerito ++;
console.log ( miOtrArray.length);

var miOtroArray2 = ['a', 'b','c','d','e','f','g','h','i','j'];
/* for (var index = 0; index < miOtroArray2.length; index ++ ){
    console.log ('vuelta ' + index + ' ' + 'Valor ' + miOtroArray2 [index] );
}*/

/*var contador = 0;
while (contador < miOtroArray2.length) {
    console.log ('Vuelta ' + contador + ' ' + 'Valor: ' + miOtroArray2 [contador] );
    contador++;
}*/


function diHola(nombre = '') {
    console.log ('Hola'  +  nombre );
}

diHola (' Bachy');
diHola (' Yeni');
diHola (' Delfi');

function multiplicarPorUnNumero (number) {
    var miNumeroRecordado = number;
    return function (segundoNumero){
        return miNumeroRecordado * segundoNumero;};
    }
var multiplicarPor2 = multiplicarPorUnNumero (2);
var multiplicarPor3 = multiplicarPorUnNumero (3);

console.log (multiplicarPor2(1));
console.log (multiplicarPor2(2));
console.log (multiplicarPor2(3));
console.log (multiplicarPor2(4));
console.log (multiplicarPor2(5));
console.log (multiplicarPor2(6));

console.log (multiplicarPor3(1));
console.log (multiplicarPor3(2));
console.log (multiplicarPor3(3));
console.log (multiplicarPor3(4));
console.log (multiplicarPor3(5));
console.log (multiplicarPor3(6));