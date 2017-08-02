function Mostrar()
{
var kilos
var contador=0;
var minimo,maximo;
var flag=true;
while(contador<50)
{
    kilos=parseInt(prompt("Ingrese los kilos del contenedor " + contador));
    contador++;
    while(kilos<0)
    {
        kilos=parseInt(prompt("Reingrese los kilos del contenedor " + contador +"(que sea mayor a 0)"));
    }
        if(flag)
        {
            minimo=kilos
            maximo=kilos
            flag=false
        }
        else
        {
           if(kilos<minimo)
           {
            minimo=kilos
           } 
           if(kilos>maximo)
           {
            maximo=kilos   
           }
        }    
}
alert("el contenedor mas pesado fue: " + maximo);
alert("el contenedor menos pesado fue: " + minimo);
}
