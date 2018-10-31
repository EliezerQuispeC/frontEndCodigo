var texto = "Tecsup Profesionales en Ingenieria";
var arreglo = [3,4,5];

document.write(`Texto inicial=> ${texto} <br>`);
document.write(`Arreglo inicial=> ${arreglo.toString()} <br>`);

document.write("Tamaño de texto=> " + texto.length + "<br>");
document.write("Tamaño del arreglo=> " + arreglo.length + "<br>");

document.write(`Texto en mayuscula=> 											${texto.toUpperCase()} <br>`);
document.write(`Texto en minuscula=> 											${texto.toLowerCase()} <br>`);
document.write(`Reemplaza el primer caracter (T)=> 								${texto.replace('T','P')} <br>`);
document.write(`Reemplaza todos los caracteres (e)=> 							${texto.replace(/e/g, 'E')} <br>`);
document.write(`Reemplaza la subcadena ("Ingenieria")=> 						${texto.replace(/Ingenieria/g,'Medicina')} <br>`);
document.write(`Devuelve la subcadena de los indices firstIn y lastOut (0,6)=> 	${texto.substring(0,6)}<br>`);
document.write(`Devuelve la subcadena desde el indice firstIn (22)=> 			${texto.substring(22)}<br>`);
document.write(`Devuelve la cadena desde el final al principio (-19,-8)=> 		${texto.slice(-19,-8)}<br>`);
document.write(`Devuelve una porcion final de la cadena (-5)=> 					${texto.slice(-5)}<br>`);
document.write(`Devuelve un array de dividir por el caracter separador=> 		${texto.split('e')}<br>`);
document.write(`Devuelve el caracter en el indice indicado [7]=> 				${texto[7]}<br>`);
document.write(`Devuelve la letra en la posición (0)=> 							${texto.charAt(0)}<br>`);
document.write(`Devuelve el indice de la primera aparición (i)=> 				${texto.indexOf('i')}<br>`);
document.write(`Devuelve el la aparicion empezando desde el indice (e,6)=>		${texto.indexOf('e',6)}<br>`);
document.write(`Devuelve el indice de la ultima aparición (e)=>					${texto.lastIndexOf('e')}<br>`);
document.write(`Devuelve la penultima palabra de cualquier texto 				${texto.split(' ')[texto.split(' ').length-2]}`);
