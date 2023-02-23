const express = require('express');
const router = express.Router();
const canControl = require('../Controllers/candidate');
const recControl = require('../Controllers/recruter');
const canMiddlewhare = require('../Middlewhare/candidate');


// // Creating an offer 


// router.post('/offres', recControl.createOffre);


// // Getting all offers

// router.get('/offres', canControl.getAllOffres);


// // Getting one offer 

// router.get('/offres/:id', canControl.getOffre);


// //Updating an offer

// router.patch('/offres/:id', recControl.updateeOffre);


//   //Deleting an offer 
  
//   router.delete('/offres/:id', recControl.deleteOffre);

// //Getting all candidacies
// router.get('/candidatures', recControl.getAllCandadicies);


// //Récupérer une candidature spécifique en fonction de son identifiant
// router.get('/candidatures/:id', canControl.getCandidature);


// //Mettre à jour l'état d'une candidature spécifique

// // router.patch('/candidatures/:id', canMiddlewhare.updatedCand);

module.exports = router;


