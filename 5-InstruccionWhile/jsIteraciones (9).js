function Mostrar()
{

//declarar variables
var numero;
var maximo,minimo;
var respuesta=true;
var primera=true;
while(isNaN(numero))
{
	 numero=parseInt(prompt("Ingrese los números"))
	   
if(primera) 
{
 maximo=numero;
 minimo=numero;
 primera=false;
}
else
{
if(numero<minimo)
{
 minimo=numero;
}
else
{}
if(numero>maximo)
{
 maximo=numero;	
}
else
{}
}
}
document.getElementById("maximo").value=maximo;
document.getElementById("minimo").value=minimo;
}//FIN DE LA FUNCIÓN