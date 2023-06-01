const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    codigo: String,
    nome: String,
    sobrenome: String,
    dataNascimento: Date,
    telefone: String,
    endereco: String,
    cidade: String,
    estado: String,
    status: String,
    fotoPerfil: Buffer
});

module.exports = mongoose.model('subscriber', subscriberSchema);
