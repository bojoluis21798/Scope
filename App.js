import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Font} from 'expo';

class LogIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      fontLoaded: false,
    }
  }
  async componentDidMount(){
    await Font.loadAsync({
      'montserrat-light': require('./Fonts/Montserrat-Light.ttf'),
      'montserrat-black': require('./Fonts/Montserrat-Black.ttf'),
    });

    this.setState({fontLoaded: true});
  }
  render(){
    let font_fam = {};

    if(this.state.fontLoaded){
      font_fam.title = 'montserrat-black';
      font_fam.pinForm = 'montserrat-light';
    }

    return(
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={[styles.titleText, {fontFamily: font_fam.title}]}>
            Scope
          </Text>
        </View>
        <View style={styles.passCodeForm}>
          <Text style={[styles.passCodeText, {fontFamily: font_fam.pinForm}]}>PIN</Text>
        </View>
      </View>
    );
  }
}

export default class App extends Component {
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
    height: 250,
    width: 500,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#24D101',
  },
  titleText: {
    fontSize: 85,
    color: 'white',
    fontWeight: 'bold',
  },
  passCodeForm:{
    marginTop: 50,
  },
  passCodeText:{
    fontSize: 30,
  }
});
