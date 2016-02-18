var mongo = require('mongodb').MongoClient;

var age = parseInt(process.argv[2]);
//or~~~~~~~~~~ +process.argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
	if (err){
		console.log(err);
	}
	
	var parrots = db.collection('parrots');
	
	parrots.find({age:{
			$gt:age
			}},
			{name:1,
			age:1,
			_id:0}
	).toArray(function(err, i){
		console.log(i);
		db.close();
	});	
});





