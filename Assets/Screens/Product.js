import React, {Component} from 'react';
import {
	View,
	StatusBar,
	StyleSheet,
	ScrollView,
	Text,
	TextInput,
	TouchableNativeFeedback,
	Dimensions,
} from 'react-native';
import {TopBar} from './TopBar.js';
import {styles} from '../styles.js';
import {Font} from 'expo';

var font = {
	reg: "",
	light: "",
}

class ProductBar extends Component {
	render(){
		return(
			<View>
				<FirstLetter 
					name={this.props.name}
				/>
				<TouchableNativeFeedback>
					<View style={{
		    			padding: 15,
		    			backgroundColor: 'white',
		    			flexDirection: 'row',
		    			justifyContent: 'space-between',
		    		}}>
		    			<Text style={{
		    				fontSize: 30,
		    				fontFamily: font.reg,
		    			}}>
		    				{this.props.name}
		    			</Text>
		    			<Text style={{
		    				fontSize: 30,
		    				fontFamily: font.reg,
		    			}}>
		    				{"₱ " + this.props.price}
		    			</Text>
		    		</View>
		    	</TouchableNativeFeedback>
	    	</View>
		);
	}
}

class FirstLetter extends Component {
	render(){
		return(
			<View style={{
				borderBottomWidth: 1,
				borderColor: '#E7E7E7',
				backgroundColor: '#E7E7E7',
				padding: 10,
				backgroundColor: 'white',
			}}>
				<Text style={{
					fontSize: 25,
					fontFamily: font.reg,
				}}>
					A
				</Text>
			</View>
		);
	}
}

export class Product extends Component {
	constructor(props){
		super(props);

		this.state = {
			imageLoaded: false,
			fontLoaded: false,
			product: [],
		}
		this.openDrawer = this.openDrawer.bind(this);
	}

	async componentDidMount(){
	    await Font.loadAsync({
	      'montserrat-reg': require('../Fonts/Montserrat-Regular.ttf'),
	      'montserrat-thin': require('../Fonts/Montserrat-Thin.ttf'),
	    });

	    this.setState({imageLoaded: true, fontLoaded: true});
	}

	openDrawer(){
		this.props.navigation.navigate('DrawerOpen');
	}

	render(){
		if(this.state.fontLoaded){
			font.reg = 'montserrat-reg';
			font.light = 'montserrat-thin';
		}

		return(
			<View style={styles.container}>
				<TopBar 
					title="Products"
					navigate={this.openDrawer}
				/>
				<StatusBar 
		          translucent={false} 
		          barStyle="light-content"
		          animated={true}
		          backgroundColor="black"
		        />
		        <View style={[styles.body, local.body]}>
		        	<ScrollView>
			        	<View style={{flex:1}}>
			        		<View style={{
			        			margin: 20,
			        			marginBottom: 20,
			        			padding: 5,
			        			backgroundColor: 'white',
			        			flexDirection: 'row',
			        		}}>
			        			<TextInput 
				        			style={local.searchInput}
				        			placeholder="Enter Product Name"
				        		/>
				        		<TouchableNativeFeedback>
				        			<View style={{
				        				flex: 1,
				        				backgroundColor: 'green',
				        				margin: 10,
				        				borderRadius: 10,
				        				justifyContent: 'center',
				        				alignItems: 'center',
				        			}}>
				        				<Text style={{
				        					fontSize: 20,
				        					color: 'white',
				        					fontFamily: font.reg,
				        				}}>
				        					Search
				        				</Text>
				        			</View>
				        		</TouchableNativeFeedback>
			        		</View>
			        		<ProductBar 
			        			name="Apple"
			        			price="0.00"
			        		/>
			        	</View>
		    		</ScrollView> 
		        </View>
		        <View style={local.addButton}>
					<TouchableNativeFeedback
						background={
							TouchableNativeFeedback.Ripple('#E7E7E7', true)
						}
						useForeground={false}
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


var examples = [
	{name: "Apple", price: "0.00"}, 
	{name: "Avocado", price: "0.00"}, 
	{name: "Guacamole", price: "0.00"},
];

var {height, width} = Dimensions.get('window');


const local = StyleSheet.create({
	body: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#E7E7E7',
	}, 
	searchInput: {
		height: 70,
		width: 275,
		padding: 10,
		fontSize: 20,
		marginLeft: 10,
		marginRight: 10,
	},
	buttonTextContainer: {
		height: 80,
		width: 80,
		backgroundColor: '#3EA90C',			
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 40,
	},
	addButton: {
		position: 'absolute',
		left: width - 105,
		top: height - 105,
		borderRadius: 40,
	},
	standardText: {
		fontFamily: font.reg,
		fontSize: 25,
		color: 'white',
	},
});