import React, {Component} from 'react';
import {
	View,
	StatusBar,
	ScrollView,
	StyleSheet,
	Dimensions,
	Text,
} from 'react-native';

import {Font} from 'expo';
import {TopBar} from './TopBar.js';
import {styles} from '../styles.js';

var font = {
	reg: "",
}

export class NewProduct extends Component {
	constructor(props){
		super(props);

		this.state = {
			fontLoaded: false,
			imageLoaded: false,
		}
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

	render(){
		if(this.state.fontLoaded){
			font.reg = 'montserrat-reg';
		}

		return(
			<View style = {styles.container}>
				<StatusBar 
		          translucent={true} 
		          barStyle="default"
		          animated={true}
		          backgroundColor="#26A900"
		        />
		        <TopBar 
		        	title = "Product Details"
		        	backButton = {true}
		        />
		        <View style = {[styles.body, {
		        	flexDirection: 'row',
		        }]}>
		        	<ScrollView>
			        	<View style = {{flex: 1}}>
			        		<View style = {local.imageView}>
			        		</View>
			        		<View style = {{
			        			flex: 1,
			        			borderWidth: 1,
			        			borderColor: 'red',
			        			padding: 20,
			        		}}>
			        			<View style = {{
			        				alignSelf: 'center',
			        			}}>
			        				<Text style = {{
			        					fontSize: 20,
			        					fontFamily: font.reg,
			        				}}> 
			        					Apple
			        				</Text>
			        			</View>
			        		</View>
			        	</View>
			        </ScrollView>
		        </View>

			</View>
		);
	}
} 

var {width, height} = Dimensions.get('window');

const local = StyleSheet.create({
	imageView: {
		height: height - 550,
		width: width,
	},
});