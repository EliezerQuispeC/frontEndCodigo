var cb = 0;
var tp = prompt("Ingrese el tipo de póliza / A / B ").toUpperCase();
var bb = prompt("¿Es usted todo un bebedor? S/N?").toUpperCase() == "S" ? true : false;
var lentes = prompt("¿Usa lentes? S/N?").toUpperCase() == "S" ? true : false;
var enfermedad = prompt("¿Padece usted de enfermedades? S/N?").toUpperCase() == "S" ? true : false;
var edad = parseInt(prompt("Ingrese su edad"));
var total = 0;
cb = tp == "A" ? 1200 : 950;
total = bb ? cb + (cb*0.1) : cb;
total = lentes ? total + (cb * 0.05) : total;
total = enfermedad ? total + (cb * 0.05) : total;
total = edad > 40 ? total + (cb * 0.2) : total + (cb * 0.1);
alert(`Costo total de la póliza => ${total}`);