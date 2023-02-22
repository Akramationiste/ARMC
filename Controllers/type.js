const type = require("../Models/type");

async function ajoutertype(req, res) {
    const nouveauType = new type(req.body);
    const result = await nouveauType.save();
    res.json(result);
  }

  module.exports = ajoutertype;