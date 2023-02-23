const offre = require('../models/offre');
const candidature = require('../models/candidature');


// functions 

async function getAllOffres(req, res, next){
    let offres
    try {
        const offres = await offre.find();
        res.json(offres);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

    res.offres = offres;
    next();
};

async function getOffre(req, res, next){
    let offre
    try{
        offre = await offre.findById(req.params.id)
        if (offre == null) {
            return res.status(404).json({ message: err.message});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }

    res.offre = offre;
    next();
}


async function createCandidacy(req, res, next){
    let candidature = new candidature({
        name: req.body.name,
        age: req.body.age,
        experience: req.body.experience,
        diplome: req.body.diplome
    });
    try {
        const newCandidature = await candidature.save();
        res.status(201).json(newCandidature);
    }  catch (err) {
        res.status(400).json({ message: err.message})
    }

     res.newCandidature = candidature;
    next();

}

async function getCandidature(req, res, next){
    let candidature
    try{
        candidature = await candidature.findById(req.params.id)
        if (candidature == null) {
            return res.status(404).json({ message: err.message});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }

    res.candidature = candidature;
    next();
}


module.exports = {
    getAllOffres,
    getOffre,
    createCandidacy,
    getCandidature
};