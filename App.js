import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import tictactoe from './screens/tictactoe'
import  spanishNumber2 from './screens/spanishNumber2'
import scratchandwingame from './screens/scratchandwingame'
import splashScreen from './screens/splashScreen'


const MainNavigator = createStackNavigator(
  {
    Tic_Tac_Toe:{screen: tictactoe},
    Scratch_and_win_game: {screen: scratchandwingame},
    Learn_Spanish_Numbers: {screen:spanishNumber2},
    HOME:{screen:splashScreen} 
  },
  {
    //launcher screen
    initialRouteName : "HOME"
  }
)



//create app container
const App = createAppContainer(MainNavigator);
export default App;
