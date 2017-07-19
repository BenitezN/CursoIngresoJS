function Mostrar()
{

var numero;
//declarar contadores y variables 
var acumuladornegativo=0;//o cantidad
var respuesta=true;
var acumuladorpositivo=0;//o cantidad
var contadornegativo=0;
var contadorpositivo=0;
var contadorpares=0;
var contadorceros=0;

while(respuesta ==true)
{
	numero=parseInt(prompt("Ingrese números"));
	console.log(numero)
	while(isNaN(numero))
	{
	numero=parseInt(prompt("Ingrese solo números"));
	}  
if(numero<0)
{
	acumuladornegativo=acumuladornegativo + numero;
    contadornegativo++;
}
 else if(numero>0)
{
	acumuladorpositivo=acumuladorpositivo + numero;
    contadorpositivo++;
}
else if(numero==0)
{
	contadorceros++;
}
if(numero %2==0)//tiene que dar resto 0 para ser par(el resto lo tomamos con %)
{
	contadorpares++;
}
//pregunto si se quiere seguir ingresando números
respuesta=confirm("Continuar ingresando números?");
}
promediopositivo=acumuladorpositivo/contadorpositivo;
promedionegativo=acumuladornegativo/contadornegativo;
if(promedionegativo<0)
{
	promedionegativo=acumuladornegativo/contadornegativo;
}
else
{
	promedionegativo="No hubo números negativos";
}
if(promediopositivo>0)
{
	promediopositivo=acumuladorpositivo/contadorpositivo;
}
else
{
	promediopositivo="No hubo números positivos"
}
diferencia=contadornegativo-contadorpositivo
if(diferencia<0)
{
	diferencia=diferencia*-1;
}

document.write("La suma de los positivos es: " + acumuladorpositivo + "<br> La suma de los negativos es: " + acumuladornegativo);//el value se utliza si tenemos id
document.write("<br> La cantidad de positivos es: " + contadorpositivo + "<br> La cantidad de negativos es: " + contadornegativo + "<br> La cantidad de ceros es: " + contadorceros + "<br> La cantidad de pares es: " + contadorpares);
document.write("<br> El promedio de positivos es: " + promediopositivo + "<br> El promedio de negativos es: " + promedionegativo);
document.write("<br> La diferencia entre positivos y negativos es: " + diferencia);

}//FIN DE LA FUNCIÓN