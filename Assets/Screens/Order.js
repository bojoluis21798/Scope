import React, {Component} from 'react';
import {
	View,
	TouchableWithoutFeedback,
	Image,
	Text,
	TextInput,
	TouchableNativeFeedback,
	Slider,
} from 'react-native';
import {Status} from './Status.js';
import {styles} from '../styles.js';
import {Font} from 'expo';

var image = {};
var font = "";
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
 		}else{
 			font = 'sans-serif';
 		}

 		return(
 			<View style={styles.container}>
 				<Status />
 				<View style={styles.topBar}>
		          <View style={{
		            flex: 1, 
		            flexDirection: 'row',}}>
		            <TouchableWithoutFeedback>
		              <Image 
		                source={image}
		                style={styles.menuIcon}
		              />
		            </TouchableWithoutFeedback>  
		            <Text style={
		              [styles.standardText,
		              {
		                fontFamily: font, 
		                fontSize: 24, 
		                color: 'white',
		                marginLeft: 10,
		              }]
		            }>
		              Order 
		            </Text>
		          </View>
		        </View>
		        <View style={[styles.body, {
		        	backgroundColor: 'white',
		        	flexDirection: 'row',
		        	marginTop: 20,
					margin: 0,
		        }]}>
		        	<View style={{
		        		alignItems: 'center',
		        	}}>
		        		<View style={{
		        			alignItems: 'center',
		        			justifyContent:'center',
		        		}}>
		        			<View>
			        			<Text style={[styles.standardText,
			        				{fontFamily: font}
			        			]}>
			        				Product Name
			        			</Text>
			        		</View>
			        		<View style={{margin: 5, alignItems: 'center'}}>
			        			<Picker
					                onValueChange={
					                  (itemValue, itemIndex) => 
					                    this.setState({productName: itemValue})
					                }
					                selectedValue={this.state.productName}
					                style={{
					                	width: 300,
				        				height: 60,
				        				padding: 5,
				        				fontFamily: font,
				        				fontSize: 17,
					                }}
					                mode='dropdown'
				              	>
				                <Picker.Item label="Hotdogs" value="Hotdogs" />
				                <Picker.Item label="Spaghetti" value="Spaghetti" />
				                <Picker.Item label="Weiners" value="Weiners" />
				              </Picker>
			        		</View>
			        		<View style={{margin: 5}}>
			        			<Text style={[styles.standardText,
			        				{fontFamily: font}
			        			]}>
			        				Product Quantity
			        			</Text>
			        		</View>
			        		<View style={{margin: 5, flexDirection: 'row'}}>
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
			        					width: 200,
			        				}}
			        				step={1}
			        				onValueChange={(val) => this.setState({productQuantity: val})}
			        			/>
			        		</View>
			        		<View style={{margin: 5}}>
			        			<Text style={[styles.standardText,
			        				{fontFamily: font}
			        			]}>
			        				Product Price
			        			</Text>
			        		</View>
			        		<View style={{margin: 5}}>
			        			<TextInput 
			        			style={{
			        				width: 300,
			        				height: 60,
			        				padding: 5,
			        				fontFamily: font,
			        				fontSize: 17,
			        			}}
			        			placeholder="Enter Product Price"
			        			onChangeText={(text) => this.state.productPrice}
			        			keyboardType="numeric"
			        			/>
			        		</View>
			        		<TouchableNativeFeedback>
			        			<View style={{margin: 5}}>

			        			</View>
			        		</TouchableNativeFeedback>			        		
		        		</View>
		        	</View>
		        </View> 
		        <TouchableNativeFeedback>
			        			<View style={{flexDirection: 'row',
			        			 backgroundColor:'#26A900',
			        			 padding: 15,
			        			}}>
			        				<View style={{
			        					flex: 1, 
			        					alignItems: 'center', 
			        					justifyContent:'center',
			        				}}>
			        					<Text style={{
			        						fontFamily: font,
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