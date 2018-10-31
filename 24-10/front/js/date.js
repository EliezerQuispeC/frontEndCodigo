var fecha = new Date();
document.write(`<h1>La fecha: ${fecha}</h1>`);

var fecha1 = new Date("August 09 2018");
document.write(`<h1>La fecha1: ${fecha1}</h1>`);

var fecha2 = new Date(2018, 1, 30, 14, 50, 45);
document.write(`<h1>La fecha2: ${fecha2}</h1>`);

document.write(`<h1>Año de la fecha2: ${fecha2.getFullYear()}</h1>`);
document.write(`<h1>Dia de la fecha2 + 15 dias: ${fecha2.getDate() + 15}</h1>`);
document.write(`<h1>Hora de la fecha2 : ${fecha2.getHours()}`);

var hoy = new Date (2018,9,24);
var halloween = new Date(2018,9,31);
var milisegundos = halloween - hoy;
var segundos = milisegundos / 1000;
var minutos = segundos / 60;
var horas = minutos / 60;
var dias = horas / 24;
document.write(`<h1>Intervalo = ${dias}</h1>`);