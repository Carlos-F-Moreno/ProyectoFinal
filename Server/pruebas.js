const mongodb = require("mongodb");
const connURL = "mongodb+srv://Carlos:7mogMBfRA3mqiSTK@cluster0.vw36v.mongodb.net/";
const connOptions = { useUnifiedTopology: true };
const dbNombre = "ProyectoFinal";
const nombreDeColeccion = "Cursos";

function insertarAlumnos(alumno, aErr) {
    mongodb.MongoClient.connect(connURL, connOptions, function (err, conn) {
        if (err) {
            aErr(err);
            return;
        };
        const cursosColecion = conn.db(dbNombre).collection(nombreDeColeccion);

        cursosColecion.updateOne(
            { division: "6°1" },
            {
                $push: {
                    alumnos:{
                        nombre: alumno,
                        dni: "12345"
                    },
                }
            });
    })
};
insertarAlumnos("Manteca4");