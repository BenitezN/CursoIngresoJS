/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var random=parseInt(Math.random()*(4-1))+1;//math random (max-min)+min
function comenzar()
{

}//FIN DE LA FUNCIÓN
function piedra()
{
switch(random)
{
    case 1:
    alert("Empate");
    break;
    case 2:
    alert("Pierde");
    break;
    case 3:
    alert("Gana");
}

}//FIN DE LA FUNCIÓN
function papel()
{
switch(random)
{
    case 1:
    alert("Gana");
    break;
    case 2:
    alert("Empate");
    break;
    case 3:
    alert("Pierde");
    break;
}

}//FIN DE LA FUNCIÓN
function tijera()
{
switch(random)
{
    case 1:
    alert("Pierde");
    break;
    case 2:
    alert("Gana");
    break;
    case 3:
    alert("Empate");
}	

}//FIN DE LA FUNCIÓN