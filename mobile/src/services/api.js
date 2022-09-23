import axios from 'axios'

const instance = axios.create({
 baseURL: 'http://192.168.18.10:3001'
})

export default instance