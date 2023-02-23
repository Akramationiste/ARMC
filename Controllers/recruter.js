const offre = require('../models/offre');
const candidature = require('../models/candidature');

// functions

async function createOffre(req, res, next){
    let offre = new offre({
        Type_offre: req.body.Type_offre,
        Poste: req.body.Poste,
        Entreprise: req.body.Entreprise,
        Type_de_contrat: req.body.Type_de_contrat,
        Durée_offre: req.body.Durée_offre
    });
    try {
      const nouvelleOffre = await offre.save(); // enregistrer l'offre dans la base de données
      res.status(201).json(nouvelleOffre); // renvoyer la réponse avec le code de statut 201 pour indiquer que la ressource a été créée avec succès
    } catch (err) {
      res.status(400).json({ message: err.message }); // renvoyer une réponse d'erreur avec le code de statut 400 pour indiquer que la requête était mal formée ou que les données étaient invalides
    };

    res.nouvelleOffre = offre;
    next();
};

async function updateeOffre(req, res, next){

    if(req.body.Type_offre != null) {
        res.offre.Type_offre = req.body.Type_offre
    }
    if(req.body.Poste != null) {
        res.offre.Poste = req.body.Poste
    }
    if(req.body.Entreprise != null) {
        res.offre.Entreprise = req.body.Entreprise
    }
    if(req.body.Type_de_contrat != null) {
        res.offre.Type_de_contrat = req.body.Type_de_contrat
    }
    if(req.body.Durée_offre != null) {
        res.offre.Durée_offre = req.body.Durée_offre
    }
    try {
        const updatedOffre = await res.offre.save();
        res.json(updatedOffre);
    } catch (err) {
        res.status(400).json({ message: err.message});
    };

    res.updatedOffre = offre;
    next();
};

async function deleteOffre(req, res, next){
    let offreSupprimée 
    try {
        offreSupprimée = await offre.findByIdAndRemove(req.params.id); // trouver et supprimer l'offre à partir de son identifiant dans la base de données
      if (offreSupprimée) {
        res.json({ message: 'Offre supprimée avec succès' }); // renvoyer une réponse avec un message de succès si l'opération réussit
      } else {
        res.status(404).json({ message: 'Offre non trouvée' }); // renvoyer une réponse d'erreur avec le code de statut 404 si l'offre n'a pas été trouvée
      }
    } catch (err) {
      res.status(500).json({ message: err.message }); // renvoyer une réponse d'erreur avec le code de statut 500 pour indiquer une erreur serveur
    };

    res.offreSupprimée = offreSupprimée;
    next();
}

async function getAllCandadicies(req, res, next){
    let candidature
    try {
        const candidatures = await candidature.find(); // récupérer toutes les candidatures dans la base de données
        res.json(candidatures); // renvoyer la liste des candidatures en réponse
        } catch (err) {
        res.status(500).json({ message: err.message }); // renvoyer une réponse d'erreur avec le code de statut 500 en cas d'erreur serveur
    };
  res.candidatures = candidature;
  next();
};


module.exports = {
    createOffre,
    updateeOffre,
    deleteOffre,
    getAllCandadicies
};