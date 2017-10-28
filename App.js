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
import {NewTransaction} from './Assets/Screens/NewTransaction.js';

const FinanceApp = StackNavigator({
  //LogIn: {screen: LogIn},
  //ome: {screen: Home},
  //Order: {screen: Order},
  NewTransaction: {screen: NewTransaction},
}, {headerMode: 'screen'});

export default class App extends Component {
  render() {
    return (
      <FinanceApp />
    );
  }
}

