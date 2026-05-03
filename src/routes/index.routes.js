///////////// modifique las carpetas como la clase pasada
const express = require('express');
const router = express.Router();

let coleccion = [
    { 
        id: 1, 
        nombre: "Monopoly", 
        minJugadores: 2, 
        maxJugadores: 6, 
        duracion: 60, 
        fechaAdquisicion: "2024-03-20", 
        estado: "En perfectas condiciones" 
    }
];
/////consultar el catalogo con get para que genere cada una de las rutas
router.get('/juegos', (req, res) => {
    res.status(200).json(coleccion);
});


router.get('/juegos/:id', (req, res) => {
    const juego = coleccion.find(j => j.id === parseInt(req.params.id));
    if (juego) {
        res.status(200).json(juego);
    } else {
        res.status(404).json({ mensaje: "Juego no encontrado" });
    }
});

/////para crer nuevos juegos en el catalogo y recibir datos del JSON use post
router.post('/juegos', (req, res) => {
    const nuevoJuego = {
        id: coleccion.length + 1,
        ...req.body
    };
    coleccion.push(nuevoJuego);
    res.status(201).json(nuevoJuego);
});

///// actualizacion de los datos de los juegos

router.put('/juegos/:id', (req, res) => {
    const indice = coleccion.findIndex(j => j.id === parseInt(req.params.id));
    if (indice !== -1) {
        coleccion[indice] = { id: parseInt(req.params.id), ...req.body };
        res.status(200).json(coleccion[indice]);
    } else {
        res.status(404).json({ mensaje: "No existe para actualizar" });
    }
});


///////////// retirar juegosdel catalogo
router.delete('/juegos/:id', (req, res) => {
    const indice = coleccion.findIndex(j => j.id === parseInt(req.params.id));
    if (indice !== -1) {
        coleccion.splice(indice, 1);
        res.status(200).json({ mensaje: "Juego retirado del catalogo" });
    } else {
        res.status(404).json({ mensaje: "ID no encontrado" });
    }
});

module.exports = router;