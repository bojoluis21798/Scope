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
	StatusBar,
	StyleSheet,
} from 'react-native';
import {styles} from '../styles.js';
import {TransactionLog} from './TransactionLog.js';
import {TopBar} from './TopBar.js';

var font = {
	reg: "",
	light: "",
}

var image = {
	trash: {},
	pencil: {},
}

var order = ["A", "B", "C", "D"];
var ctr = 0;

class OrderBar extends Component {
	render(){

		let quantity = this.props.quantity;
		let name = this.props.name;
		let price = this.props.price;
		return(
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
					margin: 20,
				}}>
					<View style={{
						flexDirection: 'row',
					}}>
						<Text style={[styles.standardText,{
							fontSize: 25,
							fontFamily: font.reg,
							color: "black",
						}]}> 
							{quantity + " x " + name}
						</Text>
					</View>
					<View style={{flexDirection: 'row'}}>
						<Text style={[styles.standardText,{
							fontSize: 25,
							fontFamily: font.reg,
							color: "black",
						}]}> 
							{"₱ " + price}
						</Text>
					</View>
				</View>
			<TouchableNativeFeedback>	
				<View style={[local.imageBar, {
					borderTopRightRadius: 0,
					backgroundColor: '#C8A018',
					borderColor: '#C8A018',
					borderBottomRightRadius: 0,
				}]}>
					<Image 
						source={image.pencil} 
						style={{
							height: 35,
							width: 30,
						}}
					/>
				</View>
			</TouchableNativeFeedback>
			<TouchableNativeFeedback
				onPress={()=> this.props.deleteBar(this.props.id)}
			>
				<View style={local.imageBar}>
					<Image 
						source={image.trash} 
						style={{
							height: 35,
							width: 30,
						}}
					/>
				</View>
			</TouchableNativeFeedback>
		</View>
		);			
	}
}

export class NewTransaction extends Component {
	constructor(props){
		super(props);

		this.state = {
			fontLoaded: false,
			imageLoaded: false,
			order: [],
			orderCount: 0,
		};
		this.addOrder = this.addOrder.bind(this);
		this.deleteOrder = this.deleteOrder.bind(this);
		this.backNavigate = this.backNavigate.bind(this);
	}

	async componentDidMount(){

		ctr = 0;
		this.setState({fontLoaded: true, imageLoaded: true});
	}

 	addOrder(){
 		this.props.navigation.navigate('Order');
 		this.setState(prevState => ({
 			order: [...prevState.order, {
 				id: this.state.orderCount++,
 				name: order[(ctr++)%4],
 				price: "0.00",
 				quantity: "0",
 			}],
 		}));
 	}

 	deleteOrder(id){
 		for(var i = 0; i < this.state.order.length; i++){
 			if(this.state.order[i].id == id) break
 		}

 		let newOrder = this.state.order;

 		newOrder.splice(i, 1);
 		console.log("Deleted ID: " + id);

 		this.setState(prevState => ({
 			order: newOrder,
 		}));
 	}

 	backNavigate(){
    	this.props.navigation.navigate('Log');
  	}

	render(){
		let max = this.state.order.length;	
		let orderBar = [];

		console.log("Length: " + max);

		if(max != 0){
			for(let i = 0; i < max; i++){
				orderBar[i] = 
				<OrderBar 
					key={this.state.order[i].id}
					id={this.state.order[i].id}
					name={this.state.order[i].name}
					price={this.state.order[i].price}
					quantity={this.state.order[i].id}
					deleteBar={this.deleteOrder}
				/>
			}
		}


		if(this.state.imageLoaded){
			image.trash = require('../Images/trashcan.png');
			image.pencil = require('../Images/pencil.png');
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
					title="New Transaction" 
					navigate={this.backNavigate}
					backButton={true}
				/>
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
								{orderBar}
								<TouchableNativeFeedback
									onPress={this.addOrder}
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
			<TouchableNativeFeedback
				onPress={() => this.props.navigation.navigate('Log')}
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
		        						fontFamily: font.reg,
		        						fontSize: 25,
		        						color: 'white',
		        					}]}>
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
		borderBottomWidth: 0.2,
		borderBottomColor: 'black',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		justifyContent: 'space-between',
	},
	imageBar: {
		flex: 0.2,
		backgroundColor: '#EA3636',
		alignItems: 'center',
		justifyContent: 'center',
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		borderWidth: 0.4,
		borderColor: '#EA3636',
	},
});
