const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'


// esta funcion eliminamos un datos  de la tabla usuarios mediante el campo nombre utilizando deleteOne

async function deleteUsuario(eliminar){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('usuarios').deleteOne({nombre:eliminar})
        console.log(`${result.deletedCount} propiedad(es) fue(ron) eliminida(s)`)
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}
deleteUsuario("juan")

// esta funcion eliminamos muchos datos  de la tabla usuarios mediante el campo estado utilizando deleteMany

async function deleteUsuario(eliminar){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('usuarios').deleteMany({estado:eliminar})
        console.log(`${result.deletedCount} todas las propiedad(es) fue(ron) eliminida(s)`)
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}
deleteUsuario(false)