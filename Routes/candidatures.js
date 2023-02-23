const express = require("express");
const router = express.Router();
const canControl = require('../Controllers/candidate');
const recControl = require('../Controllers/recruter');
const canMiddlewhare = require('../Middlewhare/candidate');




// Creating a candidature 

router.post('/candidatures', canControl.createCandidacy);

// Updating a candidature

router.patch('/candidatures/:id', canControl.getCandidature, canMiddlewhare.updatedCand);

//Getting all candidacies
router.get('/candidatures', recControl.getAllCandadicies);


//Récupérer une candidature spécifique en fonction de son identifiant
router.get('/candidatures/:id', canControl.getCandidature);


//Mettre à jour l'état d'une candidature spécifique

router.patch('/candidatures/:id', canMiddlewhare.updatedCand);


module.exports = router;