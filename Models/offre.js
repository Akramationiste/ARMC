const assert = require('assert');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offreSchema = new Schema ({
    nom: String,
    document_fourni: String,
    offre_emploi: ObjectId,
    candidat: ObjectId
});

const offre = mongoose.model('offre', offreSchema);