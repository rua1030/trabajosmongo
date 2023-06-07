const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')


const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

//esta funcion es para insertar  muchos datos en la collection rol utilizando inserMany
async function insertarPropiedades(insertarN){
    
    const client  = new MongoClient(uri)//se esta instanciando el mongo y agregado la variable uri 
    //para hacer la coneccion a nuestra base de datos de atlas a visual
    try {
        await client.connect()//establesemos conecion

        const result = await client.db('taller').collection('rol').insertMany(insertarN)//espesificamos la base de datos la collecion y lo que queremos hacer en este caso insertar muchos documentos (insertMany)

        console.log(`el resultado es ${result.insertedIds}`)//mostramos las inserciones por consola

    } catch (error) {
        console.error(error)//mostramos error en caso de tener uno
    }finally{
            await client.close()//cerramos la conecion
    }

}
//hacemos un siclo for con que se repita 100 veces y agregamos 10 cada ves para asi agregar de a mil datos 

for  (let i =0; i<100; i++){
insertarPropiedades([
    {

    "nombre":faker.person.prefix(),//usamos faker para crear tados aleatorios segun el campo que requerimos
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.prefix(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.prefix(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.prefix(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.prefix(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.prefix(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.prefix(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.prefix(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.prefix(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.prefix(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

}
])}