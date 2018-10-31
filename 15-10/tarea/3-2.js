var horasTrabajadas = 70;
var sueldo = 0;
var costoHora = 5;
var horasExtras = 0

if (horasTrabajadas >= 40) {
	horasExtras = horasTrabajadas - 40;
	horasTrabajadas = 40;
}
sueldo = (horasTrabajadas*costoHora) + (horasExtras*costoHora*2);
console.log("Su sueldo es = " + sueldo);