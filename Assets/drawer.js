import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	TouchableNativeFeedback,
	Text,
} from 'react-native';
import {Home} from './Screens/Home.js';
import {TransactionsStack} from './Screens/TransactionsStack.js';
import {StackScreen} from './InitialStack.js';
import {LogIn} from './Screens/LogIn.js';
import {ProductStack} from './Screens/ProductStack.js';
import {
	DrawerNavigator, 
	DrawerItems,
	NavigationActions,
} from 'react-navigation';

export class HomeDrawer extends Component {
	
	render(){
		return(
			<Drawer />
		);
	}
}

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
		Products: {
			screen: ProductStack,
			navigationOptions: {
				drawerLabel: 'Products',
			},
		},
	},
	{
		initialRouteName: "Home",
		drawerWidth: 300,
		drawerBackgroundColor: '#4EC004',
		contentOptions: {
			labelStyle: {
				fontSize: 20,
				fontFamily: 'Montserrat-Regular',
			},
			inactiveTintColor: 'white',
			activeBackgroundColor: 'white',
			activeTintColor: '#4EC004',	
		},
		contentComponent: (props) =><Custom {...props}/>,
	},
);

class Custom extends Component{
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
		justifyContent: 'space-between',
	},
});
