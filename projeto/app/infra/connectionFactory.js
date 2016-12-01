var mysql = require('mysql');
module.exports = function(){
	return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'mul4mb02016',
			database : 'prjnodejs'
	});
}