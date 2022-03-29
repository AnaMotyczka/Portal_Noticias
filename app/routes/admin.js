module.exports=function(app){

    //caminho para a página do formulário de inclusão de notícias;
    app.get('/formularioinclusaonoticia', function(req,res){ //rota pagina formulario inclusão nopticias do app;
        res.render('admin/form_add_noticia.ejs') //renderiza a tela;
    });
}

// a barra (/) de url é localhost:3000;
// o get define que é caminho;
//[] é vetor;
//{} é elemento json;

//formularioinclusaonoticia -> primeiro parametro;
//function(req,res){res.render('admin/form_add_noticia.ejs')} -> segundo parametro, função de callback;

//req se refere a url da requisição;

// função de callback é porque é a segunda requisição de um elemento;