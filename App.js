import React, {Component} from 'react';
import {LockStack, InitialStack} from './Assets/InitialStack.js';
import {NewProduct} from './Assets/Screens/ProductDetails.js'; //test

export default class App extends Component {
  render() {
    return (
      <NewProduct />
    );
  }
}