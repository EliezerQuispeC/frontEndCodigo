var constructor =  function(newNombre="S/N",newApellido="S/A",newEdad=0){
	var nombre = "Krosty";
	var edad = 50;

	var persona = {
		apellido: "El Constructor",
		gustos: {
			comida : "cebiche",
			color : "rosado",
			curso : "css"
		},
		getNombre : function () {
			//retornando
			return nombre;
		},
		setNombre : function (nuevoNombre) {
			nombre = nuevoNombre;
		}
	};
	return persona;
}

var persona1 = constructor();
persona1.setNombre("Bob");
console.log(persona1.getNombre());

/*
var per1 = constructor("Juan","Perez",32);
var per2 = constructor();
per2.nombre="KAREN";
console.log(per1.getNombre());
console.log(per2.getNombre());
*/