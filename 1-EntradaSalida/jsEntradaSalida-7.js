/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
    var Num1
    var Num2
    var suma
    Num1=document.getElementById("numeroUno").value;
    Num2=document.getElementById("numeroDos").value;
    Num1=parseInt(Num1);
    Num2=parseInt(Num2);
	suma=Num1 + Num2
    alert("La suma es " + suma);
}

function restar()
{
	var Num1
    var Num2
    var resta
    Num1=document.getElementById("numeroUno").value;
    Num2=document.getElementById("numeroDos").value;
    Num1=parseInt(Num1);
    Num2=parseInt(Num2);
    resta=Num1 - Num2
    alert("La resta es " + resta);
}

function multiplicar()
{ 
	var Num1
    var Num2
    var multiplica
    Num1=document.getElementById("numeroUno").value;
    Num2=document.getElementById("numeroDos").value;
    Num1=parseInt(Num1);
    Num2=parseInt(Num2);
    multiplica=Num1 * Num2
    alert("El resultado es " + multiplica);
}

function dividir()
{
    var Num1
    var Num2
    var divide
    Num1=document.getElementById("numeroUno").value;
    Num2=document.getElementById("numeroDos").value;
    Num1=parseInt(Num1);
    Num2=parseInt(Num2);
    divide=Num1 / Num2
    alert("La division da " + divide);	
}

