let Promise = require('bluebird');

const {db, insert, find} = require('./db');
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
	insert(db, req.body)
		.then(insertId => {
			res.send(insertId);
		});
});

app.get('/form1', (req, res) => {
	find(db)
		.then(records => {
			res.send(records);
		});
});


app.listen(port, () => console.log('Now listening on port ' + port));
