/*Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la rusa
b- Nombre y vacuna de la mujer con más edad
c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
e- Vacuna menos inoculada*/
function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let seguir;
	// punto A
	let promEdadRusa = 0;
	let acumEdadRusa = 0;
	let contadorRusa = 0;
	// punto B
	let edadMujerMayor;
	let nombreMujerMyor;
	let vacunaMujerMayor;
	let flagMujer = 1;
	// punto C
	let porcentajeAmericanaMayor = 0;
	let contadorAmericanaMayor = 0;
	let contadorAmericana = 0;
	// punto D
	let contadorDosDosis = 0;
	let contadorVacunados = 0;
	let porcentajeDosDosis = 0;
	// punto E
	let contadorChina = 0;
	let menosInoculada;
	let contadorMenosInoculada;

	do {
		nombre = prompt("Ingrese nombre")
		while(!(nombre.length >= 3 && nombre.length <= 10 )){
			nombre = prompt("Nombre fuera de rango. Ingrese nombre")
		}
		edad = parseInt(prompt("ingrese su edad"));
		while (!(edad >= 12)) {
			edad =  parseInt(prompt("Error. ingrese su edad"));
		}
		if (edad < 18) {
			vacuna = "americana"
		}else{
		vacuna = prompt("ingrese una vacuna(rusa, china, americana)");
		while (vacuna != "rusa" && vacuna !="china" && vacuna != "americana") {
			vacuna = prompt("Error. ingrese una vacuna(rusa, china, americana)");
		}}
		dosis = prompt("ingrese la dosis (p/s)");
		while (dosis != "p" && dosis != "s") {
			dosis = prompt("Error. ingrese la dosis (p/s)");
		}
		sexo = prompt("ingrese su sexo (m/f)");
		while (sexo != "m" && sexo != "f") {
			sexo = prompt("Error. ingrese su sexo (m/f)");
		}
		if (vacuna == "rusa") {
			contadorRusa++
			acumEdadRusa += edad
		} else if (vacuna == "china") {
			contadorChina
		} else{
			contadorAmericana++;
			if (edad >= 18) {
				contadorAmericanaMayor++;
			}
		}
		if (sexo == "f") {
			if (flagMujer || edad > edadMujerMayor) {
				edadMujerMayor = edad;
				nombreMujerMyor = nombre;
				vacunaMujerMayor = vacuna;
				flagMujer = 0;
			}
		}
		if (dosis == "s" ) {
			contadorDosDosis++;
		}

		contadorVacunados++;







		seguir = prompt("Quire ingresar otro pasiente (si/no)")
	} while (seguir ==  "si");
	if (contadorChina < contadorRusa && contadorChina < contadorAmericana){
		menosInoculada = "china";
		contadorMenosInoculada = contadorChina;
	}else if (contadorRusa <=  contadorChina && contadorRusa < contadorAmericana)  {
		menosInoculada = "rusa";
		contadorMenosInoculada = contadorRusa;
	}else{
		menosInoculada = "americana";
		contadorMenosInoculada = contadorAmericana;
	}

	if (contadorAmericana != 0) {
		porcentajeAmericanaMayor  =  contadorAmericanaMayor * 100 / contadorAmericana;
	}
	if (contadorDosDosis != 0) {
		porcentajeDosDosis = contadorDosDosis * 100 / contadorVacunados;
	}

	if (contadorRusa != 0) {
		promEdadRusa = acumEdadRusa / contadorRusa;
	}
	
	document.write("a- el promedio de edad con la vacuna rusa es " + promEdadRusa + "<br>");
	if (flagMujer) {
		document.write("b- no se ingresaron pasiente femeninos <br>")
	}else{
		document.write("b- la mayor paciente tine " + edadMujerMayor + " su nombre es "
		+ nombreMujerMyor + " y le dieron la vacuna " + vacunaMujerMayor + "<br>");
	}
	document.write("c- porcentaje de mayor vacunados con americana " + porcentajeAmericanaMayor + "<br>");
	document.write("d- el porcentaje de los que están vacunados con 2 dosis " + porcentajeDosDosis + "<br>" );
	document.write("e- la vacua menos inoculada " + menosInoculada + " con " + contadorMenosInoculada 
	+ " aplicada <br> " );




}
/*let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let acumdosis = 0;
	let acumR = 0;
	let acumC = 0;
	let acumA = 0;
	let EdadC = 0;
    let EdadR = 0;
	let EdadA = 0;
	let dosisS = 0;
	let flag = 1;
	let flagA = 1;
	let vacF;
	let mayorEdadA;
	let nomF;
	let maxEdadF;
	let promEdadR;
	let vacmin;
	let porcentajeS;
	let respuesta;

	do {
		nombre = prompt("ingrese su nombre");
		while (nombre == " ") {
			nombre = prompt("Error. ingrese un nombre");
		}
		edad = parseInt(prompt("ingrese su edad"));
		while (!(edad >= 12)) {
			edad =  parseInt(prompt("Error. ingrese su edad"));
		}
		vacuna = prompt("ingrese una vacuna(rusa, china, americana)");
		while (vacuna != "rusa" && vacuna !="china" && vacuna != "americana") {
			vacuna = prompt("Error. ingrese una vacuna(rusa, china, americana)");
		}
		dosis = prompt("ingrese la dosis (p/s)");
		while (dosis != "p" && dosis != "s") {
			dosis = prompt("Error. ingrese la dosis (p/s)");
		}
		sexo = prompt("ingrese su sexo (m/f)");
		while (sexo != "m" && sexo != "f") {
			sexo = prompt("Error. ingrese su sexo (m/f)");
		}
		if (edad >=12 && edad <=17) {
			
		}
		if (vacuna == "rusa") {
			acumR++;
			EdadR += edad;
		}else if (vacuna == "china") {
			acumC++;
			EdadC += edad;
		}else {
			acumA++;
			EdadA += edad;
		}
		if (dosis == "p" && dosis == "s") {
			acumdosis++;
		}
		if (dosis == "s") {
			dosisS++;
		
		}
		if(flagA|| edad > maxEdadF){
			nomF = nombre;
			vacF = vacuna;
			maxEdadF = edad;
			flag = 0;
		}
		
		
		respuesta = prompt("quere seguir ingresando?(si/no)")
		

	} while (respuesta == "si");
	promEdadR = EdadR / acumR;

	if (flag || EdadA > mayorEdadA) {
		mayorEdadA= EdadA / acumA;
		flag = 0;
	}
	porcentajeS = dosisS + acumdosis /100;


	if(acumR < acumC && acumR > acumA){
        vacmin = "rusa";
	}else if (acumC <= acumR && acumC < acumA){
       vacmin = "china";
	}else {
      vacmin = "americana";
	}a- Promedio de edad de los que se vacunaron con la rusa
b- Nombre y vacuna de la mujer con más edad
c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
e- Vacuna menos inoculada 
	document.write("a) el promedio de edad con la rusa es " + promEdadR + "<br>");
	document.write("b) mujer con mas edad " + maxEdadF + " nombre " + nomF + " vacuna " + vacF + "<br>");
	document.write("c) porcentaje de edad con americana "+ mayorEdadA +"<br>");
	document.write("d) el porcentaje con segunda dosis es  " + porcentajeS + "<br>");
	document.write("e) la vacuna menos inoculada es " + vacmin +"<br>");*/