const db = require('./_database')

async function createTables() {
	await db.connect();
	await db.query(`create table evento (
	id serial primary key,
	nome varchar(50) unique not null)`)

	await db.query(`create table participante(
	id serial primary key,
		nome varchar(50) unique not null
	)`)

	await db.query(`create table evento_participante(
	evento_id integer not null,
		participante_id integer not null,
		primary key(evento_id, participante_id),
		foreign key(evento_id) references evento(id),
		foreign key(participante_id) references participante(id)
	)`)
	
	await db.end()
	console.log("tabelas criadas");
}

createTables()