const express = require("express");
const router = express.Router();
const adControl = require('../Controllers/admin');
const adMiddlewhare = require('../Middlewhare/admin');


// Creating a category

router.post('/categories', adControl.createCategory);


// Getting all categories

router.get('/categories', adControl.getAllCategories);


  //Deleting a category 
  
  router.delete('/categories/:id', adControl.deleteCategory);


  // Updating a category

router.patch('/categories/:id', adControl.getCategory, adMiddlewhare.updatedCategory);


module.exports = router;