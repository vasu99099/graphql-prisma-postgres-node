import Joi from 'joi'

export const createThreadSchema = Joi.object({
  title: Joi.string().trim().min(3).required(),
  image: Joi.string().trim().uri().required(),
})
