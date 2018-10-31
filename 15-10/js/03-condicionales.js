var miVariable = 90;
var miVariable2 = 100;

var promedio = 19;
var aprueba = false;

/*
if (miVariable > 90) {
	console.log(miVariable + " es mayor a 90");
}

if (miVariable < 90) {
	console.log(miVariable + " es menor a 90");
}

if (miVariable == 90) {
	console.log(miVariable + " es igual a 90");
}
*/
/*
if (miVariable >= 90 && miVariable2 >= 80){
	console.log("Se cumple la condición");
}

if ((miVariable >= 90 || miVariable2 >= 500) && miVariable % 9 == 0){
	console.log("Se cumple la condición 2");
}

if (!(miVariable < 50)) {
	console.log("La variable no es mayor a 50");
}
*/

if (promedio > 13) {
	aprueba = true;
}

if (aprueba) {
	console.log("aprueba");
}
else {
	console.log("desaprueba");
}

var dia = 1;
switch (dia) {
	case 1:
		console.log("Lunes")
		break;
	case 2:
		console.log("Martes")
		break;
	case 3:
		console.log("Miércoles")
		break;
	case 4:
		console.log("Jueves")
		break;
	case 5:
		console.log("Viernes")
		break;
	case 6:
		console.log("Sábado")
		break;
	case 7:
		console.log("Domingo")
		break;
	default:
		console.log("Ingrese un dia válido")
		break;
}