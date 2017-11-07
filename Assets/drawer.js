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
import {
	DrawerNavigator, 
	DrawerItems,
	NavigationActions,
} from 'react-navigation';

import {
	Constants,
	Font,
} from 'expo';

var font = {
	reg: "",
}

export class HomeDrawer extends Component {
	constructor(props){
		super(props);

		this.state = {
			fontLoaded: false,
		}
	}

	async componentDidMount(){
		await Font.loadAsync({
			'montserrat-reg': require('./Fonts/Montserrat-Regular.ttf'),
		});
		this.setState({fontLoaded: true});
	}

	render(){
		if(this.state.fontLoaded){
			font.reg = 'montserrat-reg';
		}
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
		Lock: {
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
			labelStyle: {
				fontSize: 20,
				fontFamily: font.reg,
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
		paddingTop: Constants.statusBarHeight,
		justifyContent: 'space-between',
	},
});
