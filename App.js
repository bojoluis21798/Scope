import React, {Component} from 'react';
import {
 StyleSheet,
 Text,
 View,
 TextInput,
 Image,
 TouchableNativeFeedback, 
} from 'react-native';
import {Font} from 'expo';
import {StackNavigator} from 'react-navigation';

class LogIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      fontLoaded: false,
      imageLoaded: false,
      pin: "",
      error: false,
    }
  }
  async componentDidMount(){
    await Font.loadAsync({
      'montserrat-light': require('./Assets/Fonts/Montserrat-Light.ttf'),
      'oneDay-reg': require('./Assets/Fonts/ONEDAY.ttf'),
    });
    
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
      image = require('./Assets/Images/finger.png');
    }

    if(this.state.fontLoaded){
      font_fam.title = 'oneDay-reg';
      font_fam.pinForm = 'montserrat-light';
    }else{
      font_fam.title = 'sans-serif';
      font_fam.pinForm = 'sans-serif';
    }

    return(
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={[styles.titleText, {fontFamily: font_fam.title}]}>
            Scope
          </Text>
        </View>
        <View style={styles.passCodeForm}>
          <Text style={[styles.passCodeText, {fontSize: 23,fontFamily: font_fam.pinForm, color: 'red'}]}>
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
            onFocus={() => this.setState({error: false})}
            textAlign="center"
            multiline={false}
            value={(this.state.error) ? "" : null}
            onSubmitEditing={() => (this.state.pin == tryPin) ? navigate('Home') : this.setState({error: true})}
          />
          <Text style={[styles.passCodeText, {fontFamily: font_fam.pinForm}]}>
            or
          </Text>
          <Image 
            source={image} 
            style={{height: 150, width: 100, marginTop: 10}}
          />
          <Text style={[styles.passCodeText, {fontFamily: font_fam.pinForm, fontSize: 15}]}>
            Scan Fingerprint
          </Text>
        </View>
      </View>
    );
  }
}

class Home extends Component{
  static navigationOptions = {
    header: null,
  };

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.topBar}>
        </View>
      </View>
    );
  }
}

const FinanceApp = StackNavigator({
  LogIn: {screen: LogIn},
  Home: {screen: Home},
}, {headerMode: 'screen'});

export default class App extends Component {
  render() {
    return (
      <FinanceApp />
    );
  }
}

const tryPin = "12345678";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    height: 230,
    width: 370,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#24D101',
  },
  titleText: {
    fontSize: 90,
    color: 'white',
  },
  passCodeForm:{
    flex: 1,
    alignItems: 'center',
    marginTop: 5,
  },
  passCodeText:{
    fontSize: 25,
    marginTop: 10,
  },
  passCodeTextField:{
    width: 200,
    height: 70,
    padding: 5,
    paddingTop: 0,
    fontSize: 20,
  },
  topBar: {
    width: 370,
    backgroundColor: '#24D101',
    height: 50,
  }
});
