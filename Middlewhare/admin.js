const category = require('../models/category');

async function updatedCategory(req, res, next){
    let category
    if(req.body.title != null) {
        res.category.title = req.body.title
    }
    
    try {
        const updatedCategory = await res.category.save();
        res.json(updatedCategory);
    } catch (err) {
        res.status(400).json({ message: err.message});
    };
    next();

    res.updatedCategory = category;
    next();
};

module.exports = {updatedCategory};