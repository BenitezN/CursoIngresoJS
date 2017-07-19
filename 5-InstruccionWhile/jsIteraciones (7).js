function Mostrar()
{
var numero;
var contador=0;
var acumulador=0;
var respuesta=true;
while(respuesta == true)
{
	numero=parseInt(prompt("Ingrese numeros"));
	contador++;
	acumulador= acumulador + numero
	console.log(numero)
	while(isNaN(numero))
	{
		numero=parseInt(prompt("Reingrese solo números"));
	}
	respuesta=confirm("Desea seguir ingresando números?");
	
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN