import React, {Component} from 'react';
import {
	View,
	StatusBar,
	ScrollView,
	StyleSheet,
	Dimensions,
	Image,
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

		this.backNavigate = this.backNavigate.bind(this);
	}

 	backNavigate(){
    	this.props.navigation.navigate('Product');
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
		        	navigate = {this.backNavigate}
		        	backButton = {true}
		        />
		        <View style = {[styles.body, {
		        	flexDirection: 'row',
		        }]}>
		        	<View style = {{flex: 1}}>
			        	<ScrollView>
			        		<View style = {{
			        			flex: 0.5,
			        			padding: 20,
			        		}}>
			        			<View style = {{
			        				alignSelf: 'center',
			        				padding: 20,
			        			}}>
			        				<Text style = {{
			        					fontSize: 40,
			        					color: 'black',
			        					fontFamily: 'Montserrat-Light',
			        				}}> 
			        					Apple
			        				</Text>
			        			</View>
			        		</View>
			        		<View style = {local.detailsView}>
        						<View style = {local.detailsBar}>
        							<Text style={[styles.standardText], {color: 'black', fontSize: 30, fontFamily: 'Montserrat-Light',}}>
        								Price
        							</Text> 
        							<Text style={[styles.standardText], {color: 'black', fontSize: 30, fontFamily: 'Montserrat-Light',}}>
        								₱ 0.00
        							</Text>
        						</View>
        						<View style = {local.detailsBar}>
        							<Text style={[styles.standardText], {color: 'black', fontSize: 30, fontFamily: 'Montserrat-Light',}}>
        								Cost
        							</Text> 
        							<Text style={[styles.standardText], {color: 'black', fontSize: 30, fontFamily: 'Montserrat-Light',}}>
        								₱ 0.00
        							</Text>
        						</View>
			        		</View>
			        	</ScrollView>
		        	</View>
		        </View>

			</View>
		);
	}
} 

var {width, height} = Dimensions.get('window');

const local = StyleSheet.create({
	imageView: {
		height: height/3,
		width: width,
	},
	detailsView: {
		flex: 1,
		padding: 10,
	},
	detailsBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 5,
	},
});