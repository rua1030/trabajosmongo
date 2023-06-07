const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')

// en esta funcion buscamos un muchos dato de la  collection usuario utilizando find

const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

async function listarUsuario(){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('usuarios').find()

        //mostrar los documentos 
        const todo = await result.toArray() // comvierte documento en un array   
        console.log(todo)
        
    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}

// en esta funcion buscamos un solo dato de la  collection usuario utilizando findOne
listarUsuario();
// async function listarUsuario(listar){
    
//     const client  = new MongoClient(uri)
//     try {
//         await client.connect()

//         const result = await client.db('taller').collection('usuarios').findOne({nombre:listar})
        
//         if(result){console.log(`el resultado de la busqueda es${listar}`);console.log(result)}
//     } catch (error) {
//         console.error(error)
//     }finally{
//             await client.close()
//     }

// }
// listarUsuario("juan")