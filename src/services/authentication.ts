import axios from 'axios'

import { API_URL } from 'config/environment'
import { getToken } from 'utils/get-token'

import type { LogIn, SignUp } from 'types/authentication'

export const signUp = (payload: SignUp) =>
  axios.post(`${API_URL}/authentication/create-account`, payload)

export const logIn = (payload: LogIn) =>
  axios.post(`${API_URL}/authentication/login`, payload)

  export const logOut = () =>
  axios.get(`${API_URL}/authentication/logout`, {headers: {
    Authorization: `Bearer ${getToken()}`,
  },})