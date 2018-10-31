var persona = [["Juan",19],["Jose",20],["Luis",22]];
if (persona[0][1] < persona[1][1]){
	if (persona[0][1] < persona[2][1]) {
		console.log(persona[0][0] + " es el menor");
	}
	else {
		console.log(persona[2][0] + " es el menor");
	}
}
else if(persona[2][1] < persona[1][1]){
	console.log(persona[2][0] + " es el menor");
}
else{
	console.log(persona[1][0] + " es el menor");
}