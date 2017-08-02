function Mostrar()
{
  var importe
  var promedio
  importe=parseInt(prompt("Ingrese el importe"));
  promedio=importe* 25/100
  resultado=importe - promedio
  document.getElementById("importeFinal").value=resultado;
}

