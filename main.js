function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})

	function leiaMais(){
		var pontos=document.getElementById("pontos");
		var maisTexto=document.getElementById("mais");
		var btnLeiaMais=document.getElementById("btnLeiaMais");
	
		if(pontos.style.display === "none"){
			pontos.style.display="inline";
			maisTexto.style.display="none";
			btnLeiaMais.innerHTML="Leia Mais";
			
		}else{
			pontos.style.display="none";
			maisTexto.style.display="inline";
			btnLeiaMais.innerHTML="Leia Menos";
		}
	
	}