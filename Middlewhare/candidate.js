const candidature = require('../models/candidature');

async function updatedCand(req, res, next){
    let candidature
    if(req.body.type != null) {
        res.candidature.type = req.body.type
    }
    if(req.body.poste != null) {
        res.candidature.poste = req.body.poste
    }
    if(req.body.entreprise != null) {
        res.candidature.entreprise = req.body.entreprise
    }
    if(req.body.contrat != null) {
        res.candidature.contrat = req.body.contrat
    }
    if(req.body.time != null) {
        res.candidature.time = req.body.time
    }
    try {
        const updatedCandidature = await res.candidature.save();
        res.json(updatedCandidature);
    } catch (err) {
        res.status(400).json({ message: err.message});
    };

    res.updatedCandidature = candidature;
    next();
};

module.exports = {
    updatedCand
};