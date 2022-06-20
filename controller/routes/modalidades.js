const seguranca = require('../../model/components/seguranca')
const usuarioBanco = require('../../model/repositories/modalidadesDB')

module.exports = function (app){
    
    app.get('/modalidades-inscricao', function (req, res){
        res.render('forms/form-4inscricaoModalidades');
    });


    app.post('/salvarModalidade', (req, res) => {
        try {
        var modalidades = {
                aluno: req.body.aluno,
                nome: req.body.nome,
                genero: req.body.genero,
                tipo: req.body.tipo,
                horario: req.body.horario,
                dia_da_semana: req.body.dia_da_semana,
                equipamento: req.body.equipamento
        }
        usuarioBanco.insertModalidade(modalidades);
        res.render('forms/sucesso-cadastro', {mensagem: 'Inscrição de Atleta'});
        } catch (error){
            res.render('forms/form-4inscricaomodalidades', { title: 'Inscrição-Modalidades', mensagem: "Erro na inscrição"})
        }
    }); 
    
     
}