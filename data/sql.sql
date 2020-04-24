create table evento(
	id serial primary key,
	nome varchar (50) unique not null
);


create table participante(
	id serial primary key,
	nome varchar (50) unique not null
);

create table evento_participante(
	evento_id integer not null,
	participante_id integer not null,
	primary key (evento_id, participante_id),
	foreign key (evento_id) references evento (id),
	foreign key (participante_id) references participante (id)
);

select e.nome as evento, p.nome as participante 
from evento as e, participante as p, evento_participante ep 
where ep.evento_id - e.id and ep.participante_id p.id;















