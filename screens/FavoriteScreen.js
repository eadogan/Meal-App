import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoriteScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);
    return (
        <MealList listData={favMeals} navigation={props.navigation}/>
    )
};

FavoriteScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
};

export default FavoriteScreen;