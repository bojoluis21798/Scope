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
	StatusBar,
	ScrollView,
	KeyboardAvoidingView
} from 'react-native';
import {styles} from '../styles.js';
import {TopBar} from './TopBar.js';

var image = {};
export class Order extends Component {
	constructor(props){
		super(props);

		this.state = {
			imageLoaded : false,
			productName: "",
			productQuantity: 0,
			productPrice: "",
			transactionNo: "",
		}
		this.backToNew = this.backToNew.bind(this);
	}

	async componentDidMount(){

	    this.setState({imageLoaded: true});
  	}

  	static navigationOptions = {
	    header: null,
	    drawerLabel: 'Order',
 	};

 	backToNew(){
    	this.props.navigation.navigate('New');
  	}

 	render(){
 		if(this.state.imageLoaded){
 			image = require('../Images/menu.png');
 		}

 		return(
 			<View style={styles.container}>
 				 <StatusBar 
		          translucent={false} 
		          barStyle="light-content"
		          animated={true}
		          backgroundColor="black"
		        />
 				<TopBar
 					title="Order" 
 					navigate={this.backToNew}
 					backButton={true}
 				/>
 				
		        <View style={[styles.body, {
		        	backgroundColor: 'white',
		        	flexDirection: 'row',
		        	paddingTop: 10,
					margin: 0,
		        }]}>
			    	<ScrollView>
			        	<KeyboardAvoidingView>
			        	<View style={{
			        		alignItems: 'center',
			        		justifyContent: 'center',
			        	}}>
			        		<View style={{
			        			alignItems: 'center',
			        			justifyContent:'center',
			        		}}>
			        			<View style={{margin: 20}}>
				        			<Text style={styles.standardText}>
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
				        				fontFamily: 'Montserrat-Regular',
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
					</ScrollView>	 
		        </View>
		        <TouchableNativeFeedback
		        	onPress={() => this.props.navigation.navigate('New')}
		        >
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