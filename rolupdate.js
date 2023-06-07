const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')


const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'
//esta funcion nos sirve para actualisar un dato la collecion rol filtrando por id_rol para actualizar  estado
async function actualizarRol(filtrar,actualizar){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('usuarios').updateOne({id_rol:filtrar},{$set:{estado:actualizar}},{$upsert:true})//upsert que si nop existe  locrea 
        
        console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);
        console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}
actualizarRol(4,false)

//esta funcion nos sirve para actualisar muchos datos  la collecion rol  para actualizar  estado

async function actualizarRol(actualizar){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('rol').updateMany({},{$set:{estado:actualizar}})
        
        console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);
        console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}
actualizarRol(true)