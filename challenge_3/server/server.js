let Promise = require('bluebird');

const {db, insert, find, update} = require('./db');
const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();
const session = require('express-session');
const bodyParser = require('body-parser');
const port = 3000;

app.use(session({secret: 'it was required so'}));
app.use(bodyParser());
app.use(express.static('public'));

//////////////ROUTES//////////////

app.get('/', (req, res) => {
	res.send('hello world');
});

app.get('/form1', (req, res) => { //Clicked checkout, insert new record
	let sessId = req.session.id;
	insert(db, {session: sessId}) //no data yet; otherwise req.body
		.then(insertId => {
			res.send(sessId);
		});
});

app.post('/form1', upload.none(), (req, res) => {
	update(db, req.session.id, req.body)
		.then(insertId => {
			res.send(insertId);
		})
		.catch(err => {
			console.log('###############');
			console.log(err);
		});
});

app.get('/confirm', (req, res) => {
	find(db)
		.then(records => {
			res.send(records);
		});
});


app.listen(port, () => console.log('Now listening on port ' + port));
