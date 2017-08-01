function Mostrar()
{
var largo
var ancho
var alambre
largo=document.getElementById("largo").value;
ancho=document.getElementById("ancho").value;
largo=parseInt(largo);
ancho=parseInt(ancho);
alambre=(largo * 2 + ancho * 2);
resultado=alambre * 3
alert("Se necesitan: "+ resultado + " mts de alambre" );
}
