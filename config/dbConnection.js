const mysql=require('mysql'); //importação do módulo

//modularização da conexão com o banco de dados
module.exports=function(){
    return mysql.createConnection({
        host: 'localhost',
            user:'root',
            password: 'root',
            database: 'portal_noticias'
    });
}
