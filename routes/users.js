const express = require("express");
const router = new express.Router();

/* GET users listing. */


router.get("/", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});



router.get("/:id", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});



router.patch("/", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});


module.exports = router;
