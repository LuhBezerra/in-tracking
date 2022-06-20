export type SignUp = {
  name: string
  email: string
  password: string
}

export type LogIn = Omit<SignUp, 'name'>
