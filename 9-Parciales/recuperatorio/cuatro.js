function Mostrar()
{
var num1
var num2
var suma
num1=parseInt(prompt("Ingrese el primer numero"));
num2=parseInt(prompt("Ingrese el segundo numero"));
suma=num1+num2;
    if(suma==0)
    {
        document.write("El resultado da cero");
    }
    else
    {
            if(suma<0)
        {
            document.write("el resultado da un numero negativo");   
        }
        else
        {
            document.write("El resultado da un numero positivo");
        }
    }
}
