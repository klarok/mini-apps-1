
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

// let jsonToCSV = (jsonObject) => {
// 	//Get fields
// 	// let fields = Object.keys(jsonObject);
// 	//Do not record children
// 	// fields.splice(fields.indexOf('children'), 1);
// 	let id = 0;
// 	let employeeData = {};
// 	let queue = [jsonObject];

// 	while (queue.length > 0) {
// 		let employee = queue[0];
// 		for (let field in employee) {
// 			if (field === 'children') {
// 				//Add all children to queue for later
// 				employee.children.forEach(child => {
// 					queue.push(child);
// 				});
// 			} else {
// 				let tuple = [id, employee[field]];
// 				//Add employee data and assigned unique id
// 				if (!employeeData.hasOwnProperty(field)) {
// 					//Start new 'column'
// 					employeeData[field] = [tuple];
// 				} else {
// 					employeeData[field].push(tuple);
// 				}
// 			}
// 		}
// 		queue.shift();
// 		id++;
// 	}

// 	//Turn into CSV lines
// 	let fields = Object.keys(employeeData);
// 	let lines = [];
// 	lines.push(fields.join(','));
// 	let i = 0;

// 	while (i < id) { //Up until the last employee added (id is one greater)
// 		let line = [];
// 		for (let f = 0; f < fields.length; f++) {
// 			let field = fields[f];
// 			if (employeeData[field][0][0] === i) {
// 				line.push(employeeData[field][0][1]);
// 				employeeData[field].shift();
// 			} else {
// 				line.push('');
// 			}
// 		}
// 		lines.push(line.join(','));
// 		i++;
// 	}
	
// 	//Write to file
// 	console.log(lines.join('\n'));
// 	return lines.join('\n');
// }

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
