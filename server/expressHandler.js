const session = require("express-session");
const flash = require("connect-flash");
const home = require("../routes/home");
const auth = require("../routes/auth");
const content = require("../routes/content");
const rest = require("../routes/rest");
const video = require("../routes/video");
const error = require("../routes/error");
const admin = require("../routes/admin");

module.exports = function(express, app) {
  app.use(express.static("./javascript"));
  app.use(express.static("./pages"));
  app.use(express.static("./styles"));
  app.use(express.static("./images"));
  app.set("view engine", "ejs");
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(
    session({
      secret: "_5%QRfY[&P=!/83#XVY@I:y^9yg)zn",
      resave: false,
      saveUninitialized: false,
      cookie: { httpOnly: true, secure: true }
    })
  );
  app.use(flash());
  app.use(function(req, res, next) {
    res.locals.err_msg = req.flash("err_msg");
    res.locals.lerr_msg = req.flash("lerr_msg");
    res.locals.l_user = req.userData;
    next();
  });
  app.use("/", home);
  app.use("/activities", content);
  app.use("/auth", auth);
  app.use("/more", rest);
  app.use("/video", video);
  app.use("/admin", admin);
  app.use("*", error);
};
