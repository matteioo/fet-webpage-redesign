// Open/close the mobile menu items on mobile only. Will be overwritten on bigger screen sizes
function toggleMenu(){
	let element = document.getElementById("navBarContent");
	element.classList.toggle("hidden");
}

// Open article on click without an anchor-tag.
function openArticle(link){
	let current = window.location.pathname;
	console.log("/build/" + link);
	window.location.pathname = "/build/" + link;
}

if(cookieSet("InfoBoxHidden")){
	let element = document.getElementById("infoBox");
	element.classList.toggle("hidden");
}

function hideInfoBox(){
	let element = document.getElementById("infoBox");
	element.classList.toggle("hidden");
	
	let exMinutes = 2; // Gültigkeit des Cookies in Tagen
	const d = new Date();
	d.setTime(d.getTime() + (exMinutes*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = "InfoBoxHidden=true; expires=" + expires + ";path=/;SameSite=Strict";
}

function cookieSet(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return true;
		}
	}
	return false;
}