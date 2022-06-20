const { get } = require("express/lib/response");
const usuarioDB = require("../../controller/db")
const seguranca = require("../components/seguranca")

async function getUsuarioId(id){
    const conn = await usuarioDB.connect();
    const sql = 'SELECT * FROM membro where id=?;';
    const values = [id];
    const [rows] = await conn.query(sql, values);
    if(rows.length > 0) return rows[0];
    else return null;
}

async function login(email, senha){
    const conn = await usuarioDB.connect();
    const sql = 'SELECT * FROM membro where email=? and senha=?;';
    const values = [email, seguranca.ocultarsenha(senha)];
    const [rows] = await conn.query(sql, values);
    if(rows.length > 0) return rows[0];
    else return null;
}

async function getCursoUsuarioId(id){
    const conn = await usuarioDB.connect();
    const sql = 'SELECT * FROM membro where id=?;';
    const values = [id];
    const [rows] = await conn.query(sql, values);
    if(rows.length > 0) return rows[0];
    else return null;
}

async function getCursoUsuario(id){
    const conn = await usuarioDB.connect();
    const sql = 'SELECT * FROM curso where id=?;';
    const values = [id];
    const [rows] = await conn.query(sql, values);
    if(rows.length > 0) return rows[0];
    else return null;
}

async function getEventoUsuario(id){
    const conn = await usuarioDB.connect();
    const sql = 'SELECT * FROM membro_evento_teste where id_membro=?;';
    const values = [id];
    const [rows] = await conn.query(sql, values);
    if(rows.length > 0) return rows;
    else return null;
}




async function getRelatorioMembros(){
    const conn = await usuarioDB.connect();
    const [rows] = await conn.query('SELECT * FROM membro;');
    return rows;
}

async function getRelatorioCursos(){
    const conn = await usuarioDB.connect();
    const [rows] = await conn.query('SELECT * FROM curso;');
    return rows;
}

async function getRelatorioEventos(){
    const conn = await usuarioDB.connect();
    const [rows] = await conn.query('SELECT * FROM eventos;');
    return rows;
}

async function getRelatorioModalidades(){
    const conn = await usuarioDB.connect();
    const [rows] = await conn.query('SELECT * FROM modalidade_esportiva;');
    return rows;
}


module.exports = {getUsuarioId, login, getCursoUsuarioId, getCursoUsuario, getRelatorioMembros, getRelatorioCursos, getRelatorioEventos, getRelatorioModalidades, getEventoUsuario};

