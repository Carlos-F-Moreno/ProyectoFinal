const mongodb = require("mongodb");
const connURL = "mongodb+srv://Carlos:7mogMBfRA3mqiSTK@cluster0.vw36v.mongodb.net/";
const connOptions = { useUnifiedTopology: true };
const dbNombre = "ProyectoFinal";
const nombreDeColeccion = "Cursos";

function traerCursos(crErr, cdDatos){
    mongodb.MongoClient.connect(connURL,connOptions,function(err, conn){
        if(err){
            crErr(err);
            return; 
        };
        const cursosColecion = conn.db(dbNombre).collection(nombreDeColeccion);
        cursosColecion.find().toArray(function (colErr,arrayCursos){
            if(err){
                colErr(err);
                return;
            }
            cdDatos(arrayCursos);
        });
    });
};
function traerAlumnos(division, cErr, cdDatos, ){
    mongodb.MongoClient.connect(connURL,connOptions,function(err, conn){
        if(err){
            cErr(err);
            return;
        }
        const cursosColeccion = conn.db(dbNombre).collection(nombreDeColeccion);
        cursosColeccion.findOne({division: division}, function(colErr, arrayAlumnos){
            if(err){
                colErr(err);
                return;
            }
            cdDatos(arrayAlumnos);
        })
    })
};

module.exports = {traerCursos, traerAlumnos};
