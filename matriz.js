function explosion(){
	alert("Boom!");
	document.write("<h1>Mala elección</h1>");
}


var x, y;
var textos = ["Cesped","Bomba"];
var campo = [ // 1 = bomba
	[1,0,0],
	[0,1,0],
	[1,1,1]	]


alert("Cuidado!!!\n" + "Estas en un campo minado");
	x = parseInt(prompt("Ingresa un valor entre 0 y 2 para la posición en el eje X"));
	y = parseInt(prompt("Ingresa un valor entre 0 y 2 para la posición en el eje Y"));	

		//valida que el usuario no ingrese undefined
		if( x < 0 || x > 2 || y < 0 || y > 2 
			|| (x >= 0 && typeof campo[x][y] == "undefined") 
			|| (isNaN(x) || isNaN(y))
			){
			alert("Fuera del campo");
			explosion();
		}else{
			//permite encontrar el resultado sin ifs
			var posicion = campo[x][y];
			document.write (textos[posicion]);
		}