import React, {Component} from 'react';
import ReactNative, {
	View,
	TouchableWithoutFeedback,
	Image,
	Text,
	TextInput,
	TouchableNativeFeedback,
	Slider,
	Picker,
	KeyboardAvoidingView
} from 'react-native';
import {Status} from './Status.js';
import {styles} from '../styles.js';
import {Font} from 'expo';
import {TopBar} from './TopBar.js';

var image = {};
var font = "";
var fontLight = "";
export class Order extends Component {
	constructor(props){
		super(props);

		this.state = {
			imageLoaded : false,
			fontLoaded: false,
			productName: "",
			productQuantity: 0,
			productPrice: "",
			transactionNo: "",
		}
	}

	async componentDidMount(){
	    await Font.loadAsync({
	      'montserrat-reg': require('../Fonts/Montserrat-Regular.ttf'),
	      'montserrat-light': require('../Fonts/Montserrat-Light.ttf'),
	    });

	    this.setState({imageLoaded: true, fontLoaded: true});
  	}

  	static navigationOptions = {
	    header: null,
	    drawerLabel: 'Order',
 	};

 	render(){
 		if(this.state.imageLoaded){
 			image = require('../Images/menu.png');
 		}
 		if(this.state.fontLoaded){
 			font = 'montserrat-reg';
 			fontLight = 'montserrat-light';
 		}else{
 			font = 'sans-serif';
 		}

 		return(
 			<View style={styles.container}>
 				<TopBar title="Order" />
		        <View style={[styles.body, {
		        	backgroundColor: 'white',
		        	flexDirection: 'row',
		        	paddingTop: 20,
					margin: 0,
		        }]}>
		        	<KeyboardAvoidingView
			        	behavior='position'
			        	keyboardVerticalOffset={5}
			        >
		        	<View style={{
		        		alignItems: 'center',
		        		justifyContent: 'center',
		        		margin: 50,
		        		marginTop: 10,
		        	}}>
		        		<View style={{
		        			alignItems: 'center',
		        			justifyContent:'center',
		        		}}>
		        			<View style={{margin: 20}}>
			        			<Text style={[styles.standardText,
			        				{
			        					fontFamily: fontLight,
			        					borderBottomWidth: 2,
			        				}
			        			]}>
			        				Product Name
			        			</Text>
			        		</View>
			        		<View style={{margin: 20, alignItems: 'center'}}>
			        			<Picker
					                onValueChange={
					                  (itemValue, itemIndex) => 
					                    this.setState({productName: itemValue})
					                }
					                selectedValue={this.state.productName}
					                style={{
					                	width: 250,
				        				height: 60,
				        				padding: 5,
					                }}
					                mode='dropdown'
				              	>
				              	<Picker.Item label="Choose Product Name..." value="" />
				                <Picker.Item label="Hotdogs" value="Hotdogs" />
				                <Picker.Item label="Spaghetti" value="Spaghetti" />
				                <Picker.Item label="Weiners" value="Weiners" />
				              </Picker>
			        		</View>
			        		<View style={{margin: 20}}>
			        			<Text style={[styles.standardText,
			        				{
			        					fontFamily: fontLight,
			        					borderBottomWidth: 2,
			        				}
			        			]}>
			        				Product Quantity
			        			</Text>
			        		</View>
			        		<View style={{margin: 20, flexDirection: 'row'}}>
			        			<Text
			        			style={[styles.smallerText, {
			        				padding: 10,
			        				fontSize: 20,
			        				textAlign: 'center',
			        			}]}
			        			>
			        				{this.state.productQuantity}
			        			</Text>
			        			<Slider 
			        				minimumValue={0}
			        				maximumValue={15}
			        				style={{
			        					height: 60,
			        					width: 230,
			        				}}
			        				step={1}
			        				onValueChange={(val) => this.setState({productQuantity: val})}
			        			/>
			        		</View>
			        		<View style={{margin: 20}}>
			        			<Text style={[styles.standardText,
			        				{
			        					fontFamily: fontLight,
			        					borderBottomWidth: 2,
			        				}
			        			]}>
			        				Product Price
			        			</Text>
			        		</View>
			        		<View style={{margin: 20, flexDirection: 'row'}}>
			        			<Text style={[styles.standardText, {textAlign: 'center',
			        				paddingTop: 15,
			        			}]}>
			        				₱
			        			</Text>
			        			<TextInput 
			        			style={{
			        				width: 150,
			        				height: 60,
			        				padding: 10,
			        				fontFamily: fontLight,
			        				fontSize: 17,
			        			}}
			        			placeholder="Enter Price"
			        			onChangeText={(text) => this.state.productPrice}
			        			keyboardType="numeric"
			        			textAlign='center'
			        			defaultValue="0.00"
			        			/>
			        		</View>		        		
		        		</View>
		        	</View>
		        	</KeyboardAvoidingView>
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
		        					<Text style={[styles.standardText, {
		        						fontFamily: font,
		        						fontSize: 25,
		        						color: 'white',
		        					}]}>
		        						Add
		        					</Text>
		        				</View>
		        			</View>
		    </TouchableNativeFeedback> 
			</View>
 		);
 	}
}