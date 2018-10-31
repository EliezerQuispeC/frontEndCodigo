function llenarFrutas(){
var nroFrutas = parseInt(prompt("¿Cuántas frutas desea registrar?"));
	if (!isNaN(nroFrutas) && nroFrutas > 0){
		for (var i = 0; i < nroFrutas; i++) {
			var fruta = prompt("Ingresa la fruta");
			arreglo3.push(fruta);
		}

		arreglo3.forEach((elemento,index,arr)=>
		{
			document.write(`${index} => ${elemento} => ${arr}<br>`);
		});
	}
	else{
		alert("Ingreso inválido");
	}
}

var arreglo = [1,2,3,4];
var arreglo2 = new Array(4);
var arreglo3 = new Array();

arreglo3.push("Pera");
arreglo3.push("Manzana");
arreglo3.push("Naranja");

arreglo3.sort();//ordenar arreglo
arreglo3.forEach((elemento,index,arr)=>{
		document.write(`${index} => ${elemento} => ${arr}<br>`);
	});

for (var x in arreglo3){
	document.write(`${x} <br>`);
}