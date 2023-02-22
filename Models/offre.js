const assert = require('assert');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const offreSchema = new Schema ({
    Type_offre: {
        type: String,
        required: true,
    },
    Poste: {
        type: String,
        required: true,
    },
    Entreprise: {
        type: String,
        required: true,
    },
    Type_de_contrat: {
        type: String,
        required: true,
    },
    Durée_offre: {
        type: String,
        required: true,
    },

});

const offre = mongoose.model("offre", offreSchema);
module.exports = offre;

// module.exports = offre = mongoose.model("offre", offreSchema);