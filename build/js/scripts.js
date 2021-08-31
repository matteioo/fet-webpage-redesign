// Open article on click without an anchor-tag.
function openArticle(link){
	window.location.href=link;
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

// Filter onChange
function addMonthSelector() {
	const yearSelectorDIV = document.getElementById("yearSelectorDIV");
	const yearSelector = document.getElementById("yearSelector");
	const monthSelectorDIV = document.getElementById("monthSelectorDIV");
	const monthSelector = document.getElementById("monthSelector");

	console.log(yearSelector.value);

	if(addMonthSelector.previousYearValue === undefined){
		monthSelectorDIV.classList.toggle("block");
		addMonthSelector.previousYearValue = "";
	}

	if((addMonthSelector.previousYearValue == "" && yearSelector.value != "") || (addMonthSelector.previousYearValue != "" && yearSelector.value == "")){
		monthSelectorDIV.classList.toggle("hidden");
	}

	addMonthSelector.previousYearValue = yearSelector.value;

}

// Modals
const body = document.querySelector("body");
const modal_1 = document.querySelector("#modal-container-1");
const trigger_1 = document.querySelector("#modal-trigger-1");
const closeButton_1 = modal_1.querySelector(".modal-closeButton");

function toggleModal_1() {
		modal_1.classList.toggle("show-modal");
		body.classList.toggle("overflow-y-hidden");
		trigger_1.classList.toggle("hidden");
}

function windowOnClick_1(event) {
		if (event.target === modal_1) {
				toggleModal_1();
		}
}

trigger_1.addEventListener("click", toggleModal_1);
closeButton_1.addEventListener("click", toggleModal_1);
window.addEventListener("click", windowOnClick_1);