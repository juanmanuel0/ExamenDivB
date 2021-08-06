/*El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
Al ser hisopadas se ingresan sus datos en la aplicación:
-nacionalidad ("argentina", "extranjero")
-resultado("positivo", "negativo")
-edad(entre 18 y 65)
-cepa("delta", "alfa", "beta", "ninguna")
Para poder ingresar ninguna el resultado debe ser negativo
Luego del ingreso informar:
a- Porcentaje de positivos
b- Porcentaje de negativos
c- Cuál es la cepa más encontrada
d- Edad del mayor extranjero contagiado
e- Cantidad de personas argentinas contagiadas con la delta */
function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let acumR = 0;
    let acumP = 0;
    let acumN = 0;
    let acumAlf = 0;
    let acumDel = 0;
    let acumBeta = 0;
    let porcentajeP;
    let porcentajeN;
    let flag = 1;
    let edadE = 0;
    let acumArg = 0;
    let Maxcep;
   

  
    for (let i = 0; i < 9 ; i++) {
        nacionalidad = prompt("ingrese su nacionalidad(extranjero/argentino");
		while (nacionalidad != "extranjero" && nacionalidad != "argentino") {
			nacionalidad = prompt("Error. ingrese un nacionalidad(extranjero/argentino)");
		}
        resultado = prompt("ingrese la resultado (positivo/negativo)");
		while (resultado != "positivo" && resultado != "negativo") {
			resultado = prompt("Error. ingrese la resultado (positivo/negativo)");
		}
       
		edad = parseInt(prompt("ingrese su edad"));
		while (!(edad >= 18 && edad <= 65)) {
			edad =  parseInt(prompt("Error. ingrese su edad"));
		}
        cepa = prompt("ingrese una cepa(delta, alfa, beta, ninguna)");
		while (cepa != "delta" && cepa !="alfa" && cepa != "beta" && cepa != "ninguna") {
			cepa = prompt("Error. ingrese una cepa(delta, alfa, beta, ninguna)");
		}
        if (resultado == "positivo" && resultado == "negativo") {
            acumR++
        }
        if (resultado == "positivo") {
            acumP++;
            porcentajeP = acumP / acumR * 100
        }else if (resultado == "negativo") {
            acumN;
            porcentajeN = acumN / acumR * 100
        }
        if (cepa == "alfa") {
            acumAlf++
        } else if(cepa =="beta"){
            acumBeta++;
        }else if (cepa == "delta") {
            acumDel++
        }
        if (flag|| edad > edadE) {
            edadE = edad
            flag = 0;
        }
        if (nacionalidad == "argentino" && cepa == "delta") {
            acumArg++}
    }
          
      
      if(acumAlf > acumBeta && acumAlf > acumDel){
        Maxcep = "alfa";
	}else if (acumBeta >= acumAlf && acumBeta > acumDel){
       Maxcep = "beta";
	}else {
      Maxcep = "delta";
	}
    document.write("a) el porsentaje de positivos " + porcentajeP + "<br>");
	document.write("b) porsentaje negativo " + porcentajeN + "<br>");
	document.write("c) cepa mas contrada " + Maxcep +"<br>");
	document.write("d) mayo extranjero contagiado  " + edadE + "<br>");
	document.write("e) la cantidad de personas argentinas contagiadas con la delta es " + acumArg +"<br>");

        
    
}/*a) el porsentaje de positivos Infinity
b) porsentaje negativo NaN
c) cepa mas contrada delta
d) mayo extranjero contagiado 56
e) la cantidad de personas argentinas contagiadas con la delta es 2*/


