import React, {Component} from 'react';
import {
	View,
	TouchableWithoutFeedback,
	Text,
	Image,
} from 'react-native';
import {styles} from '../styles.js';

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
		this.setState({imageLoaded: true, fontLoaded: true});
	}

	render(){
		let backButton = false; 
		if(this.state.imageLoaded){
			if(typeof this.props.backButton == 'undefined' || this.props.backButton == false){
				image = require('../Images/menu.png');
			}else{
				backButton = true;
				image = require('../Images/back.png');
			}
		}


		return(
			<View style={styles.topBar}>
	          <View style={{
	            flex: 1, 
	            flexDirection: 'row',}}>
	            <TouchableWithoutFeedback
	            	onPress={this.props.navigate}
	            >
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

