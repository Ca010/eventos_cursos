const db = require('./database')

async function insertData(){
await db.connect()

const queryEvento = "insert into evento (nome) values ($1)"

await db.query(queryEvento, (['encontro de node js'])
await db.query(queryEvento, ['encontro de javascript'])

const queryParticipante = "insert into participante (nome) values ($1)"

await db. query(queryParticipante, ['Camila'])
await db. query(queryParticipante, ['Nathalia'])
await db. query(queryParticipante, ['Paçoca'])
await db. query(queryParticipante, ['Yasmin'])
await db. query(queryParticipante, ['Neuza'])

const queryEventoParticipante = "insert info evento_ (evento_id, participante_id) values ($1, $2)"

await db.query(queryEventoParticipante, [1,1])
await db.query(queryEventoParticipante, [1,2])
await db.query(queryEventoParticipante, [1,3])

await db.query(queryEventoParticipante, [2,3])
await db.query(queryEventoParticipante, [2,4])

await db.end()

console.log("Dados inseridos")
}

insertData()