/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var aumento
    var precio
    precio=document.getElementById("sueldo").value;
    precio=parseInt(precio);
    aumento=(precio * 0,75)
}
