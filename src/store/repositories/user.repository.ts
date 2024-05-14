import { db } from '../database'
import { UserUpdate, User, NewUser } from '../types'

const TB_USER = 'tb_user'

export async function findUserById(id: string) {
  return await db.selectFrom(TB_USER)
    .where('id', '=', id)
    .selectAll()
    .executeTakeFirst()
}

export async function findUser(criteria: Partial<User>) {
  let query = db.selectFrom(TB_USER)

  if (criteria.id) {
    query = query.where('id', '=', criteria.id) // Kysely is immutable, you must re-assign!
  }

  if (criteria.username) {
    query = query.where('username', '=', criteria.username)
  }

  if (criteria.email !== undefined) {
    query = query.where(
      'email',
      criteria.email === null ? 'is' : '=',
      criteria.email
    )
  }

  if (criteria.createdAt) {
    query = query.where('createdAt', '=', criteria.createdAt)
  }

  return await query.selectAll().execute()
}

export async function updatePerson(id: string, updateWith: UserUpdate) {
  await db.updateTable(TB_USER).set(updateWith).where('id', '=', id).execute()
}

export async function createPerson(person: NewUser) {
  const { insertId } = await db.insertInto(TB_USER)
    .values(person)
    .executeTakeFirstOrThrow()

  return await findUserById(String(insertId!))
}

export async function deletePerson(id: string) {
  const person = await findUserById(id)

  if (person) {
    await db.deleteFrom(TB_USER).where('id', '=', id).execute()
  }

  return person
}