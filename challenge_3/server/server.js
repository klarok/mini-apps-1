let Promise = require('bluebird');

const {db, insert, find, update} = require('./db');
const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser());
app.use(express.static('public'));

//////////////ROUTES//////////////

app.get('/', (req, res) => {
	res.send('hello world');
});

app.post('/form1', upload.none(), (req, res) => {
	console.log(req.body, typeof req.body);
	update(db, req.body)
		.then(insertId => {
			res.send(insertId);
		})
		.catch(err => {
			console.log('###############');
			console.log(err);
		});
});

app.get('/form1', (req, res) => { //Clicked checkout, insert new record
	insert(db, {}) //no data yet; otherwise req.body
		.then(insertId => {
			res.send(insertId);
		});
});

app.get('/confirm', (req, res) => {
	find(db)
		.then(records => {
			res.send(records);
		});
});


app.listen(port, () => console.log('Now listening on port ' + port));
