//console.log('Hola clase, este es mi primer TypeScript');

// ------Variables con datos de tipo null

// "strictNullChecks": true,

// let a: null = null; //ok
// let b: undefined = null; //error
// let c: number = null; //error
// let d: void = null; //error

// // "strictNullChecks": false,

// let aa: null = null; //ok
// let bb: undefined = null; //ok
// let cc: number = null; //ok
// let dd: void = null; //ok

// // ------Variables con datos de tipo undefined

// // "strictNullChecks": true,

// let a: undefined = undefined; //ok
// let b: undefined = null; //ok
// let c: number = undefined; //ok
// let d: void = undefined; //ok

// // "strictNullChecks": false,

// let aa: undefined = undefined; //ok
// let bb: undefined = null; //error
// let cc: number = undefined; //error
// let dd: void = undefined; //error

// ------Variables con datos de tipo void

// "strictNullChecks": true,

// let a: void = undefined; //ok
// let b: void = null; //error
// let c: void = 3; //error
// let d: void = 'caracteres'; //error

// // "strictNullChecks": false,

// let aa: void = undefined; //ok
// let bb: void = null; //ok
// let cc: void = 3; //error
// let dd: void = 'undefined'; //error

// ------Variables con datos de tipo boolean


// let a: boolean = true; //ok
// let b: boolean = false; //ok
// let c: boolean = 3; //error
// let d: boolean = 'caracteres'; //error

// ------Variables con datos de tipo number


// let a: number = undefined; //error
// let b: number = null; //error
// let c: number = 3; //ok
// let d: number = 0b10011101; //Binary Ok
// let e: number = 0o436; //Octal Ok
// let f: number = 0xadf0b; //Hexadecimal Ok
// let g: number = 'Caracteres'; //error

// ------Variables con datos de tipo string

// "strictNullChecks": false,

// let a: string = undefined; //ok
// let b: string = null; //ok
// let c: string = 3; //error
// let d: string = 0b10011101; //error
// let e: string = 0o436; //error
// let f: string = 0xadf0b; //error
// let g: string = 'Caracteres'; //ok
// let h: string = "Caracteres";//ok
// let i: string = "";//ok

// g = 22 + "Esta es una variable concatenada de tipo number y string";
//document.write(g);


//  --------Array and Tuple
// let myArray: number[] = [1,2,3,4,5,6];
// let myArrays: string[] = ["1", "2", "3", "4"];
// let myArrayDat: any[] = [null, undefined, 10, ""];
// myArray = [10 , 2, 3];

// //Tuple

// let myTuple: [number, string, undefined] = [10, "", undefined];

// document.write(myArray.toString());

//document.write("No aparece");


//Suma, Resta, Multiplicación, División, Exponente.

// console.log(5+4*2); // 4 * 2 = 8 + 5 = 13

// console.log(4*3 ** 2);// 3 ** 2 = 9 * 4 = 36

// console.log(5 * (2+3));// 2 + 3 = 5 * 5 = 25
// console.log(5 + (10*2));// 10 * 2 = 20 + 5 = 25
// console.log((30 + 6) * 2);// 30 + 6 = 36 * 2 = 72
// console.log((2+5)*(9-6));// 7 * 3 = 21
// console.log(10+6-5)// 11

//Declaraciones de condicionales en typescript

//1 if the

// var MyVariable: number = 1000;
// if(MyVariable >= 1000) {
//     console.log("Estimado(a) usuario, usted cumple con el requisito para participar en un viaje a Europa");
// }

//2 if then else

// var saldoCuenta: number = 1000;

// if(saldoCuenta >= 1000) {
//     console.log("Estimado(a) usuario, usted cumple con el requisito para participar en un viaje a Europa");
// }else{
//     console.log("Estimado(a) usuario, usted no esta participando en un viaje a Europa");
// }

//3 if then else if else

// var saldoCuenta: number = 1000;

