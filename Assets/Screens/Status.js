import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from '../styles.js';
import {Constants} from 'expo';

export class Status extends Component{
  render(){
    return(
      <View style={styles.statusBar}>
		<View style={{flex: 1}}>      
	      	<View style={{height: Constants.statusBarHeight}}>
	      	</View>
      	</View>
      </View>
    );
  }
}

