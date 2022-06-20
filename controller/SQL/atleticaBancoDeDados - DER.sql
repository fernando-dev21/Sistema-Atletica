create database projetoatletica;

use projetoatletica;

create table campus (
	id_campus int auto_increment primary key,
    nome varchar(255) not null, 
    endereco varchar(255) not null, 
    email varchar(255) not null, 
    telefones varchar(255) not null
);


create table curso (
	id int auto_increment primary key,
	nome varchar(255) not null,
	semestres varchar(255) not null,
	turno varchar(255) not null
);

create table atletica (
	id_atletica int auto_increment primary key,
    nome varchar(255) not null, 
    apelido varchar(255) not null, 
    logo varchar(255) not null, 
    data_fundacao date not null
);

create table modalidade_esportiva (
	id_modalidade int auto_increment primary key,
    nome varchar(255) not null, 
    genero varchar(255) not null, 
    tipo varchar(255) not null,
    dia_da_semana varchar(255),
    horario varchar(255), 
    equipamento varchar(255) 
);

create table membro(
	id int auto_increment primary key,
	cpf varchar (20) not null,
    nome varchar (255) not null,
    email varchar (255) not null,
    senha varchar (255) not null,
    perfil varchar(255) not null, #aluno ou Gestor 
    telefone varchar (255) not null,
    data_nascimento date not null,
    curso int,
    turma varchar(250),
    foreign key (curso) references curso(id)
);

create table membro_modalidade(
	membro int not null,
    modalidade int not null,
    foreign key (membro) references membro(id),
    foreign key (modalidade) references modalidade_esportiva(id_modalidade)
);

create table inscricao (
	id_inscricao int auto_increment primary key, 
    data_inicio date not null,
    data_fim date not null, 
    valor_unitario double not null, 
    forma_de_pagamento varchar(250) not null
);

create table eventos (
	id_evento int auto_increment primary key,
    nome varchar(255) not null,
    descricao varchar(500), 
    data_realizacao date not null, 
    horario_inicio varchar(255) not null, 
    localidade varchar(255) not null, 
    orcamento double, 
    inscricao int, 
    foreign key(inscricao) references inscricao(id_inscricao)
);

create table caixa (
	id_caixa int auto_increment primary key, 
    evento int not null, 
    total_inscritos int, 
    total_arrecadacao double, 
    tota_despesas double, 
    lucro_liquido double,
    foreign key(evento) references eventos(id_evento)
);


create table cliente_comunidade(  
	cpf varchar(20) primary key,
    nome varchar(255) not null,
    data_nascimento date not null, 
    email varchar(255) not null, 
    telefone varchar(255) not null, 
    endereco varchar(255) not null, 
    como_soube_evento varchar(255) not null 
);

create table cliente_membro (
	id_membro int not null, 
    foreign key (id_membro) references membro(id)
);

create table cliente_inscricao(
	evento_inscricao int not null,
    id_membro int,
    id_comunidade varchar(20),
    foreign key (evento_inscricao) references inscricao(id_inscricao),
    foreign key (id_membro) references cliente_membro(id_membro),
    foreign key (id_comunidade) references cliente_comunidade(cpf)

);

create table membro_modalidade_teste(
    id int primary key auto_increment, 
    aluno varchar(255),
    nome varchar(255), 
    genero varchar(255), 
    tipo varchar(255),
    dia_da_semana varchar(255),
    horario varchar(255), 
    equipamento varchar(255) 
);


create table membro_evento_teste(
    id int auto_increment primary key,
    nome varchar(255), 
    cpf varchar (255), 
    data_realizacao date, 
    horario varchar(255) ,  
    localidade varchar(255),
    id_membro int 
);

##Inserindo cursos oferecidos pela fatec

insert into curso (nome, semestres, turno) values ("Análise e Desenvolvimento de Sistemas", "6", "tarde");
insert into curso (nome, semestres, turno) values ("Análise e Desenvolvimento de Sistemas", "6", "noite");
insert into curso (nome, semestres, turno) values ("Comércio Exterior", "6", "manhã");
insert into curso (nome, semestres, turno) values ("Comércio Exterior", "6", "tarde");
insert into curso (nome, semestres, turno) values ("Desenvolvimento de Produtos Plásticos", "6", "noite");
insert into curso (nome, semestres, turno) values ("Desenvolvimento de Software Multiplataforma", "6", "manhã");
insert into curso (nome, semestres, turno) values ("Gestão de Recursos Humanos", "6", "manhã");
insert into curso (nome, semestres, turno) values ("Gestão Empresarial", "6", "manhã");
insert into curso (nome, semestres, turno) values ("Logística", "6", "manhã");
insert into curso (nome, semestres, turno) values ("Logística", "6", "noite");
insert into curso (nome, semestres, turno) values ("Polímeros", "6", "noite");

##Inserindo modalidades 

insert into modalidade_esportiva (nome, genero, tipo, dia_da_semana, horario, equipamento) values ("Futsal", "Maculino", "Coletivo", "Terça-feira / Quarta-feira", "14:00 as 16:00", "Calçado");
insert into modalidade_esportiva (nome, genero, tipo, dia_da_semana, horario, equipamento) values ("Futsal", "Feminino", "Coletivo", "Segunda-feira / Quinta-feira", "14:00 as 16:00", "Calçado");
insert into modalidade_esportiva (nome, genero, tipo, dia_da_semana, horario, equipamento) values ("Volei", "Misto", "Coletivo", "Segunda-feira / Quinta-feira", "17:00 as 18:00", "Calçado");

##Inserindo eventos 

insert into eventos (nome, data_realizacao, horario_inicio, localidade, orcamento, descricao) values ("INTERFATEC","2020-12-12","13:00", "Rua São joão, Nº 1000, Itaquera - SP, CEP: 08555-100", 8.000, "A maior festa da sua vida");
insert into eventos (nome, data_realizacao, horario_inicio, localidade, orcamento, descricao) values ("FATEC RUN","2020-10-10","09:00", "Avenida Dom Pedro, Nº 12, Itaquera - SP, CEP: 08555-100", 8.000, "A maior festa da sua vida");
insert into eventos (nome, data_realizacao, horario_inicio, localidade, orcamento, descricao) values ("GEEK DAY","2020-06-01","08:00", "Avenida Águia de Haia, 2983. Cidade A.E. Carvalho, CEP 03694-000, São Paulo-SP.", 8.000, "A maior festa da sua vida");

#Inciando tabelas

insert into membro (cpf, nome, email, senha, perfil, telefone, data_nascimento, curso, turma) values ("999.999.999-99", "admin", "admin@admin.com", "8cb2237d0679ca88db6464eac60da96345513964", "adm", "99999-9999", "2020-05-28", 1, "2022");
insert into membro (cpf, nome, email, senha, perfil, telefone, data_nascimento, curso, turma) values ("999.999.999-99", "aluno", "aluno@aluno.com", "8cb2237d0679ca88db6464eac60da96345513964", "membro", "99999-9999", "2020-05-28", 1, "2022");

INSERT INTO membro_modalidade_teste(id, aluno, nome, genero, tipo, dia_da_semana, horario, equipamento) VALUES (1,"","","","","","","");

INSERT INTO membro_evento_teste(id, nome, cpf, data_realizacao, horario, localidade) VALUES (1,"","","2022-01-01","","");