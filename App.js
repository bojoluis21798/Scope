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
import {TransactionLog} from './Assets/Screens/TransactionLog.js';
import {Drawer} from './Assets/drawer.js';

export const FinanceApp = StackNavigator({
  LogIn: {screen: LogIn},
  Home: {screen: Drawer},
}, 
{
  headerMode: 'none',
  initialRouteName: 'LogIn',
});

export default class App extends Component {
  render() {
    return (
      <FinanceApp />
    );
  }
}

