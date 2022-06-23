

//ovo su primjeri
/*alert('Pozdrav iz fajla')
console.log('Pozdrav za konzolu')
document.write('Pozdrav sa stranice')
window.alert('Pozdrav iz pop-up a')
console.error('Pozdrav greška')
console.warn('Pozdrav sa upozorenjem')
window.open()
*/

document.write('Pozdrav sa stranice')
document.getElementById('poruka').innerText = 'Pozdrav!'
//ovo je kod koji ce u konzoli ispisati test
//console.log('test')
document.getElementById('poruka').innerText='Cao';

let varijabla;

varijabla = 'Perla je najbolji';
console.log(varijabla);
//ovo je kao integer dobijemo pravi zbroj, mogu biti i float tipa
let godine = 5;
console.log(godine);

let mjesec = 3;

let rezultat = godine + mjesec;

console.log(rezultat);

// ovo mozemo dodati broj broju 6+9=69 to su stringovi

let dan='23'; 
let sat='6';
let rezultat2= dan+sat;

console.log(rezultat2);
//ovo je string 
let stringara = 'obicni string';
//ovo se ispitivaju vrste podataka (string,integer,float...)
console.log(typeof(stringara));
// pretvaranje stringa u integer
let nekiBroj = '5';
let pretvorenBroj = parseInt(nekiBroj);
// provjera kombinacije stringa i integera kaze da je STRING
let nekiRezultat= dan + mjesec;

console.log(typeof(nekiRezultat));

// === simboli za provjeru 
let prviBroj = 5;
let drugiBroj = 10;

//nepromjenjiva "varijabla" tj konstanta 
const x = 236;

//varijable mogu pocinjati sa _broj ili $broj

// ispisivanje u jednoj liniji

let ime = 'Lovro';
let $2godine = 22;
// a ima i varijanta let recenica = 'Ja sam ' + ime + ' i imam ' + $2godine + ' godina';
// i onda console.log(recenica);
console.log('Ja sam ' + ime + ' i imam ' + $2godine + ' godina');
/*$2godine++;
$2godine += 2;  moze i -=  *=
*/
console.log('Sljedece godine cu imati ' + $2godine + ' godina');
 
// druga varijanta varijable unutar stringova

let recenica = `Ja sam ${ime} imam ${$2godine} godina`;


/*
let prviBroj= 5;
let drugiBroj = 7;

console.log(prviBroj < drugiBroj); pisat ce true
console.log((prviBroj < drugiBroj) && (prviBroj < drugiBroj)); false 
mose i || ili 

*/

//idu uvjeti primjer

let prvi = 5;
let drugi = 10;

if(prvi < drugi){

	console.log('Prvi broj je manji od drugog');
}

else {

console.log('Prvi broj nije manji od drugog');

}

/*
moze i ovako 
console.log(prviBroj < drugiBroj);
if(true) ili if(false)

*/

//drugi primjer

let vrijeme = 10;

if (vrijeme < 10) {
	console.log('Dobro jutro!');

}

else if(vrijeme < 20) {
	console.log('Dobar dan!');
}

else {

	console.log('Dobro vece!');
}

//treci...
let mesec = 6;

if(mesec === 1){
	console.log('Sijecanj');
}

else if(mesec === 2){
	console.log('Veljaca');
}


//caseovi

switch(mesec){
	case 1:
	console.log('prvi')
	break;

	case 2:
	console.log('drugi')
	break;

	case 3:
	console.log('treci')
	break;

	case 4:
	console.log('cetvrti')
	break;

	case 5:
	console.log('peti')
	break;

	case 6:
	console.log('sesti')
	break;

	case 7:
	console.log('sedmi')
	break;

	case 8:
	console.log('osmi')
	break;

	case 9:
	console.log('deveti')
	break;

	case 10:
	console.log('deseti')
	break;

	case 11:
	console.log('jedanaesti')
	break;

	case 12:
	console.log('dvanaesti')
	break;
}


//petlje

let novcanice = 25;
let vrijednostNovcanice = 10;

let counter = 0;
let counted = 0;

while(counter < novcanice){
counted++
console.log(counted);
counter++
}






















































