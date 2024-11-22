// index.js used as an entry point and to put logic and UI elements into diff files for better readability

import React, { useEffect, useLayoutEffect, useState } from 'react';
import{Image} from 'react-native'
import NewsListScreen from './NewsListScreen';
import { fetchTopHeadlines } from '../../api/apiCalls';
import {screenName} from '../../utils/Contants'
import { getAllHeadlines } from '../../redux/thunk/newsThunk';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentArticle } from '../../redux/slice/newsSlice';
import SearchIcon from '../../assets/icons/search.png'
import FilterIcon from '../../assets/icons/filter.png'


export default NewsListScreenContainer = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <>
                    <Image source={SearchIcon} style={{width: 20, height: 20, marginRight: 20}}/>
                    <Image source={FilterIcon} style={{width: 20, height: 20}}/>
                    </>
                )
            }
        })
    }, [])

    const dispatch = useDispatch()

    const {articles, isLoading } = useSelector(state => state.news)

    useEffect(() => {
        dispatch(getAllHeadlines('us'))
    }, [])

    const goToNews = (article) => {
        dispatch(setCurrentArticle(article))
        navigation.navigate(screenName.NEWSDETAILS)
    }

    return (
        <NewsListScreen articles={articles} isLoading={isLoading} goToNews={(article) => goToNews(article)}/>
    )
}