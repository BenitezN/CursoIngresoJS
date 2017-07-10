/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var mensaje;
	mensaje=prompt("Ingrese su mensaje:");
	document.getElementById("elNombre").value=mensaje;//entre parentesis el id del html
	//todo es igual a el mensaje para que me lo tome en el espacio en blanco
	
}

