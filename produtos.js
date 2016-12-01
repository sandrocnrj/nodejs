var http = require('http');

http.createServer(function(req, res){
	if(req.url == "/produtos"){
		res.end("<html><body>listando os produtos da loja</body>");
	} else {
		res.end("<html><body>home  da casa do codigo</body></html>");
	}
}).listen(3000,"localhost");

console.log("listagem de produtos");