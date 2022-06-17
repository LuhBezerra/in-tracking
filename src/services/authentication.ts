import axios from 'axios'

import { API_URL } from 'config/environment'
import type { SignUp } from 'types/authentication'

/* 
export const getRetrievePrice = () => {
  return fetch(`https://api.stripe.com/v1/prices/${STRIPE_PLAN_ID}`, {
    headers: {
      Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
    },
  })
}; */

export const signUp = (payload: SignUp) =>
  axios.post(`${API_URL}/authentication/create-account`, payload)
