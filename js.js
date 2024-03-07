let saludo= "hola mundo"; 
console.log(saludo);

let nombres,apellidos,direccion,telefono;
nombres = "maria teresa";
direccion = "carrera 27 n # 45-18 ";
telefono = "688396230927"// numero entero
let salario = 180000.476 // numero decimal
var profesion = "abogado";

console.log(nombres);
console.log(direccion);
console.log(telefono);
console.log(profesion);

//+ concatena
document.write(nombres + "<br>");
document.write(direccion + "<br>");
document.write(telefono + "<br>");
document.write(profesion + "<br>");

const color_red= "#fffff"
const pi = 3.1416
let estado = true; //variable booleana
let accion = false;//booleana
//variable de tipo objeto
let persona = {
     nombre: 'ana milena',
     edad: 21,
     direccion: "cra 4. No.10-20",
     salario: 623752853.25
}

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.direccion)
console.log(persona.salario)


//variable de array
let paises =["Buenos aires","Lima","Bogota", "Caracas"]
console.log(paises)
console.log(paises[1])

//operadores negativos
let pension = true;
console.log(!pension);
let x = false;
let y = true;
//para utilizar operador y &&
console.log(x && y);


let horas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//console.log(horas);
//index++
for (let index = 0; index < horas.length; index=index+1) {
     console.log(horas[index]);
}

//variable de tipo objeto json
var usuario = {
     nombre: `juan`,
     apellidos: `perez`,
     edad: 30,
     salario: 1350000.50

};
console.log(usuario);
console.log("nombres:" + usuario.nombre);
console.log("salario:" + usuario.salario);

