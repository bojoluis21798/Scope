import React, {Component} from 'react';
import ReactNative, {
	View,
	TouchableWithoutFeedback,
	Image,
	Text,
	TextInput,
	TouchableNativeFeedback,
	Picker,
} from 'react-native';
import {Status} from './Status.js';
import {styles} from '../styles.js';
import {Font} from 'expo';
import {TopBar} from './TopBar.js';

var font = {
	reg: "",
	light: "",
}

export class NewTransaction extends Component {
	constructor(props){
		super(props);

		this.state = {
			fontLoaded: false,
			imageLoaded: false,
		};
	}

	async componentDidMount(){
		await Font.loadAsync({
	      'montserrat-reg': require('../Fonts/Montserrat-Regular.ttf'),
	      'montserrat-light': require('../Fonts/Montserrat-Light.ttf'),
	    });

		this.setState({fontLoaded: true, imageLoaded: true});
	}

	static navigationOptions = {
	    header: null,
	    drawerLabel: 'New Transaction',
 	};

	render(){
		if(this.state.fontLoaded){
			font.reg = 'montserrat-reg';
			font.light = 'montserrat-light';
		}else{
			font.reg = '';
			font.light = '';
		}

		return(
			<View style={styles.container}>
				<Status />
				<TopBar title="New Transaction" />
				<View style={[styles.body, {
					borderWidth: 1,
					flexDirection: 'row',
				}]}>
					<View style={{flex: 1}}>
						<View style={{
							flex: 0.1,		//
							borderWidth: 1,
							flexDirection: 'row',
							alignItems: 'center',
							padding: 10,
							justifyContent: 'space-between',
						}}>
							<Text style={[styles.standardText,{
								color: '#1C7B00',
								fontFamily: font.reg,
								fontSize: 25,
							}]}>
								Total Price:
							</Text>
							<Text style={[styles.standardText,{
								color: '#1C7B00',
								fontFamily: font.reg,
								fontSize: 25,
							}]}>
								₱
							</Text> 
						</View>
					</View>
				</View>
			<TouchableNativeFeedback>
		        			<View style={{flexDirection: 'row',
		        			 alignItems: 'flex-end',
		        			 backgroundColor:'#26A900',
		        			 padding: 15,
		        			}}>
		        				<View style={{
		        					flex: 1, 
		        					alignItems: 'center', 
		        					justifyContent:'center',
		        				}}>
		        					<Text style={{
		        						fontFamily: font.reg,
		        						fontSize: 25,
		        						color: 'white',
		        					}}>
		        						Submit
		        					</Text>
		        				</View>
		        			</View>
		    </TouchableNativeFeedback> 
			</View>
		);
	}
}
