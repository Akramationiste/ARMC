const assert = require('assert');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const candidatureSchema = new Schema ({
    Nom_candidat: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },
    Experience: {
        type: String,
        required: true,
    },
    Diplome: {
        type: String,
        required: true,
    }
    });


const candidature = mongoose.model("candidature", candidatureSchema);
module.exports = candidature;

// module.exports = offre = mongoose.model("candidature", candidatureSchema);