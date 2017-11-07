import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {
	StackNavigator, 
	NavigationActions,
	DrawerNavigator,
} from 'react-navigation';
import {LogIn} from './Screens/LogIn.js';
import {
	Drawer,
	HomeDrawer,
} from './Drawer.js';

export const InitialStack = StackNavigator({
  LogIn: {screen: LogIn},
  Home: {screen: HomeDrawer},
}, 
{
  headerMode: 'none',
  initialRouteName: 'LogIn',
});

export class StackScreen extends Component {
/*	componentDidMount(){
		this.handleReset();
	}

	handleReset(){
		const resetAction = NavigationActions.reset({
		  index: 0,
		  actions: [
		    NavigationActions.navigate({ routeName: 'LogIn'}),
		  ]
		});
		this.props.navigation.dispatch(resetAction);
	}
*/
	static navigationOptions = {
		header: null,
		drawerLabel: 'Lock',
	}

	render(){
		return(
			<View style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				<Text>TEST</Text>
			</View>
		);
	}
}