function Mostrar()
{
var contador=0;
var notas
var sexo
var contadorvarones="m";
var notavarones=6;
var minimo,flag=true;
var acumulador=0;
while(contador<5 && sexo!="f" || sexo!="m")
{
contador++;
contadorvarones++;
notas=parseInt(prompt("Ingrese las notas del alumno " + contador));
sexo=prompt("Ingrese f o m");
sexo=sexo.toLowerCase();
acumulador=acumulador+notas;
while(0>notas || notas<10)
{
    prompt("Ingrese notas del 1 al 10");
}
if(flag)
{
 flag=false
 minimo=notas;   
}
else
{
    if(notas<minimo)
{
    minimo=notas
}
}
}
if(contadorvarones>=6)
{
    acumuladorvarones=acumulador+contadorvarones;
}
alert("El promedio de todas las notas es " + acumulador/100);
alert("La nota mas baja es: " + minimo);
alert("La cantidad de varones con más de 6 son: " + acumuladorvarones);
}//FIN DE LA FUNCION
