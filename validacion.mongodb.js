// validamos los datos que nesecitamos para nuestra collecion usuario 

use("taller")
// db.createCollection("usuarios",{
//    validator: {
//      $jsonSchema: {
//        bsonType: "object",
//        title: "Usuario Object Validation",
//        required: ["nombre", "documento", "telefono", "email", "clave", "estado", "id_permiso"],
//        properties: {
//          nombre: {
//            bsonType: "string",
//            description: "'nombre' debe contener solo letras"
//          },
//          documento: {
//            bsonType: "string",
//            description: "'documento' debe tener un mínimo de 8 caracteres y un máximo de 11 caracteres"
//          },
//          telefono: {
//            bsonType: "string",
//            description: "'telefono' debe contener solo números y el símbolo '+'"
//          },
//          email: {
//            bsonType: "string",
//            pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
//            description: "'email' es obligatorio y debe tener un formato válido"
//          },
//          clave: {
//            bsonType: "string",
//            description: "'clave' debe tener al menos 8 caracteres alfanuméricos"
//          },
//          estado: {
//            bsonType: "bool",
//            description: "'estado' debe ser un valor booleano (true/false)"
//          },
//          id_permiso: {
//            bsonType: "int",
//            description: "'id_permiso' debe ser un número entero"
//          }
//        }
//      }
//    }
//  });




// validamos los datos que nesecitamos para nuestra collecion rol


//  db.createCollection("rol",{
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       title: "Usuario Object Validation",
//       required: ["nombre","estado","id_permiso"],
//       properties: {
//         nombre: {
//           bsonType: "string",
//           description: "'nombre' debe contener solo letras"
//         },
//         estado: {
//           bsonType: "bool",
//           description: "'estado' debe ser un valor booleano (true/false)"
//         },
//         id_permiso: {
//           bsonType: "int",
//           description: "'id_permiso' debe ser un número entero"
//         }
//       }
//     }
//   }
// });



// validamos los datos que nesecitamos para nuestra collecion permiso


// db.createCollection("permiso",{
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       title: "Usuario Object Validation",
//       required: ["nombre","estado","id_permiso"],
//       properties: {
//         nombre: {
//           bsonType: "string",
//           description: "'nombre' debe contener solo letras"
//         },
//         estado: {
//           bsonType: "string",
//           description: "'estado' debe ser un valor booleano (true/false)"
//         },
//         id_permiso: {
//           bsonType: "int",
//           description: "'id_permiso' debe ser un número entero"
//         }
//       }
//     }
//   }
// });

//mostrar el array

// db.permiso.aggregate([

//   {$unwind:"$estado"
//   }
// ])





//unir las colecciones


// db.usuarios.aggregate([

//   {
//     $lookup: {
//       from: "rol",//unir las colleciones
//       localField: "'_id'",
//       foreignField:"'id_rol'",
//       as: "comentarios"
//     }
//   }
// ])


// mach va buscar todos los id_rol que sean mayor a 4
// db.usuarios.aggregate([
//   {
//     $match: {
//       id_rol:{$eq:4}
//     }
//   },{
//     $project: {
//       "nombre": true,
//       "documento" : true,
//       "clave" : true
//     }

//   },{
//     $limit: 5 // mostramos solo la cantidad que queremos
//   }
// ])

// db.usuarios.aggregate([
//   {
//     $match: {
//       id_rol:{$eq:4} 
//     }
//   },{
//     $project: {
//       "nombre": true,
//       "documento" : true, // decimos que datos queremos mostrar 
//       "clave" : true
//     }

//   },{
//     $sort: {
//       "estado": 1 // organisamos de manera hacendente 
//     }
//   }
// ])

