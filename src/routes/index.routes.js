const express = require('express');
const router = express.Router();

let coleccionJuegos = [
    { 
        id: 1, 
        nombre: "Monopoly", 
        minJugadores: 2, 
        maxJugadores: 6, 
        duracion: 60, 
        fechaAdquisicion: "20-10-2020", 
        estado: "En perfectas condiciones" 
    }
];


/////consultar y buscar en el catalogo con get para que genere cada una de las rutas
router.get('/juegos', function(req, res) {
    res.status(200).json(coleccionJuegos);
});

router.get('/juegos/:id', function(req, res) {
    const idBuscado = parseInt(req.params.id);
    const juego = coleccionJuegos.find(function(j) {
        return j.id === idBuscado;
    });

    if (juego) {
        res.status(200).json(juego);
    } else {
        res.status(404).json({ mensaje: "Juego no encontrado" });
    }
});

/////para crer nuevos juegos en el catalogo y recibir datos del JSON use post
router.post('/juegos', function(req, res) {
    const nuevoJuego = {
        id: coleccionJuegos.length + 1,
        nombre: req.body.nombre,
        minJugadores: req.body.minJugadores,
        maxJugadores: req.body.maxJugadores,
        duracion: req.body.duracion,
        fechaAdquisicion: req.body.fechaAdquisicion,
        estado: req.body.estado
    };
    
    coleccionJuegos.push(nuevoJuego);
    res.status(201).json(nuevoJuego);
});

///// actualizacion de los datos de los juegos

router.put('/juegos/:id', function(req, res) {
    const idBuscado = parseInt(req.params.id);
    const indice = coleccionJuegos.findIndex(function(j) {
        return j.id === idBuscado;
    });
    if (indice !== -1) {
        coleccionJuegos[indice].nombre = req.body.nombre;
        coleccionJuegos[indice].minJugadores = req.body.minJugadores;
        coleccionJuegos[indice].maxJugadores = req.body.maxJugadores;
        coleccionJuegos[indice].duracion = req.body.duracion;
        coleccionJuegos[indice].fechaAdquisicion = req.body.fechaAdquisicion;
        coleccionJuegos[indice].estado = req.body.estado;
        res.status(200).json(coleccionJuegos[indice]);
    } else {
        res.status(404).json({ mensaje: "No encontrado" });
    }
});


///////////// retirar juegosdel catalogo
router.delete('/juegos/:id', function(req, res) {
    const idBuscado = parseInt(req.params.id);
    const indice = coleccionJuegos.findIndex(function(j) {
        return j.id === idBuscado;
    });

    if (indice !== -1) {
        coleccionJuegos.splice(indice, 1);
        res.status(200).json({ mensaje: "Eliminado correctamente" });
    } else {
        res.status(404).json({ mensaje: "No existe ese ID" });
    }
});

module.exports = router;