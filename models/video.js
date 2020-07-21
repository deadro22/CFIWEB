const mongoose = require("mongoose");
const Joi = require("joi");

const webvid = mongoose.Schema({
  videoTitle: { type: String, required: true },
  videoLink: { type: String, required: true },
  videoDescription: { type: String, required: true }
});
const webvids = mongoose.model("webvid", webvid);

function validateInput(input) {
  const schema = {
    videoTl: Joi.string().required(),
    VideoL: Joi.string().required(),
    videoDesc: Joi.string().required()
  };
  return Joi.validate(input, schema);
}

function validateDeleteInput(input) {
  const schema = {
    videoTl: Joi.string().required()
  };
  return Joi.validate(input, schema);
}
module.exports.webvids = webvids;
module.exports.validate = validateInput;
module.exports.validateDelete = validateDeleteInput;
