import axios from 'axios'

import { API_URL } from 'config/environment'
import { getToken } from 'utils/get-token'

export const getStatus = () =>
  axios.get(`${API_URL}/status`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })