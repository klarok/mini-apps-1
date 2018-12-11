const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(express.static('client'));
app.use(bodyParser.json());

app.listen(port, () => {
	console.log('Now listening on port ' + port + '...');
})

///////////// ROUTES /////////////

app.get('/', (req, res) => {
	res.send('hey there');
});

app.post('/post', (req, res) => {
	console.log(req.body);
	res.sendStatus('201');
});
