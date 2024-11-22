import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  articles: [],
  currentArticle: {},
  isLoading: false
}

export const newsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setArticles: (state, action) => {
        state.articles = action.payload
    },
    setCurrentArticle: (state, action) => {
        state.currentArticle = action.payload
    },
    setIsLoading: (state, action) => {
        state.isLoading = action.payload
    }
  },
})

export const { setArticles, setCurrentArticle, setIsLoading} = newsSlice.actions

export default newsSlice.reducer