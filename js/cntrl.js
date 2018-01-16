/* Página web rural. Rafael Carmona Arrabal @11/01/2018 */
{

	let init = function(){
		let botonAbrir = document.getElementById('botonBuscador');
		let botonCerrar = document.getElementById('botonCerrar');
		let caja = document.getElementById('cajaBuscador');
		let buscador = document.getElementById("head");	
		botonAbrir.addEventListener("click", function(event){
			event.preventDefault();
			caja.className = "buscadorAbierto";	
		});

		botonCerrar.addEventListener("click", function(event){
			event.preventDefault();	
			caja.className = "buscadorCerrado";
		});


		document.onscroll = function() {
			var scroll = document.documentElement.scrollTop || document.body.scrollTop;
			if(scroll>=(buscador.offsetHeight+50)){
				//alert("hola");
				buscador.className = "headerScroll";
			}else{
				buscador.className = "headerSinScroll";
			}
		};
		
	}	
	window.onload = init;
}