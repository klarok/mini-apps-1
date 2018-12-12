const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static('public'));

//////////////ROUTES//////////////

app.get('/', (req, res) => {
	res.send('hello world');
});

app.post('/page', (req, res) => {
	
});

app.listen(port, () => console.log('Now listening on port ' + port));
