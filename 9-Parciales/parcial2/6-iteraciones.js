//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var dia=1;
	var importes;
	var minimo,maximo;
	var flag=true;
  
while(dia<=7)
{
    importes=parseInt(prompt("Igrese los importes del dia " + dia));
    dia++;
    while(importes<0)
   {
	importes=parseInt(prompt("El importe tiene que ser mayor a 0"));
   }	
	if(flag)
	{
		flag=false
		minimo=importes
		maximo=importes
	}
	else
	{
    	if(importes<minimo)
		{
		minimo=importes
		}
		if(importes>maximo)
		{
		maximo=importes
		}
	}
}
alert("El mayor importe ingresado fue: " + maximo);
alert("El menor importe ingresado fue: " + minimo);
}

