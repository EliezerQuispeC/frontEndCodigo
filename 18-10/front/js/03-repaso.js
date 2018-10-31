var carro  = {
	color : "rojo",
	peso : "1500",
	llantas :{
		a : "llata1",
		b : "llata2",
	},
	mostrarColor : function (){
		return this.color;
	},
	cambiarColor : function(colorNuevo){
		this.color = colorNuevo;
	}

}

var carro1 = carro;
carro1.color = "azul";
console.log(carro1.color);
var carro2 = carro;
console.log(carro2.color);