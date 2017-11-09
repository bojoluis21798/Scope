import React, {Component} from 'react';
import {
	View,
	StatusBar
} from 'react-native';

import {TopBar} from './TopBar.js';
import {styles} from '../styles.js';

export class NewProduct extends Component {
	

	render(){
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
		        />
		        
			</View>
		);
	}
} 