import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTopHeadlines } from "../../api/apiCalls";
import { setArticles, setIsLoading } from "../slice/newsSlice";

// thunk for handling side effects, managing state, calling api, acting as a middleware between state data and UI
// all the news data is getting set from here
export const getAllHeadlines = createAsyncThunk(
    'news/getAllHeadlines',
    async (country, { dispatch }) => {
        dispatch(setIsLoading(true));

        try {
            const res = await fetchTopHeadlines(country);

            if (res) {
                dispatch(setArticles(res?.data?.articles));
            } else {
                console.error('No articles found in the response');
                dispatch(setArticles([]));
            }
        } catch (error) {
            console.error('Error fetching headlines:', error);
            dispatch(setArticles([]));
        } finally {
            dispatch(setIsLoading(false));
        }
    }
);
