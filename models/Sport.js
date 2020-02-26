const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sportSchema = new Schema({
    name: {
        type: String,
    },

    image: {
        type: String,
        default: "https://cdn.onlinewebfonts.com/svg/img_258083.png"
    }
});

const sportModel = mongoose.model("Sport", sportSchema);

module.exports = sportModel;