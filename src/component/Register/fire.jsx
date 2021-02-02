import axios from 'axios'

const fire = axios.create({
    baseURL: 'https://fastrewards-14bef-default-rtdb.firebaseio.com/'
})

export default fire