const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')


const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'
//esta funcion nos sirve para actualisar un dato la collecion rol filtrando por id_rol para actualizar  estado
async function actualizarRol(filtrar,actualizar){
    
    const client  = new MongoClient(uri)//se esta instanciando el mongo y agregado la variable uri 
    //para hacer la coneccion a nuestra base de datos de atlas a visual
    try {
        await client.connect()//iniciamos conecion
        //espesificamos que base de datos que collecion queremos en este caso  ususarios y buscamos por id_rol y actualizamos el estado
        const result = await client.db('taller').collection('usuarios').updateOne({id_rol:filtrar},{$set:{estado:actualizar}},{$upsert:true})//upsert que si nop existe  locrea 
        
        console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);//mostramos la propiedad que vamos a actualizar
        console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);//mostramos el documeto actualizado
    } catch (error) {
        console.error(error)//mostramos en consola error encaso de tener
    }finally{
            await client.close()//cerramos la conecion
    }

}
actualizarRol(4,false)//llamamos la funcion con el id que queremos actualizar y lo que vamos a actualizar de ese id_rol

//esta funcion nos sirve para actualisar muchos datos  la collecion rol  para actualizar  estado

async function actualizarRol(actualizar){
    
    const client  = new MongoClient(uri)//se esta instanciando el mongo y agregado la variable uri 
    //para hacer la coneccion a nuestra base de datos de atlas a visual
    try {
        await client.connect()//iniciamos conecion

        const result = await client.db('taller').collection('rol').updateMany({},{$set:{estado:actualizar}})//espesificamos que base de datos que collecion queremos en este caso  ususarios y  actualizamos todos los estados con(updateMany)
        
        console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);//muestra los documentos que cumple 
        console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);//muestra los documentos actualizados
    } catch (error) {
        console.error(error)//mostramos error en caso de tener uno
    }finally{
            await client.close()//cerramos la conecion
    }

}
actualizarRol(true)//llamamos la funcion y entregamos el valor a actualizar