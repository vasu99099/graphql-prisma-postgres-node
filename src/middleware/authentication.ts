import { Context } from '../types/context.Types'
import { throwError } from '../utils/error/errorFormater'
import { ErrorCode } from '../utils/error/errorMSG_Code'
import { statusCode } from '../utils/error/statusCode'

export const isAuthenticated = (context: Context) => {
  if (!context.user) {
    throwError({
      status: statusCode.UNAUTHENTICATED,
      errorCode: ErrorCode.UNAUTHORIZED,
    })
  }
}
