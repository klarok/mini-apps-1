let SUBMIT  = 'submitJSON';
let INPUT = 'inputJSON';

// let submitButton = document.getElementById(SUBMIT);
submitButton = document.getElementById(SUBMIT);
let formInput = document.getElementById(INPUT);
let form = document.getElementById('formJSON');

let renderCSV = (data) => {
	document.getElementById('showCSV').innerHTML = `<pre>${data}</pre>`;
};

submitButton.addEventListener('click', (e) => {
	let file = formInput.files[0];
	let formData = new FormData(form);
	console.log(file);
	//formData.append('inputJSON', file);
	fetch('/', {
		method: 'POST',
		body: formData
	})
		.then(res => {
			return res.text();
		})
		.then(text => {
			renderCSV(text);
		})
		.catch(err => {
			console.log(err)
		});

});
