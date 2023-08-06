if(cookieSet("InfoBoxHidden")){
	let element = document.getElementById("infoBox");
	element.classList.toggle("hidden");
}

function hideInfoBox(daysOrMonth, duration){
	// Eingabe überprüfen, ob es eine Zahl ist
	if(isNaN(duration)) {
		duration = 2;
	}

	let factor = 1;
	// Zeitraum überprüfen, ob er in Tagen ist
	if(daysOrMonth === 'd') {
		factor = 24*60;
	}
	const d = new Date();
	d.setTime(d.getTime() + (duration*factor*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = "InfoBoxHidden=true; expires=" + expires + ";path=/;SameSite=Strict";
}

function cookieSet(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return true;
		}
	}
	return false;
}