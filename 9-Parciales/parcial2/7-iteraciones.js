//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var alumnos=0;
var nota;
var acumuladornotas=0;
var contadorvarones=0;
var flag=true
var notaminima;
var sexo;

while(alumnos<6)
{
alumnos++;
nota=parseInt(prompt("Ingrese la nota del alumno " + alumnos));
	while(nota<0 || nota>10)
	{
	 nota=parseInt(prompt("Ingrese notas de 1 a 10"));	
	}
sexo=prompt("Ingrese el sexo (F o M) del alumno " + alumnos);
sexo=sexo.toLowerCase();
	while(sexo!="m" && sexo!="f")
	{
		sexo=prompt("Solo ingrese f o m");
		sexo=sexo.toLowerCase();
	}

acumuladornotas=acumuladornotas+nota;

	
	if(flag)
	{
		minimanota=nota
		flag=false
	}
	if(nota<notaminima)
	{
	   notaminima=nota
	}
	if(sexo== "m" && nota >=6)
	{
		contadorvarones++;
	}
}
alert("El promedio de las notas totales es " + acumuladornotas/alumnos);
alert("La nota mas baja es " + minimanota);
alert("La cantidad de varones que tuvieron notas mayores o iguales a 6 son " + contadorvarones);
}

