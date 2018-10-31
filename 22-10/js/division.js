var dividendo = prompt("Ingresa el dividendo");
var divisor = prompt("Ingresa el divisor");
var cociente = 0;
var residuo = 0;
while(dividendo >= divisor){
	dividendo = dividendo - divisor;
	cociente++;
	residuo = dividendo;
}
alert(`El cociente es : ${cociente} y el residuo es : ${residuo}`);