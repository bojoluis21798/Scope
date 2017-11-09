import React, {Component} from 'react';
import {LockStack, InitialStack} from './Assets/InitialStack.js';
import {Product} from './Assets/Screens/Product.js'; //test

export default class App extends Component {
  render() {
    return (
      <Product />
    );
  }
}