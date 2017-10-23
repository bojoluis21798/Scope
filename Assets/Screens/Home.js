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

class RenderStatistics extends Component {
  render(){
    if(this.props.isRendered){
      return(
        <View style={{padding: 20, flex: 1, backgroundColor: 'white'}}>
          <Text>HELLO</Text>
        </View>
      );
    }
    else{
      return(
        <View />
      );
    }
  }
}

class ContentBar extends Component {
  render(){
    let background = "";
    console.log(this.props.parentState);
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
            flex: 1,
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
          <RenderStatistics isRendered={this.props.renderedStat} />
          <TouchableNativeFeedback
            onPress={this.props.parentSet}
          >
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
      rendered_1: false,
      rendered_2: false,
      rendered_3: false,
      rendered_4: false,
      rendered_5: false,
    };

    this.setRendered_1 = this.setRendered_1.bind(this);
    this.setRendered_2 = this.setRendered_2.bind(this);
    this.setRendered_3 = this.setRendered_3.bind(this);
    this.setRendered_4 = this.setRendered_4.bind(this);
    this.setRendered_5 = this.setRendered_5.bind(this);
    this.setAllRendered = this.setAllRendered.bind(this);
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

  setRendered_1(){
    this.setState({rendered_1: !this.state.rendered_1});
  }
  setRendered_2(){
    this.setState({rendered_2: !this.state.rendered_2});
  }
  setRendered_3(){
    this.setState({rendered_3: !this.state.rendered_3});
  }
  setRendered_4(){
    this.setState({rendered_4: !this.state.rendered_4});
  }
  setRendered_5(){
    this.setState({rendered_5: !this.state.rendered_5});
  }
  setAllRendered(){
    this.setState({
      rendered_1: true,
      rendered_2: true,
      rendered_3: true,
      rendered_4: true,
      rendered_5: true,
    });
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
          <View style={{
            flex: 1, 
            flexDirection: 'row',}}>
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
                mode='dropdown'
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
                mode='dropdown'
              >
                <Picker.Item label="Feb 1 - Feb 7" value="02/01/17" />
                <Picker.Item label="Feb 1 - Feb 7" value="02/01/17" />
                <Picker.Item label="Feb 1 - Feb 7" value="02/01/17" />
              </Picker>
            </View>
            <View style={{
              flexDirection: 'row', 
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 10,
            }}>
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
              <TouchableNativeFeedback
                onPress={this.setAllRendered}
              >
                <Text
                  style={{
                    width: 140,
                    margin: 10,
                    justifyContent: 'flex-end',  
                    fontSize: 17, 
                    fontFamily: font,
                    color: 'white',
                    backgroundColor: '#24D101',
                    textAlign: 'center'       
                  }}
                >
                  Show All Statistics
                </Text>
              </TouchableNativeFeedback>
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <ContentBar 
              barTitle="Total Expenses" 
              barValue="0.00" 
              status={(this.state.color) ? 'good' : 'good'}
              renderedStat={this.state.rendered_1}
              parentSet={this.setRendered_1}
            />
            <ContentBar 
              barTitle="Total Profit" 
              barValue="0.00" 
              status={(this.state.color) ? 'bad' : 'good'}
              renderedStat={this.state.rendered_2}
              parentSet={this.setRendered_2}
            />
            <ContentBar 
              barTitle="Net Profit" 
              barValue="0.00" 
              status={(this.state.color) ? 'neutral' : 'good'}
              renderedStat={this.state.rendered_3}
              parentSet={this.setRendered_3}
            />
            <ContentBar 
              barTitle="Gross Profit" 
              barValue="0.00" 
              status={(this.state.color) ? 'neutral' : 'good'}
              renderedStat={this.state.rendered_4}
              parentSet={this.setRendered_4}
            />
            <ContentBar 
              barTitle="Total Goods Sold" 
              barValue="0.00" 
              status={(this.state.color) ? 'good' : 'good'}
              renderedStat={this.state.rendered_5}
              parentSet={this.setRendered_5}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
