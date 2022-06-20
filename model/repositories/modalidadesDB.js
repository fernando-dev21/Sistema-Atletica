const usuarioDB = require("../../controller/db")
const seguranca = require("../components/seguranca")

async function insertModalidade(modalidades){
    const conn = await usuarioDB.connect();
    const sql = 'INSERT INTO membro_modalidade_teste(aluno, nome, genero, tipo, dia_da_semana, horario, equipamento) VALUES (?,?,?,?,?,?,?);';
    const values = [modalidades.aluno, modalidades.nome, modalidades.genero, modalidades.tipo, modalidades.dia_da_semana, modalidades.horario,  modalidades.equipamento];
    return await conn.query(sql, values);
}

module.exports = { insertModalidade }