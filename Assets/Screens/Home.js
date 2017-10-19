import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
} from 'react-native';
import {Status} from './Status.js';
import {styles} from '../styles.js';
import {Font} from 'expo';

export class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
      imageLoaded: false,
      fontLoaded: false,
    };
  }

  async componentDidMount(){
    await Font.loadAsync({
      'montserrat-reg': require('../Fonts/Montserrat-Regular.ttf'),
    });

    this.setState({imageLoaded: true, fontLoaded: true});
  }

  static navigationOptions = {
    header: null,
    drawerLabel: 'Home',
  };

  render(){
    let font= '';
    let image = {};

    if(this.state.imageLoaded){
      image = require('../Images/menu.png');
    }

    if(this.state.fontLoaded){
      font = 'montserrat-reg';
    }else{
      font = 'sans-serif';
    }

    return(
      <View style={styles.container}>
        <Status/>
        <View style={styles.topBar}>
          <TouchableWithoutFeedback>
            <Image 
              source={image}
              style={styles.menuIcon}
            />
          </TouchableWithoutFeedback>  
          <Text style={[styles.standardText, {fontFamily: font, fontSize: 24}]}>
            Summary Report 
          </Text>
        </View>
      </View>
    );
  }
}
