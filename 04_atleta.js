/* Escribe un programa que calcule el indice de masa corporal (IMC) de una persona y muestra el rango en el que se encuentra:
bajo peso, normal,sobrepeso u obesidad. usa condicionales para mostar el resultado adecuado
segun el valor de IMC.*/


let pesopersona = parseFloat(prompt("Digite su peso:"))
let alturapersona = parseFloat(prompt("Digite su altura"))

//let alturametros2 = alturapersona * alturapersona;
let IMC = pesopersona/(alturapersona*alturapersona)

if (IMC < 18.5) {
    console.log("Bajo peso");
}else {

   if  (IMC >= 18.5 && IMC  <= 24.9 ){
    console.log("Es normal")

   }else{

    if (IMC>25){
        console.log("sobrepeso");
    }
   }

}
    



