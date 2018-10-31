var campo1 = prompt("Ingrese cantidad de adultos (mínimo 2)");//1
var campo2 = prompt("Ingrese cantidad de niños (mínimo 2)");//5
var adultos = parseInt(campo1);
var niños = parseInt(campo2);
var iteraciones = 0;

if(adultos == 0){
	if (niños == 1 || niños == 2) {
		iteraciones = 1;
		alert(iteraciones);
	}
	if (niños > 2){// 3-4; 4-6; 5-8
		iteraciones = 2 + ((niños-2)*2);
		alert(iteraciones);
	}
}

if(adultos > 1){//2 adultos a mas
	if(niños <= 1){// Si hay 1 o 0 niños
		alert("Tiene que haber por lo menos 2 niños");
	}
	else{//Si es que hay mas de 2 niños
		if(adultos == 2 && niños == 2){
			iteraciones = 9;
			alert(iteraciones);
		}
		if(adultos > 2){//3
			if (niños == 2){//17
				iteraciones = 9 + ((adultos - 2) * 4);
				alert(iteraciones);
			}
			if (niños > 2){
				iteraciones = 9 + ((adultos - 2) * 4) + ((niños-2) * 2);
				alert(iteraciones);
			}
			
		}
	}
}
if(adultos == 1){//Si es que hay 1
	if(niños == 0){
		alert(`Se necesitan ${adultos} iteraciones`);
	}
	if(niños == 1){
		alert(`Se necesitan por lo menos 2 niños`)
	}
	if(niños == 2){
		iteraciones = 5;
		alert(iteraciones);

	}
	if(niños > 2){
		iteraciones = 5 + ((niños-2)*2);
		alert(iteraciones);
		}
}

if (adultos==0 && niños==0){
	alert("No seas gracioso");h
}
if(adultos<0 || niños<0){
	alert("No seas gracioso");
}
if()