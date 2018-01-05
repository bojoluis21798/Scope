import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  statusBar: {
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  title: {
    flex: 0.65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#26A900',
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 90,
    color: '#E2FFDD',
    fontFamily: 'Montserrat-Black',
  },
  passCodeForm:{
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    margin: 30,
  },
  passCodeText:{
    fontSize: 23,
    fontFamily: 'Montserrat-Light',
  },
  passCodeTextField:{
    width: 200,
    height: 70,
    fontSize: 20,
    fontFamily: 'Montserrat-Light',
  },
  topBar: {
    flexDirection: 'row',
    backgroundColor: '#26A900',
    padding: 10, //change to the height of the statusbar
    
  },
  menuIcon: {
    height: 34,
    width: 34,
  },
  standardText: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Montserrat-Regular',
  },
  smallerText: {
    fontSize: 20,
    color: 'black',
  },
  body: {
    flex:1,
  },
  contentBar: {
    flex: 0.2,
    backgroundColor: 'white',
    marginBottom: 15,
    justifyContent: 'center',
  }
});
