const mongoose = require('mongoose');

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
            unique : true, 
            required : true, 
            dropDups: true
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
            unique: true,
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

const Switch = mongoose.model('Switch',switchSchemas);

module.exports = Switch;