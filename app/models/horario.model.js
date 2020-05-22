const mongoose = require('mongoose');

const HorarioSchema = mongoose.Schema({
    horaId: Number,
    hora: String,
    timezone: String,
}, {
    collection: 'horario'
});
module.exports = mongoose.model('horario', HorarioSchema);