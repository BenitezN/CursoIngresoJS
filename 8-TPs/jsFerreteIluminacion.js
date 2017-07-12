/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var preciolamparas=35;
var cantidad=document.getElementById("Cantidad").value;
cantidad=parseInt(cantidad);
function CalcularPrecio () 
{
switch(cantidad)
{
    case "ArgentinaLuz"://case 1
    if(cantidad ==5)
    {
    preciodescuentoal5=((cantidad * preciolamparas) * 40/ 100) + preciolamparas;
    document.getElementById("precioDescuento").value=preciodescuentoal5;
    }
    else if(cantidad==4)
    {
    preciodescuentoal4=((cantidad * preciolamparas) * 25/ 100) + preciolamparas;
    document.getElementById("precioDescuento").value=preciodescuentoal4;
    }
    else if(cantidad==3)
    {
    preciodescuentoal3=((cantidad * preciolamparas) * 15/ 100) + preciolamparas;
    document.getElementById("precioDescuento").value=preciodescuentofl3;
    }
    break;
    /////////////////////////////////////////////////////////////////////////////
    case "FelipeLamparas"://case 2
    if(cantidad ==4)
    {
    preciodescuentofl4=((cantidad * preciolamparas) * 25/ 100) + preciolamparas;
    document.getElementById("precioDescuento").value=preciodescuentofl4;
    }
    else if(cantidad ==3)
    {
    preciodescuentofl3=((cantidad * preciolamparas) * 10/ 100) + preciolamparas;   
    }
    break;
    /////////////////////////////////////////////////////////////////////////////
    default://demas marcas
    if(cantidad ==5)
    {
    descuentootras5=((cantidad * preciolamparas) * 30/ 100) + preciolamparas;
    }
    else if(cantidad==4)
    {
    descuentootras4=((cantidad * preciolamparas) * 20/ 100) + preciolamparas;
    }
    else if(cantidad==3)
    {
    descuentootras3=((cantidad * preciolamparas) * 5/ 100) + preciolamparas;  
    }
    }
    

}
