let Promise = require('bluebird');

const {db} = require('./db');
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
	console.log(req.body);
	insertTest(db, req.body);
	res.sendStatus(201);
});

let insertTest = (db, data) => {
	db.then(db => {
		let collection = db.collection('users');
		collection.insertOne(data, (err, feedback) => {
			if (err) throw err;
			console.log('insert test success\n');
		});
		return db;
	})
	.then(db => {
		getTest(db);
	});

	
}

let getTest = (db) => {
	let users = db.collection('users');
	users.find({}).toArray((err, data) => {
		if (err) throw err;
		console.log('%%%%%%%%%%%%%%%%%',data);
	});
}

app.listen(port, () => console.log('Now listening on port ' + port));
