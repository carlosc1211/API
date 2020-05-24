const ModelHorario = require('../models/horario.model.js');

// Consulta los horarios
exports.findAll = (req, res) => {
    ModelHorario.find()
        .then(horarios => {
            res.send(horarios);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error."
            });
        });
    };
/* 
exports.findOne = (req, res) => {
    ModelHorario.findById(req.params.horaId)
    .then(horarios => {
        if(!horarios) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.horaId
            });            
        }
        res.send(horarios);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.horaId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.horaId
        });
    });
}; */
    
