function Factura(){
	this.fecha 		= "";
	this.precio 	= "";
	this.nroFactura = "";
	this.cliente 	= new Cliente();
	this.vehiculo 	= new Vehiculo();

	this.getFecha 		= function(){ return this.fecha};
	this.setFecha 		= function(nuevaFecha){ this.fecha = nuevaFecha; };

	this.getPrecio 		= function(){ return this.precio};
	this.setPrecio 		= function(nuevoPrecio){ this.precio = nuevoPrecio; };

	this.getNroFactura 	= function(){ return this.nroFactura};
	this.setNroFactura 	= function(nuevoNroFactura){ this.nroFactura = nuevoNroFactura; };

	this.getCliente 	= function(){ return this.cliente};
	this.setCliente 	= function(nuevoCliente){ this.cliente = nuevoCliente; };

	this.getVehiculo 	= function(){ return this.vehiculo};
	this.setVehiculo 	= function(nuevoVehiculo){ this.vehiculo = nuevoVehiculo; };
}