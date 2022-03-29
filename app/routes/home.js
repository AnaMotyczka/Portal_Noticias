//modularização rota para a página principal do app
module.exports=function(app){

    app.get('/', function(req,res){
        res.render('home/index.ejs')
    })
}