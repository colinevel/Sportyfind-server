const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    date: String,

    time: String,

    localisation: {
        type: String,
        required: true
    },

    lat: {
        type: String
    },

    lng: {
        type: String
    },

    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    participants: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],

    maxParticipants: Number,

    description: String,

    sport: {
        type: Schema.Types.ObjectId,
        ref: "Sport"
    },

    occurence: {
        type: String,
        enum: ["monthly", "weekly", "daily", "one shot"]
    },

    ratings: [{
        type: Number,
        min: 0,
        max: 5,
    }]

})


const eventModel = mongoose.model("Event", eventSchema);

module.exports = eventModel;