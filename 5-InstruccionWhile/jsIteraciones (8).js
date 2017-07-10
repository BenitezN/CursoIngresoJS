function Mostrar()
{
var numero=0;
var positivo=0;
var negativo=1;
var acumulador=0
var respuesta=true;
while(respuesta==true)
{
    numero=parseInt(prompt("Ingrese números"));
	confirm("Desea continuar?");
if(numero >=0)
{
  acumulador=acumulador +numero;//o acumulador+=variable(acumulador-,/,*,%)
}
else
{
acumulador=acumuladr+numero;
}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
}
}//FIN DE LA FUNCIÓN