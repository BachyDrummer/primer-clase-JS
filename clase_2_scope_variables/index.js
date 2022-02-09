//Global
var hola = 'soy global';

//Scope en funciones

function fn () {
    // Hola soy Scope de fn
    var soyFn = 'soy Fn';
    console.log (soyFn);
    
}

//Scope Bloque - For - If/Else - Switch
{
var soyBloque = "hola soy bloque";
console.log(hola);
}

console.log(hola);
fn ();
console.log(soyBloque);

const MI_TEXT = 'texto';
console.log(MI_TEXT);   

//METODOS TRANQUIS, PERO IMPORTANTES!!

let miString1 = 'Hola soy un String 123123456879SJHGDGIUFGJKBFIOH124589N'
let miString2 = 'STRING 2'
let miString3 = 'Hola soy un String mas largo'
let miString4 = '       Hola soy un String'

console.log('\n')
console.log('=====STRING=====');
console.log(miString1.length);
console.log(miString1[miString1.length - 1]);
console.log(miString2.toLowerCase());
console.log(miString3.toUpperCase());
console.log(miString4.trim()),

console.log('\n')

//METODOS TRANQUIS, PERO IMPORTANTES!!

console.log(miString1.indexOf('H'));
//console.log(miString1.indexOf());
//console.log(miString2.indexOf());
//console.log(miString3.indexOf());
//console.log(miString4.indexOf());

//SLICE: este nos devuelve un pedacito del string desde los indices que le pasamos como parametro

let texto3 = 'Baere asdghfvsyjhgdfiugbjkbTRYAUTYUTUAVV456cjbikjdguibdjbjbchgdyg';
let token = texto3.slice(6);
console.log(token);

let texto4 = 'Hola soy un string';
console.log(texto4.slice(5,8));

//SPLIT: Nos devuelve un Array separado por la condicion que le pasemos

let tokenV2 = texto3.split(' ');
console.log(tokenV2[1]);

let fakeCSV = '120, M, ROJO, reme Adidas';
let textoToArray = fakeCSV.split(',');
console.log(textoToArray);

//REPLACE
let miTexto = 'Mi Textoa';
let tuTexto = miTexto.replace('Mi', 'Tu');
console.log(tuTexto);



console.log(miTexto.charAt(0));
console.log("A".charCodeAt());

for (let i = 0; i < miTexto.length; i++) {
    console.log(miTexto[i]);
}

let cadena1 = 'Oh ';
let cadena2 = 'que maravillosa ';
let cadena3 = "mañana'.";
let cadena4 = cadena1.concat (cadena2, cadena3);   //Devuelve Oh, que hmaravillosa manaña

console.log(cadena4);
console.log('\n')

//TEMPLATE STRING

let nombreTexto = 'Nicolás';
let apellidoTexto = 'Segovia';
let nombreCompleto =  `${nombreTexto} ${apellidoTexto}
buenisimo
vamo arriba..
vamo que vamo!!!
`;


console.log(nombreCompleto);

//NUMBER
//10 -> NUMBER
//12.48951259 -> NUMBER
//CLASE MATH

console.log('\n')
console.log('=====STRING=====');

console.log(Math.PI);
console.log(Math.round(3.66));
console.log(Math.round(3.35));
console.log(Math.ceil(3.1));
console.log(Math.floor(3.99));
console.log(Math.abs(-5));
console.log(Math.pow(5,2));

//NUMEROS RANDOM

  let myrand = Math.random ();
  console.log ([myrand] + myrand);

//   let paso1 = Math.random(); //0.7290461716320540
//   let paso2 = paso1 * 10 ; //7.290461716320540
//   let paso3 = Math.floor (paso2);
//   let paso4 = paso3 + 1 ;
//   console.log('[random]' + paso4)


for (let index = 0; index < 50; index++); {
    let randNum = Math.floor (Math.random() * 100) + 1;
    console.log('[random]:' , randNum);     
}

console.log('4' + 1);

let numText = '5';
let numText2 = '5.212151';

let numInt = parseInt (numText);
let numFloat = parseFloat (numText2);

console.log(numText, numInt);
console.log(numText2, numFloat);

console.log(typeof numText, typeof numInt);
console.log(typeof numText2, typeof numFloat);


console.log('\n')
console.log('=====ARRAYS=====');

let miArray = new Array (1,5,10,'hola', false, true, [], {}, function(){});
console.log(miArray);

let miArray2 = [1,5,10,'hola', false, true, [], {}, function(){}];
console.log(miArray2);

console.log('\n')


console.log('=====CHAT ARRAYS===== \n')

let arrayChat = [ 
    ['Holaaa!!!', '10:34', 'Victor'],
    ['Holaaa!,como va??', '10:35', 'Carlos'],
];
// console.log(`Usuario: ${arrayChat[0][2]} - ${arrayChat[0][1]} 
// - ${arrayChat[0][0]}`);
// console.log(`Usuario: ${arrayChat[1][2]} - ${arrayChat[1][1]} 
// - ${arrayChat[1][0]}`);

console.log('\n')

arrayChat.push(['Todo bien! Acá aprediendo JS en Nucba ', '10:45', 'Victor']);
arrayChat.push(['Yo tambien, Aguante los ARRAYS', '10:51', 'Carlos']);

arrayChat.pop();



arrayChat.unshift(['Yo tambien, Aguante los ARRAYS', '10:51', 'Carlos']);

//console.log(arrayChat);

// console.log(`Usuario: ${arrayChat[0][2]} - ${arrayChat[0][1]}
//     - ${arrayChat[0][0]}`);

// console.log(`Usuario: ${arrayChat[1][2]} - ${arrayChat[1][1]}
//     - ${arrayChat[1][0]}`);

// console.log(`Usuario: ${arrayChat[2][2]} - ${arrayChat[2][1]}
//     - ${arrayChat[2][0]}`);

// console.log(`Usuario: ${arrayChat[3][2]} - ${arrayChat[3][1]}
//     - ${arrayChat[3][0]}`);

    arrayChat.shift()
    arrayChat.push(['Yo tambien, Aguante los ARRAYS', '10:51', 'Carlos']);
    
    
    arrayChat = [ 
    [ 'Holaaa!!!', '10:34', 'Victor' ],
    [ 'Holaaa!,como va??', '10:35', 'Carlos' ],
    [ 'Todo bien! Acá aprediendo JS en Nucba ', '10:45', 'Victor' ],
    [ 'Yo tambien, Aguante los ARRAYS', '10:51', 'Carlos' ]
]

// for (let index = 0; index < arrayChat.length; index++) {
//     console.log('[index]:', index);
//     console.log('[FOR LOOP]:', arrayChat[index]);    
// }


     for (let msjChat of arrayChat){
   
        //  console.log('[FOR OFF]:', msjChat );

         console.log(`Usuario: ${msjChat[2]} - ${msjChat[1]}
     - ${msjChat[0]}`);
 }

 let arrayNum = [1,2,3,4,5,6,7,8,9,10];
 for (const num of arrayNum) {
     if(num % 2 === 0) {
        console.log('Es par: ', num);
     }      
 }
 console.log(arrayNum);

 const MI_CONST = '8,9,10,11,12';

 const MI_ARRAY = [1,2,3];
 MI_ARRAY.push(4);
 MI_ARRAY.push(5);


 console.log(MI_ARRAY);

