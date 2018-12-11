let SUBMIT  = 'submit-JSON';
let INPUT = 'input-JSON';

let submitButton = document.getElementById(SUBMIT);
let textInput = document.getElementById(INPUT);

submitButton.addEventListener('click', () => {
	let input = JSON.stringify(textInput.value);
	// let input = textInput.value;
	console.log(input);
	fetch('/post', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		},
		body: input
	})
		.then(res => {
			console.log('Heard back from server', res);
		});
});