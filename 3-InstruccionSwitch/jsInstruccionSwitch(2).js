function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
    case "Julio":
    case "Agosto":
    alert("Estamos en invierno");
    break;
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Mayo":
    case "Junio":
    alert("Falta para el invierno");
    break;
   default:
   alert("Ya pasamos el invierno");
}

}//FIN DE LA FUNCIÓN