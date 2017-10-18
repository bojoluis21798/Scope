import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Font} from 'expo';

class LogIn extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.title}>
        </View>
      </View>
    );
  }
}

export default class App extends Component {
  componentDidMount(){
    Font.loadAsync({
      'montserrat-reg': require('./Fonts/Montserrat-Regular.ttf'),
    });
  }
  render() {
    return (
      <LogIn />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#73D74B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    height: 400,
    width: 360,
    borderColor: 'white',
    borderWidth: 5,
  },
});
