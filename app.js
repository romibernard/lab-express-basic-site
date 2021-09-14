//IMPORTACIONES
console.log(__dirname);

const express = require('express');
//para hacer uso de todos sus métodos y generar nuestro server
const app = express();

//Con esta línea le decimos a Express que sirva de manera pública los archivos de /public
//hacer nuestra carpeta pública disponible:
app.use(express.static("public"))

app.get("/",(req, res) => {
    res.sendFile(`${__dirname}/public/views/index.html`)
});

app.get("/about",(req, res) => {
    res.sendFile(`${__dirname}/public/views/about.html`)
});

app.get("/galery",(req, res) => {
    res.sendFile(`${__dirname}/public/views/galery.html`)
});

app.get("/records",(req, res) => {
    res.sendFile(`${__dirname}/public/views/records.html`)
});

app.listen(3000, () => {
    console.log("https://localhost:3000")
});