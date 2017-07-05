/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largoterreno
var anchoterreno
var radioterreno
function Rectangulo () 
{
var alambre
largoterreno=document.getElementById("Largo").value;
anchoterreno=document.getElementById("Ancho").value;
radioterreno=document.getElementById("Radio").value;
largoterreno=parseInt(largoterreno);
anchoterreno=parseInt(anchoterreno);
radioterreno=parseInt(radioterreno);
alambre=(largoterreno *2) + (anchoterreno * 2)//largo * dos lados + ancho * 2 lados
resultado=alambre*3//* 3(3 hilos)
alert("Cantidad de alambre: " + resultado);
}
function Circulo () 
{
var Circuloalambre
largoterreno=document.getElementById("Largo").value;
anchoterreno=document.getElementById("Ancho").value;
radioterreno=document.getElementById("Radio").value;
largoterreno=parseInt(largoterreno);
anchoterreno=parseInt(anchoterreno);
radioterreno=parseInt(radioterreno);
Circuloalambre=Math.PI *(radioterreno*radioterreno)//radio=pi *radio al cuadrado(radio*radio)
resultado=Circuloalambre*3//* 3 (hilos)
resultado=parseInt(resultado);//redondea numero con coma a entero
alert("Resultado: "+ resultado);
}
function Materiales () 
{
	
}