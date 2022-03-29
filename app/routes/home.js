module.exports=function(app){ //modulo que retorna a função da rota;
    //rota para a página principal do app;
    app.get('/', function(req,res){ //rota pagina principal do app;
        res.render('home/index.ejs') //renederizara tela index que está em views;
    });
};