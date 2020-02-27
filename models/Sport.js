const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sportSchema = new Schema({
    name: {
        type: String,
    },

    image: {
        type: String,
        default: "https://www.acteursdusport.fr/mediatheque/5/8/4/000009485_600x400_c.png"
    }
});

const sportModel = mongoose.model("Sport", sportSchema);

module.exports = sportModel;