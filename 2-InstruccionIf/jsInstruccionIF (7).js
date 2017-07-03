function Mostrar()
{
//tomo la edad  
var edad;
var ecivil;
edad=document.getElementById("edad").value;
ecivil=document.getElementById("estado civil").value;
if(edad <18 && ecivil!="Soltero")
{
    alert("Es muy pequeño para no ser soltero")
}
else
{}	

}//FIN DE LA FUNCIÓN