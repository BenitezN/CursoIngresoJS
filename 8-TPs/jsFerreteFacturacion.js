/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var Precio1
var Precio2
var Precio3

function Sumar () 
{
Precio1=document.getElementById("PrecioUno").value;
Precio2=document.getElementById("PrecioDos").value;
Precio3=document.getElementById("PrecioTres").value;
Precio1=parseInt(Precio1);
Precio2=parseInt(Precio2);
Precio3=parseInt(Precio3);
var suma
var resultado
suma=(Precio1 + Precio2 + Precio3)
alert("La suma en total seria: "+ suma);
}
function Promedio () 
{
var promedio
Precio1=document.getElementById("PrecioUno").value;
Precio2=document.getElementById("PrecioDos").value;
Precio3=document.getElementById("PrecioTres").value;
Precio1=parseInt(Precio1);
Precio2=parseInt(Precio2);
Precio3=parseInt(Precio3);
promedio=((Precio1 + Precio2 + Precio3) /3) //promedio: suman los precios se divide por la cantidad de precios
alert("El promedio es: " + promedio);

}
function PrecioFinal () 
{
var iva
var proceso
var PrecioF
Precio1=document.getElementById("PrecioUno").value;
Precio2=document.getElementById("PrecioDos").value;
Precio3=document.getElementById("PrecioTres").value;
Precio1=parseInt(Precio1);
Precio2=parseInt(Precio2);
Precio3=parseInt(Precio3);
iva=1,21
proceso=((Precio1 + Precio2 + Precio3) * iva) /100//se suman los precios * iva dividido 100(%)
PrecioF=(Precio1+Precio2+Precio3) + proceso //se suman todo el proceso + los precios 
alert("El precio final es: " + PrecioF);
}