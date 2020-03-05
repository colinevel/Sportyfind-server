const express = require("express");
const router = new express.Router();
const sportModel = require("../models/Sport");
const eventModel = require("../models/Event");



router.get("/", (req, res, next) => {
    sportModel
    .find()
    .sort("name")
    .then(dbRes => {
                res.status(200).json({sports: dbRes})})
    .catch(next);
});


router.get("/selected", (req, res, next) => {
    eventModel
        .aggregate([
            {
                $group: {
                    _id: "$sport",
                    count: {
                        $sum: 1
                    }
                }
            },
            {
                $sort: {
                    count: -1
                }
            },
            
        ])
        .then(async dbRes => {
            const populatedResults = []
            var i = 0;

            do {
                const s =  await sportModel.findOne({_id: dbRes[i]._id});
                populatedResults.push(s);
                i += 1;
            } while(i < dbRes.length)            
            
            res.status(200).json({
                sports: populatedResults
            })
        })
        .catch(next);
});

module.exports = router;

