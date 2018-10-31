function darFormato() {
	var parrafo 					= document.getElementById("parrafo");
	parrafo.style.fontSize 			= '3em';
	parrafo.style.border 			= '1px solid #ff4455';
}
function reducir() {
	var parrafo 					= document.getElementById("parrafo");
	var tamaño 						= window.getComputedStyle(parrafo).fontSize;
	var tamañoEnTexto 				= tamaño.toString();
	//var tamañoNumber 				= parseInt(tamañoEnTexto.split("p")[0])
	var tamañoNumber 				= parseInt(tamañoEnTexto.slice(0,-2));
	tamañoNumber					= tamañoNumber - 2;
	parrafo.style.fontSize 			= tamañoNumber + "px";
}
function aumentar() {
	var parrafo 					= document.getElementById("parrafo");
	var tamaño 						= window.getComputedStyle(parrafo).fontSize;
	var tamañoEnTexto 				= tamaño.toString();
	//var tamañoNumber 				= parseInt(tamañoEnTexto.split("p")[0])
	var tamañoNumber 				= parseInt(tamañoEnTexto.slice(0,-2));
	tamañoNumber					= tamañoNumber + 2;
	parrafo.style.fontSize 			= tamañoNumber + "px";
}
function negrita() {
	var parrafo						= document.getElementById("parrafo");
	if (parrafo.style.fontWeight 	== "bold"){
		parrafo.style.fontWeight 	= "normal";
	}else{
		parrafo.style.fontWeight 	= "bold";
	}

}
function oblicua() {
	var parrafo						= document.getElementById("parrafo");
	if (parrafo.style.fontStyle 	== 'oblique'){
		parrafo.style.fontStyle 	= 'normal'
	}
	else{
		parrafo.style.fontStyle 	= 'oblique';
	}
}
function subrayado() {
	var parrafo						= document.getElementById("parrafo");
	if (parrafo.style.textDecoration== 'underline'){
		parrafo.style.textDecoration= 'none';
	}
	else{
		parrafo.style.textDecoration= 'underline';
	}
}
function cambiarTexto() {
	var input 						= document.getElementById("miInput");
	var parrafo 					= document.getElementById("parrafo");
	parrafo.innerHTML 				= input.value;
}
function insertarLabel(){
	var miLabel = document.createElement("label");
	miLabel.innerHTML = "Mi etiqueta";
	var formulario = document.getElementById("formulario");
	formulario.appendChild(miLabel); //agregar al final
	//formulario.prepend(miLabel); //agregar al inicio
}