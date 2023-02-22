const express = require("express");
const ajoutertype = require("../Controllers/type");

const typeRoutes = express.Router()

typeRoutes.post("../", ajoutertype) 

module.exports = typeRoutes