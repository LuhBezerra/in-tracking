import axios from 'axios'

import { API_URL } from 'config/environment'
import { getToken } from 'utils/get-token'

export const getTimes = () =>
  axios.get(`${API_URL}/times`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })