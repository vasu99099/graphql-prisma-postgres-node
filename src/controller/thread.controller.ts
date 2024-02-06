import { isAuthenticated } from '../middleware/authentication'
import threadService, { createThreadPayload } from '../services/thread.service'
import { throwError } from '../utils/error/errorFormater'
import { ErrorCode } from '../utils/error/errorMSG_Code'
import { statusCode } from '../utils/error/statusCode'
import { Context } from '../types/context.Types'
import { createThreadSchema } from '../validationSchema/thread.validation'

export const createThread = async (
  _: any,
  payload: createThreadPayload,
  context: Context,
) => {
  await createThreadSchema.validateAsync(payload)
  isAuthenticated(context)
  payload.userId = context.user?.id ?? ''
  const thread = await threadService.createThread(payload)
  if (!thread) {
    throwError({
      status: statusCode.BAD_REQUEST,
      errorCode: ErrorCode.SOMETHING_GOES_WRONG,
    })
  }
  return thread
}

export const getThreads = async (_: any, payload: any, context: Context) => {
  const userId = context.user?.id ?? ''
  const thread = await threadService.getThread(userId)
  if (!thread) {
    throwError({
      status: statusCode.BAD_REQUEST,
      errorCode: ErrorCode.SOMETHING_GOES_WRONG,
    })
  }
  return thread
}
