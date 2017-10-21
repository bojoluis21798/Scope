import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Image,
  Text,
  Picker,
  ScrollView,
} from 'react-native';
import {Status} from './Status.js';
import {styles} from '../styles.js';
import {Font} from 'expo';

var font = "";
var image = {};

class ContentBar extends Component {
  render(){
    return(
      <View style={styles.contentBar}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Text style={[styles.standardText, {fontFamily: font}]}> 
            {this.props.barTitle}
          </Text>
          <Text style={[styles.standardText, {fontFamily: font}]}> 
            ₱ {this.props.barValue}
          </Text>
        </View>
      </View>
    );
  }
}

export class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
      imageLoaded: false,
      fontLoaded: false,
      timePeriod: "",
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
          <Text style={
            [styles.standardText,
            {
              fontFamily: font, 
              fontSize: 24, 
              color: 'white',
            }]
          }>
            Summary Report 
          </Text>
        </View>
        <ScrollView style={styles.body}>
          <View style={[styles.contentBar,
            {height: 50}
          ]}>
            <Picker
              onValueChange={
                (itemValue, itemIndex) => 
                  this.setState({timePeriod: itemValue})
              }
              selectedValue={this.state.timePeriod}
              style={{width: 150}}
            >
              <Picker.Item label="Week" value="Week" />
              <Picker.Item label="Month" value="Month" />
              <Picker.Item label="Year" value="Year" />
            </Picker>
          </View>

          <View style={{marginTop: 10}}>
            <ContentBar barTitle="Total Expenses" barValue="500" />
            <ContentBar barTitle="Total Profit" barValue="500" />
            <ContentBar barTitle="Net Profit" barValue="500" />
            <ContentBar barTitle="Gross Profit" barValue="500" />
            <ContentBar barTitle="Total Goods Sold" barValue="500" />
          </View>
        </ScrollView>
      </View>
    );
  }
}
