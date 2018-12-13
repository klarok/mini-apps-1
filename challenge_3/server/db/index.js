let Promise = require('bluebird');
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
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

module.exports.insert = (db, data) => {
	return db.then(db => {
		let collection = db.collection('users'); //name of form from the data
		return new Promise((resolve, reject) => {
			collection.insertOne(data, (err, feedback) => {
				if (err) throw err;
				console.log('insert test success\n');
				// console.log('##############', feedback.insertedId);
				resolve(feedback.insertedId);
			});
		});
	})
	.then(ii => {
		console.log(ii);
		return ii;
	});
}

//TODO: Make this less convoluted
module.exports.find = (db, coll = 'users') => {
	return db.then(db => {
		let collection = db.collection(coll);
		return new Promise((resolve, reject) => {
			collection.find({"_id": ObjectId("5c11cbc2136e5c974f0a1aff")}).toArray((err, data) => {
				if (err) throw err;
				resolve(data);
			});
		});
	})
	.then(data => {
		// console.log('!!!!!!!!!', data);
		return data;
	});
}

module.exports.update = (db, data) => { //form data object
	return db.then(db => {
		let collection = db.collection('users');//which db?
		console.log('^^^^^^^^^^^^^^^^^^^^');
		let dataObj = {$set: data};
		return new Promise((resolve, reject) => {
			collection.updateOne({"_id": ObjectId("5c11cbc2136e5c974f0a1aff")}, dataObj, (err, r) => {
				if (err) throw err;
				console.log('inserted rows: ', r);
				resolve(r);
			});
		});
	});
}