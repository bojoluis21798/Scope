import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	TouchableNativeFeedback,
	Text,
	StatusBar,
	Dimensions,
} from 'react-native';
import {Font} from 'expo';
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
						color: '#1C7B00',
						fontSize: 20,
						fontFamily: font.reg,
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
										color: '#1C7B00',
										fontSize: 20,
										fontFamily: font.reg,
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
											color: '#1C7B00',
											fontSize: 25,
											fontFamily: font.reg,
											margin: 5,
										},
									]}>
										Total Price
									</Text>
									<Text style={[
										styles.standardText, 
										local.standardText, 
										{
											color: '#1C7B00',
											fontSize: 25,
											fontFamily: font.reg,
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
											color: '#1C7B00',
											fontSize: 17,
											fontFamily: font.reg,
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

export class TransactionLog extends Component{
	constructor(props){
		super(props);

		this.state = {
			fontLoaded: false,
			imageLoaded: false,
		};

		this.openDrawer = this.openDrawer.bind(this);
		this.navigateToNew = this.navigateToNew.bind(this);
	}

	async componentDidMount(){
		await Font.loadAsync({
		  'montserrat-reg': require('../Fonts/Montserrat-Regular.ttf'),
	      'montserrat-light': require('../Fonts/Montserrat-Light.ttf'),
		});

		this.setState({
			fontLoaded: true,
			imageLoaded: true,
		});
	}
	static navigationOptions = {
		header: null,
		drawerLabel: "Transaction Log",
	}

	openDrawer(){
    	this.props.navigation.navigate('DrawerOpen');
  	}

  	navigateToNew(){
  		this.props.navigation.navigate('New');
  	}

	render(){
		console.log(Dimensions.get('window'))

		if(this.state.fontLoaded){
			font.reg = 'montserrat-reg';
			font.light = 'montserrat-light';
		}else{
			font.reg = 'sans-serif';
			font.light = 'sans-serif';
		}

		return(
			<View style={styles.container}>
			    <StatusBar 
		          translucent={true} 
		          barStyle="default"
		          animated={true}
		          backgroundColor="#26A900"
		        />
				<TopBar 
					title="Transaction Log" 
					navigate={this.openDrawer}
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
										color: '#1C7B00', 
										fontSize: 27,
										fontFamily: font.reg,
									},
								]}>
									Total Revenue: 
								</Text>
								<Text style={[
									styles.standardText,
									local.standardText,
									{
										color: '#1C7B00',
										fontSize: 27,
										fontFamily: font.reg,
									},
								]}>
									₱ 0.00 
								</Text>
							</View>
							<View style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}>
								<Text style={[
									styles.standardText,
									local.standardText,
									{
										color: '#1C7B00', 
										fontSize: 27,
										fontFamily: font.reg,
									},
								]}>
									Total Tax: 
								</Text>
								<Text style={[
									styles.standardText,
									local.standardText,
									{
										color: '#1C7B00',
										fontSize: 27,
										fontFamily: font.reg,
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

var font = {
	reg: "",
	light: "",
};

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
		fontFamily: font.reg,
		fontSize: 25,
		color: 'white',
	},
	addButton: {
		position: 'absolute',
		left: width - 105,
		top: height - 105,
		borderRadius: 40,
	},
	buttonTextContainer: {
		height: 80,
		width: 80,
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
