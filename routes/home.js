const express = require("express");
const router = express.Router();
const { webvids } = require("../models/video");

router.get(["/", "/home"], function(req, res) {
  webvids.find({}).then(function(vids) {
    res.render("../pages/home.ejs", { vids });
  });
});
module.exports = router;
