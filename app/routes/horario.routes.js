module.exports = (app) => {
    const Horario = require('../controllers/horario.controller.js');

    // Recibe todos los horarios
    app.get('/horario', Horario.findAll);

    
}