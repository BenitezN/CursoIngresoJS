function Mostrar()
{
var contador=1;
var importes;
var maximo,minimo,flag=true
while(contador<24)
{
      importes=parseInt(prompt("Ingrese las ventas del dia " + contador));
      contador++;
      console.log(importes)
      while(importes<0)
      {
        prompt("Ingrese ventas mayores a cero");
      }
  if(flag)
  {
      flag=false;
      maximo=importes;
      minimo=importes;
  }
  else   
  {
    if(importes>maximo)
    {
      maximo=importes;
    }
    else if(importes<minimo)
    {
      minimo=importes;  
    }
}
}
document.getElementById("importeFinal").value="El mayor importe fue: " + maximo + " y el menor importe fue: " + minimo;
}
