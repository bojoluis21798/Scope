import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
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
  renderStatistics(){
    return(
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text>HELLO</Text>
      </View>
    );
  }

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
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 5,
          backgroundColor: background,
          justifyContent: 'space-between',
        }
      ]}>
      <View style={{flex: 1}}>
          <View style={{
            margin: 8,
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
          <TouchableNativeFeedback>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderTopWidth: 5,
              borderTopColor: '#E7E7E7',
            }}>
            <Image 
              source= {arrow}
              style={{
                marginBottom: 6,
                marginTop: 6,
                height: 12, 
                width: 20,
              }}
            />
            </View>
          </TouchableNativeFeedback>
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
      folded: true,
    };

    this.handleParent = this.handleParent.bind(this);
    this.setState = this.setState.bind(this);
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

  handleParent(obj){
    this.setState(obj);
  }

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
          <View style={{flex: 1, flexDirection: 'row'}}>
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
                marginLeft: 10,
              }]
            }>
              Summary Report 
            </Text>
          </View>
        </View>  
        <ScrollView style={styles.body}>
          <View style={[styles.contentBar,
            {
              padding: 5,
            }
          ]}>
            <View style={{
              flex: 1,
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
                leftText="Status Colors"
                leftTextStyle={{fontFamily: font}}
                style={{
                  width: 125, 
                  margin: 10,
                  justifyContent: 'flex-end',          
                }}
                onClick={() => this.setState({color: !this.state.color})}
              />
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <ContentBar 
              barTitle="Total Expenses" 
              barValue="0.00" 
              status={(this.state.color) ? 'good' : 'good'}
              parentState={this.state}
              parentSet={this.handleParent}
            />
            <ContentBar 
              barTitle="Total Profit" 
              barValue="0.00" 
              status={(this.state.color) ? 'bad' : 'good'}
              parentState={this.state}
              parentSet={this.handleParent}
            />
            <ContentBar 
              barTitle="Net Profit" 
              barValue="0.00" 
              status={(this.state.color) ? 'neutral' : 'good'}
              parentState={this.state}
              parentSet={this.handleParent}
            />
            <ContentBar 
              barTitle="Gross Profit" 
              barValue="0.00" 
              status={(this.state.color) ? 'neutral' : 'good'}
              parentState={this.state}
              parentSet={this.handleParent}
            />
            <ContentBar 
              barTitle="Total Goods Sold" 
              barValue="0.00" 
              status={(this.state.color) ? 'good' : 'good'}
              parentState={this.state}
              parentSet={this.handleParent}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
