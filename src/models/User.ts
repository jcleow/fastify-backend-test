import { Static, Type } from '@sinclair/typebox'

export const User = Type.Object({
  name: Type.String(),
  mail: Type.String({ format: 'email' }),
  // mail: Type.Optional(Type.String({ format: 'email' })),
})

export type UserType = Static<typeof User>