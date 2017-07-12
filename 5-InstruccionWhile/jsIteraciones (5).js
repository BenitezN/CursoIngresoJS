function Mostrar()
{

var sexo 
sexo=prompt("ingrese f ó m .");

while(sexo !="f" && sexo !="m") //porque si pondria || nunca me daria falso
{
    
    sexo=prompt("ingrese f ó m .");

}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN