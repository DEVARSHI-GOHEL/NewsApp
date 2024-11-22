import axios from "axios";
import BASE_URL from './endpoints'

// axios config used for creating instance of axios for commonly given data like header files of url
export default API = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json',
    }
})

// can put request and response interceptors here to filter out error and to append auth token with the requestzs