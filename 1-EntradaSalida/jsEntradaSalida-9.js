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
    sueldo=parseInt(sueldo);//si quiero sacar una cuenta siempre parsear para tranformar la variable en numeros enteros
    cuenta=(sueldo* porciento)/100;//para el aumento se multiplica el numero por el % y se divide todo por 100 
    aumento=sueldo + cuenta;//se suma el resultado anterior por el numero de nuevo
    document.getElementById("resultado").value=aumento;
}
