var persona = {
	nombre: "Carlitos",
	apellido: "Málaga",
	edad: 40,
	gustos: {
		comida : "cebiche",
		color : "rosado",
		curso : "css"
	},
	getNombre : function () {
		//retornando
		return this.nombre;
	},
	setNombre : function (nombre) {
		this.nombre = nombre;
	}
};
document.write(`<h1>Nombre Inicial => ${persona.getNombre()}<br>${persona.setNombre("Pepito")}<br>Nombre Final => ${persona.getNombre()}<br>Apellido => ${persona.apellido}<br>Edad => ${persona.edad}<br>`);
document.write(`Curso favorito => ${persona.gustos.curso}</h1>`);
