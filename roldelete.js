const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'
//esta funcion es para listar un solo  datos en la tabla permiso utilizando findOne 

async function deleteRol(eliminar){
    
    const client  = new MongoClient(uri)//se esta instanciando el mongo y agregado la variable uri 
    //para hacer la coneccion a nuestra base de datos de atlas a visual
    try {
        await client.connect()//aca se establese la conecion

        const result = await client.db('taller').collection('rol').deleteOne({id_rol:eliminar})//espesificamos la base de datos la collecion y lo que queremos hacer en este caso eliminar solo un documento (delteOne)
        console.log(`${result.deletedCount} propiedad(es) fue(ron) eliminida(s)`)
    } catch (error) {
        console.error(error)//aparecer error en la collecion
    }finally{
            await client.close()//aca cerramos la collecion
    }

}
deleteRol(4)//llamamos la funcion  y el id que queremos eliminar

async function deleteUsuario(eliminar){ //crearmos una funcion y le damos un parametro eliminar
    
    const client  = new MongoClient(uri) //se esta instanciando el mongo y agregado la variable uri 
    //para hacer la coneccion a nuestra base de datos de atlas a visual
    try {
        await client.connect()//aca se establese la conecion

        const result = await client.db('taller').collection('rol').deleteMany({estado:eliminar})//espesificamos la base de datos la collecion y lo que queremos hacer en este caso eliminar todos los documentos que cumplan (delteMany)
        console.log(`${result.deletedCount} todas las propiedad(es) fue(ron) eliminida(s)`)//mostramos un mensaje en consola en caso de que si se haga la eliminacion
    } catch (error) {
        console.error(error)//mostramos el error en caso de tener uno
    }finally{
            await client.close()//cerramos la conecion
    }

}
deleteUsuario(true)//llamamos la funcion y le entregamos los estados que queremos eliminar