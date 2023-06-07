const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'
//esta funcion es para listar un solo  datos en la tabla permiso utilizando findOne 

async function deleteRol(eliminar){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('rol').deleteOne({id_rol:eliminar})
        console.log(`${result.deletedCount} propiedad(es) fue(ron) eliminida(s)`)
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}
// deleteRol(4)
async function deleteUsuario(eliminar){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('rol').deleteMany({estado:eliminar})
        console.log(`${result.deletedCount} todas las propiedad(es) fue(ron) eliminida(s)`)
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}
deleteUsuario(true)