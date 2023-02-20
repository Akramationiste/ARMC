const assert = require('assert');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const typeSchema = new Schema ({
    identifiant: ObjectId,
    poste: String,
    entreprise: String,
    type_contrat: String,
    duree: String
});

const type = mongoose.model('type', typeSchema);