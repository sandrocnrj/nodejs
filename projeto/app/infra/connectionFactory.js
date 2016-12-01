var mysql = require('mysql');

var connetMySQL = function() {
	return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'mul4mb02016',
			database : 'prjnodejs'
	});
}

//wrapper
module.exports = function() {
	return connetMySQL;
}