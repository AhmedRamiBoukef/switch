const mongoose = require('mongoose');

const portSchemas = new mongoose.Schema({
        nm_port: {
            type: Number,
            required: true
        },
        nom_switch: {
            type: String,
            required: true
        },
        ip_vlan: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        cscade: {
            type: Boolean,
            required: true
        },
        EtatDePort: {
            type: String,
            required: true
        },
        Cascades_vers_depuis : {
            type: String,
            required: true
        },
        Cable: {
            type: String,
            required: true
        },
        Entree: {
            type: Boolean,
            required: true
        },
        prise: {
            type: String,
            required: true
        } 
    

}, { timestamps: true });

const Port = mongoose.model('Port',portSchemas);

module.exports = Port;