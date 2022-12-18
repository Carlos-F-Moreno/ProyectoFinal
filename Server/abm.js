const mongodb = require("mongodb");
const connURL = "mongodb+srv://Carlos:7mogMBfRA3mqiSTK@cluster0.vw36v.mongodb.net/";
const connOptions = { useUnifiedTopology: true };
const dbNombre = "ProyectoFinal";   
const ColeccionDeCursos = "Cursos";
const coleccionDeAlumnos = "Alumnos";

function traerCursos(especialidad,crErr, cdDatos){
    mongodb.MongoClient.connect(connURL,connOptions,function(err, conn){
        if(err){
            crErr(err);
            return; 
        };
        const cursosColecion = conn.db(dbNombre).collection(ColeccionDeCursos);
        cursosColecion.find({Especialidad:especialidad}).toArray(function (colErr,arrayCursos){
            if(err){
                colErr(err);
                return;
            }
            cdDatos(arrayCursos);
        });
    });
};
function traerTodosLosCursos(crErr, cdDatos){
    mongodb.MongoClient.connect(connURL,connOptions,function(err, conn){
        if(err){
            crErr(err);
            return; 
        };
        const cursosColecion = conn.db(dbNombre).collection(ColeccionDeCursos);
        cursosColecion.find().toArray(function (colErr,arrayCursos){
            if(err){
                colErr(err);
                return;
            }
            cdDatos(arrayCursos);
        });
    });
};

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

function insertarUnAlumno(alumno, aErr, cbOk) {
    mongodb.MongoClient.connect(connURL, connOptions, function (err, conn) {
        if (err) {
            aErr(err);
            return;
        };
        const cursosColecion = conn.db(dbNombre).collection(coleccionDeAlumnos);
        cursosColecion.insertOne(
            { 
                apellido:alumno.apellido,
                nombre: alumno.nombre,
                dni: alumno.dni,
                division: alumno.division
            },
            function(err, result){
                if(err){
                    aErr = err;
                    return;
                }
                conn.close();

                cbOk();
            });
    });
};

function agregarCurso(division, agErr){
    mongodb.MongoClient.connect(connURL, connOptions, function (err, conn) {
        if (err) {
            agErr(err);
            return;
        };
        conn.db(dbNombre).collection(ColeccionDeCursos).insertOne(
            {
                division:division,
                alumnos:[]
            });
    })
}

function validarAlumno(alumno){
    if(!alumno.apellido || alumno.apellido === undefined ||alumno.apellido === null){return false};
    if(!alumno.nombre || alumno.nombre === undefined ||alumno.nombre === null){return false};
    if(!alumno.dni || alumno.dni === undefined ||alumno.dni ===  null){return false};
    if(!alumno.division || alumno.division ===  undefined ||alumno.division === null){return false}
    return true;
 };

module.exports = {traerCursos, traerAlumnos, insertarUnAlumno, agregarCurso, validarAlumno, traerTodosLosCursos};
