function Mostrar()
{
var numero
var cuenta
var aumento
var iva=21;
numero=prompt("Ingrese el importe");
numero=parseInt(numero);
cuenta=(numero * iva)/100;
aumento=numero+cuenta;
importefinal=document.getElementById("importeFinal").value=aumento;

}
