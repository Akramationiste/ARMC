const express = require('express');
const router = express.Router();
const canControl = require('../Controllers/candidate');
const canMiddlewhare = require('../Middlewhare/candidate');



// // Getting all offers

// router.get('/offres', canControl.getAllOffres);


// // Getting one offre

// router.get('/offres/:id', canControl.getOffre);

// Creating a candidature 

// router.post('/candidatures', canControl.createCandidacy);

// // Updating a candidature

// router.patch('/candidatures/:id', canControl.getCandidature, canMiddlewhare.updatedCand);

module.exports = router