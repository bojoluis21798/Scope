import React, {Component} from 'react';
import {
 StyleSheet,
 Text,
 View,
 TextInput,
 Image,
 TouchableNativeFeedback, 
} from 'react-native';
import {Font, Constants} from 'expo';
import {StackNavigator, DrawerNavigator} from 'react-navigation';

class Status extends Component{
  render(){
    return(
      <View style={styles.statusBar}>
      </View>
    );
  }
}

class LogIn extends Component {
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
        <Status />
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
  constructor(props){
    super(props);

    this.state = {
      imageLoaded: false,
    };
  }

  async componentDidMount(){
    this.setState({imageLoaded: true});
  }

  static navigationOptions = {
    header: null,
    drawerLabel: 'Home',
  };

  render(){

    let image = {};

    if(this.state.imageLoaded){
      image = require('./Assets/Images/menu.png');
    }

    return(
      <View style={styles.container}>
        <Status/>
        <FinanceDrawer />
        <View style={styles.topBar}>
          <Image 
            source={image}
            style={styles.menuIcon}
          />
        </View>
      </View>
    );
  }
}

const FinanceApp = StackNavigator({
  LogIn: {screen: LogIn},
  Home: {screen: Home},
}, {headerMode: 'screen'});

const FinanceDrawer = DrawerNavigator({
  Home: {screen: Home},
  Lock: {screen: LogIn}, 
}, {
  useNativeAnimations: true,

});


export default class App extends Component {
  render() {
    return (
      <FinanceApp />
    );
  }
}

const statHeight = Constants.statusBarHeight;
const tryPin = "12345678";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  statusBar: {
    height: statHeight,
    width: 400,
    backgroundColor: 'black',
  },
  title: {
    height: 190,
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
    flexDirection: 'row',
    width: 370,
    backgroundColor: '#24D101',
    height: 60,
  },
  menuIcon: {
    height: 24,
    width: 24,
    justifyContent: 'flex-start',
    padding: 5,
  }
});
