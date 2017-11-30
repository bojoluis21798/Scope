import React, {Component} from 'react';
import {
	View,
	StatusBar,
	ScrollView,
	StyleSheet,
	Dimensions,
	Text,
} from 'react-native';

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
		
	    this.setState({
	    	imageLoaded: true,
	    });
	}

	render(){

		return(
			<View style = {styles.container}>
				<StatusBar 
		          translucent={false} 
		          barStyle="light-content"
		          animated={true}
		          backgroundColor="black"
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
			        					fontSize: 30,
			        					fontFamily: 'Montserrat-Light',
			        				}}> 
			        					Apple
			        				</Text>
			        			</View>
			        		</View>
			        		<View style = {local.detailsView}>
			        					
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
	detailsView: {
		borderWidth: 2,
		padding: 10,
		borderWidth: 1,
	},
});