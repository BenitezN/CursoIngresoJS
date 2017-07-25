/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
//no se agrega nada 
}
function NumerosPares()
{
var numeropositivo=document.getElementById("numero").value;
numeropositivo=parseInt(numeropositivo)
var contadorpares=0
if(numeropositivo<1)
{
   alert("Ingrese número par"); 
}
else
{
for(i=1;i<numeropositivo; i++)
{
     if(i%2==0)
     {
     contadorpares++;
     }
}
alert("Cantidad de números pares: " + contadorpares);
}
}//FIN DE LA FUNCION

function NumerosImpares()
{
var numeropositivo=document.getElementById("numero").value;
numeropositivo=parseInt(numeropositivo)
var contadorimpares=0
if(numeropositivo<0)
{
   alert("Ingrese número impar"); 
}
else
{
for(i=0;i<numeropositivo; i++)
{
     if(i%2!=0)
     {
     contadorimpares++;
     }
}
alert("Cantidad de números impares: " + contadorimpares);
}
}//FIN DE LA FUNCION

function NumerosDivisibles()
{
var numeropositivo=document.getElementById("numero").value;
numeropositivo=parseInt(numeropositivo)
var contadordivisores=0
if(numeropositivo<0)
{
   alert("Ingrese número positivo"); 
}
else
{
for(i=1;i<=numeropositivo; i++)
{
     if(numeropositivo%i==0)
     {
     contadordivisores++;
     }
}
alert("Cantidad de números divisores: " + contadordivisores);
}
}//FIN DE LA FUNCION

function VerficarPrimo()
{
var primo=true
var numeropositivo=document.getElementById("numero").value;
numeropositivo=parseInt(numeropositivo)
if(numeropositivo<1)
{
  alert("Ingrese un número positivo");
}
else
{
for(i=2;i<numeropositivo;i++) 
{
if(numeropositivo%i==0)   
{
primo=false
break;
}
}
if(primo==false)
{
alert("el número ingresado no es primo");
}
else
{
alert("El número ingresado es primo");   
}
}
}

function NumerosPrimos()
{
var numeropositivo=document.getElementById("numero").value;
numeropositivo=parseInt(numeropositivo)
var contadorprimos=0;
if(numeropositivo<1)
{
  alert("Ingrese un número positivo");
}
else
{
  for(i=2;i<numeropositivo;i++)
{
    if(numeropositivo%i==0)
  {
    contadorprimos++;
  }
}
alert("Cantidad de números primos: " + contadorprimos);
}
}