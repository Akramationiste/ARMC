const category = require('../models/category');


// functions 

async function createCategory(req, res, next){
    let category = new category({
        Type_offre: req.body.Type_offre,
        Poste: req.body.Poste,
        Entreprise: req.body.Entreprise,
        Type_de_contrat: req.body.Type_de_contrat,
        Durée_offre: req.body.Durée_offre
    });
    try {
      const nouvelleCategory = await category.save(); 
      res.status(201).json(nouvelleCategory); 
    } catch (err) {
      res.status(400).json({ message: err.message }); 
    };

    res.nouvelleCategory = category;
    next();
};


async function getCategory(req, res, next){
    let category
    try{
        category = await category.findById(req.params.id)
        if (category == null) {
            return res.status(404).json({ message: err.message});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }

    res.category = category;
    next();
};


async function getAllCategories(req, res, next){
    let categories
    try {
        const categories = await category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

    res.categories = categories;
    next();
};

async function deleteCategory(req, res, next){
    let categorySupprimée 
    try {
        categorySupprimée = await category.findByIdAndRemove(req.params.id); 
      if (categorySupprimée) {
        res.json({ message: 'category supprimée avec succès' }); 
      } else {
        res.status(404).json({ message: 'category non trouvée' }); 
      }
    } catch (err) {
      res.status(500).json({ message: err.message }); 
    };

    res.categorySupprimée =  categorySupprimée;
    next();
}


module.exports = {
    createCategory,
    getCategory,
    getAllCategories,
    deleteCategory
};