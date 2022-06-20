const seguranca = require('../../model/components/seguranca')
const usuarioBanco = require('../../model/repositories/cadastroDB')

module.exports = function (app){

    app.get('/cadastro', async function (req, res, next){
        try{
            const cursos = await usuarioBanco.selectCursos();
            res.render('forms/form-2cadastro', { cursos });
        }catch (err){
            next(err);
        }
    });


    app.post('/cadastro-salvar', async(req, res) => {
        try {
            const cursos = await usuarioBanco.selectCursos();
            var usuario = {email: req.body.email,
                           cpf: req.body.cpf,
                           nome: req.body.nome,
                           data: req.body.data,
                           telefone: req.body.telefone,
                           curso: req.body.curso,
                           turma: req.body.turma,
                           senha: seguranca.ocultarsenha(req.body.senha)                        
                        }
            usuarioBanco.insertUsuario(usuario);
            res.render('forms/sucesso-cadastro', {mensagem: 'Cadastro', cursos});
            //corrigir erro do css
        } catch (error){
            res.render('forms/form-2cadastro', { title: 'Cadastro', mensagem: "Erro no cadastro"})
        }
    });
    
    app.get('/cadastro--salvar', function (req, res){
        res.render('forms/sucesso-cadastro', {mensagem: 'cadastrado'});
    });

}