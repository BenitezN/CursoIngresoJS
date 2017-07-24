function Mostrar()
{
var primo=true
var num=parseInt(prompt("Ingrese un número"));  
for(i=2 ; i<num ; i++)
{
if(num%i==0)
{
primo=false
break;     
}
}
if(primo==true)
{
alert("El número ingresado no es primo")
}
else
{
alert("El número ingresado es primo");
}

}//FIN DE LA FUNCIÓN