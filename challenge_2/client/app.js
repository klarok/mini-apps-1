let SUBMIT  = 'submitJSON';
let INPUT = 'inputJSON';
let DOWNLOAD = 'download';

// let submitButton = document.getElementById(SUBMIT);
let submitButton = document.getElementById(SUBMIT);
let formInput = document.getElementById(INPUT);
let form = document.getElementById('formJSON');
let dlButton = document.getElementById(DOWNLOAD);

let renderCSV = (data) => {
	document.getElementById('showCSV').innerHTML = `<pre>${data}</pre>`;
};

submitButton.addEventListener('click', (e) => {
	let file = formInput.files[0];
	let formData = new FormData(form);
	fetch('/upload', {
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

dlButton.addEventListener('click', e => {
	fetch('/download', {
		method: 'GET'
	})
		.then(res => {
			console.log(res.body);
			return res.blob();
		})
		.then(blob => {
			let link = document.createElement('a');
			link.href = URL.createObjectURL(blob);
			link.download = 'json-csv.txt';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		})
		.catch(err => {
			console.log(err);
		});
});
