const mongoose = require("mongoose");
const Joi = require("joi");
const user = mongoose.Schema({
  email: { type: String, required: true },
  uname: { type: String, required: true },
  password: { type: String, required: true }
});
const users = mongoose.model("users", user);
function validateInput(input) {
  const schema = {
    rEmail: Joi.string()
      .required()
      .email(),
    rUsername: Joi.string().required(),
    rPassword: Joi.string()
      .required()
      .min(8),
    rCPassword: Joi.string()
      .required()
      .valid(Joi.ref("rPassword"))
  };
  return Joi.validate(input, schema);
}
function validateLogInput(input) {
  const schema = {
    lEmail: Joi.string()
      .required()
      .email(),
    lPassword: Joi.string().required()
  };
  return Joi.validate(input, schema);
}
module.exports.users = users;
module.exports.validateLog = validateLogInput;
module.exports.validate = validateInput;
