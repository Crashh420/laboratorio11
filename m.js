function verificarcalificacion(){
    let cali=parseInt(document.getElementById("grado").value);
    let mensaje="";
    if (cali>=90){
        mensaje="Aprobado con honores";
    }else if (cali >= 70){
        mensaje="Aprobado";
    }else{
        mensaje="Reprobado";
    }
    document.getElementById("gradoSalida").innerText=mensaje;
}
function determinarParidad(){
    let num = parseInt(document.getElementById("imparpar").value);
    let mensaje="";
    if( num % 2 == 0){
        mensaje="El numero es par"
    } else {
        mensaje="El numero es impar"
    }
    document.getElementById("imparparSalida").innerText=mensaje;

}
function evaluarDescuento(){
    let descuento = parseInt(document.getElementById("descuento").value);
    let preciofinal = descuento;
    if (descuento >=100000){
        preciofinal = descuento * 0.9;
    }
    document.getElementById("descuentoSalida").innerText=`monto final a pagar: $${preciofinal}`;

}
function jugarAdivinanza(){
const adivinar = parseInt(document.getElementById("adivinar").value);
const numeroAleatorio = Math.floor(Math.random()*10)+1;
let mensaje ="";
if(adivinar===numeroAleatorio){
    mensaje="!Felicidades, adivinaste el numero";
}
document.getElementById("adivinarSalida").innerText=mensaje;
}