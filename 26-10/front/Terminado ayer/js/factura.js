window.addEventListener("load",function(){
	var boton 						= document.getElementById("btnAgregar");
	var inputCantidad 				= document.getElementById("inputCantidad");
	var inputPUnitario 				= document.getElementById("inputPUnitario");
	boton.addEventListener("click",function(){
		var tabla 					= document.getElementById("miTabla");
		var selectProducto 			= document.getElementById("selectProducto");
		var inputCantidad 			= document.getElementById("inputCantidad");
		var inputPUnitario 			= document.getElementById("inputPUnitario");

		var fila 					= document.createElement("tr");
		var columnaProducto 		= document.createElement("td");
		var columnaCantidad 		= document.createElement("td");
		var columnaPUnitario 		= document.createElement("td");
		var columnaTotal 			= document.createElement("td");

		columnaProducto.innerHTML 	= selectProducto.options[selectProducto.selectedIndex].innerHTML;
		columnaCantidad.innerHTML	= inputCantidad.value;
		columnaPUnitario.innerHTML	= inputPUnitario.value;
		columnaTotal.innerHTML		= parseFloat(parseFloat(inputCantidad.value) * parseFloat(inputPUnitario.value));

		fila.append(columnaProducto);
		fila.append(columnaCantidad);
		fila.append(columnaPUnitario);
		fila.append(columnaTotal);

		tabla.append(fila);
	});
	inputCantidad.addEventListener("keyup",function(){
		var cantidad 				= parseFloat(this.value);
		var precio 					= parseFloat(document.getElementById("inputPUnitario").value);
		var inputTotal 				= document.getElementById("inputTotal");
		inputTotal.value 			= cantidad*precio;
	});
	inputPUnitario.addEventListener("keyup",function(){
		var cantidad 				= parseFloat(document.getElementById("inputCantidad").value);
		var precio 					= parseFloat(this.value);
		var inputTotal 				= document.getElementById("inputTotal");
		inputTotal.value 			= cantidad*precio;
	});
});
/*
function agregar() {
	var tabla 					= document.getElementById("miTabla");
	var selectProducto 			= document.getElementById("selectProducto");
	var inputCantidad 			= document.getElementById("inputCantidad");
	var inputPUnitario 			= document.getElementById("inputPUnitario");

	var fila 					= document.createElement("tr");
	var columnaProducto 		= document.createElement("td");
	var columnaCantidad 		= document.createElement("td");
	var columnaPUnitario 		= document.createElement("td");
	var columnaTotal 			= document.createElement("td");

	columnaProducto.innerHTML 	= selectProducto.options[selectProducto.selectedIndex].innerHTML;
	columnaCantidad.innerHTML	= inputCantidad.value;
	columnaPUnitario.innerHTML	= inputPUnitario.value;
	columnaTotal.innerHTML		= parseFloat(parseFloat(inputCantidad.value) * parseFloat(inputPUnitario.value));

	fila.append(columnaProducto);
	fila.append(columnaCantidad);
	fila.append(columnaPUnitario);
	fila.append(columnaTotal);
}
	tabla.append(fila);
	//console.log(selectProducto.options[selectProducto.selectedIndex].innerHTML);
	//console.log(inputCantidad.value);
	//console.log(inputPUnitario.value);
*/