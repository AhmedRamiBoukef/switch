const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const switchSchemas = new mongoose.Schema({
        Bloc: {
            type: String,
            required: true
        },
        Armoire:  {
            type: String,
            required: true
        },
        Nom: {
            type: String, 
            required : true,
            unique :  'ce nom de switch existe deja'
            
        },
        Marque: {
            type: String,
            required: true
        },
        Modèle: {
            type: String,
            required: true
        },
        Adresse_IP: {
            type: String,
            required: true
        },
        N_d_inventaire: {
            type: String,
            required: true,
           unique :  'ce num d inventaire existe deja'
        },
        N_Serie: {
            type: String,
            required: true,
        },
        Adresse_MAC: {
            type: String,
            required: true
        },
        Nombre_de_ports_F_E: {
            type: Number,
            required: true
        },
        Nombre_de_ports_G_E: {
            type: Number,
            required: true
        },
        Nombre_de_ports_SFP: {
            type: Number,
            required: true
        },
        Etat:  {
            type: Boolean,
            required: true
        }
}, { timestamps: true });
switchSchemas.plugin(uniqueValidator);

const Switch = mongoose.model('Switch',switchSchemas);

module.exports = Switch;