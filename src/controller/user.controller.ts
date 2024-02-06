import userService, { CreateUserPayload } from '../services/user.services'
import { throwError } from '../utils/error/errorFormater'
import { ErrorCode, errorMSG } from '../utils/error/errorMSG_Code'
import { statusCode } from '../utils/error/statusCode'
import helper from '../utils/helper'
import {
  createUserSchema,
  loginSchema,
} from '../validationSchema/user.validation'

export const loginUser = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  // validation
  await loginSchema.validateAsync({ email, password })

  const user = await userService.getUserByEmail(email)
  if (!user) {
    throwError({
      status: statusCode.NOT_FOUND,
      errorCode: ErrorCode.USER_NOT_FOUND,
    })
  }
  if (user && user.password === helper.generateHash(user.salt, password)) {
    return helper.generateJWT({ email: user.email, id: user.id })
  } else {
    throwError({
      status: statusCode.UNAUTHENTICATED,
      errorCode: ErrorCode.UNAUTHORIZED,
      message: errorMSG.INVALID_PASSWORD,
    })
  }
}

export const signUpUser = async (_: any, payload: CreateUserPayload) => {
  await createUserSchema.validateAsync(payload)

  const user = await userService.getUserByEmail(payload.email)
  if (user) {
    throwError({
      status: statusCode.CONFLICT,
      errorCode: ErrorCode.ALREADY_EMAIL_EXIST,
    })
  }
  return await userService.createUser(payload)
}

export const getAllUsers = async () => {
  const user = await userService.getAllUsers()
  if (!user) {
    throwError({
      status: statusCode.BAD_REQUEST,
      errorCode: ErrorCode.SOMETHING_GOES_WRONG,
    })
  }
  return user
}
