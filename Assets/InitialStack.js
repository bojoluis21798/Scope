import React, {Component} from 'react';
import {
	StackNavigator, 
	NavigationActions,
	DrawerNavigator,
} from 'react-navigation';
import {LogIn} from './Screens/LogIn.js';
import {
	Drawer,
	HomeDrawer,
} from './drawer.js';

export const InitialStack = StackNavigator({
  LogIn: {screen: LogIn},
  Home: {screen: HomeDrawer},
}, 
{
  headerMode: 'none',
  initialRouteName: 'LogIn',
});
