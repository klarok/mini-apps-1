const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const {jsonToCSV} = require('./jsonToCSV');

const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.listen(port, () => {
	console.log('Now listening on port ' + port + '...');
})

///////////// ROUTES /////////////

app.get('/', (req, res) => {
	res.sendStatus(200);
});

app.post('/upload', upload.single('inputJSON'), jsonToCSV, (req, res) => {
	res.send(res.csv);
});

app.get('/download', (req, res, next) => {
	let options = {
		root: `${__dirname}/csv/`
	};

	let fileName = 'json-csv.txt';
	res.sendFile(fileName, options, err => {
		if (err) console.log(err);
	});
});
