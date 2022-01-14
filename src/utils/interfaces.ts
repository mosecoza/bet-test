export interface IAuth{
    email: string,
    password: string
}

export interface IUserState {
    email: string|null,
    name: string|null,
    dob: Date|null,
    token: string|null
  }