const dbConnection = require('../../config/dbConnection'); //importação arquivo dbConnection;

module.exports=function(app){ 

    var connection=dbConnection();  // execução do banco de dados earmazenamento na var connection;

    //rota para a pagina de noticias;
    app.get('/noticias', function(req,res){ //eneredeço onde a requisição vai dar duas respostas: req e res e renderizar para o site;


        connection.query('select * from noticias', function(error, result){ //query serve para buscar no banco de dados;
            if(error){
                console.log(error); //mensagem de erro;
                }
                res.render('./noticias/noticias.ejs',{noticias:result}); //renderização da tela noticias;
        });
    });
            // função exportada para o app.js, para renderizar o arquivo que irá aparecer na pagina acessada;
}