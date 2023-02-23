const express = require("express");
const router = express.Router();
const canControl = require('../Controllers/candidate');
const recControl = require('../Controllers/recruter');


// Getting all offers

router.get('/offres', canControl.getAllOffres);


// Getting one offre

router.get('/offres/:id', canControl.getOffre);


// Creating an offer 


router.post('/offres', recControl.createOffre);


// Getting all offers

router.get('/offres', canControl.getAllOffres);


// Getting one offer 

router.get('/offres/:id', canControl.getOffre);


//Updating an offer

router.patch('/offres/:id', recControl.updateeOffre);


  //Deleting an offer 
  
  router.delete('/offres/:id', recControl.deleteOffre);

  

module.exports = router;