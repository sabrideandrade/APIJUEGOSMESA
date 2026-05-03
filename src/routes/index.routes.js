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

router.post('/juegos', (req, res) => {
    const nuevoJuego = {
        id: coleccion.length + 1,
        ...req.body
    };
    coleccion.push(nuevoJuego);
    res.status(201).json(nuevoJuego);
});