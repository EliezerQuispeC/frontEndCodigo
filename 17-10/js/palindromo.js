var texto = "anita lava la tina eou";
var textoFinal = texto.replace(/ /g,'').toLowerCase();
var espalindromo = true;

for (var i = 0; i < parseInt(textoFinal.length/2); i++) {
  if (textoFinal.charAt(i) != textoFinal.charAt(textoFinal.length-1-i)){
    espalindromo = false;
    break;
  }
}
//document.write(espalindromo ? "SI ES PALINDROMO" : "NO ES PALINDROMO");
/*if (espalindromo){
  document.write("SI ES PALINDROMO");
}else{
  document.write("NO ES PALINDROMO");
}*/
var letraA = 0;
var letraE = 0;
var letraI = 0;
var letraO = 0;
var letraU = 0;

for (var i = 0; i < textoFinal.length; i++) {
  switch (textoFinal[i]) {
    case "a":
      letraA++;
      break;
    case "e":
      letraE++;
      break;
    case "i":
      letraI++;
      break;
    case "o":
      letraO++;
      break;
    case "u":
      letraU++;
      break;
    default:
      // statements_def
      break;
  }
}

document.write(`letra a ${letraA} <br>letra e ${letraE} <br>letra i ${letraI} <br>letra o ${letraO} <br>letra u ${letraU}`);