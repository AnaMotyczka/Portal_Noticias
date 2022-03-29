//modularização rota para a página de formulário de inclusão de notícias
module.exports=function(app){

    app.get('/formularioinclusaonoticia', function(req,res){
        res.render('admin/form_add_noticia.ejs')
    })
}