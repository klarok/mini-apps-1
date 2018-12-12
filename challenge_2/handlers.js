
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

let writeCSV = (text) => {
	return fs.writeFileAsync(__dirname + '/test.txt', text)
		.then(() => {
			console.log('I wrote the thing');
		})
		.catch(err => {
			throw new Error('I dun goofed');
		});
}

exports.requestHandler = (req, res) => {
	let json = req.body.inputJSON;
	//Remove trailing ;, if any
	if (json[json.length - 1] === ';') { 
		json = json.slice(0, -1);
	}
	jsonToCSV(JSON.parse(json));
		// .then(() => {
		// 	// res.sendStatus(201);
		// 	res.redirect('/');
		// });
		res.redirect('/');
}
