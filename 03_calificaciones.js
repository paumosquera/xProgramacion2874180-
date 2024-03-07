// solicitar 3 calificaciones por teclado y obtener la nota final
//1-40%
//2-30%
//3-30%

let notauno = parseFloat(prompt("Digite la primera nota: "));
let notaDos = parseFloat(prompt("Digite la segunda nota: "));
let notaTercera = parseFloat(prompt("Digite la tercera nota: "));

if(notauno >=0 && notaDos >=0 && notaTercera >=0){
    let resultadoNotas = (notauno*0.40)+(notaDos*0.30)+(notaTercera*0.30);
   console.log("Nota definitiva es:" + resultadoNotas);
}else{
    console.log("Verifique las notas ingresadas deben ser mayor o = a 0 : ");
}
