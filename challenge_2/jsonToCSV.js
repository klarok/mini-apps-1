exports.jsonToCSV = (req, res, next) => {
	let jsonObject = reqToJSON(req);
	let id = 0;
	let employeeData = {};
	let queue = [jsonObject];

	while (queue.length > 0) {
		let employee = queue[0];
		for (let field in employee) {
			if (field === 'children') {
				//Add all children to queue for later
				employee.children.forEach(child => {
					queue.push(child);
				});
			} else {
				let datum = [id, employee[field]];
				//Add employee data and assigned unique id
				if (!employeeData.hasOwnProperty(field)) {
					//Start new 'column'
					employeeData[field] = [datum];
				} else {
					employeeData[field].push(datum);
				}
			}
		}
		queue.shift();
		id++;
	}

	//Turn into CSV lines
	let fields = Object.keys(employeeData);
	let lines = [];
	lines.push(fields.join(','));
	let i = 0;

	while (i < id) { //Up until the last employee added (id is one greater)
		let line = [];
		for (let f = 0; f < fields.length; f++) {
			let field = fields[f];
			if (employeeData[field][0][0] === i) {
				line.push(employeeData[field][0][1]);
				employeeData[field].shift();
			} else {
				line.push('');
			}
		}
		lines.push(line.join(','));
		i++;
	}

	res.csv = lines.join('\n');
	next();
}

let reqToJSON = (req) => {
	let json = req.body.inputJSON;
	//Remove trailing ;, if any
	if (json[json.length - 1] === ';') { 
		json = json.slice(0, -1);
	}
	return JSON.parse(json);
}