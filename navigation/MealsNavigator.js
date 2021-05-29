import React from 'react';  
import { Platform, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import FiltersScreen from '../screens/FiltersScreen';


const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.headerColor : 'white'
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',

    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.headerColor
};

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen
},{
    defaultNavigationOptions: defaultStackNavOptions
});

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
});


const MealsFavTabNavigator = createMaterialBottomTabNavigator({
    Meals: { 
        screen: MealsNavigator,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (<View><Ionicons name='ios-restaurant' size={25} color={tintColor}/></View>),
          gesturesEnabled: false,
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (<View><Ionicons name='ios-star' size={25} color={tintColor}/></View>),
          gesturesEnabled: false,
        }
    }
}, {
    activeColor: Platform.OS === 'android' ?  'white' : Colors.headerColor,
    inactiveColor: Colors.darkGrey,
    barStyle: { backgroundColor: Platform.OS === 'android' ? Colors.headerColor : 'white' },
});

// const MainNavigator = createDrawerNavigator({
//     MealsFavs: MealsFavTabNavigator,
//     Filters: FiltersNavigator
// });

export default createAppContainer(MealsFavTabNavigator);