function Mostrar()
{
var numero;
var positivo=0;//si acumulo posit y neg se divide la variable acumulador en variable positivo y negativo
var negativo=1;//pongo en un 1 porque en cero siempre dara 0
var respuesta=true;
while(respuesta==true)
{
  numero=parseInt(prompt("Ingrese números"));
  console.log(numero)
  while(isNaN(numero))
	{
		numero=parseInt(prompt("Reingrese solo números"));
	}
if(numero >=0)
{
  positivo+= numero;//o acumulador+=variable(acumulador-,/,*,%)
}
else
{
  negativo=negativo * numero;
}
respuesta=confirm("Desea seguir ingresando números?");
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN