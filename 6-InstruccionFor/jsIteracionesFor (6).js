function Mostrar()
{
var num=parseInt(prompt("Ingrese un número"));       
var contadorpares=0
for(i=1 ; i<=num ; i++)
{
if(i%2==0)//formula para encontrar numeros pares
{
alert("Números pares: " + i)    
contadorpares++;
}
}
alert("Cantidad de números pares: " + contadorpares);
}//FIN DE LA FUNCIÓN