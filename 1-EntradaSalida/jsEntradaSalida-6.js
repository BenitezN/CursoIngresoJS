/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var Num1
var Num2
var resultado
Num1=document.getElementById("numeroUno").value;//opcion de escribir en el cuadro de la pagina 
Num2=document.getElementById("numeroDos").value;
Num1=parseInt(Num1);//parsea(es decir tranforma la variable en un numero)
Num2=parseInt(Num2);
resultado=Num1 + Num2 //si no hubiese parseado no se sumaria y se unirian los numeros
alert("la suma es " + resultado);
}

