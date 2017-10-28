import React, {Component} from 'react';
import ReactNative, {
	View,
	TouchableWithoutFeedback,
	Image,
	Text,
	TextInput,
	TouchableNativeFeedback,
	Picker,
	ScrollView,
	StyleSheet,
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
			orderCount: 0,
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
					backgroundColor: "#E7E7E7",
					flexDirection: 'row',
				}]}>
					<View style={{flex: 1}}>
						<View style={[local.priceBar,{
							backgroundColor: 'white',
						}]}>
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
								₱ 0.00
							</Text> 
						</View>
						<ScrollView>
							<View style={{
								flex: 1, 
								padding: 20,
							}}>
								<View style={{
										flex: 1,
										flexDirection: 'row',
										borderWidth: 0.4,
										backgroundColor: 'white',
										marginBottom: 20,
										borderRadius: 5,
									}}>
										<View style={{
											flex: 1,
											flexDirection: 'row',
											alignItems: 'center',
											justifyContent: 'space-between',
											padding: 20,
											
										}}>
											<View style={{
												flexDirection: 'row',
											}}>
												<Text style={[styles.standardText,{
													fontSize: 30,
													fontFamily: font.reg,
													color: "black",
												}]}> 
													0 x Hotdog
												</Text>
											</View>
											<View>
												<Text style={[styles.standardText,{
													fontSize: 30,
													fontFamily: font.reg,
													color: "black",
												}]}> 
													₱ 0.00
												</Text>
											</View>
										</View>
								</View>
								<TouchableNativeFeedback
									onPress={()=> this.setState({orderCount: this.state.orderCount++})}
								>
									<View style={{
										flex: 1,
										flexDirection: 'row',
										backgroundColor: '#2CC100',
										borderRadius: 20,
									}}>
										<View style={{
											flex: 1,
											alignItems: 'center',
											justifyContent: 'center',
											padding: 10,
										}}>
											<Text style={[styles.standardText,{
												fontFamily: font.reg,
												color: "white",
											}]}> 
												Add Order
											</Text>
										</View>
									</View>
								</TouchableNativeFeedback>
							</View>
						</ScrollView>
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

const local = StyleSheet.create({
	priceBar: {
		flex: 0.1,		//
		borderBottomWidth: 0.5,
		borderBottomColor: 'black',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		justifyContent: 'space-between',
	},
});
