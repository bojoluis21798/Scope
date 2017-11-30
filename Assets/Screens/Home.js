import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Image,
  Text,
  Picker,
  Button,
  ScrollView,
  StatusBar,
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import {styles} from '../styles.js';
import {TopBar} from './TopBar.js';
import CheckBox from 'react-native-check-box';

var image = {};
var arrow = {};

class ShoworHideAll extends Component {
  render(){
    if(this.props.render){
      return(
        <TouchableNativeFeedback
                onPress={this.props.show}
        >
          <Text
            style={{
              width: 140,
              margin: 10,
              justifyContent: 'flex-end',  
              fontSize: 17, 
              fontFamily: 'Montserrat-Light',
              color: 'white',
              backgroundColor: '#24D101',
              textAlign: 'center'       
            }}
          >
            Show All Statistics
          </Text>
        </TouchableNativeFeedback>
      );
    }else{
      return(
        <TouchableNativeFeedback
                onPress={this.props.hide}
        >
          <Text
            style={{
              width: 140,
              margin: 10,
              justifyContent: 'flex-end',  
              fontSize: 17, 
              fontFamily: 'Montserrat-Light',
              color: 'white',
              backgroundColor: '#24D101',
              textAlign: 'center'       
            }}
          >
            Hide All Statistics
          </Text>
        </TouchableNativeFeedback>
      );
    }
  }
}

class RenderStatistics extends Component {
  render(){
    if(this.props.isRendered){
      return(
        <View style={{
          padding: 20, flex: 1, backgroundColor: 'white',
      }}>
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
              fontFamily: 'Montserrat-Light',
              color: 'white',
            }]}> 
              {this.props.barTitle}
            </Text>
            <Text style={[styles.standardText, {
              fontFamily: 'Montserrat-Light',
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
              borderTopColor: 'white',
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
      timePeriod: "",
      dateRange: "", 
      color: true,
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
    this.setHideRendered = this.setHideRendered.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.navigateToLock = this.navigateToLock.bind(this);
    this.setState = this.setState.bind(this);
  }

  async componentDidMount(){
    this.setState({imageLoaded: true});
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

  setHideRendered(){
    this.setState({
      rendered_1: false,
      rendered_2: false,
      rendered_3: false,
      rendered_4: false,
      rendered_5: false,
    });
  }

  navigateToLock(){
    this.props.navigation.navigate('LogIn');
  }

  openDrawer(){
    this.props.navigation.navigate('DrawerOpen');
  }

  render(){

    if(this.state.imageLoaded){
      image = require('../Images/menu.png');
      arrow = require('../Images/arrow.png');
    }

    return(
      <View style={styles.container}>
         <StatusBar 
          translucent={false} 
          barStyle="light-content"
          animated={true}
          backgroundColor="black"
        />
        <TopBar title="Summary Report" navigate={this.openDrawer}/>
          <View style={[styles.body,{
            backgroundColor: '#E7e7e7',
            flexDirection: 'row',
          }]}>
            <ScrollView>
            <View style={{flex: 1}}>
              <View style={[styles.contentBar,
                {
                  flex: 0.35,
                  padding: 10,
                  marginBottom: 0,
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
                }}>
                  <CheckBox
                    leftText="Status Colors"
                    leftTextStyle={{fontFamily:'Montserrat-Light'}}
                    style={{
                      width: 125, 
                      margin: 10,
                      justifyContent: 'flex-end',          
                    }}
                    isChecked={this.state.color}
                    onClick={() => this.setState({color: !this.state.color})}
                  />
                  <ShoworHideAll 
                  render={(
                    !this.state.rendered_1 &&
                    !this.state.rendered_2 &&
                    !this.state.rendered_3 &&
                    !this.state.rendered_4 &&
                    !this.state.rendered_5 
                  )}
                  show={this.setAllRendered}
                  hide={this.setHideRendered}
                  />
                </View>
              </View>
                <View style={{paddingTop: 20}}>
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
            </View>
            </ScrollView>
          </View>
      </View>
    );
  }
}


