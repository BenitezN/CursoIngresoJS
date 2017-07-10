function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	
	while(contador<5)
{
    numero=parseInt(numero);
	numero=prompt("Ingrese 5 números"); 
	while(isNaN(numero))
	{
		numero=prompt("Ingrese solo un número");
		numero=parseInt(numero);
	}
	  contador++;//es igual a contador 1
	  console.log(numero);
	  acumulador=acumulador + numero;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN