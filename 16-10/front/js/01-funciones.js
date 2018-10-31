//Crear menu para que el usario elija la operación e introduzca dos números a opera

function sumar(){
	var suma = n1 + n2;
	return suma;
}

function restar(){
	var resta = n1 - n2;
	return resta;
}

function multiplicar(){
	var multiplica = n1 * n2;
	return multiplica;
}
function dividir(){
	var divide = n1 / n2;
	return divide;
}

function imprimirRespuesta(operacion){
	console.log('La ' + operacion + ' es ' + respuesta);
}

var menu = "/////////MENU/////////\n";
menu += " 's' - SUMAR \n";
menu += " 'r' - RESTAR \n";
menu += " 'm' - MULTIPLICAR \n";
menu += " 'd' - DIVIDIR \n";
menu += "///////////////////////// \n";
menu += "Ingrese la opción";

var opcion = prompt(menu);
var n1 = parseInt(prompt("Ingrese el primer número"));
var n2 = parseInt(prompt("Ingrese el segundo número"));
var respuesta = 0;

switch(opcion){
	case "s":
		respuesta = sumar();
		imprimirRespuesta("suma");
		break;
	case "r":
		respuesta = restar();
		break;
	case "m":
		respuesta = multiplicar();
		break;
	case "d":
		respuesta = dividir();
		break;

	default:
		console.log('La opción es incorrecta');
		break;
}


/*
console.log('La suma es: ' + 			(n1+n2));
console.log('La resta es: ' + 			(n1-n2));
console.log('La multiplicacion es: ' + 	(n1*n2));
console.log('La división es: ' + 		(n1/n2));
*/
