const db = require('./abm');
const express = require('express');
const app = express();
const path = require('path');
const epsHbls = require('express-handlebars');
const { get } = require('http');
const { Console } = require('console');
const port = 3006;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client")));

app.engine(
    "handlebars",
    epsHbls({
        defaultLayout: "main",
        layoutsDir: "Views/layouts",
    })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));


app.get("/", function (req, res) {
    res.render("home");
});
app.get("/curso", function (req, res) {
    const especialidad = req.query.especialidad;
    db.traerCursos(especialidad, function (err) {
        if (err) {
            res.status(400).redirect(error);
        }
    },function(Datos){
        res.json(Datos);
    });
    
});
app.get("/lista", function(req, res){
    const division = req.query.division;
    console.log(division);
    db.traerAlumnos(division, function (err) {
        if (err) {
            res.status(400).redirect(error);
        };
    },function(Datos){
        const alumnos = [];
        for (let i = 0; i < Datos.length; i++) {
            alumnos.push({nombre: Datos[i].nombre,
                apellido: Datos[i].apellido});
        };
        console.log(alumnos);
        res.render("lista",{alumnos:alumnos});
    });
});
app.get("/insertaralumnos", function(req,res){
    db.traerTodosLosCursos(function (err) {
        if (err) {
            res.status(400).redirect(error);
        };
    },function(Datos){
        const divisiones = [];
        for (let i = 0; i < Datos.length; i++) {
            divisiones.push({divisiones: Datos[i].Division});
        };
        res.render("agregarAlumno",{divisiones:divisiones});
    });
    
});
app.post("/insertarAlumno", function(req,res){
    
    if(!db.validarAlumno(req.body)){
        res.render("error", {
            error:"Datos no validos"
        });
        return;
    };

    let nuevoAlumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: +req.body.dni,
        division: req.body.division
    };
    console.log(nuevoAlumno);
    db.insertarUnAlumno(nuevoAlumno, function(aErr){
        if (aErr) {
            res.render("error",{
                error:aErr
            });
        };
    },
    function(){
        res.redirect("/insertaralumnos");
    });
});
app.post("/agregarCurso",function(req,res){
    
})
app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`)
});