module.exports = function(app){
    app.get('/produtos', function(req,res){
    	var mysql = require('mysql');
    	var connection = mysql.createConnection({
    		host : 'localhost',
    		user : 'root',
    		password : 'mul4mb02016',
    		database : 'prjnodejs'
    	});

    	connection.query('select * from livros', function(err, results){
    		res.send(results);
    	});

    	connection.end();

    	//consulta
        //res.render("produtos/lista"); 
    });
}