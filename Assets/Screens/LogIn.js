import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';
import {StackNavigator, NavigationActions} from 'react-navigation';
import {styles} from '../styles.js'

export class LogIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      fontLoaded: false,
      imageLoaded: false,
      pin: "",
      error: false,
      submitted: false,
    }
  }
  async componentDidMount(){
    
    this.setState({
      fontLoaded: true,
      imageLoaded: true,
    });
  }

  static navigationOptions = {
    header: null,
  };

  render(){
    let font_fam = {};
    let image = {};
    const {navigate} = this.props.navigation;
    let errorLine = (!this.state.error) ? "#24D101" : "red";

    if(this.state.imageLoaded){
      image = require('../Images/finger.png');
    }
    return(
      <View style={styles.container}>
        <StatusBar 
          translucent={false} 
          barStyle="light-content"
          animated={true}
          backgroundColor="black"
        />
        <View style={styles.title}>
          <Text style={[styles.titleText, {fontFamily: font_fam.title}]}>
            Scope
          </Text>
        </View>
        <View style={styles.passCodeForm}>
          <Text style={[styles.passCodeText, {fontSize: 20,fontFamily: font_fam.pinForm, color: 'red'}]}>
            {(this.state.error)?"Wrong Pin":""}
          </Text>
          <TextInput 
            style={styles.passCodeTextField} 
            placeholder="Enter Pin"
            maxLength={8}
            keyboardType="numeric"
            secureTextEntry={true}
            underlineColorAndroid={errorLine}
            onChangeText={(pin) => this.setState({pin: pin})}
            onFocus={() => this.setState({error: false, submitted: false})}
            textAlign="center"
            multiline={false}
            value={(this.state.error || this.state.submitted) ? "" : null}
            onSubmitEditing={() => {
                if(this.state.pin == tryPin){ 
                  this.setState({submitted: true});
                  navigate('Home'); 
                }else{ 
                  this.setState({error: true})
                } 
              }
            } 
          />
          <Text style={[styles.passCodeText, {fontFamily: font_fam.pinForm}]}>
            or
          </Text>
          <Image 
            source={image} 
            style={{height: 120, width: 80}}
          />
          <Text style={[styles.passCodeText, {fontFamily: font_fam.pinForm, fontSize: 14}]}>
            Scan Fingerprint
          </Text>
        </View>
      </View>
    );
  }
}

const tryPin = "00000000";