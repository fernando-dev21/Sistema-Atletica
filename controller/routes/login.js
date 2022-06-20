const seguranca = require('../../model/components/seguranca')
const usuarioBanco = require('../../model/repositories/usuarioDB')

module.exports = function (app){

    app.get('/login', function (req, res){
        if(req.query.fail) res.render('forms/form-1login', { mensagemLogin: 'Usúario e/ou senha incorretos!'});
        else res.render('forms/form-1login', { mensagemLogin: null});
    })
   
}