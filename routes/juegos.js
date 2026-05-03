const express = require('express');
const router = express.Router();

///////realizar el crud ingresar consulrtar buscar actualizar y retirar

let juegos = [
    { 
        id: 1, 
        nombre: "Uno", 
        minJugadores: 2, 
        maxJugadores: 10, 
        duracion: 30, 
        fechaAdquisicion: "2024-01-15", 
        estado: "En perfectas condiciones" 
    }
];