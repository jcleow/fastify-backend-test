import {User, UserType} from '../models/User'

export type LoginHandlerType = { Body: UserType, Reply: UserType }
export const loginUserSchema = {
    schema: {
      body: User,
      response: {
        200: User
      },
    },
  }