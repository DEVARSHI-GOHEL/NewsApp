import React from 'react';
import NewsDetailScreen from './NewsDetailScreen';
import { useSelector } from 'react-redux';

export default NewsDetailScreenContainer = ({navigation, route}) => {

    const {currentArticle} = useSelector(state => state.news)

    return (
        <NewsDetailScreen article={currentArticle}/>
    )
}