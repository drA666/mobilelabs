import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import Book from '../components /Book';

function ThirdScreen() {
    const BooksList = require('../assets/books/BooksList.json');
    return (
        <SafeAreaView>
            <FlatList
                data={BooksList.books}
                renderItem={({ item }) => {
                    return <Book
                        image={item.image}
                        title={item.title}
                        subtitle={item.subtitle}
                        price={item.price} />;
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
}

export default ThirdScreen;
