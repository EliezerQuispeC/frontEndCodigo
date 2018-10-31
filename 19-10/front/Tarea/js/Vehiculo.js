function Vehiculo(nColor,nPlaca,nTipo,nAño,nCilindraje,nPotencia){
	this.color 		= nColor;
	this.placa 		= nPlaca;
	this.tipo 		= nTipo;
	this.año 		= nAño;
	this.cilindraje = nCilindraje;
	this.potencia 	= nPotencia;

	this.getColor 		= function(){ return this.color};
	this.getPlaca 		= function(){ return this.placa};
	this.getTipo 		= function(){ return this.tipo};
	this.getAño 		= function(){ return this.año};
	this.getCilindraje 	= function(){ return this.cilindraje};
	this.getPotencia 	= function(){ return this.potencia };

	this.setColor 		= function(nuevoColor){ this.color = nuevoColor; };
	this.setPlaca 		= function(nuevaPlaca){ this.placa = nuevaPlaca; };
	this.setTipo 		= function(nuevoTipo){ this.tipo = nuevoTipo; };
	this.setAño 		= function(nuevoAño){ this.año = nuevoAño; };
	this.setCilindraje 	= function(nuevoCilindraje){ this.cilindraje = nuevoCilindraje; };
	this.setPotencia 	= function(nuevaPotencia){ this.potencia = nuevaPotencia; };
}
