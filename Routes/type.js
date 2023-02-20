const express = require("express");
const ajoutertype = require("../Controlers/type");

const typeRoutes = express.Router()

typeRoutes.post("/", ajoutertype)

module.exports = typeRoutes
