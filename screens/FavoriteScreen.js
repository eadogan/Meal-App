import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';

const FavoriteScreen = props => {
    return (
        <Text style={styles.screen}>Fav Screen</Text>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        alignItems: 'center'
    }
});

export default FavoriteScreen;