const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')


const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

//esta funcion es para listar un muchos  datos en la tabla permiso utilizando find 

async function listarpermiso(){
    
    const client  = new MongoClient(uri) //se esta instanciando el mongo y agregado la variable uri 
    //para hacer la coneccion a nuestra base de datos de atlas a visual
    try {
        await client.connect()//aca se establese la conecion

        const result = await client.db('taller').collection('permiso').find()//espesificamos la base de datos la collecion y lo que queremos hacer en este caso buscar todos los documentos (find)
        //mostrar los documentos 
        const todo = await result.toArray() // comvierte documento en un array para poderlos mostrar  
        console.log(todo)//mostramos cada documento en consola
        
    } catch (error) {
        console.error(error)//mostramos error por consola 
    }finally{
            await client.close()// cerramos la conecion
    }
}
listarpermiso()//llamamos la funcion
//esta funcion es para listar un solo  datos en la tabla permiso utilizando findOne 
async function listarUsuario(listar){
    
    const client  = new MongoClient(uri)//se esta instanciando el mongo y agregado la variable uri 
    //para hacer la coneccion a nuestra base de datos de atlas a visual
    try {
        await client.connect()//aca se establese la conecion

        const result = await client.db('taller').collection('permiso').findOne({nombre:listar})//espesificamos la base de datos la collecion y lo que queremos hacer en este caso buscar  un documento (findOne)
        
        if(result){console.log(`el resultado de la busqueda es${listar}`);console.log(result)}//hacemos que encaso de que si se cumpla mostrar la busqueda en consola
    } catch (error) {
        console.error(error)//mostramos error en caso de que alla uno
    }finally{
            await client.close()//cerramos la conecion
    }

}
listarUsuario("admin")//llamamos la funcion y le damos el nombre que queremos buscar