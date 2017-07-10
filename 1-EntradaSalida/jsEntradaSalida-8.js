/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var resto
    Num1=document.getElementById("numeroDividendo").value;
    Num2=document.getElementById("numeroDivisor").value;
    Num1=parseInt(Num1);
    Num2=parseInt(Num2);
    resto=Num1 % Num2//%saca el resto, / divide
    alert("El resto da " + resto);
}
