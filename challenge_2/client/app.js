let SUBMIT  = 'submitJSON';
let INPUT = 'inputJSON';

let submitButton = document.getElementById(SUBMIT);
let textInput = document.getElementById(INPUT);

// document.getElementById('formthing').addEventListener('submit', 
// 	(e) => {
// 	e.preventDefault();
// 	console.log('prevent the thing');
// });
// submitButton.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	// let input = JSON.stringify(textInput.value);
// 	let input = textInput.value;
// 	console.log(input);
// 	fetch('/', {
// 		method: 'POST',
// 		body: input
// 	})
// 		.then(res => {
// 			console.log('Heard back from server', res);
// 		});
// });

submitButton.addEventListener('submit', (e) => {
	e.preventDefault();
	});