import React from 'react';
import {StyleSheet} from 'react-native';
import {Constants} from 'expo';

const statHeight = Constants.statusBarHeight;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  statusBar: {
    height: statHeight,
    width: 600,
    backgroundColor: 'black',
  },
  title: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#24D101',
  },
  titleText: {
    fontSize: 90,
    color: '#E2FFDD',
    marginLeft: 42.3,
    marginRight: 42.3,
  },
  passCodeForm:{
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    marginTop: 5,
    padding: 30,
    paddingTop: 0,
  },
  passCodeText:{
    fontSize: 23,
  },
  passCodeTextField:{
    width: 200,
    height: 70,
    fontSize: 20,
  },
  topBar: {
    flexDirection: 'row',
    width: 370,
    backgroundColor: '#24D101',
    height: 60,
    padding: 14,
    paddingBottom: 0,
  },
  menuIcon: {
    height: 34,
    width: 34,
    marginRight: 15,
  },
  standardText: {
    fontSize: 25,
    color: 'black',
  },
  smallerText: {
    fontSize: 20,
    color: 'black',
  },
  body: {
    flex:1,
    backgroundColor: '#E7E7E7',
  },
  contentBar: {
    paddingBottom: 0,
    borderColor: '#D5D5D5',
    backgroundColor: 'white',
    width: 360,
    height: 90,
    marginBottom: 15,
    justifyContent: 'center',
  }
});
