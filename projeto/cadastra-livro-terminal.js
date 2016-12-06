var http = require('http');

var configuracoes = {
	hostname:'localhost',
	port:3000,
	path:'/produtos',
	method: 'post',
	headers:{
		'Accept':'application/json',
		//'Accept':'text/html'
		'Content-type':'application/json'
	}
};

var client = http.request(configuracoes, function(res){
	console.log(res.statusCode);

	res.on('data', function(body){
		console.log('corpo:'+body);
	});
});

var produto = {
	titulo: 'Mais sobre node',
	descricao: 'node, javascript e um pouco de http',
	preco: 100
};

client.end(JSON.stringify(produto));