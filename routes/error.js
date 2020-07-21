const express = require("express");
const router = express.Router();

router.get("*", function(req, res) {
  res.status(404).render("../pages/error.ejs");
});

module.exports = router;
