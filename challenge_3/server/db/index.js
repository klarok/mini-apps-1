let Promise = require('bluebird');
const MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017'; //TODO: specify database

module.exports.db = new Promise(
	(resolve, reject) => {
		MongoClient.connect(url, (err, client) => {
			if (err) {
				throw err;
			}
			
			console.log('Connected to mongo');
			resolve(client.db());
		});
});