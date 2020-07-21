const mongoose = require("mongoose");

module.exports = function() {
  mongoose
    .connect(
      "mongodb://heroku_bf88kghv:" +
        process.env.MONGO_PASS +
        "@ds261096.mlab.com:61096/heroku_bf88kghv",
      { useNewUrlParser: true }
    )
    .then(function() {
      console.log("connected");
    });
};
