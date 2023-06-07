const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')


const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

//esta funcion es para listar un muchos  datos en la tabla permiso utilizando find 

async function listarpermiso(){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('permiso').find()
        //mostrar los documentos 
        const todo = await result.toArray() // comvierte documento en un array para poderlos mostrar  
        console.log(todo)
        
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }
}
listarpermiso()
//esta funcion es para listar un solo  datos en la tabla permiso utilizando findOne 
async function listarUsuario(listar){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('permiso').findOne({nombre:listar})
        
        if(result){console.log(`el resultado de la busqueda es${listar}`);console.log(result)}
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}
listarUsuario("admin")