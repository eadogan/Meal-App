import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

import Colors from '../constants/Colors';

const FilterSwich = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch 
                trackColor={{true: Colors.primaryColor}}
                value={props.state} 
                onValueChange={props.onChange}
            />
        </View>
    );
};

const FiltersScreen = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    return (
        <View style={styles.screen}>
            <Text tyle={styles.title}>Available Filters / Restrictions</Text>
            <FiltersScreen 
                label="Gluten-free" 
                state={isGlutenFree} 
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FiltersScreen 
                label="Lactose-free" 
                state={isLactoseFree} 
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FiltersScreen 
                label="Vegan" 
                state={isVegan} 
                onChange={newValue => setIsVegan(newValue)}
            />
            <FiltersScreen 
                label="Vegetarian" 
                state={isVegetarian} 
                onChange={newValue => setIsVegetarian(newValue)}
            />
        </View>
    );
};

FiltersScreen.navigationOptions = {
    headerTitle: 'Filter Meals'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%',
        marginVertical: 15
    }
});

export default FiltersScreen;