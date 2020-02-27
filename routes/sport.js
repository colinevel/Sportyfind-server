const express = require("express");
const router = new express.Router();


router.get("/", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});

module.exports = router;
