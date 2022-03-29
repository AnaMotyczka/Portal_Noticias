//configurações do servidor de banco de dados

const express=require('express');//Importação do express;
const app=express();//Execução do express na variavel app;
app.set('view-engine','ejs');//Configuração do ejs como motor de telas;
app.set('views','./app/views');//Alteração do diretório da pasta views;

module.exports=app; ////exportação da variável app para o arquivo que for importar o módulo ;