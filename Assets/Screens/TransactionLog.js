import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation'
import {
	View,
	StyleSheet,
	TouchableNativeFeedback,
	Text,
	StatusBar,
	Dimensions,
} from 'react-native';
import {styles} from '../styles.js';
import {TopBar} from './TopBar.js';
import {NewTransaction} from './NewTransaction.js';

class Date extends Component {
	render(){
		return(
			<View style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				padding: 15,
			}}>
				<Text style={[
					styles.standardText, 
					local.standardText, 
					{
						color: 'black',
						fontSize: 20,
					},
				]}>
					January 1, 2017
				</Text>
			</View>				
		);
	}
}

class TransactionBar extends Component {
	render(){

		return(
			<View style={{
				marginTop: 20,
				flexDirection: 'row',
				backgroundColor: 'white',
			}}>
				<View style={{
					flex: 1,
				}}>
					<Date />
					<TouchableNativeFeedback
						onPress={this.props.navigate}
					>
						<View style={{borderTopWidth: 2, borderColor: '#E7E7E7'}}>
							<View style={{
								padding: 10,
							}}>
								<Text style={[
									styles.standardText, 
									local.standardText, 
									{
										color: 'black',
										fontSize: 20,
										margin: 5,
									},
								]}>
									ID #3107
								</Text>
								<View style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
								}}>
									<Text style={[
										styles.standardText, 
										local.standardText, 
										{
											color: 'black',
											fontSize: 22,
											margin: 5,
										},
									]}>
										Total Price
									</Text>
									<Text style={[
										styles.standardText, 
										local.standardText, 
										{
											color: 'black',
											fontSize: 22,
											margin: 5,
										},
									]}>
										₱ 0.00
									</Text>
								</View>
							</View>
							<View style={{
								flexDirection: 'row',
								padding: 5,
								paddingTop: 10,
								justifyContent: 'center',
							}}>
								<Text style={[
										styles.standardText, 
										local.standardText, 
										{
											color: 'black',
											fontSize: 17,
											fontFamily: 'Montserrat-Light',
										},
									]}>
										Tap for more details
								</Text>
							</View>
						</View>
					</TouchableNativeFeedback>
				</View>
			</View>
		);
	}
}

class TransactionLog extends Component{
	constructor(props){
		super(props);

		this.navigateToNew = this.navigateToNew.bind(this);
	}

  	navigateToNew(){
  		this.props.navigation.navigate('New');
  	}

	render(){
		console.log(Dimensions.get('window'))

		return(
			<View style={styles.container}>
			    <StatusBar 
		          translucent={false} 
		          barStyle="light-content"
		          animated={true}
		          backgroundColor="black"
		        />
				<View style={[styles.body, local.body]}>
					<View style={{
						flex: 1,
					}}>
						<View style={local.status}>
							<View style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}>
								<Text style={[
									styles.standardText,
									local.standardText,
									{
										color: 'black', 
										fontSize: 25,
									},
								]}>
									Total Revenue: 
								</Text>
								<Text style={[
									styles.standardText,
									local.standardText,
									{
										color: 'black',
										fontSize: 25,
									},
								]}>
									₱ 0.00 
								</Text>
							</View>
						</View>
						<TransactionBar navigate={this.navigateToNew}/>
					</View>
				</View>
				<View style={local.addButton}>
					<TouchableNativeFeedback
						background={
							TouchableNativeFeedback.Ripple('#E7E7E7', true)
						}
						useForeground={false}
						onPress={()=> this.props.navigation.navigate('New')}
					>
						<View style={local.buttonTextContainer}>
							<Text
								style={[
									styles.standardText,
									local.standardText, 
									{fontSize: 40},
								]}
							>
								+
							</Text>
						</View>
					</TouchableNativeFeedback>
				</View>
			</View>
		);
	}
}

const LogsBar = TabNavigator({
	Transaction: {
		screen: TransactionLog
	},
	Expenses: {
		screen: TransactionLog
	},
});

export class Logs extends Component {
	constructor(props){
		super(props);

		this.openDrawer = this.openDrawer.bind(this);
	}

	openDrawer(){
    	this.props.navigation.navigate('DrawerOpen');
  	}

	render(){
		return(
			<LogsBar navigation={this.props.navigation}/>
		);
	}
}

Logs.router = LogsBar.router;



var {height, width} = Dimensions.get('window');

const local = StyleSheet.create({
	body: {
		flexDirection: 'row',
		backgroundColor: '#E7E7E7',
	},
	standardFormat: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent:'center',
	},
	standardText: {
		fontSize: 20,
		color: 'white',
	},
	addButton: {
		position: 'absolute',
		left: width - 80,
		top: height - 100,
		borderRadius: 40,
	},
	buttonTextContainer: {
		height: 65,
		width: 65,
		backgroundColor: '#3EA90C',			
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 40,
	},
	status: {
		padding: 10,
		backgroundColor: 'white',
		justifyContent: 'space-between',
	},
	buttonViewOuter: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		backgroundColor:'#26A900',
		padding: 15,
	},
});	
