const db = require('./abm');
const express = require('express');
const app = express();
const path = require('path');
const epsHbls = require('express-handlebars');
const { get } = require('http');
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
    db.traerCursos(function (err) {
        if (err) {
            res.status(200).redirect(error);
        }
    }, function (datos) {
        const divisiones = [];
        for (let i = 0; i < datos.length; i++) {
            divisiones.push({ divisiones: datos[i].division });
        }
        res.render("home", {
            divisiones
        });
    });
});
app.get("/listaalumnos", function (req, res) {
    const curso = req.query.curso;
    db.traerAlumnos(curso, function (cErr) {
        if (err) {
            cErr(err);
            return;
        }
    },
        function (datos) {
            const x = datos.alumnos;
            const alumnos = [];
            for (let i = 0; i < x.length; i++) {
                alumnos.push({alumnos: datos.alumnos[i].nombre});
            }
            res.render("lista", {
                alumnos:alumnos
            });
        });
});
app.listen(port, () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`)
});