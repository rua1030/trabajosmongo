const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')


const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

// esta funcion nos sirve para actualisar un dato  utilizando updateOne filtrando por nombre y actualizando email
async function actualizarUsuario(filtrar,actualizar){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('usuarios').updateOne({nombre:filtrar},{$set:{email:actualizar}})
        
        console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);
        console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}
actualizarUsuario("juan","inge@gmail.com")

// esta funcion nos sirve para actualisar muchos dato  utilizando updateMany y actualizando estado


async function actualizarUsuario(actualizar){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('usuarios').updateMany({},{$set:{estado:actualizar}})
        
        console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);
        console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}
actualizarUsuario(false)