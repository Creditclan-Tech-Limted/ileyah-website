import axios from 'axios'
const http = axios.create({
  baseURL: 'https://kuda-creditclan-api.herokuapp.com/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
})

export default http
