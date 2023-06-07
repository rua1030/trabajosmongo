const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')


const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

//para actualizar un campo utilisando updateMany filtrando por id_permiso y cambiando el campo nombre

async function actualizarpermiso(filtrar,actualizar){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('permiso').updateOne({id_permiso :filtrar},{$set:{nombre:actualizar}})
        
        console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);
        console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}
actualizarpermiso(4,"admin")

//para actualizar muchos campos utilisando updateMany  filtrando por id_permiso y cambiando el campo nombre
async function actualizarpermiso(filtrar,actualizar){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('permiso').updateMany({id_permiso :filtrar},{$set:{nombre:actualizar}})
        
        console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);
        console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}
actualizarpermiso(4,"admin")
