const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique:true,
        required: true
      },

    firstName: String,

    lastName: String,

    email:{ 
        type: String,
        isEmail: true,
        unique:true,
        required:true
    },

    password: {
     type:String,
     required:true
    },

    city: String,

    contacts: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: "Event"
    }],

  avatar: {
    type: String,
    default: "https://cdn.onlinewebfonts.com/svg/img_258083.png"
  } 
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;