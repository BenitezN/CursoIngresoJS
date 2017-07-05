/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo
    var cuenta
    porciento=10;
    sueldo=document.getElementById("sueldo").value;
    sueldo=parseInt(sueldo);
    cuenta=(sueldo* porciento)/100;
    aumento=sueldo + cuenta;
    document.getElementById("resultado").value=aumento;
}
