import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Font} from 'expo';

class LogIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      fontLoaded: false,
      pin: "",
    }
  }
  async componentDidMount(){
    await Font.loadAsync({
      'montserrat-light': require('./Assets/Fonts/Montserrat-Light.ttf'),
      'montserrat-black': require('./Assets/Fonts/Montserrat-Black.ttf'),
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
          <TextInput 
            style={styles.passCodeTextField} 
            placeholder="Enter Pin"
            maxLength={4}
            keyboardType="numeric"
            secureTextEntry={true}
            underlineColorAndroid="black"
            onChangeText={(pin)=>this.setState({pin})}
            textAlign="center"
          />
          <Text style={[styles.passCodeText, {fontFamily: font_fam.pinForm}]}>
            or
          </Text>
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
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  passCodeText:{
    fontSize: 25,
  },
  passCodeTextField:{
    width: 200,
    height: 70,
    padding: 5,
    paddingTop: 0,
    fontSize: 20,
  }
});
