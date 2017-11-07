import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	TouchableNativeFeedback,
	Text,
} from 'react-native';
import {Home} from './Screens/Home.js';
import {TransactionsStack} from './Screens/TransactionsStack.js';
//import {LockStack} from './InitialStack.js';
import {LogIn} from './Screens/LogIn.js';
import {
	DrawerNavigator, 
	DrawerItems,
	NavigationActions,
} from 'react-navigation';

import {Constants} from 'expo';
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
		LockStack: {
			screen: LogIn,
			navigationOptions:{
				drawerLabel: "Lock",
			},
		},
	},
	{
		initialRouteName: "Home",
		drawerWidth: 300,
		drawerBackgroundColor: '#4EC004',
		contentOptions: {

			inactiveTintColor: 'white',
			activeBackgroundColor: 'white',
			activeTintColor: '#4EC004',	
		},
		contentComponent: (props) =><Reset {...props}/>,
	},
);

class Reset extends Component{
	render(){
		return(
			<View style={local.container}>
				<View>
				<DrawerItems {...this.props} />
				</View>
			</View>
		);
	}
}


Drawer.navigationOptions = {
	header: null,
}

const local = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		justifyContent: 'space-between',
	},
});