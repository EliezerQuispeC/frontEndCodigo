var arregloB = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arregloB)
var fil = arregloB.length;
var col = arregloB[0].length;
var arregloT = new Array(col);
for (var f = 0; f < col; f++) {
	arregloT[f] = new Array(fil);

	for (var c = 0; c < fil; c++) {
		arregloT[f][c] = arregloB[c][f];
	}
	console.log("[" + arregloT[f].toString() + "]"); 

}

