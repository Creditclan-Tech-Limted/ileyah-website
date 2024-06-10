import axios from 'axios'
const http = axios.create({
  baseURL: 'https://lendnode.creditclan.com/kuda/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
})

export default http
