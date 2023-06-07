const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

//esta funcion es para eliminar un datos de la tabla permisos utilizando deleteOne

async function deletepermiso(eliminar){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('permiso').deleteOne({nombre:eliminar})
        console.log(`${result.deletedCount} propiedad(es) fue(ron) eliminida(s)`)
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}
deletepermiso("juan")



//esta funcion es para eliminar muchos datos utilizando deleteMany

async function deletepermiso(eliminar){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('permiso').deleteMany({id_permiso:eliminar})
        console.log(`${result.deletedCount} todas las propiedad(es) fue(ron) eliminida(s)`)
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}
deletepermiso(1)