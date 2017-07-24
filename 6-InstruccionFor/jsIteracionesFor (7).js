function Mostrar()
{
var num=parseInt(prompt("Ingrese un número"));       
var contadordivisores=0
for(i=1 ; i<=num ; i++)
{
if(num%i==0)//el numero divisible por el que ingreso el usuario
{
alert("Números divisores: " + i)    
contadordivisores++;
}
}
alert("Cantidad de números divisores: " + contadordivisores);
}//FIN DE LA FUNCIÓN