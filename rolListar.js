const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')


const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

//esta funcion nos sirve para actualisa todos datos de la collecion rol


async function listarRol(){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('rol').find()

        //mostrar los documentos 
        const todo = await result.toArray() // comvierte documento en un array   
        console.log(todo)
        
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}
listarRol();
//esta funcion nos sirve para buscar un solo dato la collecion rol filtrando por id_rol 

async function listarUsuario(listar){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('rol').findOne({id_rol:listar})
        
        if(result){console.log(`el resultado de la busqueda es${listar}`);console.log(result)}
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}
listarUsuario(4)