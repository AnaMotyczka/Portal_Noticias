//módulo de configuração do servidor
const express=require('express');//Importação do express
const app=express();//Execução do express
app.set('view-engine','ejs');//configuração do ejs como motor de telas
app.set('views','./app/views');//alteração do diretório da pasta views

module.exports=app; //exportação da variável app para o arquivo que for importar o módulo