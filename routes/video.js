const express = require("express");
const router = express.Router();
const { webvids, validate, validateDelete } = require("../models/video");

router.post("/add", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).render("../pages/admin.ejs");
  const nweb_vid = new webvids({
    videoTitle: req.body.videoTl,
    videoLink: req.body.VideoL,
    videoDescription: req.body.videoDesc
  });
  await nweb_vid.save();
  res.redirect("/");
});

router.post("/delete", async (req, res) => {
  const { error } = validateDelete(req.body);
  if (error) return res.status(400).render("../pages/admin.ejs");
  await webvids.findOneAndDelete({ videoTitle: req.body.videoTl });
  res.redirect("/home");
});

module.exports = router;
