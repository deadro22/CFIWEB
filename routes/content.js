const express = require("express");
const router = express.Router();
const { webdats, validate, validateDelete } = require("../models/content");

router.get("/:dt_type", async (req, res) => {
  const wb_data = await webdats.find({ dt_type: req.params.dt_type });
  if (wb_data != "") {
    var re_type =
      req.params.dt_type.charAt(0).toUpperCase() + req.params.dt_type.slice(1);
    res.render("../pages/Training.ejs", { wb_data, re_type });
  } else {
    res.redirect("/activities/" + req.params.dt_type + "/error");
  }
});
router.post("/content/add", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).render("../pages/admin.ejs");
  const nweb_dt = new webdats({
    dt_type: req.body.p_type,
    f_text: req.body.title,
    s_text: req.body.s_title,
    image: req.body.image_lnk
  });
  const svd = await nweb_dt.save();
  res.render("../pages/added.ejs", { svd });
});
router.post("/content/delete", async (req, res) => {
  const { error } = validateDelete(req.body);
  if (error) return res.status(400).render("../pages/admin.ejs");
  await webdats.findOneAndDelete({
    dt_type: req.body.p_type,
    f_text: req.body.ContentTl
  });
  res.redirect("/activities/" + req.body.p_type);
});

module.exports = router;
