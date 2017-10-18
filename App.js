import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#73D74B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    height: 400,
    width: 360,
    borderColor: 'white',
    borderWidth: 5,
  }
});
