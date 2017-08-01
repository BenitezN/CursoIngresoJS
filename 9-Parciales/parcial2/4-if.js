//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1;
	var num2;
	num1=parseInt(prompt("Ingrese el primer número"));
	num2=parseInt(prompt("Ingrese el segundo número"));
	if(num1==num2)
	{
		multiplicar=num1*num2;
		resultado=document.write("Los dos números son iguales y se multiplicaron: " + multiplicar);
	}
	else
	{
		if(num1>num2)
		{
         resta=num1-num2;
		 resultado=document.write("El número 1 es mayor que el número 2 y se sumaron: " + resta);
		}
	    else
	   {
         suma=num1+num2;
		 resultado=document.write("El número 1 es menor que el número 2 y se restaron: " + suma);
	   } 
    }
	
}

