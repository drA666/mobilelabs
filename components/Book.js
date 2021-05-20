import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import images from '../assets/books/images';

function Book({ image, title, subtitle, price }) {
    return (
        <View style={styles.item}>
            <Image source={images[image]} style={styles.image} />
            <View style={styles.description}>
                <Text >{title}</Text>
                <Text >{subtitle}</Text>
                <Text >{price}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#D0D0D0',
    },
    image: {
        width: 100,
        height: 120,
    },
    description: {
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 15,
        flexShrink: 1,
        justifyContent: 'space-between',
    },
});

export default Book;
