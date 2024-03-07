/* OPERACIONES ARITMETICOS
   suma (+): se utiliza para sumar dos valores numericos o concatenar dos cadenas de texto.
    Resta(-): se utiliza para restar dos valores numericos.
    Multiplicacion(*): se utiliza para multiplicar dos valores numericos.
   Division (/): se utiliza para dividir dos valores numericos.
   Modulo (%): MOD se utilioza para obtener el resto de una divison entre dos valores numericos.
   Resto % no esta relacionado con porcentaje 
   Exponenciacion es **
  
Esta tambien los operadores de 
incremento (++) y el operador de decremento(--),
i=i+1  //i++// i--
*/
//ejercicio hallar el impuesto por la compra de un computador sabiendo que el iva es de 16%   

//
let valorproducto= parseFloat(prompt("Digite el valor del pc"));
const Iva = 0.16;
let productoconIva= (valorproducto*Iva)+valorproducto;
//let total = valorproducto + productoconIva;
console.log(productoconIva.toFixed(2));
document.write("El valor del pc + IVA es: "+productoconIva.toFixed(2));





