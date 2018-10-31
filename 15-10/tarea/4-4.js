var loteFocos = [32,34,54,65,21,25,33];
var foco = 0;
var focoVerde = 0;
var focoBlanco = 0;
var focoRojo = 0;
for (var i = 0; i < loteFocos.length; i++) {
	foco = loteFocos[i];
	if(foco % 2 == 0){
		focoVerde++;
		continue;
	}
	if (foco % 3 == 0) {
		focoBlanco++;
		continue;
	}
	if (foco % 5 == 0){
		focoRojo++;
		continue;
	}	
}
console.log("Focos verdes = " + focoVerde);
console.log("Focos blancos = " + focoBlanco);
console.log("Focos rojos = " + focoRojo);
