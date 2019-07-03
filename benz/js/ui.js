

window.onload = function(){
	var navCover = document.querySelectorAll(".nav_menucover");
	var navMenus = document.querySelectorAll(".nav_menucover > div");
	var navMenuLis = document.querySelectorAll("nav > ul > li");
	var navMenuBtn = document.querySelectorAll("nav > ul > li > a");

	for(let i = 0; i < navMenuBtn.length; i++) {
		navMenuBtn[i].onclick = (function(j){
			return function(e){
				e.preventDefault();
				for(var k = 0; k < navMenuBtn.length; k++ ){
					if (navMenus[k].classList.contains("on")) {
						navMenus[k].classList.remove("on");
						navMenuLis[k].classList.remove("on")
						navCover.style.display = "none"
					} 	
				}
				navMenus[j].classList.add("on");
				navMenuLis[j].classList.add("on");
				navCover.style.display = "block"
			}
		})(i);
	}

	var moedelMenuLis = document.querySelectorAll(".model_menu > li");
	var moedelMenuBtn = document.querySelectorAll(".model_menu > li > a");
	var modelPhotos = document.querySelectorAll(".model_photo > ul");

	for(var i = 0; i < moedelMenuBtn.length ;i++) {
		
		moedelMenuBtn[i].onclick = (function(j){
			return function(e){
				e.preventDefault();
				for(var k = 0; k < moedelMenuBtn.length; k++){
					if(modelPhotos[k].classList.contains("on")){
						modelPhotos[k].classList.remove("on");
						moedelMenuLis[k].classList.remove("on")
					}
				}
				moedelMenuLis[j].classList.add("on")
				modelPhotos[j].classList.add("on")
			}
		})(i)
	}
}