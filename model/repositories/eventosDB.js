const usuarioDB = require("../../controller/db")
const seguranca = require("../components/seguranca")

async function insertInscricaoEvento(eventos){
    const conn = await usuarioDB.connect();
    const sql = 'INSERT INTO membro_evento_teste(nome, cpf, data_realizacao, horario, localidade, id_membro) VALUES (?,?,?,?,?,?);';
    const values = [eventos.nome, eventos.cpf, eventos.data, eventos.horario, eventos.local, eventos.id];
    return await conn.query(sql, values);
}

async function getEventos(){
    const conn = await usuarioDB.connect();
    const [rows] = await conn.query('SELECT * FROM eventos;');
    return rows;
}

async function findEventoById(id){
    const conn = await usuarioDB.connect();
    const sql = 'SELECT * FROM evento where id=?;';
    const values = [id];
    const [rows] = await conn.query(sql, values);
    if(rows.length > 0) return rows[0];
    else return null;
}

module.exports = { insertInscricaoEvento, getEventos, findEventoById };

