function Mostrar()
{
var contador=0;
var notas;
var sexo;
var minimo,flag=true;
var acumulador=0;
var contadorvarones=0;

while(contador<5)
{
contador++;
notas=parseInt(prompt("Ingrese las notas del alumno " + contador));

    while(notas <0 || notas>10)
    {
        notas=parseInt(prompt("Ingrese notas de 0 a 10"));
    }
sexo=prompt("Ingrese f o m");
sexo=sexo.toLowerCase();
    while(sexo!="f" && sexo !="m")
    {
        sexo=prompt("ingrese solo f o m")
        sexo=sexo.toLowerCase();
    }

acumulador=acumulador+notas;


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
    if(sexo=="m" && notas>=6)
    {
        contadorvarones++;
    }
}
alert("El promedio de todas las notas es " + acumulador/contador);
alert("La nota mas baja es: " + minimo);
alert("La cantidad de varones con más de 6 son: " + contadorvarones);
}//FIN DE LA FUNCION
