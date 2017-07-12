function Mostrar()
{

var numero;
//declarar contadores y variables 
var acumuladornegativo=0;//o cantidad
var respuesta=true;
var acumuladorpositivo=0;//o cantidad
var contadornegativo=0
var contadorpositivo=0
var contadorpares=0
var contadorceros=0

while(respuesta ==true)
{
	  numero=prompt("Ingrese números");
	  numero=parseInt(numero);
	  while(isNaN(numero))
	    numero=prompt("Vulve a ingresar un número");
		numero=parseInt(numero);
	  
if(numero<0)
{
	acumuladornegativo=acumuladornegativo + numero;
}
 else if(numero>0)
{
	acumuladorpositivo=acumuladorpositivo + numero;
    contadorpositivo++;
	contadorceros++;
}
else if(numero==0)
{
	cantidadeceros=cantidaddeceros++;
}
if(numero %2==0)//tiene que dar resto 0 para ser par(el resto lo tomamos con %)
{
	contadorpares++;
}
}
//pregunto si se quiere seguir ingresando números
respuesta=confirm("Continuar?");
}

promediopositivo=acumuladorpositivo/contadorpositivo;
promedionegativo=acumuladornegativo/contadornegativo;
if(contadornegativo>0)
{
	resultadonegativo=acumuladornegativo/contadornegativo;
}
else
{
	resultadonegativo="No hay numero negativo";
}

diferencia=contadornegativo-contadorpositivo
if(diferencia<0)
{
	diferencia=diferencia*-1;
}

document.write("la suma de los positivos es: " + acumuladorpositivo + "<br>la suma de los negativos es: " + acumuladornegativo);//el value se utliza si tenemos id
document.write("La cantidad de positivos es: " + contadorpositivo + "<br>La cantidad de negativos es: " + contadornegativo + "<br> La cantidad de ceros es: " + contadorceros + "<br> La cantidad de pares es: " + contadorpares);
document.write("El promedio de positivos es: " + promediopositivo + "<br> El promedio de negativos es: " + promedionegativo);
document.write("La diferencia entre negativos y positivos es: " + diferencia);

}//FIN DE LA FUNCIÓN