const express = require("express");
const router = new express.Router();
const userModel = require("../models/User");


/* GET users listing. */


router.get("/", (req, res, next) => {
    userModel
    .find()
    .populate()
    .then(dbRes => {
        res.status(200).json({users: dbRes})
    })
});



router.get("/:id", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});



router.patch("/", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});


module.exports = router;
