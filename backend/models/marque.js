const mongoose = require('mongoose');

const marqueSchemas = new mongoose.Schema({
        marque: {
            type: String,
            required: true
        } 
    

}, { timestamps: true });

const Marque = mongoose.model('Marque',marqueSchemas);

module.exports = Marque;