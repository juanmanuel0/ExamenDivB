/*Llegan 10 vuelos con vacunas de distintos lugares del mundo
Se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “USA”)
-Cantidad de vacunas (no puede ser 0)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió mayor cantidad de vacunas
b- El promedio de vacunas llegadas de Asia
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 4 millones de vacunas se hace un descuento de 30%, Si se recibieron entre 2 y 4 millones el descuento es del 20% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con descuento */
function mostrar()
{
	let origen;
	let cantidad;
	let costo;
	// punto A
	let acumUSA = 0;
	let acumEuropa = 0;
	let mayorvacunas;
	// punto B
	let VuelosAsia = 0;
	let acumAsia = 0;
	let promAsia = 0;
	// punto C
	let totalcosto = 0;
	// punto D
	let cantidadTotal = 0;
	let presioFin;

	for (let i = 0; i < 4; i++) {
		origen = prompt("ingresen el producto (Asia/Europa/USA)");
		while (origen != "Asia" && origen != "Europa" && origen != "USA") {
			origen = prompt("Error. ingresen el producto (Asia/Europa/USA)");
		}
		cantidad = parseInt(prompt("ingrese la cantidad de productos "));
		while (!(cantidad > 0)) {
			cantidad = parseInt(prompt("Error. ingrese la cantidad de productos"));
		}
		costo = parseInt(prompt("ingrese un costo entre (1millon y 5millones)"));
		while (!(costo >= 1000000 && costo <= 5000000 )) {
			costo = parseInt(prompt("Error. ingrese un numero entre (1millon y 5millones))"));
		}
		if (origen == "Asia") {
			acumAsia += cantidad ;
			VuelosAsia++;
		}else if (origen == "Europa") {
			acumEuropa += cantidad;
		}else{
			acumUSA += cantidad;
		}
		cantidadTotal += cantidad;
		totalcosto += costo;
	}
			
	if(acumAsia > acumEuropa && acumAsia > acumUSA){
        mayorvacunas = "Asia";
	}else if (acumEuropa >= acumAsia && acumEuropa> acumUSA){
       mayorvacunas = "Europa";
	}else {
      mayorvacunas = "USA";
	}
	if (acumAsia != 0) {
		promAsia = acumAsia / VuelosAsia ;
	}
	
	
	if (cantidadTotal > 4000000) {
		presioFin = totalcosto * 0.7;
	}else if (cantidadTotal > 2000000 ) {
		presioFin = totalcosto * 0.8; 
	}
	
	document.write("a) el origen con mayor vacunas es  " + mayorvacunas + "<br>");
	document.write("b)  el promedio de vacunas de Asia es " + promAsia + "<br>");
	document.write("c) el total sin descuento es  " + totalcosto + "<br>");
	if (cantidadTotal > 200000) {
		document.write("d) el total con descuento es " + presioFin + "<br>");
	}else{
		document.write("d) no se hizo descuento por no pasar los 2millones " + totalcosto + "<br>");
	}
	
	


	
		
	
}
/*let origen;
	let cantidad;
	let costo;
	let cantAS = 0;
	let acumAS = 0;
	let acumEU = 0;
	let acumUSA = 0;
	let origenmax;
	let promAS;
	let totalcost = 0;
	let presioFin;

	for (let i = 0; i < 4.; i++){
		origen = prompt("ingresen el producto (Asia/Europa/USA)");
		while (origen != "Asia" && origen != "Europa" && origen != "USA") {
			origen = prompt("Error. ingresen el producto (Asia/Europa/USA)");
		}
		cantidad = parseInt(prompt("ingrese la cantidad de productos (100 y 300)"));
		while (!(cantidad >= 100 && cantidad <= 300)) {
			cantidad = parseInt(prompt("Error. ingrese la cantidad de productos (no mas que 1000)"));
		}
		costo = parseInt(prompt("ingrese un costo entre (1millon y 5millones)"));
		while (!(costo >= 1000000 && costo <= 5000000 )) {
			costo = parseInt(prompt("Error. ingrese un numero entre (1millon y 5millones))"));
		}

		
		if (origen == "Asia") {
			acumAS += cantidad
			cantAS++;
		}else if (origen == "Europa") {
			acumEU += cantidad;
		}else{
			acumUSA += cantidad
		}
		if (costo >= 1) {
			totalcost +=costo
		}
		
	
	}
	if (costo > 4000000) {
		presioFin = totalcost * 0.3 /100;
	}else if (cantidad > 2000000 ) {
		presioFin = totalcost * 0.2 / 100
	}
	
	if(acumAS > acumEU && acumAS > acumUSA){
        origenmax = "Asia";
	}else if (acumEU >= acumUSA && acumEU> acumUSA){
       origenmax = "Europa";
	}else {
      origenmax = "USA";
	}
	promAS = acumAS / cantAS;

	document.write("a) el origen con mayor vacunas es  " + origenmax + "<br>");
	document.write("b)  el promedio de vacunas de Asia es " + promAS + "<br>");
	document.write("c) el total sin descuento es  " + totalcost+"<br>");
	document.write("d) el total con descuento es " + presioFin + "<br>");*/

/*a) el origen con mayor vacunas es USA
b) el promedio de vacunas de Asia es NaN
c) el total sin descuento es 11370357
d) el total con descuento es undefined 
a) el origen con mayor vacunas es Asia
b) el promedio de vacunas de Asia es Infinity
c) el total sin descuento es 10000000
d) el total con descuento es undefined*/