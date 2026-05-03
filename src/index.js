const express = require('express');
const app = express();
const rutasJuegos = require('./routes/index.routes');

app.use(express.json()); /////para procesar JSON
app.use('/api', rutasJuegos);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});