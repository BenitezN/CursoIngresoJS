function Mostrar()
{

	var numero=0;
	//declarar contadores y variables 
	var acumulneo=0;
	var respuesta=true;

	while(respuesta ==true)
	{
	  numero=prompt("Ingrese números");
	  numero=parseInt(numero)
	}
if(numero<0)
{
	acumulneo+=numero
}
document.write("la suma de los negativos es: " + acumulneo)//el value se utliza si tenemos id

}//FIN DE LA FUNCIÓN