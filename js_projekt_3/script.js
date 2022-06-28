 /*//tradicionalni nacin 

function klikniMe (a, b){
	
	console.log(a+b);
}

klikniMe(10, 15);

//-----------------------------------
// "bolji"

const klikni_me_nova = () => {
	let a = 5;
	let b = 10;

	console.log(a+b);

}

klikni_me_nova();

// iste su samo su drugacije napisane


// pomocu strelice arrow functions, ako imamo jedan argument mozemo maknuti zagrade 
// ali nije neispravno stavljati zagrade 
// i ako imamo jednu liniju koda u funkciji ne trebaju nam viticaste 

const klinkni_me_nova = a  => console.log(a+15);


klinkni_me_nova(50);


// eventi - click,press on keyboard, scroll, haver, submit(forme), 
// change ako se dropdown neki promjeni, resize browser

const klikni= (dugme) => {

console.log(dugme.innerText);

}

let btns = document.querySelectorAll('button');

btns.forEach(function (btn)  {
	//event listener koji ceka za klik za skaki btn
	// prvi element je sta ocekuje a drugi sta ce napravit bez naziva funkcije
	btn.addEventListener("click", function (event) {
		let clicked_btn = event.target;
		

		console.log(clicked_btn.innerText);
	});
});

*/





let link = document.querySelector('#link');

link.addEventListener("click", (event) => {
	//da se ne ponasa kako je zadano 
	event.preventDefault();
	console.log(event.target);
});

//event listener za registraciju
let form = document.querySelector('form');

form.addEventListener("submit", (event) => {
	event.preventDefault();
	console.log('test');

});


//event listener za opcije
let option = document.querySelector('select');

option.addEventListener("change", (event) => {
	//event.preventDefault();
	console.log(event.target.value);

});


window.addEventListener("resize", () => {
	if(window.innerWidth > 1000) {
		console.log('Prozor veci od 1000');
	} else{
		console.log('Prozor manji od 1000')
	}
});


//event listener za tipke
let input = document.querySelector('input');
// keydown kada stisnemo dugme a keyup kad dignemo
input.addEventListener("keydown", (event) => {
	//sa .key uzima sta smo stisnuli
	//console.log(event.key);
	if(event.key === 'Delete'){
		alert('Obrisao si nesto');
	}

});


//event listener za pomicanje misa

window.addEventListener("mousemove", (event) => {
	console.log('mis pomaknut');
});



//event listener za pokretanjem misa po  input - unos

 input.addEventListener("mousemove", (event) => {
	console.log('mis pomaknut');

	});