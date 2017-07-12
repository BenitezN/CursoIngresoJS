function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	
	while(contador<5)
{
    numero=parseInt(numero);
	numero=prompt("Ingrese 5 números"); 
	console.log(numero);
	while(!(numero>=0 || numero <=0))//significado de isNan?
	{
		numero=parseInt(numero);
		numero=prompt("Ingrese solo un número");
	}
	  acumulalor=acumulador + numero;
	  contador++;//es igual a contador 1
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN