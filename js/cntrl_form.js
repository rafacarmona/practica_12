/* Página web rural. Rafael Carmona Arrabal @11/01/2018 */
{
	let cambiaFoto = function(number){
		switch(number){
			case 0:
				return 'imgs/background1.jpg';
			case 1:
				return 'imgs/background2.jpg';
			case 2:
				return 'imgs/background3.jpg';
		}
	}

	let init = function(){
		let botonAbrir = document.getElementById('buttonDescripcion');
		let caja = document.getElementById('textoDesc');
		let arrow = document.getElementById('arrow');
		//flechas cambia fotos.
		let picture = document.getElementById('pictureImg');
		let flechaLeft = document.getElementById("left");
		let flechaRight = document.getElementById("right");
		let contador = 0;
		let abierto = false;
		botonAbrir.addEventListener("click", function(event){
			event.preventDefault();
			if(!abierto){
				caja.className = "textoDescripcionAbierto";
				arrow.className = 'volteado';
				abierto = true;
			}
			else {
				caja.className = "textoDescripcion"; abierto = false;
				arrow.className = "";
				abierto = false;
			}
		});
		
		flechaLeft.addEventListener("click", function(event){
			console.log(contador);
			contador--;
			if(contador < 0)
				contador = 2;
			picture.src = cambiaFoto(contador);
		});

		flechaRight.addEventListener("click", function(event){
			console.log(contador);
			contador++;
			if(contador > 2)
				contador = 0;
			picture.src = cambiaFoto(contador);
		});
	}	
	window.onload = init;
}