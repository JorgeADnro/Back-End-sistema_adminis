const mongoose = require("mongoose");

const pacienteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    ocupation: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    domicile:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    chronologicalDisease:{
        type: String,
        required: true
    },
    pathologicalDisease:{
        type: String,
        required: true
    },
    SLAO:{
        type: Number,
        required: true
    },
    SLOI:{
        type: Number,
        required: true
    },
    SLOD:{
        type: Number,
        required: true
    },
    CLAO:{
        type: Number,
        required: true
    },
    CLOI:{
        type: Number,
        required: true
    },
    CLOD:{
        type: Number,
        required: true
    },
    Comments:{
        type: String,
        required: true
    },
    mostrarComentario:{
        type: String,
        require: false
    }
});

module.exports = mongoose.model('User', pacienteSchema);