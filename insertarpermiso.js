const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')


const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

//esta funcion es para insertar  muchos datos en la collection permiso utilizando inserMany

async function insertarPropiedades(insertarN){
    
    const client  = new MongoClient(uri)//se esta instanciando el mongo y agregado la variable uri 
    //para hacer la coneccion a nuestra base de datos de atlas a visual
    try {
        await client.connect()//aca se establese la conecion

        const result = await client.db('taller').collection('permiso').insertMany(insertarN)//espesificamos la base de datos la collecion y lo que queremos hacer en este caso insertar muchos  documentos (insertOne)
         
        console.log(`el resultado es ${result.insertedIds}`)
        console.log(insertarN)

    } catch (error) {
        console.error(error)//mostramos error en consola en caso de error
    }finally{
            await client.close()//cerramos la conecion
    }

}
//hacemos un siclo for con que se repita 100 veces y agregamos 10 cada ves para asi agregar de a mil datos 
for  (let i =0; i<100; i++){
insertarPropiedades([
    {

        "nombre":faker.person.prefix(),
        "estado":["true","activo"],
        "id_permiso":faker.number.int({min:1,max:4})
    
    },{

        "nombre":faker.person.prefix(),
        "estado":["true","activo"],
        "id_permiso":faker.number.int({min:1,max:4})
    
    },{

        "nombre":faker.person.prefix(),
        "estado":["true","activo"],
        "id_permiso":faker.number.int({min:1,max:4})
    
    },{

        "nombre":faker.person.prefix(),
        "estado":["true","activo"],
        "id_permiso":faker.number.int({min:1,max:4})
    
    },{

        "nombre":faker.person.prefix(),
        "estado":["true","activo"],
        "id_permiso":faker.number.int({min:1,max:4})
    
    },{

        "nombre":faker.person.prefix(),
        "estado":["true","activo"],
        "id_permiso":faker.number.int({min:1,max:4})
    
    },{

        "nombre":faker.person.prefix(),
        "estado":["true","activo"],
        "id_permiso":faker.number.int({min:1,max:4})
    
    },{

        "nombre":faker.person.prefix(),
        "estado":["true","activo"],
        "id_permiso":faker.number.int({min:1,max:4})
    
    },{

        "nombre":faker.person.prefix(),
        "estado":["true","activo"],
        "id_permiso":faker.number.int({min:1,max:4})
    
    },{

        "nombre":faker.person.prefix(),
        "estado":["true","activo"],
        "id_permiso":faker.number.int({min:1,max:4})
    
    },
])}