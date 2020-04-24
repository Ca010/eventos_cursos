const db = require('./_database')

async function listData({
    await db.connect()
    var result

    result = await db.query("select * from evento")
    console.log("EVENTOS: ")
    console.log(result.rows);

    result = await db.query("select * from participante;")
    console.log("PARTICIPANTE: ")
    console.log(result.rows);

    result = await db.query("select e.nome as evento, p.nome as participante from evento as e, pasrticipante as p, evento_participante ep where ep.evento_id = e.id and ep.participante_id = p_id")
    console.log("EVENTOS COM PARTICIPANTE:")
    console.log(result.rows);

}

listData()