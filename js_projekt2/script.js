/*let brend = document.getElementsByTagName('span');


for (let auto of brend){
	console.log(auto.innerText);
}

console.log('---------------------');
 let modeli = document.getElementsByClassName('automobil-model');


for (let model of modeli){
	console.log(model.innerText);
	
}


console.log('---------------------');
let najbolji = document.getElementById('recenica');
console.log(najbolji.innerText);


console.log(brend[0].innerText);
console.log(brend[1].innerText);
console.log(brend[2].innerText);

console.log('---------------------');


let brend = document.querySelectorAll('span');

for (let auto of brend){
	console.log(auto.innerText);
}

//console.log(brend);
console.log('---------------------');
let modeli = document.querySelectorAll('.automobil-model');
console.log(modeli);

for (let model of modeli){
	console.log(model.innerText);
	
}
console.log('---------------------');

let recenica = document.querySelector('#recenica');

console.log(recenica.innerText);

console.log('---------------------');
*/
// seletiranje elementa po ID-u i brisanje iz HTML - a
let recenica = document.querySelector('#recenica');
recenica.remove(); // sluzi za brisanje 

//kreiranje novog div elementa 
let noviEl = document.createElement('div');
noviEl.classList = 'novi-element'; // dodajemo klasu
noviEl.innerHTML = '<hr>Pozdrav!';// dodajemo html i tekst



let body = document.querySelector('body'); // odabiremo body


body.appendChild(noviEl); // na kreaju body taga dodajemo nas novi element 


