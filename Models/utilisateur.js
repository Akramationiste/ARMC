// const assert = require('assert');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const utilisateurSchema = new Schema ({
    code: Number,
    nom: String,
    numero_telephone: Number,
    adresse_email: String,
    nom_utilisateur: String,
    mot_de_passe: String,
    type_utilisateur: String,
    //recruteur//
    entreprise: String,
    position: String,
    //candidaat
    diplome: String,
    age: Number,
    experience: Number,
      adresse: {
      rue: String,
      ville: String,
      wilaya: String,
      code_postal: String
          }
});

const utilisateur = mongoose.model("utilisateur", utilisateurSchema);
module.exports = utilisateur;