function Mostrar()
{

var numero
numero= prompt("ingrese un número entre 0 y 10.");
numero=parseInt(numero);
while(numero <0 || numero >10)//unión (||)
{
  numero=prompt("Ingrese un número entre 0 y 10");
}
}//FIN DE LA FUNCIÓN