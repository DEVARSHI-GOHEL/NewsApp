import API from './axiosConfig'
import { API_KEY, endpoints } from './endpoints'

export const fetchTopHeadlines = (country) => {
  return API.get(endpoints.topHeadlines, {
    params: {
      country,
      apiKey: API_KEY
    }
  })
}