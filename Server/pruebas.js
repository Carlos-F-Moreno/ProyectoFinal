const mongodb = require("mongodb");
const connURL = "mongodb+srv://Carlos:7mogMBfRA3mqiSTK@cluster0.vw36v.mongodb.net/";
const connOptions = { useUnifiedTopology: true };
const dbNombre = "ProyectoFinal";
const ColeccionDeCursos = "Cursos";
const coleccionDeAlumnos = "Alumnos";

function traerAlumnos(divison, cErr, cdDatos, ){
    mongodb.MongoClient.connect(connURL,connOptions,function(err, conn){
        if(err){
            cErr(err);
            return;
        }
        const cursosColeccion = conn.db(dbNombre).collection(coleccionDeAlumnos);
        cursosColeccion.find({division: divison}).toArray(function(colErr, arrayAlumnos){
            if(err){
                colErr(err);
                return;
            }
            cdDatos(arrayAlumnos);
            conn.close();
        })
    })
};
traerAlumnos("6°2",function(err){
    if(err){
        console.log(err);
    }
},
function(Datos){
    console.log(Datos);
});