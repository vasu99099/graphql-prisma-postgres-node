import { GraphQLError } from 'graphql'
import { errorMSG } from './errorMSG_Code'

export const errorFormater = (formattedError: any) => {
  if (formattedError.message.startsWith('Database Error: ')) {
    return {
      message: 'Internal server error',
      extensions: { status: 200 },
    }
  }
  return {
    message: formattedError.message,
    path: formattedError.path,
    status: formattedError.extensions.status,
    erroCode: formattedError.extensions.errorCode,
  }
}

export const throwError = ({
  status = 200,
  errorCode = '',
  message,
}: {
  status: number
  errorCode: string
  message?: string
}) => {
  const msg = message
    ? message
    : errorMSG[errorCode as keyof typeof errorMSG] ?? ''
  throw new GraphQLError(msg, {
    extensions: {
      errorCode: errorCode,
      status: status,
    },
  })
}
