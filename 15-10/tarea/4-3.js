var numeros = [0,2,-8,0,12,-3,90,-45,0,100000000,8.34];
var igualCero = 0;
var menorCero = 0;
var mayorCero = 0;

for (var i = 0 ; i < numeros.length ; i++) {
	if(numeros[i] > 0){
		mayorCero += 1;
	}
	else if(numeros[i] < 0){
		menorCero += 1;
	}
	else{
		igualCero += 1;
	}
}


console.log('Numeros 0 = ' + igualCero);
console.log('Numeros < 0 = ' + menorCero);
console.log('Numeros > 0 = ' + mayorCero);