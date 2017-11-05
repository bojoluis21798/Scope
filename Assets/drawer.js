import React from 'react';
import {Home} from './Screens/Home.js';
import {TransactionLog} from './Screens/TransactionLog.js';
import {NewTransaction} from './Screens/NewTransaction.js';
import {LogIn} from './Screens/LogIn.js';
import {DrawerNavigator} from 'react-navigation';

export const Drawer = DrawerNavigator({
		Home: {
			screen: Home,
			navigationOptions: {
				drawerLabel: 'Summary Report',
			},
		},
		TransactionLog: {
			screen: TransactionLog,
			navigationOptions: {
				drawerLabel: 'Transaction Log',
			},
		},
		LogOut: {
			screen: LogIn,
			navigationOptions: {
				drawerLabel: 'Log Out',
			},
		},
	},
	{
		drawerWidth: 300,
		drawerBackgroundColor: '#F3F3F3',
	},
);

Drawer.navigationOptions = {
	header: null,

	contentOptions: {
		itemsContainerStyle: {
	    marginVertical: 10,
	  },
	},
}