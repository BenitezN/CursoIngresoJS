function Mostrar()
{
var num;
var contador=0;
var acumulador=0;
var contadorpares=0;
var respuesta=true;
var minimo,maximo;
var flag=true;
while(respuesta==true)
{
    num=parseInt(prompt("Ingrese un numero positivo"));
        while(num<0)
        {
        num=parseInt(prompt("Reingrese un numero solo positivo"));   
        }
    contador++;
    acumulador=acumulador+num;
    respuesta=confirm("Desea seguir ingresando numeros?");
        if(num%2==0)
        {
            contadorpares++;
        }
        if(flag)
        {
            minimo=num;
            maximo=num;
            flag=false;
        }
        else
        {
            if(num<minimo)
            {
                minimo=num;
            }
            if(num>maximo)
            {
                maximo=num;
            }
        }
}
document.write("Cantidad de numeros pares: " + contadorpares + "<br> El promedio de todos los numeros: " + acumulador/contador + "<br> La suma de todos los numeros: " + acumulador);
document.write("<br> El numero maximo: " + maximo + "<br> El numero minimo: " + minimo);
}
