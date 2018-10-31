function Cliente(nNombre,nDni){
	this.nombre 		= nNombre;
	this.dni 			= nDni;

	this.getNombre 		= function(){ return this.nombre};
	this.getDni 		= function(){ return this.dni};

	this.setNombre 		= function(nuevoNombre){ this.nombre = nuevoNombre; };
	this.setDni 		= function(nuevoDni){ this.dni = nuevoDni; };

}