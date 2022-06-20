const usuarioDB = require("../../controller/db")
const seguranca = require("../components/seguranca")

async function insertUsuario(usuario){
    const perfilPadrao = 'membro';
    const conn = await usuarioDB.connect();
    const sql = 'INSERT INTO membro (cpf, nome, email, senha, perfil, telefone, data_nascimento, curso, turma) VALUES (?,?,?,?,?,?,?,?,?);';
    const values = [usuario.cpf, usuario.nome, usuario.email, usuario.senha, perfilPadrao, usuario.telefone, usuario.data, usuario.curso, usuario.turma];
    return await conn.query(sql, values);
}
async function selectCursos(){
    const conn = await usuarioDB.connect();
    const [rows] = await conn.query('SELECT * FROM curso;');
    return rows;
}



module.exports = { insertUsuario, selectCursos}