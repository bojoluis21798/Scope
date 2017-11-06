import React from 'react';
import {Home} from './Screens/Home.js';
import {TransactionsStack} from './Screens/TransactionsStack.js';
import {DrawerNavigator} from 'react-navigation';

export const Drawer = DrawerNavigator({
		Home: {
			screen: Home,
			navigationOptions: {
				drawerLabel: 'Summary Report',
			},
		},
		Transactions: {
			screen: TransactionsStack,
			navigationOptions: {
				drawerLabel: 'Transaction Log',
			},
		},
	},
	{
		initialRouteName: "Home",
		drawerWidth: 300,
		drawerBackgroundColor: '#F3F3F3',
	},
);

Drawer.navigationOptions = {
	header: null,
}