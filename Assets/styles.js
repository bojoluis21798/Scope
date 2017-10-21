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
    color: '#E2FFDD',
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
