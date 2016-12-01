var mysql = require('mysql');

function createDBConnection() {
	return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'mul4mb02016',
			database : 'prjnodejs'
	});
}

//wrapper
module.exports = function() {
	return createDBConnection;
}