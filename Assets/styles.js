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
    flex: 0.067,
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  title: {
    flex: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#24D101',
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 90,
    color: '#E2FFDD',
  },
  passCodeForm:{
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    margin: 15,
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
    backgroundColor: '#24D101',

    padding: 10,
  },
  menuIcon: {
    height: 34,
    width: 34,
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
