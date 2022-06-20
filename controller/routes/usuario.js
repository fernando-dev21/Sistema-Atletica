const seguranca = require('../../model/components/seguranca')
const usuarioBanco = require('../../model/repositories/usuarioDB')

module.exports = function (app){
    

    app.get('/usuario', seguranca.autenticar, async(req, res, next) => {
        try {
                if (req.user.perfil != "adm") {
                    const usuarioID = req.user.id;
                    const usuarioLogado = await usuarioBanco.getUsuarioId(usuarioID);
                    const cursoDoUsuarioId = await usuarioBanco.getCursoUsuarioId(usuarioID);
                    const cursoDoUsuario = await usuarioBanco.getCursoUsuario(cursoDoUsuarioId.curso);
                    const eventosDoUsuario = await usuarioBanco.getEventoUsuario(usuarioID)
                    res.render('usuario/usuario', {usuarioLogado, cursoDoUsuario, eventosDoUsuario});
                } else {
                    const usuarioID = req.user.id;
                    const usuarioLogado = await usuarioBanco.getUsuarioId(usuarioID);
                    const membros = await usuarioBanco.getRelatorioMembros();
                    const cursos = await usuarioBanco.getRelatorioCursos();
                    const eventos = await usuarioBanco.getRelatorioEventos();
                    const modalidades = await usuarioBanco.getRelatorioModalidades();
                    res.render('usuario/usuario-adm', {usuarioLogado, membros, cursos, eventos, modalidades});
                } 
        } catch (err){
            next(err);
        }
    });


}



