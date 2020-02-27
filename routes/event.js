const express = require("express");
const router = new express.Router();
const EventModel = require("../models/Event");


router.get("/", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});



router.get("/:id", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});


router.post("/create", (req, res, next) => {
    const newEvent = {...req.body}
    newEvent.creator = req.session.currentUser._id

    EventModel.create(newEvent)
    .then((results) => {
        res.status(200).json({ msg: "OK"})
    }).catch(err => {
        res.status(500).json(err)
    })

});


router.patch("/:id", (req, res, next) => {
    const Eventvalues = {...req.body}

    EventModel.findByIdAndUpdate(req.params.id, Eventvalues)
    .then((results) => {
          res.status(200).json({ msg: "OK" })
    }).catch(err => {
    res.status(500).json(err)
    })

});


router.delete("/:id", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});



module.exports = router;