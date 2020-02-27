const express = require("express");
const router = new express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt");

router.post("/signup", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});



router.post("/signin", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});



router.post("/signout", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});



router.use("/is-loggedin", (req, res, next) => {
    res.status(200).json({ msg: "@todo" })
});



module.exports = router;