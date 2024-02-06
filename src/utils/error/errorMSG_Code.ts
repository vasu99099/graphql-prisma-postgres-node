export enum ErrorCode {
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  UNAUTHORIZED = 'UNAUTHORIZED',
  ALREADY_EMAIL_EXIST = 'ALREADY_EMAIL_EXIST',
  SOMETHING_GOES_WRONG = 'SOMETHING_GOES_WRONG',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
}

export const errorMSG = {
  [ErrorCode.UNAUTHENTICATED]: 'User is not authenticated',
  [ErrorCode.UNAUTHORIZED]: 'User is not authorized',
  [ErrorCode.ALREADY_EMAIL_EXIST]: 'Email is already registered',
  [ErrorCode.SOMETHING_GOES_WRONG]: 'Something goes wrong',
  INVALID_PASSWORD: 'Invalid password',
  USER_NOT_FOUND: 'User not found',
}
