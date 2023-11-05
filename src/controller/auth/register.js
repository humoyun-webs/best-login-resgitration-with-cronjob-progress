const Joi = require("joi")
const Auth = require("../../model/auth/auth")
const bcrypt = require("bcrypt")

const Register = async (req, res) =>{
  const {name, l_name,  age , iso, country_name, nicename, iso3, numcode, phonecode} =req.body

  const scheme = Joi.object({
   name:Joi.string().required(),
   l_name:Joi.string().required(),
   age:Joi.number().required(),
   iso:Joi.string().valid('').required(),
  })
} 