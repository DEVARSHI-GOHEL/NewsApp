import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default NewsDetailScreen = ({article}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: article.urlToImage}} style={styles.newsImage} />
            <Text style={styles.titleTxt}>{article.title}</Text>
            <Text style={styles.authorTxt}>By: {article.author}</Text>
            <Text style={styles.contentTxt}>{article.description}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "white"
    },
    newsImage: {
        width: "100%",
        height: "35%",
        resizeMode: 'cover',
        marginBottom: 10
    },
    titleTxt: {
        fontSize: 'bold',
        fontSize: "22",
    },
    contentTxt: {
        marginVertical: 10,
        fontSize: 15
    },
    authorTxt: {
        fontSize: 10,
    }
})