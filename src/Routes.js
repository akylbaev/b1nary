import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { createStackNavigator } from 'react-navigation';
import GameScreen from './screens/GameScreen';

class Routes extends Component {
    render() {
        return (
            <AppStackNavigator />
        );
    }
}

const AppStackNavigator = createStackNavigator({
    AllCinema: {
        screen: GameScreen,
    },
})
export default Routes;

