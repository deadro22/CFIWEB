const express = require("express");
const router = express.Router();

router.get("/dashboard/post/:code", function(req, res) {
  var ac_code = "z70401vYsM";
  if (req.params.code == ac_code) {
    res.render("../pages/admin.ejs");
  } else {
    res.status(404).render("../pages/error.ejs");
  }
});

module.exports = router;
