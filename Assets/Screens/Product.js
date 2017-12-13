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


class ProductBar extends Component {
	render(){
		return(
			<View>
				<FirstLetter 
					name={this.props.name}
				/>
				<TouchableNativeFeedback
					onPress={this.props.navigate}
				>
					<View style={{
		    			padding: 15,
		    			backgroundColor: 'white',
		    			flexDirection: 'row',
		    			justifyContent: 'space-between',
		    		}}>
		    			<Text style={{
		    				color: 'black',
		    				fontSize: 30,
		    				fontFamily: 'Montserrat-Regular',
		    			}}>
		    				{this.props.name}
		    			</Text>
		    			<Text style={{
		    				color: 'black',
		    				fontSize: 30,
		    				fontFamily: 'Montserrat-Regular',
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
					color: 'black',
					fontSize: 25,
					fontFamily: 'Montserrat-Regular',
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
			product: [],
		}
		this.openDrawer = this.openDrawer.bind(this);
		this.navigateToDetails = this.navigateToDetails.bind(this);
	}

	async componentDidMount(){

	    this.setState({imageLoaded: true});
	}

	navigateToDetails(){
		this.props.navigation.navigate('Details');
	}

	openDrawer(){
		this.props.navigation.navigate('DrawerOpen');
	}

	static navigationOptions = {
		header: null,
		drawerLabel: "Transaction Log",
	};

	render(){

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
			        			flex: 0.2,
			        			margin: 10,
			        			marginBottom: 20,
			        			backgroundColor: 'white',
			        			flexDirection: 'row',
			        		}}>
			        			<TextInput 
				        			style={local.searchInput}
				        			placeholder="Enter Product Name"
				        		/>
				        		<TouchableNativeFeedback>
				        			<View style={{
				        				padding: 10,
				        				backgroundColor: 'green',
				        				margin: 10,
				        				borderRadius: 10,
				        				justifyContent: 'center',
				        				alignItems: 'center',
				        			}}>
				        				<Text style={{
				        					fontSize: 20,
				        					color: 'white',
				        					fontFamily: 'Montserrat-Regular',
				        				}}>
				        					Search
				        				</Text>
				        			</View>
				        		</TouchableNativeFeedback>
			        		</View>
			        		<ProductBar 
			        			name="Apple"
			        			price="0.00"
			        			navigate={this.navigateToDetails}
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
		flex: 1,
		padding: 10,
		fontSize: 20,
		marginLeft: 10,
		marginRight: 10,
	},
	buttonTextContainer: {
		height: 65,
		width: 65,
		backgroundColor: '#3EA90C',			
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 40,
	},
	addButton: {
		position: 'absolute',
		left: width - 80,
		top: height - 100,
		borderRadius: 40,
	},
	standardText: {
		fontFamily: 'Montserrat-Regular',
		fontSize: 25,
		color: 'white',
	},
});