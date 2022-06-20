const seguranca = require('../../model/components/seguranca')
const usuarioBanco = require('../../model/repositories/eventosDB')

module.exports = function (app){
    app.get('/eventos-inscricao', seguranca.autenticar, async function (req, res, ){
        const usuarioLogado = req.user; 
        const eventos = await usuarioBanco.getEventos();
        res.render('forms/form-3inscricaoEventos', { eventos, usuarioLogado });
    });
    
    app.get('/sucesso-eventos', function (req, res){
        res.render('forms/sucesso-evento');
    })
    
    app.post('/eventos-salvar', seguranca.autenticar, async(req, res) => {
        try {
            var eventos = {nome: req.body.nome,
                           cpf: req.body.cpf,
                           id: req.body.id,
                           data: req.body.data,
                           horario: req.body.horario,
                           local: req.body.local,                                                                             
                        }
            usuarioBanco.insertInscricaoEvento(eventos);
            res.render('forms/sucesso-cadastro', {mensagem: 'Inscrição'});
        } catch (error){
            res.render('forms/sucesso-cadastro', { mensagem: "Erro na inscricao"})
        }
    })

    app.get('/eventos--salvar', function (req, res){
        res.render('forms/sucesso-evento', {mensagem: 'comprado'});
    })
}