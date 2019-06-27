window.onload = function () {
    var inputSch = document.querySelector("input");
	var hiddensch =document.querySelector(".hiddensch");
		inputSch.addEventListener("click", function(){
		hiddensch.style.display = "block";
	});
	


		var navmenu = document.querySelector("nav");
		var navmenuAs = navmenu.querySelectorAll("a");
		navmenu.addEventListener("click", function(e){
				e.preventDefault();
				for(var i = 0; i < navmenuAs.length; i++) {
					navmenuAs[i].style.borderBottom = "4px solid white";
					console.log(navmenuAs[i])
				}
		})
}