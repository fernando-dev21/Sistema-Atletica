const seguranca = require('../../model/components/seguranca')
const usuarioBanco = require('../../model/repositories/usuarioDB')

module.exports = function (app){
    
    app.get("/", function(req, res){
        res.redirect('/index');
    })
/
    app.get('/index', function (req, res){
        res.render('pages/index');
    })
    
    app.get('/quemsomos', function (req, res){
        res.render('pages/quemsomos');
    })
    
    app.get('/modalidades', function (req, res){
        res.render('pages/modalidades');
    })

    app.get('/campeonatos', function (req, res){
        res.render('pages/campeonatos');
    })

    app.get('/eventos', function (req, res){
        res.render('pages/eventos');
    })

    app.get('/loja_virtual', function (req, res){
        res.render('pages/loja_virtual');
    })

    app.get('/contato', function (req, res){
        res.render('pages/contato');
    })

    app.get('/acessibilidade', function (req, res){
        res.render('pages/acessibilidade');
    })


    app.get('/not-found', function (req, res){
        res.render('usuario/not-found');
    });

}

