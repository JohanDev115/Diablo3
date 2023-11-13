import axios from 'axios'

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET

const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken() {
  const body = new FormData()

  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: CLIENT_ID, password: CLIENT_SECRET }
  }

  return axios.post(API_URL, body, config)
}

export { getToken }
