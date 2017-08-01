function Mostrar()
{
var num1
var num2
num1=parseInt(prompt("Ingrese un número"));
num2=parseInt(prompt("Ingrese otro"));
if(num1==num2)
{
  multiplicar=num1 * num2;
  resultado=document.write("Los numeros son iguales y se multiplicaron: "+ multiplicar);
}
else
{
if(num1>num2)
{
  resta=num1-num2;
resultado=document.write("El primer número es mayor que el segundo por lo tanto se resto el número uno por el número dos: "+ resta);
}
else
{
  suma=num1+num2
  resultado=document.write("El primer número es menor que el segundo por lo tanto se sumo el número uno por el número dos: "+ suma);
}
}
}
