function validation(){
	let email = document.querySelector('#email');
	let value = email.value
	if (value.includes('@') && value.includes('.')){
		let pozicijaAt = value.indexOf('@');
		let pozicijaToc = value.indexOf('.');
		let izmedjuAtToc = value.substring(pozicijaAt + 1, pozicijaToc);
		let odNulaDoEt = value.substring(0, pozicijaAt);
		let odTocDoK = value.substring(pozicijaToc + 1, value.length);
		if(izmedjuAtToc.length > 0 && odNulaDoEt.length > 2 && odTocDoK.length > 2){
			console.log('Mail je dobar');
		}

		else{
			console.log('Nije dobar');
		}


	}
	else{

		console.log('Mail nije validan');
	}
	
	


}