function mascota() {
	this.nombre = "Fido";
	this.raza = "ladrador";
	this.obtenerNombre = function () {
		return this.nombre;
	}
}
function persona() {
	this.nombre = "Juan";
	this.edad = 50;
	this.apellido = "caceres";
	this.pet = new mascota();
	this.obtenerMascota = function () {
		return this.pet;
	}
	this.obtenerNombre = function () {
		return this.nombre;
	};
	this.cambiarNombre = function (nuevoNombre){
		 this.nombre = nuevoNombre;	
	};
}

var objPersona1 = new persona();
console.log(objPersona1.obtenerNombre());
var mascota = objPersona1.obtenerMascota();
var nombredemascota = mascota.obtenerNombre();
console.log(nombredemascota);

var texto = "hola";
console.log(texto.charAt(2));

// var persona1 = constructor("Juan",67,"CACERES");
// var persona2 = constructor();
// persona2.nombre = "Kiara";
// console.log(persona2.nombre);