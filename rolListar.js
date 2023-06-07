const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')


const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

//esta funcion nos sirve para actualisa todos datos de la collecion rol


async function listarRol(){//creamos una funcion para listar la colecion rol
    
    const client  = new MongoClient(uri)//se esta instanciando el mongo y agregado la variable uri 
    //para hacer la coneccion a nuestra base de datos de atlas a visual
    try {
        await client.connect()//establesemos la conecion

        const result = await client.db('taller').collection('rol').find()//establesemos la base de datos la collecion y utilizamos (find) para buscar todos los documentos

        //mostrar los documentos 
        const todo = await result.toArray() // comvierte documento en un array   
        console.log(todo)//muestra el array en consola
        
    } catch (error) {
        console.error(error)//mostramos error en caso de teruno por consola
    }finally{
            await client.close()// cerramos la conecion
    }

}
listarRol();//llamamos la funcion
//esta funcion nos sirve para buscar un solo dato la collecion rol filtrando por id_rol 

async function listarUsuario(listar){
    
    const client  = new MongoClient(uri)//se esta instanciando el mongo y agregado la variable uri 
    //para hacer la coneccion a nuestra base de datos de atlas a visual
    try {
        await client.connect()//iniciamos la conecion

        const result = await client.db('taller').collection('rol').findOne({id_rol:listar})//establesemos la base de datos la collecion y utilizamos (find) para buscar todos los documentos
        
        if(result){console.log(`el resultado de la busqueda es${listar}`);console.log(result)}//mostramos por consola en caso de que se cumpla lacondicion el documento que queremos
    } catch (error) {
        console.error(error)//mostramos el error en caso de tener uno
    }finally{
            await client.close()//cerramos la conecion
    }

}
listarUsuario(4)//llamamos la funcion y entregamos el id que queremos buscar