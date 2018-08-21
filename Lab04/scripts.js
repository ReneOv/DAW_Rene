//Ejercicio 1

var num=prompt("Ejercicio 1\nDame un número para cuadrados y cubos: ");
document.write("<br><h3>Ejercicio 1: Cuadrados y Cubos</h3>");
document.write("<table>\
                <tr>\
                <th>Número</th>\
                <th>Cuadrado</th>\
                <th>Cubo</th>\
                </tr>");
for(var i=1;i<=num;i++){
    document.write("<tr>\
                    <td>");
    document.write(i);
    document.write("</td>\
                    <td>");
    document.write(i*i);
    document.write("</td>\
                    <td>");
    document.write(i*i*i);
    document.write("</td>\
                    </tr>");
}
document.write("</table>");


//Ejercicio 2

var x1 = Math.floor(Math.random()*100) + 1;
var x2 = Math.floor(Math.random()*100) + 1;
var tiempo;
var start = new Date();
var respuesta = prompt("Ejercicio 2\nCuál es la suma de "+x1+" + "+x2+"?");
var end = new Date();
tiempo = end - start;
var correct = x1+x2;
document.write("<br><h3>Ejercicio 2: Suma de Aleatorios</h3>")
if(respuesta==x1+x2)
    document.write("Tu respuesta de "+respuesta+" fue correcta. <br>Te tardaste "+tiempo+" milisegundos.");
else
    document.write("Tu respuesta de "+respuesta+" fue incorrecta. <br>La respuesta correcta era "+correct+".<br>Te tardaste "+tiempo+" milisegundos.");


//Ejercicio 3

document.write("<br><h3>Ejercicio 3: Contador de Arreglo</h3>");
var size= prompt("Ejercicio 3\nDe qué tamaño es el arreglo?");
var arr=[];
var cero=0;
var pos=0;
var neg=0;
for(var i=0;i<size;i++){
    var aux=prompt("Ejercicio 3\nDame el número "+(i+1)+": ");
    arr.push(aux);
}
for(i=0;i<size;i++){
    if(Number(arr[i])<0){
        neg+=1;}
    else if(Number(arr[i])==0){
        cero+=1;}
    else{
        pos+=1;}
}
document.write("Anotaste "+neg+" negativos, "+pos+" positivos, y "+cero+" ceros.");


//Ejercicio 4

document.write("<br><h3>Ejercicio 4: Promedio de Arreglos</h3>");
var matx= prompt("Ejercicio 4\nCuántos arreglos quieres hacer?");
var maty= prompt("Ejercicio 4\nDe qué longitud cada arreglo?");
var promedio;
for(var i=0;i<matx;i++){
    promedio=0;
    for(var j=0;j<maty;j++){
        var aux = prompt("Ejercicio 4\nDame el número del arreglo " + (i + 1) + ", posición: " + (j + 1) + ":");
        promedio= promedio + Number(aux);
    }
    document.write("El promedio del arreglo "+(i+1)+" es "+((promedio/maty).toFixed(4))+".<br>");
}


//Ejercicio 5

document.write("<br><h3>Ejercicio 5: Invertir un Número</h3>");
var normal=prompt("Ejercicio 5\nDime el número para invertir: ");
document.write("<br> Número dado: "+normal);
var inver=0;
while(normal>0){
    inver*=10;
    inver+=(normal%10);
    normal=Math.floor(normal/10);
}
document.write("Número invertido: "+inver);
