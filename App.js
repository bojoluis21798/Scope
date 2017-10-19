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

  handleChange()

  render(){
    let font_fam = {};
    let image = {};
    
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
          <TextInput 
            style={styles.passCodeTextField} 
            placeholder="Enter Pin"
            maxLength={8}
            keyboardType="numeric"
            secureTextEntry={true}
            underlineColorAndroid="black"
            onChangeText={(pin)=>this.setState({pin})}
            textAlign="center"
            multiline={false}
            onSubmitEditing={() => (this.state.pin == "12345678") ? navigate('Home') : null}
          />
          <Text style={[styles.passCodeText, {fontFamily: font_fam.pinForm}]}>
            or
          </Text>
            <Image 
              source={image} 
              style={{height: 200, width: 150}}
            />
        </View>
      </View>
    );
  }
}

class Home extends Component{
  render(){
    return(
      <View styles={styles.container}>
        <View styles={styles.topBar}>
        </View>
      </View>
    );
  }
}

const FinanceApp = StackNavigator({
  LogIn: {screen: LogIn},
  Home: {screen: Home},
});

export default class App extends Component {
  render() {
    return (
      <FinanceApp />
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
    marginTop: 30,
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
  },
  topBar: {
    width: 370,
    backgroundColor: '#24D101',
    heigth: 100,
  }
});
