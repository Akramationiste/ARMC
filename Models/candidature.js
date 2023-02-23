const mongoose = require("mongoose");

const candidatureSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    diplome: {
        type: String,
        required: true,
    }
    });



 module.exports = mongoose.model("candidature", candidatureSchema);