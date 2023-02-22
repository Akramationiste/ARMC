import mongoose from "mongoose"
import express from "express"

mongoose.Promise = global.Promise


const app = express()

import {authentificationroutes} from "../ARMC/Routes/authentificationroutes";
app.use('/authentification', authentificationroutes);

////connexion avec la base de données////
    mongoose.connect("mongodb+srv://chanelhm50:iPqIxFQtJrkHRqkW@cluster0.q8id5cn.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log('connected');

    app.listen(8080, ()=>{
        console.log("app running on 8080");
    })
   
}).catch(err => console.log(err))



app.use(express.json())
const typeRoutes = require("./Routes/type")

app.use("/type", typeRoutes)


app.get("/", (req, res) => {
    res.send("working")
})



////////////ADMIN/////////////

// Créer un modèle pour les types d'offres
// const type = mongoose.model('type', typeSchema);

// Créer un nouveau type d'offre
async function ajoutertype(req, res) {
  const nouveauType = new type(type);
  const result = await nouveauType.save();
  res.json(result);
}

// Récupérer la liste de toutes les types d'offre
async function affichertype(req, res) {
  const result = await type.find();
  return result;
}

// Supprimer un type
async function Supprimertype(req, res) {
  const result = await type.findByIdAndDelete(id);
  return result;
}

// Mettre à jour un type d'offre spécifique en fonction de son ID
async function modifiertype(req, res) {
  const result = await type.findByIdAndUpdate(id, type, { new: true });
  return result;
}





// ////////////RECRUTEUR/////////////

// // Créer un modèle pour les offres
// const offre = mongoose.model('offre', typeSchema);

// // Créer une nouvelle offre
// async function ajouteroffre(offre) {
//   const nouvelleoffre = new offre(offre);
//   const result = await nouveauType.save();
//   return result;
// }

// // Récupérer la liste de toutes les offres
// async function afficheroffre() {
//   const result = await offre.find();
//   return result;
// }
// // Récupérer une offre by ID
// async function afficheroffrebyid(id) {
//   const result = await offre.findById();
//   return result;
// }

// // Supprimer une offre en fonction de son ID
// async function Supprimeroffre(id) {
//   const result = await offre.findByIdAndDelete(id);
//   return result;
// }

// // Mettre à jour une offre spécifique en fonction de son ID
// async function modifiertype(id, offre) {
//   const result = await offre.findByIdAndUpdate(id, offre, { new: true });
//   return result;
// }