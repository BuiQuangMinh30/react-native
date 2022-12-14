import React from 'react';

import {
    View, Text, Image,StyleSheet
} from 'react-native'

import boxImage from '../assets/box.png'

export default function CategoryListItem(props) {
    return <View style={styles.container}>
        <Text style={styles.title}>CategoryListItem</Text>
        <Image style={styles.categoryImage} source={boxImage}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset : {width: 0, height:0},
        marginBottom:16
    },
    categoryImage: {
        width: 64,
        height: 64
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
})