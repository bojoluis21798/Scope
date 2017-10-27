import React, {Component} from 'react';
import {
	View,
	TouchableWithoutFeedback,
	Text,
	Image,
} from 'react-native';
import {styles} from '../styles.js';
import {Font} from 'expo';

var font = {
	light: "",
	reg: "",
};
var image = {};

export class TopBar extends Component {
	constructor(props){
		super(props);

		this.state = {
			imageLoaded: false,
			fontLoaded: false,
		};
	}

	async componentDidMount(){
		await Font.loadAsync({
			'montserrat-reg': require('../Fonts/Montserrat-Regular.ttf'),
	      	'montserrat-light': require('../Fonts/Montserrat-Light.ttf'),
		});
		this.setState({imageLoaded: true});
	}

	render(){
		if(this.state.imageLoaded){
			image = require('../Images/menu.png');
		}

		if(this.state.fontLoaded){
			font.reg = "montserrat-reg";
			font.light = "montserrat-light";
		}else{
			font.reg = "sans-serif";
			font.light = "sans-serif";
		}

		return(
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
	                fontFamily: font.reg, 
	                fontSize: 24, 
	                color: 'white',
	                marginLeft: 10,
	              }]
	            }>
	              {this.props.title} 
	            </Text>
	          </View>
	        </View>
		);
	}

}
