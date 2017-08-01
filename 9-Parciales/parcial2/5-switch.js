//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes;
	mes=prompt("Ingrese un mes del año");
	mes=mes.toLowerCase();
	switch(mes)
	{
		case "enero":
		case "febrero":
		alert("Es verano");
		break;
	    case "marzo":
		case "abril":
		case "mayo":
		case "junio":
		case  "julio":
		case "agosto":
		case "septiembre":
		case "octubre":
		case "noviembre":
		case "diciembre":
		alert("Extaño enero y febrero");
		break;
	}
	
}

