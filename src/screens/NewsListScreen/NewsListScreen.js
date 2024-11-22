import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

export default NewsListScreen = ({ articles, isLoading, goToNews }) => {

    const _renderNewsCard = ({ item }) => {
        return (
            <TouchableOpacity style={styles.card} onPress={() => goToNews(item)}>
                <Image source={{ uri: item.urlToImage }} style={styles.cardImage} resizeMode='cover' />
                <View style={styles.textContainer}>
                    <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                    <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">{item.description}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    if(isLoading) {
        return(
            <ActivityIndicator style={styles.indicator} size={30}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={articles}
                renderItem={_renderNewsCard}
                keyExtractor={(item, index) => index.toString()} r
            />
        </View>
    );
};

const styles = StyleSheet.create({
    indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: "white", 
        padding: 10,
    },
    card: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        overflow: 'hidden',
        elevation: 5, 
        shadowColor: '#000',
        shadowOpacity: 0.1, 
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },  
        height: 250, 
        borderWidth: 1
    },
    cardImage: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "black",  
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: 'darkgray',
    },
});
