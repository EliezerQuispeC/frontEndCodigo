function persona() {
	this.nombre = "Juan";
	this.edad = 50;
	this.apellido = "caceres";

	this.obtenerNombre = function () {
		return this.nombre;
	};
	this.cambiarNombre = function (nuevoNombre){
		 this.nombre = nuevoNombre;	
	};
}

var objPersona1 = new persona();
objPersona1.cambiarNombre("josefino");
console.log(objPersona1.obtenerNombre());

var objPersona2 = new persona();
console.log(objPersona2.obtenerNombre());

for (const atributo in objPersona1){
	console.log(`objPersona1.${atributo} = ${objPersona1[atributo]}`);
}

// var persona1 = constructor("Juan",67,"CACERES");
// var persona2 = constructor();
// persona2.nombre = "Kiara";
// console.log(persona2.nombre);