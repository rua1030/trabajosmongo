const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')
const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

//esta funcion es para eliminar un datos de la tabla permisos utilizando deleteOne

async function deletepermiso(eliminar){
    
    const client  = new MongoClient(uri) //se esta instanciando el mongo y agregado la variable uri 
    //para hacer la coneccion a nuestra base de datos de atlas a visual
    try {
        await client.connect() //aca se establese la conecion

        const result = await client.db('taller').collection('permiso').deleteOne({nombre:eliminar})//espesificamos la base de datos la collecion y lo que queremos hacer en este caso eliminar solo un documento (delteOne)
        console.log(`${result.deletedCount} propiedad(es) fue(ron) eliminida(s)`)
    } catch (error) {
        console.error(error)//aparecer error en la collecion
    }finally{
            await client.close() //aca cerramos la collecion
    }

}
deletepermiso("juan") //llamamos la funcion  y el nombre que queremos eliminar



//esta funcion es para eliminar muchos datos utilizando deleteMany

async function deletepermiso(eliminar){ //crearmos una funcion y le damos un parametro eliminar
    
    const client  = new MongoClient(uri)// //se esta instanciando el mongo y agregado la variable uri 
    //para hacer la coneccion a nuestra base de datos de atlas a visual
    try {
        await client.connect()//aca se establese la conecion

        const result = await client.db('taller').collection('permiso').deleteMany({id_permiso:eliminar})//espesificamos la base de datos la collecion y lo que queremos hacer en este caso eliminar solo un documento (delteMany)
        console.log(`${result.deletedCount} todas las propiedad(es) fue(ron) eliminida(s)`)
    } catch (error) {
        console.error(error)//mostramos si hay error por consola
    }finally{
            await client.close()//cerramos la coneccion
    }

}
deletepermiso(1)//llamamos la funcion y el id que queremos eliminar