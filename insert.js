var mongo = require('mongodb').MongoClient;

var firstname = (process.argv[2]).toString();
var lastname = (process.argv[3]).toString();
var newdoc = {firstName: firstname, lastName:lastname};
//or~~~~~~~~~~ +process.argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
	if (err) throw err;
	
	var docs = db.collection('docs');
	
	docs.insert(newdoc);

        console.log(JSON.stringify(newdoc));	
	db.close();
	//or
	/*
	docs.insert(newdoc, function(err,i){
		if (err) throw err;
		console.log(JSON.stringify(newdoc));
		db.close();
	});
	*/
});





