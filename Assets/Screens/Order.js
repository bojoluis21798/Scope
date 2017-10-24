import React, {Component} from 'react';
import {
	View,
	TouchableWithoutFeedback,
	Image,
	Text,
	TextInput,
	TouchableNativeFeedback,
} from 'react-native';
import {Status} from './Status.js';
import {styles} from '../styles.js';
import {Font} from 'expo';

var image = {};
var font = "";
var fontBold = "";

export class Order extends Component {
	constructor(props){
		super(props);

		this.state = {
			imageLoaded : false,
			fontLoaded: false,
		}
	}

	async componentDidMount(){
	    await Font.loadAsync({
	      'montserrat-reg': require('../Fonts/Montserrat-Regular.ttf'),
	      'montserrat-bold': require('../Fonts/Montserrat-Bold.ttf'),
	    });

	    this.setState({imageLoaded: true, fontLoaded: true});
  	}

  	static navigationOptions = {
	    header: null,
	    drawerLabel: 'Order',
 	};

 	render(){
 		if(this.state.imageLoaded){
 			image = require('../Images/menu.png');
 		}
 		if(this.state.fontLoaded){
 			font = 'montserrat-reg';
 			fontBold = 'montserrat-bold';
 		}else{
 			font = 'sans-serif';
 		}

 		return(
 			<View style={styles.container}>
 				<Status />
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
		                fontFamily: font, 
		                fontSize: 24, 
		                color: 'white',
		                marginLeft: 10,
		              }]
		            }>
		              Order 
		            </Text>
		          </View>
		        </View>
		        <View style={[styles.body, {
		        	backgroundColor: 'white',
		        	flexDirection: 'row',
		        }]}>
		        	<View style={{
		        		flex: 1, alignItems: 'center', justifyContent: 'center',
		        	}}>
		        		<View style={{
		        			flex: 1, alignItems: 'center',
		        			paddingTop: 10,
		        		}}>
		        			<View>
			        			<Text style={[styles.standardText,
			        				{fontFamily: fontBold}
			        			]}>
			        				Product Name
			        			</Text>
			        		</View>
			        		<View style={{flex: 1, alignItems: 'center'}}>
			        			<TextInput 
			        			style={{
			        				width: 300,
			        				height: 60,
			        				padding: 5,
			        			}}
			        			placeholder="Enter Product Name"
			        			/>
			        		</View>
			        		<View>
			        			<Text style={[styles.standardText,
			        				{fontFamily: fontBold}
			        			]}>
			        				Product Name
			        			</Text>
			        		</View>
			        		<View style={{flex: 1}}>
			        			<TextInput 
			        			style={{
			        				width: 300,
			        				height: 60,
			        				padding: 5,
			        			}}
			        			placeholder="Enter Product Name"
			        			/>
			        		</View>
			        		<View>
			        			<Text style={[styles.standardText,
			        				{fontFamily: fontBold}
			        			]}>
			        				Product Name
			        			</Text>
			        		</View>
			        		<View style={{flex: 1}}>
			        			<TextInput 
			        			style={{
			        				width: 300,
			        				height: 60,
			        				padding: 5,
			        			}}
			        			placeholder="Enter Product Name"
			        			/>
			        		</View>
			        		<View>
			        			<Text style={[styles.standardText,
			        				{fontFamily: fontBold}
			        			]}>
			        				Product Name
			        			</Text>
			        		</View>
			        		<View style={{flex: 1}}>
			        			<TextInput 
			        			style={{
			        				width: 300,
			        				height: 60,
			        				padding: 5,
			        			}}
			        			placeholder="Enter Product Name"
			        			/>
			        		</View>
			        		<TouchableNativeFeedback>
			        			<View style={{flex: 0.7, flexDirection: 'row',
			        			 backgroundColor:'#26A900'}}>
			        				<View style={{
			        					flex: 1, 
			        					alignItems: 'center', 
			        					justifyContent:'center'
			        				}}>
			        					<Text style={{
			        						fontFamily: font,
			        						fontSize: 25,
			        						color: 'white',
			        					}}>
			        						Submit
			        					</Text>
			        				</View>
			        			</View>
			        		</TouchableNativeFeedback>
		        		</View>
		        	</View>
		        	
		        </View>  
 			</View>
 		);
 	}
}