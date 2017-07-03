/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var Num1
var Num2
var resultado
Num1=document.getElementById("numeroUno").value;
Num2=document.getElementById("numeroDos").value;
Num1=parseInt(Num1);
Num2=parseInt(Num2);
resultado=Num1 + Num2
alert("la suma es " + resultado);
}

