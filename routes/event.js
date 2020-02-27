const express = require("express");
const router = new express.Router();


router.get("/", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});



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