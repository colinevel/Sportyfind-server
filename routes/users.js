const express = require("express");
const router = new express.Router();
const userModel = require("../models/User");
const uploader = require("./../config/cloudinary");


/* GET users listing. */


router.get("/", (req, res, next) => {
    userModel
    .find()
    .populate()
    .then(dbRes => {
        res.status(200).json({users: dbRes})
    })
});



router.get("/:id", async (req, res, next) => {
    try {
        res.json(await userModel.findById(req.params.id));
      } catch (dbErr) {
        next(dbErr);
      }
    });



router.patch("/:id",uploader.single("avatar"), (req, res, next) => {
    const { email, firstName, lastName, city, 
        // password,
        username,userId } = req.body;
  const updateUser = {
    email, 
    firstName,
    lastName,
    city,
    username,
    // password,
    
  };

  if (req.file) updateUser.avatar = req.file.secure_url;

  
  userModel
    .findByIdAndUpdate(userId, updateUser, {new: true})
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(err => {
      console.log("patch error", err);
      res.status(500).json(err);
    });
});


module.exports = router;
