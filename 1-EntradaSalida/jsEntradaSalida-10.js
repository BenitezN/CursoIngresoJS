/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var descuento
    var precio
    precio=document.getElementById("importe").value;
    precio=parseInt(precio);
    descuento=precio -((precio * 25) / 100);//para el descuento se multiplica el numero por el % y se divide por 100
    //el resultado se resta por el numero de nuevo
    document.getElementById("resultado").value=descuento;

}
