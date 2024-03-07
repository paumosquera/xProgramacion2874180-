/*crear serie numerica en lista de 1 en 1 hasta el # indicado por el usuario*/
let serie = parseFloat(prompt("Digite el numero para realizar la serie "))

let i = 0;
while(i<serie){
    i=i+1
    document.write(i+ ",")

}

let seriefor = parseFloat(prompt("Digite el numero para realizar ña serie")) 
for (let index = 0; index < seriefor; index ++){
    console.log(index)
}



//Ejercicio 4. Realizar un programa que permita ingresar el tipo de mascotas 
//(perro o gato y realizar el contenido de gatos y perros y la sumatoria de c/u )

let conteoGatos = 0
let conteoPerros = 0

while (true){
    let mascota = prompt("Escribir el tipo de mascota (gato o perro : ")
    if (mascota=="0"){
        break;
    }
}

