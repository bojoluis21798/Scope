import React, {Component} from 'react';
import {
 StyleSheet,
 Text,
 View,
 TextInput,
 Image,
 TouchableWithoutFeedback, 
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {LogIn} from './Assets/Screens/LogIn.js';
import {Home} from './Assets/Screens/Home.js';
import {Order} from './Assets/Screens/Order.js';

const FinanceApp = StackNavigator({
  LogIn: {screen: LogIn},
  Home: {screen: Home},
  //Order: {screen: Order},
}, {headerMode: 'screen'});

export default class App extends Component {
  render() {
    return (
      <FinanceApp />
    );
  }
}

