

window.onload = function(){
	var navMenu = document.querySelector(".nav_menucover");
	var modelbtn = document.querySelector(".model_btn");
		modelbtn.addEventListener("click", function(e){
		e.preventDefault();
		if (navMenu.className === "nav_menucover") {
			navMenu.classList.add("on");
			
		} else {
			navMenu.classList.remove("on");
		}
	})
}