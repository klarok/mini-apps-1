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
				resolve(feedback.insertedId);
			});
		});
	});
}

//TODO: Make this less convoluted
module.exports.find = (db, session, coll = 'users') => {
	return db.then(db => {
		let collection = db.collection(coll);
		return new Promise((resolve, reject) => {
			collection.find({}).toArray((err, data) => { //Just one record
				if (err) throw err;
				resolve(data);
			});
		});
	})
	.then(data => {
		return data;
	});
}

module.exports.update = (db, session, data) => { //form data object
	return db.then(db => {
		let collection = db.collection('users');//which db?
		let dataObj = {$set: data};
		return new Promise((resolve, reject) => {
			collection.updateOne({"session": session}, dataObj, (err, r) => {
				if (err) throw err;
				resolve(r);
			});
		});
	});
}