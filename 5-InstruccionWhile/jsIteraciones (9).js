function Mostrar()
{

//declarar variables
var numero;
var maximo,minimo;
var respuesta=true;
var flag=true;
while(respuesta==true)
{
	 numero=parseInt(prompt("Ingrese números"));
	 while(isNaN(numero))
	 { 
		 numero=parseInt(prompt("Ingrese solo números"));
	 }
if(flag==true) 
{
 maximo=numero;
 minimo=numero;
 flag=false;//o cero
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
{	
}
}
respuesta=confirm("Desea seguir ingresando números?");
}
document.getElementById("maximo").value=maximo;
document.getElementById("minimo").value=minimo;
}//FIN DE LA FUNCIÓN