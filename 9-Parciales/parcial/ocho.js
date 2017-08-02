function Mostrar()
{
var numpositivo;
var respuesta=true
var contadorpares=0;
var acumulador=0;
var contador=0;
var maximo,minimo;
var flag=true
var promedio

    while(respuesta==true)
    {
        numpositivo=parseInt(prompt("Ingrese numeros positivos"));
        while(numpositivo<0)
        {
            numpositivo=parseInt(prompt("Solo ingrese numeros positivos"));
        }
    
        contador++;
        acumulador=acumulador+numpositivo;
        promedio=acumulador/contador;
        respuesta=confirm("Desea continuar ingresando numeros?");
        if(numpositivo%2==0)
        {
            contadorpares++;
        }
            if(flag)
            {
                minimo=numpositivo
                maximo=numpositivo
                flag=false
            }
            else
            {
                if(numpositivo<minimo)
                {
                    minimo=numpositivo;
                }
                if(numpositivo>maximo)
                {
                    maximo=numpositivo;
                }
            }
    }
document.write("la cantidad de numeros pares ingresados: " + contadorpares + "<br> el promedio de todos los numeros ingresados: " + promedio);
document.write("<br> la suma de todos los numeros: " + acumulador + "<br> el numero minimo ingresado: " + minimo + "<br> el numero maximo ingresado: " + maximo);

}