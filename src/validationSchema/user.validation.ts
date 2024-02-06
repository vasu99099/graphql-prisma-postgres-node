import Joi from 'joi'

export const loginSchema = Joi.object({
  email: Joi.string().trim().email().required(),
  password: Joi.string().trim().min(3).required(),
})
export const createUserSchema = Joi.object({
  firstName: Joi.string().trim().min(3).required(),
  lastName: Joi.string().trim().min(3).required(),
  email: Joi.string().trim().email().required(),
  password: Joi.string().trim().min(3).required(),
})
