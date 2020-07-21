const mongoose = require("mongoose");
const Joi = require("joi");
const webdt = mongoose.Schema({
  dt_type: { type: String, required: true },
  f_text: { type: String, required: true },
  s_text: { type: String },
  image: { type: String }
});
const webdats = mongoose.model("webdt", webdt);
function validateInput(input) {
  const schema = {
    title: Joi.string().required(),
    p_type: Joi.string().required(),
    s_title: Joi.string().required(),
    image_lnk: Joi.string().required()
  };
  return Joi.validate(input, schema);
}
function validateDelete(input) {
  const schema = {
    ContentTl: Joi.string().required(),
    p_type: Joi.string().required()
  };
  return Joi.validate(input, schema);
}
module.exports.webdats = webdats;
module.exports.validate = validateInput;
module.exports.validateDelete = validateDelete;
