const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

exports.writeCSV = (text) => {
	return fs.writeFileAsync(__dirname + '/csv/json-csv.txt', text)
		.then(() => {
			console.log('Wrote to json-csv.txt');
		})
		.catch(err => {
			throw new Error('Failed to write to json-csv.txt');
		});
}


