const express = require("express");
const router = new express.Router();
const EventModel = require("../models/Event");


router.get("/events", (req, res, next) => {
    console.log(req.query);
    
    EventModel
    .find()
    .populate("sport")
    .populate("user")
    .then(dbRes => {
        res.status(200).json({ events: dbRes })})
    .catch(next);});



router.get("/events/:id", (req, res, next) => {
    EventModel.findById(req.params.id)
    .populate("sport")
    .populate("creator")
    .populate("participants")
    .then(event => {
    res.status(200).json(event)
    }).catch(err => {
    res.status(500).json(err)
    })
    });


router.post("/events/create", (req, res, next) => {
    const newEvent = {...req.body}
    // newEvent.creator = req.session.currentUser.id
    // newEvent.participants.push(req.session.currentUser.id)
    EventModel.create(newEvent)
    .then((results) => {
        res.status(200).json({ msg: "OK"})
    }).catch(err => {
        res.status(500).json(err)
    })

});


router.patch("/events/edit/:id", (req, res, next) => {
    const Eventvalues = req.body;


    EventModel.findByIdAndUpdate(req.params.id, Eventvalues)
    .then((results) => {
          res.status(200).json({ msg: "OK" })
    }).catch(err => {
    res.status(500).json(err)
    })

});


router.delete("/events/:id", (req, res, next) => {
    EventModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => res.json(dbRes))
    .catch(next);
});



module.exports = router;