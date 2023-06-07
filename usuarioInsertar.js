const {MongoClient}=require('mongodb')
const {faker}=require('@faker-js/faker')


//esta funcion es para insertar  muchos datos en la collection usuario utilizando inserMany

const uri='mongodb+srv://juandavidruaisaza:rua1030@crudmongodb.evarxze.mongodb.net/?retryWrites=true&w=majority'

async function insertarPropiedades(insertarN){
    
    const client  = new MongoClient(uri)
    try {
        await client.connect()

        const result = await client.db('taller').collection('usuarios').insertMany(insertarN)

        console.log(`el resultado es ${result.insertedIds}`)

    } catch (error) {
        console.error(error)
    }finally{
            await client.close()
    }

}

//hacemos un siclo for con que se repita 100 veces y agregamos 10 cada ves para asi agregar de a mil datos 

for  (let i =0; i<100; i++){
insertarPropiedades([
    {

    "nombre":faker.person.firstName(),
    "documento":faker.string.numeric({min:1,max:100000}),
    "telefono":faker.string.numeric({min:1,max:100000}),//usamos faker para crear tados aleatorios segun el campo que requerimos
    "email":faker.internet.email(),
    "clave":faker.string.alphanumeric(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.firstName(),
    "documento":faker.string.numeric({min:1,max:100000}),
    "telefono":faker.string.numeric({min:1,max:100000}),
    "email":faker.internet.email(),
    "clave":faker.string.alphanumeric(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.firstName(),
    "documento":faker.string.numeric({min:1,max:100000}),
    "telefono":faker.string.numeric({min:1,max:100000}),
    "email":faker.internet.email(),
    "clave":faker.string.alphanumeric(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.firstName(),
    "documento":faker.string.numeric({min:1,max:100000}),
    "telefono":faker.string.numeric({min:1,max:100000}),
    "email":faker.internet.email(),
    "clave":faker.string.alphanumeric(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.firstName(),
    "documento":faker.string.numeric({min:1,max:100000}),
    "telefono":faker.string.numeric({min:1,max:100000}),
    "email":faker.internet.email(),
    "clave":faker.string.alphanumeric(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.firstName(),
    "documento":faker.string.numeric({min:1,max:100000}),
    "telefono":faker.string.numeric({min:1,max:100000}),
    "email":faker.internet.email(),
    "clave":faker.string.alphanumeric(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.firstName(),
    "documento":faker.string.numeric({min:1,max:100000}),
    "telefono":faker.string.numeric({min:1,max:100000}),
    "email":faker.internet.email(),
    "clave":faker.string.alphanumeric(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.firstName(),
    "documento":faker.string.numeric({min:1,max:100000}),
    "telefono":faker.string.numeric({min:1,max:100000}),
    "email":faker.internet.email(),
    "clave":faker.string.alphanumeric(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.firstName(),
    "documento":faker.string.numeric({min:1,max:100000}),
    "telefono":faker.string.numeric({min:1,max:100000}),
    "email":faker.internet.email(),
    "clave":faker.string.alphanumeric(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},{

    "nombre":faker.person.firstName(),
    "documento":faker.string.numeric({min:1,max:100000}),
    "telefono":faker.string.numeric({min:1,max:100000}),
    "email":faker.internet.email(),
    "clave":faker.string.alphanumeric(),
    "estado":true,
    "id_rol":faker.number.int({min:1,max:4})

},

])
}