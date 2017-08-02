function Mostrar()
{
var edad;
var sexo;
var contador=0;
var contadorvarones=0;
var minimo;
var flag=true;
var acumulador=0;

while(contador<100)
{
    contador++;
    edad=parseInt(prompt("Ingrese la edad de la persona " + contador));
    while(edad<0 || edad >100)
    {
         edad=parseInt(prompt("Ingrese edades de  0 a 100")); 
    }
    sexo=prompt("Ingrese f o m de la persona " + contador);
    sexo=sexo.toLowerCase();
    while(sexo !="m" && sexo != "f")
    {
        sexo=prompt("Ingrese solo f o m");
        sexo=sexo.toLowerCase();
    }
acumulador=acumulador+edad;

    if(flag)
    {
        minimo=edad;
        flag=false;
    }
    else
    {
      if(edad<minimo)
      {
          minimo=edad;
      }  
    }
    if(edad>=20 && sexo=="m")
    {
        contadorvarones++;
    }
}
alert("El promedio de las edades es: " + acumulador/contador);
alert("La edad mas baja ingresada es: " + minimo);
alert("La cantidad de varones con edad mayor igual a 20: " + contadorvarones);
}
