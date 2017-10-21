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
import CheckBox from 'react-native-check-box';

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
        background='#CDCF00';
        break;
    }

    return(
      <View style={[styles.contentBar, 
        {
          width: 340,
          borderRadius: 5,
          backgroundColor: background,
          justifyContent: 'space-between',
        }
      ]}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
          marginBottom: 0,
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
          alignItems: 'center',
          justifyContent: 'center',
          borderTopWidth: 3,
          borderTopColor: '#E7E7E7',
          marginTop: 10,
          width: 340,
          height: 30,
        }}>
        <Image 
          source= {arrow}
          style={{height: 20, width: 20}}
        />
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
      dateRange: "", 
      color: false,
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
            {
              height: 100,
              padding: 10,
            }
          ]}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <Picker
                onValueChange={
                  (itemValue, itemIndex) => 
                    this.setState({timePeriod: itemValue})
                }
                selectedValue={this.state.timePeriod}
                style={{width: 150}}
              >
                <Picker.Item label="Weekly" value="Weekly" />
                <Picker.Item label="Monthly" value="Monthly" />
                <Picker.Item label="Yearly" value="Yearly" />
              </Picker>
              <Picker
                onValueChange={
                  (itemValue, itemIndex) => 
                    this.setState({timePeriod: itemValue})
                }
                selectedValue={this.state.timePeriod}
                style={{width: 200}}
              >
                <Picker.Item label="Feb 1 - Feb 7" value="02/01/17" />
                <Picker.Item label="Feb 1 - Feb 7" value="02/01/17" />
                <Picker.Item label="Feb 1 - Feb 7" value="02/01/17" />
              </Picker>
            </View>
            <View style={{flexDirection: 'row'}}>
              <CheckBox
                leftText="Status"
                style={{
                  width: 100, 
                  margin: 10,
                  justifyContent: 'flex-end',          
                }}
                onClick={() => this.setState({color: !this.state.color})}
              />
            </View>
          </View>

          <View style={{marginTop: 10, paddingLeft: 10}}>
            <ContentBar 
              barTitle="Total Expenses" 
              barValue="0.00" 
              status={(this.state.color) ? 'good' : 'good'}
            />
            <ContentBar 
              barTitle="Total Profit" 
              barValue="0.00" 
              status={(this.state.color) ? 'bad' : 'good'}
            />
            <ContentBar 
              barTitle="Net Profit" 
              barValue="0.00" 
              status={(this.state.color) ? 'neutral' : 'good'}
            />
            <ContentBar 
              barTitle="Gross Profit" 
              barValue="0.00" 
              status={(this.state.color) ? 'neutral' : 'good'}
            />
            <ContentBar 
              barTitle="Total Goods Sold" 
              barValue="0.00" 
              status={(this.state.color) ? 'good' : 'good'}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
