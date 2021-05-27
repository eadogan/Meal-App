import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Colors from '../constants/Colors';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.headerColor : 'white'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.headerColor
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.headerColor : 'white'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.headerColor
        }
    },
    MealDetail: {
        screen: MealDetailScreen,
        navigationOptions: {
            backgroundColor: Platform.OS === 'android' ? Colors.headerColor : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.headerColor
    }
});

export default createAppContainer(MealsNavigator);