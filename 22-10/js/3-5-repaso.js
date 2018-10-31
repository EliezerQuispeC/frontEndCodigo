var directorio = new Array();
var persona1 = new Array();
var persona2 = new Array();
var persona3 = new Array();
var persona4 = new Array();

persona1["nombre"] = "Juan";
persona1["edad"] = 22;
persona2["nombre"] = "Luis";
persona2["edad"] = 10;
persona3["nombre"] = "Mateo";
persona3["edad"] = 7;
persona4["nombre"] = "Gabriela";
persona4["edad"] = 4;

directorio.push(persona1,persona2,persona3,persona4);

var menor = directorio[0]["edad"];
var indice = 0;
for(var i = 1; i < directorio.length; i++){
	if (menor > directorio[i]["edad"]){
		menor = directorio[i]["edad"];
		indice = i;
	}
}

alert("la persona de menor edad es => "+directorio[indice]["nombre"]);

var nombre = "Gabriela";
var indice = 0;
for(var i = 0; i < directorio.length; i++){
	if (nombre == directorio[i]["nombre"]){
		indice = i;
		alert("Gabriela esta en el indice " + indice)
	}
}