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
var arrow = {};

class ContentBar extends Component {
  render(){
    let background = "";

    switch(this.props.status){
      case 'good':
        background = '#55B838';      
        break;
      case 'bad': 
        background = '#BB3D3D';
        break;
      case 'neutral':
        background='#D6D826';
        break;
    }

    return(
      <View style={[styles.contentBar, 
        {
          width: 340,
          borderRadius: 5,
          backgroundColor: background,
        }
      ]}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Text style={[styles.standardText, {
            fontFamily: font,
            color: 'white',
          }]}> 
            {this.props.barTitle}
          </Text>
          <Text style={[styles.standardText, {
            fontFamily: font,
            color: 'white',
          }]}> 
            ₱ {this.props.barValue}
          </Text>
        </View>
        <View style={{
          marginTop: 5,
          borderWidth: 1,
          borderColor: 'white',
          width: 310,
        }}>
        </View>
        <View style={{
          alignItems: 'center',
          marginTop: 10,
          borderWidth: 1,
          borderColor: 'white',
          width: 310,
          height: 30,
        }}>
        <Image source= {arrow}/>
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
      arrow = require('../Images/arrow.png');
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

          <View style={{marginTop: 10, paddingLeft: 10}}>
            <ContentBar 
              barTitle="Total Expenses" 
              barValue="500" 
              status='good'
            />
            <ContentBar 
              barTitle="Total Profit" 
              barValue="500" 
              status='bad'
            />
            <ContentBar 
              barTitle="Net Profit" 
              barValue="500" 
              status='neutral'
            />
            <ContentBar 
              barTitle="Gross Profit" 
              barValue="500" 
              status='good'
            />
            <ContentBar 
              barTitle="Total Goods Sold" 
              barValue="500" 
              status='bad'
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
