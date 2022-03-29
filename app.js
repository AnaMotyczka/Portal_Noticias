const app=require('./config/server'); //importação do módulo de server.js chamado app;
const rotaHome= require('./app/routes/home')(app); //importação e execucão(para isso que serve o (app)) da rota principal;
const rotaAdmin= require('./app/routes/admin')(app); //importação e execucão da rota admin;
const rotaNoticias= require('./app/routes/noticias')(app); //importação e execucão da rota noticias;

//Cria um servidor rodando na porta 3000
app.listen('3000',function(){ //criação do servidor e escuta a requisição;
	console.log('Servidor rodando na porta 3000');
});




// //rota para a página principal do app
// app.get('/',function(req,res){
// 	res.render('home/index.ejs')});

// //rota para a página de notícia
// app.get('/noticias',function(req,res){

// 	const mysql= require('mysql'); //importacao modulo mysql
// 	const connection=mysql.createConnection({
// 		host: 'localhost',
// 		user:'root',
// 		password: 'ifms',
// 		database: 'portal_noticias'
// 	}); //conexão com o banco de dados portal_noticias

// 	connection.query('select * from noticias', function(error, result){
// 		if (error) {
// 			console.log(error);
// 		};
// 		res.render('noticias/noticias.ejs', {noticias:result}); 
// 		// renderização da tela noticias.ejs passando pela variavel result});

// 	//res.render('noticias/noticia.ejs')});

// //rota para a página do formulário de inclusão de noticia
// app.get('/formularioinclusaonoticia',(req,res)=>{
// 	res.render('admin/form_add_noticia.ejs');});