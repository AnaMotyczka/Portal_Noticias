//modulo de configuração dos dois servidores: da aplicação e do banco de dados

const mysql=require('mysql'); //importação módulpo mysql;

module.exports=function(){ //
    return mysql.createConnection({ //retorna a funçao;
        host: 'localhost',
            user:'root',
            password: 'ifms',
            database: 'portal_noticias'
    }); //cria conexão com o bando de dados portal_noticias;
}