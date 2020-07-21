const express = require("express");
const router = express.Router();
const { users, validate, validateLog } = require("../models/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  res.render("../pages/register.ejs");
});
router.post("/register", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).render("../pages/register.ejs");
  const f_user = await users.findOne({ email: req.body.rEmail });
  if (f_user) return res.status(400).render("../pages/register.ejs");
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.rPassword, salt);
  const n_user = new users({
    email: req.body.rEmail,
    uname: req.body.rUsername,
    password: hash
  });
  await n_user.save();
  res.redirect("/home");
});
router.post("/login", async (req, res) => {
  const { error } = validateLog(req.body);
  if (error) return res.status(400).render("../pages/register.ejs");
  const f_user = await users.findOne({ email: req.body.lEmail });
  if (!f_user) return res.status(401).render("../pages/register.ejs");
  const cPass = await bcrypt.compare(req.body.lPassword, f_user.password);
  if (!cPass) return res.status(401).render("../pages/register.ejs");
  const token = jwt.sign(
    { email: f_user.email, userId: f_user._id },
    process.env.JWT_KEY,
    { expiresIn: "1h" }
  );
  res.header("x-auth-token", token);
  res.send(token);
});

module.exports = router;
