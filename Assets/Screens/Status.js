import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from '../styles.js';

export class Status extends Component{
  render(){
    return(
      <View style={styles.statusBar}></View>
    );
  }
}

