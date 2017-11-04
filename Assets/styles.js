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
  },
  passCodeTextField:{
    width: 200,
    height: 70,
    fontSize: 20,
  },
  topBar: {
    flexDirection: 'row',
    backgroundColor: '#26A900',
    padding: 10,
    paddingTop: statHeight + 10,
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
  },
  contentBar: {
    flex: 0.2,
    backgroundColor: 'white',
    marginBottom: 15,
    justifyContent: 'center',
  }
});
