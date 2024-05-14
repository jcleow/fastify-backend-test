import {
    ColumnType,
    Generated,
    Insertable,
    JSONColumnType,
    Selectable,
    Updateable
  } from 'kysely'


export interface Database {
    tb_user: UserTable
}

export interface UserTable {
    id: string
    username: string
    email: string
    createdAt: ColumnType<Date, string | undefined, never>
    updatedAt: ColumnType<Date, string | undefined, never>
}

export type User = Selectable<UserTable>
export type NewUser = Insertable<UserTable>
export type UserUpdate = Updateable<UserTable>