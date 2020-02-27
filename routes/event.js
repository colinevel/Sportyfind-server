const express = require("express");
const router = new express.Router();
const eventModel = require("../models/Event");



router.get("/", (req, res, next) => {
    eventModel
    .find()
    .then(dbRes => res.status(200).json({ events: dbRes }))
    .catch(next);});



router.get("/:id", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});



router.post("/", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});



router.patch("/:id", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});



router.delete("/:id", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});



module.exports = router;