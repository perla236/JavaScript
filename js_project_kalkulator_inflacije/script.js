function inflationCalculator(){
	let inflationRate = document.querySelector('#inflationRate');
	let money = document.querySelector('#money');
	//pretvaranje stringa u float
	inflationRate = parseFloat(inflationRate.value);
	money = parseFloat(money.value);
	let years = document.querySelector('#years').value;
	years = parseFloat(years);
	//formula za izracunavanje
	let worth = money + (money * (inflationRate / 100));
	console.log(worth);

	for(let i=1; i < years; i++){
		worth += worth * (inflationRate / 100);

	}
	// na dvije decimale
	worth = worth.toFixed(2);
	//kreiranje tipa div
	let newElement = document.createElement('div');
	// dodjeljivanje klase
	newElement.className = 'new-value';
	//nadopisivanje u dokument
	newElement.innerText = `Današnjih ${money}€ vrijedi isto kao ${worth}€ za ${years} godina.`;
	//gdje cemo ga smjestiti
	document.querySelector('.container').appendChild(newElement);
}




// pretvaranje stringa u int parseInt
	//inflationRate = parseInt(inflationRate.value);
	//money = parseInt(money.value);

	// vrijednost int a a stringa je innerText console.log(inflationRate.value);
	//console.log(money.value);
	//querySelector za id a All za sve nekog tipa 