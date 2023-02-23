const mongoose = require("mongoose");

const offreSchema = new mongoose.Schema ({
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

module.exports =  mongoose.model("offre", offreSchema);