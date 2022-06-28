
//animacije
let crashRide= document.querySelector('#crash-ride');
let hiHatTop = document.querySelector('#hihat-top');

const animateCrashOrRide = () => {

	crashRide.style.transform = 'rotate(0deg) scale(1.5)';

}

const animateHiHatClosed = () => {

hiHatTop.style.top = '171px';

}

//za stisnute tipke
window.addEventListener("keydown", (event) => {
	let code = event.keyCode;


	let keyElement = document.querySelector(`div[data-key="${code}`);
// if ako ne postoji return prekini sa listenerom
	if(!keyElement){
		return;
	}

	
	// za svaku tipku tipka po broju i uvjek da krece od pocetka zvuk
	let audio = document.querySelector(`audio[data-key="${code}"]`);
	audio.currentTime = 0;
	audio.play();
//switch za animacije
switch(code) {
	case 69:
	case 82:
		animateCrashOrRide();
		break;
		case 75:
		case 73:
			animateHiHatClosed();
			break; 
}

	keyElement.classList.add('playing');

});

// funkcije za uklanjanje animacije tj vracanje na prvobitno stanje
const removeCrashRideTransition = e => {

	if(e.propertyName !== 'transform') return;

	e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
	

}

const removeHiHatTopTransition = e => {
	if(e.propertyName !== 'top') return;
	//e.target.classList.remove('playing');
	e.target.top = '166px';
}

const removeKeyTransition = e => {
	if(e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');
}
let drumKeys = document.querySelectorAll('key');

drumKeys.forEach(key => {
	key.addEventListener("transitionend", removeKeyTransition)
});

crashRide.addEventListener("transitionend", removeCrashRideTransition);
hiHatTop.addEventListener("transitionend", removeHiHatTopTransition);






