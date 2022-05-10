const mongoose = require('mongoose');

const localSchemas = new mongoose.Schema({
        local: {
            type: String,
            required: true
        } 
    

}, { timestamps: true });

const Local = mongoose.model('Local',localSchemas);

module.exports = Local;