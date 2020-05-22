const ModelHorario = require('../models/horario.model.js');

// Consulta los horarios
exports.findAll = (req, res) => {
    ModelHorario.find()
        .then(horarios => {
            res.send(horarios);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
    };
    
