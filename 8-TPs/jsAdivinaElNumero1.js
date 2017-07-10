/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numerosecreto; 
var contador=0//asigno valor 0 para el contador para que arranque a contar de 0
var numerousuario;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
numerosecreto=Math.floor(Math.random() * (100)+ 1);//mathfloor(redondea un numero) & math random(elige numero al azar)
console.log(numerosecreto)//muestra en consola el numero secreto

}

function verificar()
{
contador= contador+1;//contador de 0 en 1
numerousuario=document.getElementById("numero").value;
if(numerosecreto == numerousuario)
{
  alert("Usted es un ganador en "+ contador + " intentos");
}
else//se toma los errores en else
{
if(numerousuario < numerosecreto)//numero del usuario es menor a numero secreto
{
 alert("Le falta para el numero y van "+contador+ " intentos"); 
} 
else
{
  alert("Se paso del numero y van "+contador+ " intentos");
}	
}	
}