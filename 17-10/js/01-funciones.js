function imprimirEnConsola(dato){//dato es una variable local
	console.log('Dato ingresado => ' + dato);
}
function imprimirEnPagina(dato){//dato es una variable local
	document.write("<h1>Dato ingresado => " + dato + "</h1>");
}
imprimirEnConsola("Josue");
imprimirEnPagina("Eliezer");

//Parámetros opcionales
//
//...libros:Variable de tipo rest
function mostrarLibros(l1,l2="S/N",...libros){
	texto = "";
	texto += "<ul>";
	texto += "<li>";
	texto += l1;
	texto += "</li>";
	texto += "<li>";
	texto += l2;
	texto += "</li>";

	for (var i = 0; i < libros.length; i++) {
		texto += "<li>";
		texto += libros[i];
		texto += "</li>";	
	}
	texto += "</ul>";

	document.write(texto);
}

mostrarLibros("Aves sin nido", "Sin destino", "Harry Potter", "EDSLA");

//Funciones anónimas
//
var variable = function(dato1,dato2){
	document.write("<h1>Dato</h1>" + dato1 + dato2);
};

variable(1,90);
variable = 7;
//variable(2); //Esta linea da error porque variable a mutado de una funcion a un entero

//Callback //Closure
//
function sumar(n1,n2,doble,triple){
	console.log(n1+n2);
	doble(n1);
	triple(n2);
}
sumar(9,2,function(parametro){
	console.log(parametro*2);
}, function(parametro){
	console.log(parametro*3);
});

// Funciones de flechita
// 
sumar(10,20,(parametro) => {
	console.log(parametro*2);
}, function(parametro){
	console.log(parametro*3);
});

//Plantillas de texto
//
function mostrarLibrosV2(l1,l2){ //` La tilde chueca
	var texto = ` 
		<ul>
			<li> ${l1} </li>
			<li> ${l2} </li>
		</ul>
	`;
	document.write(texto);
};

mostrarLibrosV2("Matilda","Daniel el travieso");