// if(saldoCuenta == 1000) {
//     console.log("Estimado(a) usuario, usted cumple con el requisito para participar en un viaje a Europa");
// }else if(saldoCuenta > 10000) {
//     console.log("Estimado(a) usuario, usted es un cliente oro y ya tiene los boletos ganados para ir a Europa");
// }else{
//     console.log("Estimado(a) usuario, usted no esta participando en un viaje a Europa");
// }

//4 Nested if the

// var nombre: string = "Jhon Kennedy";
// var edad: number = 19;
// var estatura: number = 1.75;

// if (nombre != ""){
//     if (edad > 18 ){
//         if(estatura > 1.75){
//             console.log("Felicidades, puedes ingresar al parque de diversiones");
//         }else{
//             console.log("Oh! No puedes ingresar porque no cumples con el requisito de estatura minima");
//         }
//     }else{
//         console.log("Oh no!, eres menor de edad y no puedes ingresar al parque, lo siento");
//     }
// }else{
//     console.log("Debes ingresar tu nombres, para ingresar al parque");
// }


//5 Switch

// var dia: number = 1;
// switch (dia) {
//     case 1:
//         console.log("Lunes")
//         break;
//     case 2:
//         console.log("Martes")
//         break;
//     case 3:
//         console.log("Miercoles")
//         break;
//     case 4:
//         console.log("Jueves")
//         break;
//     case 5:
//         console.log("Viernes")
//         break;
//     case 6:
//         console.log("Sabado")
//         break;
//     case 7:
//         console.log("Domingo")
//         break;

//     default:
//         console.log("El día que has ingresado no existe")
//         break;
// }

// tablas de verdad. Conjunción 
//que para que el resultado sea verdadero todas las premisas deben ser verdaderas

//Opcion 1

// var uvas: boolean = true;
// var manzana: boolean = true;
// var bananos: boolean= true;
// var naranjas: boolean= false;
// if (uvas && manzana && bananos && naranjas) {
//     document.write("Excelente, puedes hacer la ensalada de frutas");
// }else{
//     document.write("Oh no!, no puedes preparar la ensalada de frutas porque no dispones de todas las frutas")
// }

//Opcion 2


// if(uvas){
//     if(manzana){
//         if(bananos){
//             if(naranjas){
//                console.log("Excelente, puedes hacer la ensalada de frutas");
//                document.write("Excelente, puedes hacer la ensalada de frutas");
//             }else{
//                 console.log("Oh no!, no puedes preparar la ensalada de frutas porque no tienes naranjas")
//                 document.write("Oh no!, no puedes preparar la ensalada de frutas porque no tienes naranjas")
//             }
//         }else{
//             console.log("Oh no!, no dispondes de bananos para preparar la ensalada");
//             document.write("Oh no!, no dispondes de bananos para preparar la ensalada");
//         }
//     }else{
//         console.log("Oh no!, no dispones de manzanas para preparar la ensalada");
//         document.write("Oh no!, no dispones de manzanas para preparar la ensalada");
//     }
// }else{
//     console.log("Oh no!, no disponemos de uvas para preparar la ensalada");
//     document.write("Oh no!, no disponemos de uvas para preparar la ensalada");
// }

//Tablas de verdad. Conjunción inclusiva
//En la disyuncion inclusiva 
//Es verdadero cuando por lo menos uno de los dos valores es verdadero, de lo contrario sera falso
//aqui encontraras el ejemplo de la bebida.

var agua: boolean = true;
var naranjas : boolean = false;

//Opción 1

if (agua || naranjas) {
    document.write("Si puede obtener tu bebida");
}else{
    document.write("No puedes tener tu bebida")
}

//Opción 2

if (agua) {
    console.log("Si puede tener su bebbida");
}else if(naranjas) {
    console.log("Si puede tener su bebida");
}else if(agua && naranjas) {
    console.log("Si puede tener su bebida");
}else {
    console.log("No se puede obtener su bebida");
}
  