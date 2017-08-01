//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe=parseInt(prompt("Ingrese importe"));
    var iva=21
	cuenta=importe* iva/100
	resultado=importe + cuenta
	document.getElementById("importe").value=resultado;
	
}

