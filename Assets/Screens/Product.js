import React, {Component} from 'react';
import {
	View,
	StatusBar,
	StyleSheet,
	ScrollView,
	Text,
	TextInput,
	TouchableNativeFeedback,
} from 'react-native';
import {TopBar} from './TopBar.js';
import {styles} from '../styles.js';
import {Font} from 'expo';

var font = {
	reg: "",
	light: "",
}

export class Product extends Component {
	constructor(props){
		super(props);

		this.state = {
			imageLoaded: false,
			fontLoaded: false,
		}
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
		          translucent={true} 
		          barStyle="default"
		          animated={true}
		          backgroundColor="#26A900"
		        />
		        <View style={[styles.body, local.body]}>
		        	<ScrollView>
			        	<View style={{flex:1}}>
			        		<View style={{
			        			margin: 15,
			        			marginBottom: 20,
			        			padding: 5,
			        			backgroundColor: 'white',
			        			flexDirection: 'row',
			        			borderRadius: 10,
			        		}}>
			        			<TextInput 
				        			style={{
				        				height: 70,
				        				width: 300,
				        				padding: 10,
				        				fontSize: 20,
				        			}}
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
			        			}}>A</Text>
			        		</View>
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
			        				Apple
			        			</Text>
			        			<Text style={{
			        				fontSize: 30,
			        				fontFamily: font.reg,
			        			}}>
			        				₱ 0.00
			        			</Text>
			        		</View>
			        	</View>
		    		</ScrollView>
		        </View>
		        
			</View>
		);
	}
}

const local = StyleSheet.create({
	body: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#E7E7E7',
	}
});