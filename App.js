import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Font} from 'expo';

class LogIn extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            WELCOME
          </Text>
        </View>
      </View>
    );
  }
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fontLoaded: false,
    }
  }

  async componentDidMount(){
    await Font.loadAsync({
      'montserrat-reg': require('./Fonts/Montserrat-Regular.ttf'),
      'montserrat-extra-bold': require('./Fonts/Montserrat-ExtraBold.ttf'),
    });

    this.setState({fontLoaded: true});
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
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    borderBottomLeftRadius: 400,
    borderBottomRightRadius: 400,
    height: 300,
    width: 500,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  titleText: {
    fontFamily: 'montserrat-extra-bold',
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
  }
});
