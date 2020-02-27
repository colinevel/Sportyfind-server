const express = require("express");
const router = new express.Router();
const sportModel = require("../models/Sport");

router.get("/", (req, res, next) => {
    sportModel
        .find()
        .then(dbRes => res.status(200).json({ sports: dbRes }))
        .catch(next);
});

module.exports = router;


