const dbConnection = require('../../config/dbConnection');

//modularização rota para a página de notícias
module.exports=function(app){

    var connection=dbConnection();

    app.get('/noticias', function(req,res){

        connection.query('select * from noticias', function(error, result){
            if(error){
                console.log(error);
                }
                res.render('./noticias/noticias.ejs',{noticias:result}); //renderização da resposta na var result
        });
    });

}