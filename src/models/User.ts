import { Static, Type } from '@fastify/type-provider-typebox'

export const User = Type.Object({
  id: Type.Optional(Type.String()),
  name: Type.String(),
  email: Type.String({ format: 'email' }),
  // mail: Type.Optional(Type.String({ format: 'email' })),
})

export type UserType = Static<typeof User>