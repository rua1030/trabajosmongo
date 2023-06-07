const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')


const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

//para actualizar un campo utilisando updateMany filtrando por id_permiso y cambiando el campo nombre

async function actualizarpermiso(filtrar,actualizar){
    
    const client  = new MongoClient(uri)//se esta instanciando el mongo y agregado la variable uri 
    //para hacer la coneccion a nuestra base de datos de atlas a visual
    try {
        await client.connect()//iniciamos la conecion

        const result = await client.db('taller').collection('permiso').updateOne({id_permiso :filtrar},{$set:{nombre:actualizar}})//espesificamos que base de datos que collecion queremos en este caso  ususarios y buscamos por id_permiso y actualizamos el nombre del permiso
        
        console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);//mostramos propiedades que cumple 
        console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);//mostramos documentos ya actualizados
    } catch (error) {
        console.error(error)//mostramos error si tenemos
    }finally{
            await client.close()//cerramos conecion
    }

}
actualizarpermiso(4,"admin")//llamamos la funcion entregamos el id que queremos actualizar y el nombre por el cual vamos a cambiar

//para actualizar muchos campos utilisando updateMany  filtrando por id_permiso y cambiando el campo nombre
async function actualizarpermiso(filtrar,actualizar){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('permiso').updateMany({id_permiso :filtrar},{$set:{nombre:actualizar}})//espesificamos que base de datos que collecion queremos en este caso  ususarios y buscamos por id_permiso y actualizamos el estado
        
        console.log(`${result.matchedCount} propiedade(s) cumple con el citerio de búsqueda`);//mostramos propiedades que cumplen   
        console.log(`${result.modifiedCount} propiedade(s) fue(ron) actualizada(s)`);//mostramos documentos actualizados
    } catch (error) {
        console.error(error)//mostramos error encaso de tener
    }finally{
            await client.close()//cerramos la coneccion
    }

}
actualizarpermiso(4,"admin")//llamamos la funcion y buscamos por id y el nombre de lpermiso que queremos actualizar
