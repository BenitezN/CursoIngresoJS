//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var num;
var acumulador=0;
var respuesta=true
var minimo,maximo;
var flag=true;
var contadorpares=0;
var contador=0;
while(respuesta==true)
{
num=parseInt(prompt("Ingrese números positivos"));
    while(num<0)
	{
	num=parseInt(prompt("Solo ingrese números positivos"));
	}
acumulador=acumulador+num;
contador++;
respuesta=confirm("Desea seguir ingresando números?");
	if(num%2==0)
	{
		contadorpares++;
	}
	if(flag)
	{
		minimo=num
		maximo=num
		flag=false
	}
	else
	{
		if(num<minimo)
		{
			minimo=num
		}
		if(num>maximo)
		{
           maximo=num
		}
	}
}
document.write("La cantidad de números pares ingresados: " + contadorpares + "<br> El promedio de todos los números es: " + acumulador/contador );
document.write("<br> La suma de todos los numeros es: " + acumulador + "<br> El numero maximo ingresado es: " + maximo + "<br> El numero minimo ingresado es: "+ minimo);
}//FIN DE LA FUNCION
