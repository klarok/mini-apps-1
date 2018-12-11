const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {requestHandler} = require('./handlers');
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
	res.send('hey there');
	// res.render('index');
});

app.post('/', jsonToCSV, (req, res) => {
	// console.log(req.headers);
	// console.log(req.body);
	// requestHandler(req, res);
	console.log('heyehyehye');
	res.send(req.csv);
});
