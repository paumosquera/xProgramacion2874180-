//Ejercicio 4. Realizar un programa que permita ingresar el tipo de mascotas 
//(perro o gato y realizar el contenido de gatos y perros y la sumatoria de c/u )

let conteoGatos = 0
let conteoPerros = 0
let Edadperros = 0
let Edadgatos = 0

while (true){
    let mascota = prompt("Escriba el tipo de mascota (gato o perro: ")
    if (mascota==="0"){
        break;
    }else if (mascota==="perro"){
        let edad = parseInt(prompt("Digite la Edad: "))
        conteoPerros = conteoPerros + 1
        Edadperros = Edadperros+edad

    }else if (mascota==="gato"){
       let edad = parseInt(prompt("digite Edad: "))
       conteoGatos++
       Edadgatos = Edadgatos + edad
    }
}
document.write("la cantidad de perros es :" + conteoPerros+"<br>")
document.write("la cantidad de Gatos es :" + conteoGatos+"<br>")
document.write("suma Edad de perros :" + Edadperros+"<br>")
document.write("suma Edad de gatos  :" + Edadgatos+"<br>")


