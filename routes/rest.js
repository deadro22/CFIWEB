const express = require("express");
const router = express.Router();

router.get("/banking", function(req, res) {
  res.render("../pages/progress.ejs");
});
router.get("/docs", function(req, res) {
  res.render("../pages/progress.ejs");
});
router.get("/forum", function(req, res) {
  res.render("../pages/forum.ejs");
});
router.get("/www.", function(req, res) {
  res.redirect("/home");
});

module.exports = router;
