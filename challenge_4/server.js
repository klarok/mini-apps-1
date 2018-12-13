const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static('./client/dist'));
app.use(bodyParser());

// app.get('/', (req, res) => {
// 	res.send('hyoooooo');
// });

app.listen(port, (err) => {
	if (err) throw err;
	console.log('Now listening on port ' + port);
});